import { FC } from "react"

import { IDescription } from "./constants"
import { FormFieldsNames } from "@/types/reminders"

const Description: FC<IDescription> = ({ value, onChange }) => (
  <div className="col-span-full">
    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
    <div className="mt-2">
      <textarea
        id="description"
        name="description"
        rows={3}
        value={value}
        onChange={e => onChange(FormFieldsNames.DESCRIPTION, e.target.value)}
        placeholder="Write some description..."
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
)

export default Description
