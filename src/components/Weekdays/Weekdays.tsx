import { DaysNames } from "@/types/dates";
import { FC } from "react";

const Weekdays: FC = () => {
  return (
    <div className="grid grid-cols-7">
      {Object.values(DaysNames).map((day) => (
        <div key={day} className="flex py-2 px-3 border-t border-x border-slate-100 text-xs font-semibold">
          <time dateTime="2021-12-27">{day}</time>
        </div>
      ))}
    </div>
  )
}

export default Weekdays;