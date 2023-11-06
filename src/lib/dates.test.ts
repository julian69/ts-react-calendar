import { describe, expect, test } from 'vitest'

import { formatDate, getDayId, getMonthByDate, getCalendarDays, getYearByDate, sortRemindersByDate } from './dates'
import { mockedReminders } from '@/mocks/reminders'
import { mockedCalendarDays } from '@/mocks/weeks'

describe('Dates helpers', () => {
  test('should sort reminders asc', () => {
    const result = sortRemindersByDate(mockedReminders)
    const resultTitles = JSON.stringify(result.map(r => r.TITLE))
    const expected = JSON.stringify(["Reminder C", "Reminder B", "Reminder A"])

    expect(resultTitles).toBe(expected)
  })

  test('should return a formatted dayId', () => {
    const result = getDayId(new Date(2023, 10, 30))
    const expected = "2023_10_30"

    expect(result).toBe(expected)
  })

  test('should return a month string', () => {
    const result = getMonthByDate(new Date(2023, 10, 30)) // months are indexed from 0
    const expected = "November"

    expect(result).toBe(expected)
  })

  test('should return a year string', () => {
    const result = getYearByDate(new Date(2023, 10, 30)) 
    const expected = "2023"

    expect(result).toBe(expected)
  })

  test('should return a formatted date like yyyy-MM-dd HH:mm', () => {
    const result = formatDate(new Date(2023, 10, 30)) 
    const expected = "2023-11-30 00:00"

    expect(result).toBe(expected)
  })

  test('should return an array of days', () => {
    const result = JSON.stringify(getCalendarDays(new Date(2023, 10, 30)))

    expect(result).toBe(JSON.stringify(mockedCalendarDays))
  })
})