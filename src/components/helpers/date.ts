

export function formatDateTime(date: Date){
const formatted = new Intl.DateTimeFormat("en-NZ", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true, 
  timeZone: "Pacific/Auckland", 
}).format(new Date(date));
return formatted.replace(",", " -");
}