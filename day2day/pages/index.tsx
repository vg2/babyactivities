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

export default function Home() {
  const [selectedSchedule, setSelectedSchedule] = useState<number>();
  const { data: schedules, isLoading: schedulesLoading } = useSchedules();
  const { data: scheduledActivities, isLoading: scheduledActivitiesLoading } =
    useScheduledActivities(selectedSchedule);

  if (!schedulesLoading && !selectedSchedule) {
    setSelectedSchedule(schedules[0].id);
  }

  const handleChange = (e) => {
    setSelectedSchedule(e.target.value);
  };

  return (
    <Layout>
      <h1>Schedules</h1>
      <section>
        {!schedulesLoading && (
          <FormControl fullWidth>
            <InputLabel id="schedules-dropdown">Schedules</InputLabel>
            <Select
              labelId="schedules-dropdown-label"
              id="schedules-dropdown-select"
              value={selectedSchedule}
              label="Age"
              onChange={handleChange}
            >
              {schedules.map((schedule) => (
                <MenuItem key={schedule.id} value={schedule.id}>
                  {schedule.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </section>
      <section>
        {!schedulesLoading &&
          selectedSchedule &&
          !scheduledActivitiesLoading &&
          scheduledActivities && (
            <h2>
              Todays Activities (Day {scheduledActivities.day} /{" "}
              {schedules.find((s) => s.id === selectedSchedule)?.days})
            </h2>
          )}
      </section>
      <section>
        {!scheduledActivitiesLoading &&
          scheduledActivities?.activities &&
          scheduledActivities.activities.map((activity) => (
            <>
            <Card key={activity.id}>
              <CardContent>
                <h5>{activity.name}</h5>
                <p>{activity.description}</p>
                <p>Notes: {activity.dayNotes}</p>
              </CardContent>
            </Card>
            <br/>
            </>
          ))}
      </section>
    </Layout>
  );
}