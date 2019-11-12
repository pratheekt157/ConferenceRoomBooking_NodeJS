const validateBuilding = require("../CommonUtils/ValidationObjects");
const buildingService = require("./buildingService");
const controllerUtils = require("../CommonUtils/ContollerUtils");

let postBuilding = async function(req, res) {
  try {
    const buildingPayload = req.body;
    const validationBuildingPayload = await validateBuilding.buildingSchema.validateAsync(
      buildingPayload
    );
    let postBuilding = await buildingService.addBuilding(
      validationBuildingPayload
    );
    return controllerUtils.response(res, 201, "Building Created", postBuilding);
  } catch (error) {
    return controllerUtils.errorResponse(res, 500, error);
  }
};

let getBuilding = async function(req, res) {
  try {
    let buildingList = await buildingService.getBuilding();
    return controllerUtils.response(res, 200, "Building List", buildingList);
  } catch (error) {
    return controllerUtils.errorResponse(res, 500, error);
  }
};

let updateBuilding = async function(req, res) {
  try {
    let updateBuildingName = await buildingService.updateBuilding(
      req.params,
      req.body
    );
    return controllerUtils.response(
      res,
      200,
      "update Building Name",
      updateBuildingName
    );
  } catch (error) {
    return controllerUtils.errorResponse(res, 500, error);
  }
};

let deleteBuilding = async function(req, res) {
  try {
    let deleteBuildingStatus = await buildingService.deleteBuilding(
      req.params.buildingId
    );
    return controllerUtils.response(
      res,
      200,
      "deleted succesfully!",
      deleteBuildingStatus
    );
  } catch (error) {
    return controllerUtils.errorResponse(res, 500, error);
  }
};

module.exports = {
  postBuilding,
  getBuilding,
  updateBuilding,
  deleteBuilding
};
