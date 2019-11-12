const moongose = require("mongoose");
const softDelete = require("mongoosejs-soft-delete");

const conferenceRoomSchema = moongose.Schema({
  _id: moongose.Schema.Types.ObjectId,
  roomName: {
    type: String,
    required: true,
    unique: true
  },
  roomCapacity: {
    type: Number,
    required: true
  },
  
});
