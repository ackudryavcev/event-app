const getDayOfWeek = (dateString: string) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateObject = new Date(dateString);

  const dayOfWeekIndex = dateObject.getDay();

  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  return dayOfWeek;
};

export default getDayOfWeek;
