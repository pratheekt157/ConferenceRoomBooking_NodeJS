const express = require("express");
const router = express.Router();
const buildingController = require("./buildingController");

router.post("/", buildingController.postBuilding);
router.get("/", buildingController.getBuilding);
router.patch("/:buildingId", buildingController.updateBuilding);
router.delete("/:buildingId", buildingController.deleteBuilding);

module.exports = router;
