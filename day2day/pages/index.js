import {useState, useEffect} from 'react';
import useGetSchedules from '../api/useGetSchedules';

export default function Home() {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchSchedules = async () => {
      const fetched = await useGetSchedules();
      setSchedules(fetched);
      setIsLoading(false);
    }
    fetchSchedules();
  }, [setSchedules])
  return ( 
    <>
    <h1>Schedules</h1>
    <ul>
      {schedules.map(schedule => (
        <li key={schedule.id}>{schedule.name}</li>
      ))}
    </ul>
    </>
   )
}
