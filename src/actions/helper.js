// Filtering the data for useful information.
export const filterData = data => {
  // Reducing the 40 3-hour interval weather information to 6 days.
  data.list = Object.keys(data.list)
    .filter(key => key === "0" || key % 8 === 0 || key === "39")
    .reduce(
      (object, currentKey, index) => ({
        ...object,
        [index]: data.list[currentKey]
      }),
      {}
    );
  // Changing the date format
  for (let key in data.list) {
    if (data.list.hasOwnProperty(key)) {
      data.list[key].dt = new Date(data.list[key].dt * 1000);
    }
  }
  return data;
};
