const mongoose = require("mongoose");
const softDelete = require("mongoosejs-soft-delete");
const locationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  locationName: { type: String, required: true, unique: true}
});
locationSchema.plugin(softDelete);

module.exports = mongoose.model("Location", locationSchema);
