import useSWR, { SWRResponse } from "swr";
import config, { fetcher } from "./config";
import { ScheduledActivities } from "../common/data-models/scheduled-activity";

export default function useScheduledActivities(scheduleId?: number): SWRResponse<ScheduledActivities, any, any> {
    const result = useSWR<ScheduledActivities>(scheduleId ? `${config.baseUrl}/Activity/scheduled?scheduleId=${scheduleId}` : null, fetcher);
    return result;
}
