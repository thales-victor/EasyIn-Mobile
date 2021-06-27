export function getDateTime(dateTime) {

  const date = new Date(dateTime);

  const day = forceTwoDigits(date.getDate());
  const month = forceTwoDigits(date.getMonth() + 1)
  const year = date.getFullYear();
  const hour = forceTwoDigits(date.getHours());
  const minutes = forceTwoDigits(date.getMinutes());
  const seconds = forceTwoDigits(date.getSeconds());

  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}

export function forceTwoDigits(number) {
  return ("0" + (number)).slice(-2);
}