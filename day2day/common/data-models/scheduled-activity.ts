
export interface ScheduledActivities {
    day: number;
    activities: ActivityListItem[];
}

export interface ActivityListItem {
    id: number;
    name: string;
    description: string;
    dayNotes: string; 
    sourceId: number;
    sourceName: string;
};
