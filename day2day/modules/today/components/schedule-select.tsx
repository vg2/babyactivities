import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { Schedule } from "../../../common/data-models/schedule"
import { useState } from "react"

type propsType = { schedules: Schedule[], handleOnChange: (scheduleId: number) => void };

export default function ScheduleSelect({ schedules, handleOnChange }: propsType): JSX.Element {
    const handleChange = (e: SelectChangeEvent<number>) => {
      const value: number = typeof e.target.value === 'string' ? parseInt(e.target.value) : e.target.value;
      handleOnChange(value);
    }

    return (
      <FormControl fullWidth>
            <InputLabel id="schedules-dropdown">Schedules</InputLabel>
            <Select
              labelId="schedules-dropdown-label"
              id="schedules-dropdown-select"
              label="Schedules"
              defaultValue={schedules[0].id}
              onChange={handleChange}
            >
              {schedules.map((schedule) => (
                <MenuItem key={schedule.id} value={schedule.id} >
                  {schedule.name}
                </MenuItem>
              ))}
            </Select>
        </FormControl>
    );
}