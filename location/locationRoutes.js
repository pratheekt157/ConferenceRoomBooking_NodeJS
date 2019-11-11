const express = require("express");
const router = express.Router();
const locationContoller = require("./locationController");

//route to get Locations

router.get("/", locationContoller.getLocation);

router.post("/",locationContoller.postLocation)


module.exports = router;
