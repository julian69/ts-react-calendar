import { FC, useCallback, useContext } from 'react'

import { classes } from "./constants";
import { AppContext } from '@/context/constants'
import Day from './Day';

const Days: FC = () => {
  const { weeks, handleModalChange, handleSetSelectedDate, reminders } = useContext(AppContext);

  const handleBadgeOnClick = useCallback((id: string, selectedDate: Date) => {
    handleSetSelectedDate({ id, selectedDate })
    handleModalChange()
  }, [])

  return (
    <div className={`${classes.grid} grid-rows-${weeks.length / 7}`}>
      {weeks.map(day =>
        <Day
          day={day}
          key={day.id}
          reminders={reminders}
          onClick={handleBadgeOnClick}
        />)}
    </div >
  )
}

export default Days;