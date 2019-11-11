const locationDal = require("./locationDal");

let getLocation = async function() {
  return await locationDal.getLocation();
};
let postLocation = async function(locationPayload) {
  return await locationDal.postLocation(locationPayload);
};
module.exports = {
  getLocation,
  postLocation
};
