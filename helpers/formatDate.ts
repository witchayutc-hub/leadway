export function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";

  return `${day}-${year} ${hours}:${minutes} ${ampm}`;
}
