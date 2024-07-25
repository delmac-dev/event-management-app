"use client";

import { FetchedActionNotificationsProps, FetchedInfoNotificationsProps, FetchedNotificationsProps } from "@/lib/types";

export default function NoticationCard(props: FetchedNotificationsProps) {
    const { type } = props;

    switch (type) {
        case 'info':
            return <InfoCard {...props as FetchedInfoNotificationsProps} />;
        case 'action':
            return <ActionCard {...props as FetchedActionNotificationsProps} />;
        default:
            return <></>
    }
    
}

const InfoCard = (props: FetchedInfoNotificationsProps) => {
    return (<></>)
}

const ActionCard = (props: FetchedActionNotificationsProps) => {
    return (<></>)
}