const ameintiesModel = require("./amenities-model");
const moongoose = require("mongoose");

let addAmenities = async function(amenityPayload) {
  amenityPayload["_id"] = new moongoose.Types.ObjectId();
  let addedAmenities = await ameintiesModel.create(amenityPayload);
  return addedAmenities;
};

let getAllAmenities = async function() {
  let listOfAmenities = await ameintiesModel
    .find()
    .select("_id amenityName")
    .then(amenity => {
      return amenity;
    });
  return listOfAmenities;
};

let updateAmenities = async function(updateAmenityPayload, updateAmenityId) {
  let updateStatus = await ameintiesModel
    .update({ _id: updateAmenityId }, { $set: updateAmenityPayload })
    .exec()
    .then(update => {
      return update;
    });
  return updateStatus;
};

let deleteAmenities = async function(deleteAmentiyId) {
  let deleteStatus = await ameintiesModel
    .remove({ _id: deleteAmentiyId })
    .exec()
    .then(status => {
      return status;
    });
  return deleteStatus;
};

module.exports = {
  addAmenities,
  getAllAmenities,
  updateAmenities,
  deleteAmenities
};
