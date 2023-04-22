export default function useGetSchedules(): Promise<ISchedule[]> {
    return delay(500).then(() => ([
                { id: 1, name: "Viaan's schedule", days: 15, startDate: '2023-04-22T00:00:00Z'},
                { id: 2, name: "Anna's schedule", days: 15, startDate: '2023-04-22T00:00:00Z'},
                
            ]));
}

export interface ISchedule {
    id: number;
    name: string;
    days: number;
    startDate: string;
}

function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}