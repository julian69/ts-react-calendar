import { FC, useContext } from 'react'

import { classes } from "./constants";
import { AppContext } from '@/context/constants'
import Badge from './Badge';
import Reminders from './Reminders';
import { isSameDay } from 'date-fns';
import { FormFieldsNames } from '@/types/reminders';

const Days: FC = () => {
  const { weeks, handleModalChange, handleSetSelectedDate, reminders } = useContext(AppContext);

  const handleBadgeOnClick = (id: string, selectedDate: Date) => {
    handleSetSelectedDate({ id, selectedDate })
    handleModalChange()
  }

  return (
    <div className={`${classes.grid} grid-rows-${weeks.length / 7}`}>
      {weeks.map(day => {
        const remindersById = reminders.filter(r => isSameDay(r[FormFieldsNames.DATE], day.date))

        return (
          <div
            key={day.id}
            className={`${classes.cell} ${!day.isSameMonth ? 'bg-slate-50' : ''}`}
          >
            <Badge
              data={{ date: day.date, dayName: day.dayName, isToday: day.isToday }}
              onClick={() => handleBadgeOnClick(day.id, day.date)}
            />
            {remindersById.length ? <Reminders reminders={remindersById} /> : null}
          </div >
        )
      })}
    </div >
  )
}

export default Days;