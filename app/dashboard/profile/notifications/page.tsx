"use client";

import { ArchiveX } from "lucide-react";
import BodyContent from "../../(components)/body-content";
import BodyHeader from "../../(components)/body-header";
import { useGetNotificationCount, useGetNotifications } from "@/lib/query-hooks";
import SpinnerIcon from "@/components/icons/spinner-icon";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FetchedNotificationsProps } from "@/lib/types";

export default function ProfileNotifications() {
  const [tabContent, setTabContent] = useState('');
  const { data: count, isLoading: isCountLoaing} = useGetNotificationCount();
  const { data: notifications, isLoading} = useGetNotifications(tabContent);
  
  useEffect(()=> {
    console.log({notifications});
  }, [notifications]);
  
  if(isLoading) {
    return (
        <div className="w-full py-14 flex_center">
            <SpinnerIcon className="size-10 text-secondary-foreground" />
        </div>
    )
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Your Notifications</h2>
      </BodyHeader>
      <BodyContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="all">
              View all 
              <CountChip count={count?.all ?? null} />
            </TabsTrigger>
            <TabsTrigger value="info">
              Info
              <CountChip count={count?.info ?? null} />
            </TabsTrigger>
            <TabsTrigger value="action">
              Actions
              <CountChip count={count?.action ?? null} />
            </TabsTrigger>
          </TabsList>
          <CustomTabContent value="all" isLoading={isLoading}>
            <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
              <ArchiveX />
              No Notifications Yet
            </div>
          </CustomTabContent>
          <CustomTabContent value="info" isLoading={isLoading}>
            <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
              <ArchiveX />
              No Notifications Yet
            </div>
          </CustomTabContent>
          <CustomTabContent value="action" isLoading={isLoading}>
            <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
              <ArchiveX />
              No Notifications Yet
            </div>
          </CustomTabContent>
        </Tabs>
      </BodyContent>
    </>
  );
};

const CountChip = ({count = 0}:{count: number | null}) => (
  <span className="text-sm font-medium text-primary-foreground bg-primary flex_center rounded-full ml-2 size-6">
    {count}
  </span>
)

const CustomTabContent = ({value, isLoading, children}:{value: string, isLoading: boolean, children: React.ReactNode}) => (
  <TabsContent value={value}>
    {isLoading? (
        <div className="w-full py-14 flex_center">
          <SpinnerIcon className="size-10 text-secondary-foreground" />
        </div>
      ): (
        <>{children}</>
      )
    }
  </TabsContent>
)