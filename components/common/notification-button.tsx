"use client";

import { Button } from "../ui/button";
import { ArchiveX, Bell } from "lucide-react";
import { _dashboardNotifications } from "@/lib/routes";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useEffect, useState } from "react";
import { useAcceptMembership, useDeclineMembership, useGetInvitor, useGetNotificationCount, useGetNotifications, useGetRegistor, useModifyNotification } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { FetchedActionNotificationsProps, FetchedInfoNotificationsProps, FetchedNotificationsProps } from "@/lib/types";
import { cn, filterNotificationsByType } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import ReactTimeAgo from "react-time-ago";

export default function Notifications() {
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline' size='sm' className="aspect-square p-1.5 rounded-full">
                    <Bell size={20} />
                </Button>
            </PopoverTrigger>
            <PopoverContent sideOffset={14} className="isolate w-80 flex flex-col mr-4 p-0 h-[480px] overflow-y-scroll overflow-x-hidden">
                <div className="sticky left-0 top-0 z-40 w-full px-4 h-10 min-h-10 flex items-center bg-background">
                    <h3 className="text-base font-semibold text-foreground">Notifications</h3>
                </div>
                <NotificationContent />
            </PopoverContent>
        </Popover>
    )
}

const NotificationContent = () => {
    const { data: count, isLoading: isCountLoading} = useGetNotificationCount();
    const { data: notifications, isLoading} = useGetNotifications();

    if(isLoading || isCountLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <Tabs defaultValue="all" className="w-full">
            <TabsList className="sticky top-10 left-0 z-40 w-full h-10 border-b rounded-none justify-start bg-background px-4">
                <CustomTabTriger label="All" value="all" count={count?.all ?? null} />
                <CustomTabTriger label="Info" value="info" count={count?.info ?? null} />
                <CustomTabTriger label="Action" value="action" count={count?.action ?? null} />
            </TabsList>
            <CustomTabContent value="all" data={notifications ?? null} />
            <CustomTabContent value="info" data={filterNotificationsByType(notifications ?? null, "info")} />
            <CustomTabContent value="action" data={filterNotificationsByType(notifications ?? null, "action")} />
        </Tabs>
    )
}

const CustomTabTriger = ({value, label,  count = 0}:{value: string, label: string, count: number | null}) => (
    <TabsTrigger value={value} className="text-xs font-medium gap-2 data-[state=active]:bg-secondary/60 py-0.5">
        {label}
        <span className="text-sm font-semibold text-secondary-foreground bg-secondary flex_center rounded-full px-2 py-0.5">
            {count}
        </span>
    </TabsTrigger>
)
  
const CustomTabContent = ({value, data}:{value: string, data: FetchedNotificationsProps[] | null}) => (
    <TabsContent value={value} className="flex flex-col mt-0">
        {data && data.length > 0 ? (
            <>
                {data.map((item, _id) => {
                    switch (item.type) {
                        case "info": return <InfoCard key={item.id} {...item as FetchedInfoNotificationsProps} />
                        case "action": return <ActionCard key={item.id} {...item as FetchedActionNotificationsProps} />
                        default: return null;
                    }
                })}
            </>
        ): (
            <div className="w-full h-64 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
                <ArchiveX />
                Empty
            </div>
        )
        }
    </TabsContent>
);

const InfoCard = (props: FetchedInfoNotificationsProps) => {
    const { data, isLoading } = useGetRegistor(props.metadata.attendee_id);
    const { mutate: modifyNotification, isPending } = useModifyNotification();

    return (
        <div className="w-full p-4 space-y-1 hover:bg-secondary/60">
            <div className="flex_center justify-between">
                <h3 className="text-xs font-medium text-foreground">{props.title}</h3>
                <ReactTimeAgo date={new Date(props.created_at)} timeStyle="mini" className="text-xs text-muted-foreground font-medium" />
            </div>
            <div className={cn("text-xs text-normal text-muted-foreground leading-relaxed", isLoading && "flex flex-col items-start space-y-1")}>
                {isLoading? (
                    <>
                        <Skeleton className="relative z-0 h-4 w-full rounded-sm" />
                        <Skeleton className="relative z-0 h-4 w-56 rounded-sm" />
                    </>
                ):
                (
                    <>
                        <SpanText value={data?.name ?? ""} /> just registered to attend
                        <SpanText value={data?.event ?? ""} /> using
                        <SpanText value={data?.ticket ?? ""} /> ticket.
                    </>
                )}
            </div>
            <div className="w-full h-7 flex_center justify-end gap-2">
                <Button
                    size="xs" 
                    variant="secondary"
                    className="h-6"
                    onClick={() => modifyNotification({id: props.id})}
                >
                    {isPending && <SpinnerIcon className="size-6 text-secondary-foreground mr-1.5" />}
                    Mark as read
                </Button>
            </div>
        </div>
    )
} 

const ActionCard = (props: FetchedActionNotificationsProps) => {
    const { id, metadata: { member_id }} = props;
    const { data, isLoading } = useGetInvitor(member_id);
    const { mutate: acceptMembership, isPending: isAcceptPending } = useAcceptMembership();
    const { mutate: declineMembership, isPending: isDeclinePending } = useDeclineMembership();

    const actionButtons = [
        { label: "Decline", variant: "destructive", isPending: isDeclinePending, onClick: () => declineMembership({id: id, memberID: member_id})},
        { label: "Accept", variant: "secondary", isPending: isAcceptPending, onClick: () => acceptMembership({id: id, memberID: member_id})},
    ]

    return (
        <div className="w-full p-4 space-y-1 hover:bg-secondary/60">
            <div className="flex_center justify-between">
                <h3 className="text-xs font-medium text-foreground">{props.title}</h3>
                <ReactTimeAgo date={new Date(props.created_at)} timeStyle="mini" className="text-xs text-muted-foreground font-medium" />
            </div>
            <div className={cn("text-xs text-normal text-muted-foreground leading-relaxed", isLoading && "flex flex-col items-start space-y-1")}>
                {isLoading? (
                    <>
                        <Skeleton className="relative z-0 h-4 w-full rounded-sm" />
                        <Skeleton className="relative z-0 h-4 w-56 rounded-sm" />
                    </>
                ):
                (
                    <>
                        you have been invited by 
                        <SpanText value={data?.name ?? ""} /> to join
                        <SpanText value={data?.organisation ?? ""} /> as a member.
                    </>
                )}
            </div>
            <div className="w-full h-7 flex_center justify-end gap-2">
                {actionButtons.map((item, _id) => (
                    <Button 
                        key={_id}
                        size="xs" 
                        variant={item.variant as "destructive" | "secondary"} 
                        className="h-6"
                        disabled={isAcceptPending || isDeclinePending}
                        onClick={item.onClick}
                    >
                        {item.isPending && <SpinnerIcon className="size-6 text-secondary-foreground mr-1.5" />}
                        {item.label}
                    </Button>
                ))}
            </div>
        </div>
    )
};

const SpanText = ({value}:{value: string}) => (
    <span className="text-sm text-foreground font-medium"> {value} </span>
)