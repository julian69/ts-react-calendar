import { FC, memo } from 'react'

import { classes } from "./constants";
import Badge from './Badge';
import Reminders from './Reminders';
import { FormFieldsNames, IReminder } from '@/types/reminders';
import { IWeeks } from '@/types/dates';
import { isSameDay } from 'date-fns';

interface Props {
  day: IWeeks,
  reminders: IReminder[],
  onClick: (id: string, date: Date) => void
}

const Day: FC<Props> = ({ onClick, day, reminders }) => {
  const remindersById = reminders.filter(r => isSameDay(r[FormFieldsNames.DATE], day.date))
  
  return (
    <div className={`${classes.cell} ${!day.isSameMonth ? 'bg-slate-50' : ''}`}>
      <Badge
        data={{ date: day.date, dayName: day.dayName, isToday: day.isToday }}
        onClick={() => onClick(day.id, day.date)}
      />
      {remindersById.length ? <Reminders reminders={remindersById} /> : null}
    </div >
  )
}
export default memo(Day);