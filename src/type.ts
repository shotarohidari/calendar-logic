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
export type DayAndDayOfWeek = {
  day: number
  dayOfWeek: DayOfWeek
}
