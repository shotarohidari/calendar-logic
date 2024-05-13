import { Temporal } from "npm:temporal-polyfill@0.2.4"
import { type DayAndDayOfWeek, dayOfWeek } from "./type.ts"
import { assertWithinDayOfWeekIndex, range } from "./util.ts"

export function dayAndDayOfWeekList({
  year,
  month,
}: {
  year: number
  month: number
}): DayAndDayOfWeek[] {
  const cal = new Temporal.Calendar("iso8601")
  const yearMonth = Temporal.PlainYearMonth.from({ year, month })

  return [...range({ start: 1, end: cal.daysInMonth(yearMonth) })].map(
    (day) => {
      const date = Temporal.PlainDate.from({
        year,
        month,
        day,
      })
      const dayOfWeekIndex = date.dayOfWeek - 1
      assertWithinDayOfWeekIndex(dayOfWeekIndex)
      return {
        day,
        dayOfWeek: dayOfWeek[dayOfWeekIndex],
      }
    },
    []
  )
}
