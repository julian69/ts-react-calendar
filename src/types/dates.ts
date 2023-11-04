export interface IWeeks {
  date: Date,
  dayName: string,
  id: string,
  isToday: boolean,
  isSameMonth: boolean,
}

export enum DaysNames {
  SUNDAY = 'Sun',
  MONDAY = 'Mon',
  TUESDAY = 'Tue',
  WEDNESDAY = 'Wed',
  THURSDAY = 'Thu',
  FRIDAY = 'Fri',
  SATURDAY = 'Sat',
}

// export enum MonthsNames  {
//   JANUARY = 'January',
//   FEBRUARY = 'February',
//   MARCH = 'March',
//   APRIL = 'April',
//   MAY = 'May',
//   JUNE = 'June',
//   JULY = 'July',
//   AUGUST = 'August',
//   SEPTEMBER = 'September',
//   OCTOBER = 'October',
//   NOVEMBER = 'November',
//   DECEMBER = 'December',
// }