import { FC } from "react"

import { IField } from "./constants"
import { FormFieldsNames } from "@/types/reminders"

const Title: FC<IField> = ({ value, onChange }) => (
  <div className="sm:col-span-4">
    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
    <div className="mt-2">
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <input
          type="text"
          name="title"
          id="title"
          value={value}
          onChange={e => onChange(FormFieldsNames.TITLE, e.target.value)}
          autoComplete="title"
          placeholder="My reminder"
          className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
      </div>
    </div>
  </div>
)

export default Title