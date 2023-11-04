import { FC } from "react"

import { classes } from "./constants"
import { IWeeks } from "@/types/dates";
import { isBeforeToday } from "@/lib/dates";

interface Props {
  data: Pick<IWeeks, 'date' | 'isToday' | 'dayName'>;
  onClick: () => void;
}

const Badge: FC<Props> = ({ data, onClick }) => {
  const isDisabled = isBeforeToday(data.date)

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`${classes.time} ${data.isToday ? classes.active : ''} ${isDisabled ? classes.disabled : ''}`}
    >
      <time dateTime="2021-12-27">{data.dayName}</time>
    </button>
  )
}

export default Badge
