import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"
import { dayAndDayOfWeekList } from "../src/index.ts"

Deno.test("年と月を指定するとその年月の日にちと曜日の配列を返す", () => {
  const year = 2024
  const month = 5

  const expected = [
    { day: 1, dayOfWeek: "Wed" },
    { day: 2, dayOfWeek: "Thr" },
    { day: 3, dayOfWeek: "Fri" },
    { day: 4, dayOfWeek: "Sat" },
    { day: 5, dayOfWeek: "Sun" },
    { day: 6, dayOfWeek: "Mon" },
    { day: 7, dayOfWeek: "Tue" },
    { day: 8, dayOfWeek: "Wed" },
    { day: 9, dayOfWeek: "Thr" },
    { day: 10, dayOfWeek: "Fri" },
    { day: 11, dayOfWeek: "Sat" },
    { day: 12, dayOfWeek: "Sun" },
    { day: 13, dayOfWeek: "Mon" },
    { day: 14, dayOfWeek: "Tue" },
    { day: 15, dayOfWeek: "Wed" },
    { day: 16, dayOfWeek: "Thr" },
    { day: 17, dayOfWeek: "Fri" },
    { day: 18, dayOfWeek: "Sat" },
    { day: 19, dayOfWeek: "Sun" },
    { day: 20, dayOfWeek: "Mon" },
    { day: 21, dayOfWeek: "Tue" },
    { day: 22, dayOfWeek: "Wed" },
    { day: 23, dayOfWeek: "Thr" },
    { day: 24, dayOfWeek: "Fri" },
    { day: 25, dayOfWeek: "Sat" },
    { day: 26, dayOfWeek: "Sun" },
    { day: 27, dayOfWeek: "Mon" },
    { day: 28, dayOfWeek: "Tue" },
    { day: 29, dayOfWeek: "Wed" },
    { day: 30, dayOfWeek: "Thr" },
  ]

  const actual = dayAndDayOfWeekList({ year, month })
  assertEquals(actual, expected)
})
