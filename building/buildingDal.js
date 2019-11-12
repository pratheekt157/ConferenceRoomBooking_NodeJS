const buildingModel = require("./buildingModel");
const mongoose = require("mongoose");

let postBuilding = async function(buildingPayload) {
  buildingPayload["_id"] = new mongoose.Types.ObjectId();
  console.log("BuildingPayload", buildingPayload["locationId"]);

  let addBuilding = await buildingModel.create(buildingPayload);
  return addBuilding;
};

let getBuilding = async function() {
  let buildingList = await buildingModel
    .find()
    .populate("locationId")
    .exec()
    .then(results => {
      return results;
    });
  return buildingList;
};

let updateBuilding = async function(buildingParam, buildingPayload) {
  let updateBuildingName = await buildingModel
    .update({ _id: buildingParam.buildingId }, { $set: buildingPayload })
    .exec()
    .then(result => {
      return result;
    });
  return updateBuildingName;
};

let deleteBuilding = async function(buildingParam) {
  let deleteBuildingStatus = await buildingModel
    .removeOne({_id: buildingParam})
    .exec()
    .then(result => {
      return result;
    });
  return deleteBuildingStatus;
};

module.exports = {
  postBuilding,
  getBuilding,
  updateBuilding,
  deleteBuilding
};
