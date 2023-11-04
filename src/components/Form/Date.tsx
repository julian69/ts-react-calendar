import { FC, useContext } from "react"

import { IDateField } from "./constants"
import { FormFieldsNames } from "@/types/reminders"
import { format, parseISO } from "date-fns"
import { AppContext } from "@/context/constants"

const Date: FC<IDateField> = ({ value, onChange }) => {
  const { date } = useContext(AppContext)

  return (
    <div className="sm:col-span-4">
      <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date & time</label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type="datetime-local"
            name="date"
            id="date"
            autoComplete="date"
            value={format(value, 'yyyy-MM-dd HH:mm')}
            min={format(date, 'yyyy-mm-dd HH:mm')}
            onChange={e => onChange(FormFieldsNames.DATE, parseISO(e.target.value))}
            className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>
  )
}

export default Date
