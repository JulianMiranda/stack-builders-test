const inquirer = require("inquirer");
const { dateInput, hourInput, plateInput } = require("./questions");
const { validatePlate } = require("./validatePlate");

const init = async () => {
  const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  const hourRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  const plateRegex = /^[A-Z]{3}-[1-9]{4}/;

  const { date } = await inquirer.prompt(dateInput);
  if (!dateRegex.test(date))
    return console.error("Date error. Example: 2020-04-15");

  const { hour } = await inquirer.prompt(hourInput);
  if (!hourRegex.test(hour)) return console.error("Time error. Example: 16:30");

  const { plate } = await inquirer.prompt(plateInput);
  if (!plateRegex.test(plate))
    return console.error("Plate error. Example PCF-2730");

  return validatePlate(plate, date, hour)
    ? console.log("Cannot circulate")
    : console.log("You can circulate");
};

init();
