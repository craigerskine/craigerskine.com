module.exports = () => {
  const year = new Date().getFullYear();
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  let grid = {};

  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    const month = day.toLocaleString('default', { month: 'short' });
    if (!grid[month]) {
      grid[month] = [];
    }
    const numericDay = day.getDate();
    const shortWeekdayName = day.toLocaleDateString('en-US', { weekday: 'short' });

    const dayDetails = {
      date: new Date(day),
      day: numericDay,
      weekday: shortWeekdayName
    };
    grid[month].push(dayDetails);
  }

  return { grid, year };
};
