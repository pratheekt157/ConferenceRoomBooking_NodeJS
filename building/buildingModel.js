const mongoose = require("mongoose");
const softDelete = require("mongoosejs-soft-delete");
const buildingSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  buildingName: {
    type: String,
    required: true,
    unique: true
  },
  locationId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Location"
  }
});
buildingSchema.plugin(softDelete);

module.exports = mongoose.model("Building", buildingSchema);
