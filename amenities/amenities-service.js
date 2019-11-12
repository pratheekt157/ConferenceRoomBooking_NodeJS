const amenityDal = require("./amenities-dal");

let addAmenities = async function(amenityPayload) {
  return await amenityDal.addAmenities(amenityPayload);
};

let getAllAmenities = async function() {
  return await amenityDal.getAllAmenities();
};

let updateAmenities = async function (updateAmenityPayload, updateAmenityId) {
    return await amenityDal.updateAmenities(updateAmenityPayload, updateAmenityId)
}

let deleteAmenities = async function(deleteAmentiyId){
    return await amenityDal.deleteAmenities(deleteAmentiyId)
}
module.exports = {
  addAmenities,
  getAllAmenities,
  updateAmenities,
  deleteAmenities
};
