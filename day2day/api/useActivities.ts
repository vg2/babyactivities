import useSWR, { SWRResponse } from "swr";
import config, { fetcher } from "./config";
import { ActivityListItem } from "../common/data-models/scheduled-activity";

export default function useActivities(): SWRResponse<ActivityListItem[], any, any> {
    const result = useSWR<ActivityListItem[]>(`${config.baseUrl}/Activity`, fetcher);
    return result;
}
