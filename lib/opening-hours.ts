// site.config stores opening hours as display strings ("Mon-Fri", "6:00pm").
// schema.org OpeningHoursSpecification needs DayOfWeek names and ISO 8601
// times, so convert here rather than making the config less readable.

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const dayIndex = (label: string) =>
  DAYS.findIndex((d) => d.toLowerCase().startsWith(label.trim().toLowerCase().slice(0, 3)));

/** "Mon-Fri" -> [Monday…Friday]; "Sat" -> [Saturday]. Unknown labels -> []. */
export function toDayOfWeek(label: string): string[] {
  const [from, to] = label.split(/[-–—]/);
  const start = dayIndex(from ?? "");
  if (start < 0) return [];
  if (!to) return [DAYS[start]];

  const end = dayIndex(to);
  if (end < 0) return [DAYS[start]];

  const out: string[] = [];
  for (let i = start; ; i = (i + 1) % DAYS.length) {
    out.push(DAYS[i]);
    if (i === end) break;
  }
  return out;
}

/** "6:00pm" -> "18:00". Already-24h values pass through unchanged. */
export function to24h(time: string): string {
  const m = /^(\d{1,2}):(\d{2})\s*(am|pm)?$/i.exec(time.trim());
  if (!m) return time;

  let hour = Number(m[1]);
  const suffix = m[3]?.toLowerCase();
  if (suffix === "pm" && hour !== 12) hour += 12;
  if (suffix === "am" && hour === 12) hour = 0;

  return `${String(hour).padStart(2, "0")}:${m[2]}`;
}
