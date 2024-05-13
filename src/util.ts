export function* range({ start, end }: { start: number; end: number }) {
  let i = start
  while (true) {
    if (i === end) return i
    yield i
    i += 1
  }
}

export function assertWithinDayOfWeekIndex(
  dayOfWeek: number
): asserts dayOfWeek is 0 | 1 | 2 | 3 | 4 | 5 | 6 {
  if (![0, 1, 2, 3, 4, 5, 6].includes(dayOfWeek)) {
    throw new Error(
      `invalid dayOfWeek: ${dayOfWeek}. dayOfWeek should be within 1,2,3,4,5,6,7.`
    )
  }
}
