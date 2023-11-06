import { FC } from "react"

import { IField, colors } from "./constants"
import { FormFieldsNames } from "@/types/reminders"

const Colors: FC<IField> = ({ value, onChange }) => (
  <div className="col-span-full flex flex-col w-60">
    <p className="text-sm leading-6 mb-2">Choose a color</p>
    <div className="flex justify-between max-full">
      {
        colors.map(c =>
          <button
            key={c}
            type="button"
            onClick={() => onChange(FormFieldsNames.COLOR, c)}
            className={`p-4 shadow-sm ${c} w-5 h-5 rounded-full hover:opacity-70 ${value === c? 'outline outline-offset-2 outline-blue-500' : ''}`} />
        )}
    </div>
  </div>
)

export default Colors
