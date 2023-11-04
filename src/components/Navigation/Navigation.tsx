import { FC, useContext } from 'react'

import { classes } from './constants'
import chevronLeft from '@/assets/chevron-left-icon.svg'
import chevronRight from '@/assets/chevron-right-icon.svg'
import { AppContext } from '@/context/constants'
import { NavigationActions } from '@/types/actions'

const Navigation: FC = () => {
  const { date, handleDateChange } = useContext(AppContext);

  return (
    <div className="flex shadow-sm">
      <button onClick={() => handleDateChange(date, NavigationActions.PREV)} className={`${classes.btn} rounded-l`}>
        <img src={chevronLeft} alt="Previous month" className={classes.img} />
      </button>
      <button onClick={() => handleDateChange(date, NavigationActions.TODAY)} className={classes.btn}>
        Today
      </button>
      <button onClick={() => handleDateChange(date, NavigationActions.NEXT)} className={`${classes.btn} rounded-r`}>
        <img src={chevronRight} alt="Next month" className={classes.img} />
      </button>
    </div>
  )
}

export default Navigation