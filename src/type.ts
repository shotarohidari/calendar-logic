export const dayOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thr",
  "Fri",
  "Sat",
  "Sun",
] as const
export type DayOfWeek = (typeof dayOfWeek)[number]

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type DayAndDayOfWeek = {
  day: number
  dayOfWeek: DayOfWeek
}
