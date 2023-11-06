import { FC } from 'react'

import Header from '@/components/Header/Header'
import Weekdays from '@/components/Weekdays/Weekdays'
import Days from '@/components/Days/Days'
import { classes } from './constants'

const Calendar: FC = () => {
  return (
    <section className={classes.container} data-testid="calendar">
      <Header />
      <Weekdays />
      <Days />
    </section>
  )
}

export default Calendar