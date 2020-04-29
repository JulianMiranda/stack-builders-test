const moment = require('moment');

module.exports.validatePlate = (plate, date, hour) => {
	const [h, m] = hour.split(':');
	const hourInt = parseInt(h + m);
	const lastNumber = parseInt(plate.charAt(plate.length - 1));
	const dateWeek = moment(date);
	const weekDay = dateWeek.day();

	if (
		(hourInt >= 700 && hourInt <= 930) ||
		(hourInt >= 1600 && hourInt <= 1930)
	) {
		switch (weekDay) {
			case 1:
				return lastNumber === 1 || 2;
				break;
			case 2:
				return lastNumber === 3 || 4;
				break;
			case 3:
				return lastNumber === 5 || 6;
				break;
			case 4:
				return lastNumber === 7 || 8;
				break;
			case 5:
				return lastNumber === 9 || 0;
				break;
			default:
				return false;
		}
	} else return false;
};
