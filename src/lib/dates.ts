import { DaysNames, IWeeks } from '@/types/dates';
import { IReminder } from "@/types/context";
import { addDays, addMonths, endOfMonth, endOfWeek, endOfYesterday, format, isBefore, isSameMonth, isToday, startOfMonth, startOfWeek, subMonths } from 'date-fns'

export const sortRemindersByDate = (reminders: IReminder[]) => reminders.sort((a: IReminder, b: IReminder) => a.DATE.valueOf() - b.DATE.valueOf());

export const isBeforeToday =  (date: Date):boolean => isBefore(date, endOfYesterday());

export const startOfCalendar = (date: Date): Date => startOfWeek(startOfMonth(date))

export const endOfCalendar = (date: Date): Date => endOfWeek(endOfMonth(date))

export const getDayId = (date: Date): string => `${date.getFullYear()}_${date.getMonth()}_${date.getDate()}`

export const previousMonth = (date: Date): Date => subMonths(date, 1)

export const nextMonth = (date: Date): Date => addMonths(date, 1)

export const getMonthByDate = (month: Date): string => format(month, 'MMMM');

export const getYearByDate = (year: Date): string => format(year, 'yyyy')

export const getWeeks = (date: Date): IWeeks[] => {
  let day = startOfCalendar(date);
  const end = endOfCalendar(date);
  const weeks: IWeeks[] = [];

  while (day <= end) {
    Object.values(DaysNames).forEach(() => {
      weeks.push({
        id: getDayId(day),
        date: day,
        isSameMonth: isSameMonth(day, date),
        isToday: isToday(day),
        dayName: format(day, 'd')
      });

      day = addDays(day, 1);
    })
  }

  return weeks;
}