const amenitiesService = require("./amenities-service");
const controllerUtils = require("../CommonUtils/ContollerUtils");
const validationUtils = require("../CommonUtils/ValidationObjects")

let addAmenities = async function(request, response) {
  try {
    let amenityPayload = request.body;
    let validateAmenityPayload = await validationUtils.amenitiesSchema.validateAsync(amenityPayload);
    let addedAmenities = await amenitiesService.addAmenities(validateAmenityPayload);
    return controllerUtils.createdResponse(
      response     );
  } catch (error) {
      console.log("Post Amenities",error);
      
    return controllerUtils.errorResponse(response, 500, error);
  }
};

let getAllAmenities = async function(request, response){
    try {
        let allAmenities = await amenitiesService.getAllAmenities();
        return controllerUtils.response(response,200,"List of Amenities",allAmenities);
    } catch (error) {
        return controllerUtils.errorResponse(response, 500, error);
    }
}

let updateAmenities = async function (request, response){
    try {
        let updateAmenityPayload = request.body;
        let  updateAmenityId = request.params.amenityId
        let updateStatus = await amenitiesService.updateAmenities(updateAmenityPayload,updateAmenityId);
        return controllerUtils.response(response,200,"Updated the Amenity",updateStatus)
    } catch (error) {
        return controllerUtils.errorResponse(response, 500, error);
    }
}

let deleteAmenities = async function(request,response){
    try {
        let amenityId = request.params.amenityId
        let removeStatus = await amenitiesService.deleteAmenities(amenityId)
        return controllerUtils.response(response,200,"Successfully deleted", removeStatus)
    } catch (error ) {
        return controllerUtils.errorResponse(response, 500, error);
    }
}
module.exports = {
  addAmenities,
  getAllAmenities,
  updateAmenities,
  deleteAmenities
};
