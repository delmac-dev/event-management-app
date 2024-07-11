"use client"
import ExploreEventsFilterForm from "@/components/forms/explore-events-filter"

export default function EventsFilter () {
    return (
        <div className="isolate w-72 p-4 border flex flex-col bg-background">
            <div className="mb-4">
                <h4 className="text-sm font-normal text-secondary-foreground uppercase">Filters & Sort</h4>
            </div>
            <ExploreEventsFilterForm className="flex-1" /> 
        </div>
    )
}