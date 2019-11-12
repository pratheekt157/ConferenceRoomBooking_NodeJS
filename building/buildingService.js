const buildingDal = require("./buildingDal");

let addBuilding = async function(buildingPayload) {
  return await buildingDal.postBuilding(buildingPayload);
};

let getBuilding = async function() {
  return await buildingDal.getBuilding();
};

let updateBuilding = async function(buildingParam, buildingPayload) {
  return await buildingDal.updateBuilding(buildingParam, buildingPayload);
};

let deleteBuilding = async function(buildingParam) {
  return await buildingDal.deleteBuilding(buildingParam);
};

module.exports = {
  addBuilding,
  getBuilding,
  updateBuilding,
  deleteBuilding
};
