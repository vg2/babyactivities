import { Card, CardContent } from "@mui/material";
import { ActivityListItem } from "../../../common/data-models/scheduled-activity";
import styles from './activity-list.module.css';

type propsType = { activities: ActivityListItem[] };

export default function ActivityList({ activities }: propsType): JSX.Element {
  return (
    <>
      {activities.map((activity) => (
        <Card key={activity.id} className={styles["activity-card"]}>
          <CardContent>
            <h5>{activity.name}</h5>
            <p>{activity.description}</p>
            <p>Notes: {activity.dayNotes}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
