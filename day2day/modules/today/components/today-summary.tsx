import { Schedule } from "../../../common/data-models/schedule";
import { ScheduledActivities } from "../../../common/data-models/scheduled-activity";

type propsType = { schedule: Schedule, scheduledActivities: ScheduledActivities };

export function TodaySummary({ schedule, scheduledActivities}: propsType): JSX.Element {

    return (
        <h2>Todays Activities ({scheduledActivities.day} / {schedule?.days})</h2>
    )
}