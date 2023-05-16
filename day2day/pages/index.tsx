import { useState, useEffect } from "react";
import Layout from "../shared/Layout";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useSchedules from "../api/useSchedules";
import useScheduledActivities from "../api/useScheduledActivities";
import ScheduleSelect from "../modules/today/components/schedule-select";
import { TodaySummary } from "../modules/today/components/today-summary";
import { Schedule } from "../common/data-models/schedule";
import ActivityList from "../modules/today/components/activity-list";

export default function Home() {
  const [selectedScheduleId, setSelectedSchedule] = useState<number>();
  const { data: schedules, isLoading: schedulesLoading } = useSchedules();
  const { data: scheduledActivities, isLoading: scheduledActivitiesLoading } = useScheduledActivities(selectedScheduleId);

  let selectedSchedule: Schedule;

  if (!schedulesLoading && !selectedScheduleId) {
    setSelectedSchedule(schedules[0].id);
  }

  const handleScheduleChange = (scheduleId: number) => {
    setSelectedSchedule(scheduleId);
  };

  if (selectedScheduleId > 0) {
    selectedSchedule = schedules.find(schedule => schedule.id === selectedScheduleId);
  }

  const showSummary = !!(selectedSchedule &&  scheduledActivities);
  const showActivities = !!scheduledActivities?.activities;

  return (
    <Layout>
      <h1>Today's schedule</h1>
      <section>
        {!schedulesLoading && (
          <ScheduleSelect schedules={schedules} handleOnChange={handleScheduleChange}/>
        )}
      </section>
      <section>
        {showSummary && (
            <TodaySummary schedule={selectedSchedule} scheduledActivities={scheduledActivities}/>
          )}
      </section>
      <section>
        {showActivities && (
            <ActivityList activities={scheduledActivities.activities} />
          )}
      </section>
    </Layout>
  );
}