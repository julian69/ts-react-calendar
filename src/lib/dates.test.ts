import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { formatDate, getDayId, getMonthByDate, getCalendarDays, getYearByDate, sortRemindersByDate } from './dates'
import { mockedReminders } from '@/mocks/reminders'

describe('Dates helpers', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

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
    const date = new Date(2023, 10, 4)
    vi.setSystemTime(date)

    const result = getCalendarDays(date)
    const isTodayObject = result.filter(r => r.isToday)[0]
    const isSameMonthObject = result.filter(r => r.isSameMonth)

    expect(result.length).toBe(35)
    expect(isSameMonthObject.length).toBe(30)
    expect(isTodayObject.id).toBe('2023_10_4')
  })
})