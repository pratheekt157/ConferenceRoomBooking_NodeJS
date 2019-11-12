const express = require("express");
const router = express.Router();
const amenitiesController = require("./amenities-controller");

router.post("/", amenitiesController.addAmenities);

router.get("/", amenitiesController.getAllAmenities);

router.patch("/:amenityId", amenitiesController.updateAmenities);

router.delete("/:amenityId", amenitiesController.deleteAmenities);
module.exports = router;
