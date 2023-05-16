import useSWR, { SWRResponse } from "swr";
import config, { fetcher } from "./config";
import { Schedule } from "../common/data-models/schedule";

export default function useSchedules(): SWRResponse<Schedule[], any, any> {
    const result = useSWR<Schedule[]>(`${config.baseUrl}/Schedule`, fetcher);
    return result;
}
