const moment = require("moment");

module.exports.validatePlate = (plate, date, hour) => {
  const [h, m] = hour.split(":");
  const hourInt = parseInt(h + m);
  const lastNumber = parseInt(plate.charAt(plate.length - 1));
  const dateWeek = moment(date);
  const weekDay = dateWeek.day();

  if (
    (hourInt >= 700 && hourInt <= 930) ||
    (hourInt >= 1600 && hourInt <= 1930)
  ) {
    switch (lastNumber) {
      case 1 || 2:
        return weekDay === 1;
        break;
      case 3 || 4:
        return weekDay === 2;
        break;
      case 5 || 6:
        return weekDay === 3;
        break;
      case 7 || 8:
        return weekDay === 4;
        break;
      case 9 || 0:
        return weekDay === 5;
        break;
      default:
        return false;
    }
  } else return false;
};
