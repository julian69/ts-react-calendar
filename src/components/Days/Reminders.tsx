import { FC } from "react"

import { classes } from "./constants";
import Reminder from '@/components/Reminder/Reminder';
import { IReminder } from "@/types/context";
import { sortRemindersByDate } from "@/lib/dates";

interface Props {
  reminders: IReminder[]
}

const Reminders: FC<Props> = ({ reminders }) => (
  <div className={classes.reminders}>
    {
      sortRemindersByDate(reminders)
        .map(r => <Reminder key={r.id} reminder={r} />)
    }
  </div>
)

export default Reminders
