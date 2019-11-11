const locationModel = require("./locationModel");
const mongoose = require("mongoose");
let getLocation = async function() {
  let listOfLocations = await locationModel
    .find()
    .then(location => {
      return location;
    });
  return listOfLocations;
};

let postLocation = async function(locationPayload) {
    locationPayload['_id'] = new mongoose.Types.ObjectId();


console.log("locationPayload ::",locationPayload);

  let addLocation = await locationModel.create(locationPayload);
  return addLocation;
};

module.exports = {
  getLocation,
  postLocation
};
