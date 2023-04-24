import useSWR, { SWRResponse } from "swr";
import config, { fetcher } from "./config";

export default function useScheduledActivities(scheduleId?: number): SWRResponse<IScheduledActivities, any, any> {
    const result = useSWR<IScheduledActivities>(scheduleId ? `${config.baseUrl}/Activity/scheduled?scheduleId=${scheduleId}` : null, fetcher);
    return result;
}

export interface IScheduledActivities {
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
