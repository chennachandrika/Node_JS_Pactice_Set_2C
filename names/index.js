const people_name_list = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = function (people_name_list) {
  return getFirstNames(people_name_list);
};
console.log(getPeopleInCity(people_name_list));
module.exports = getPeopleInCity;
