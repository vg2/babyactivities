import useSWR, { SWRResponse } from "swr";
import config, { fetcher } from "./config";

export default function useSchedules(): SWRResponse<ISchedule[], any, any> {
    const result = useSWR<ISchedule[]>(`${config.baseUrl}/Schedule`, fetcher);
    return result;
}

export interface ISchedule {
    id: number;
    name: string;
    days: number;
    startDate: string;
}
