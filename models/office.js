import mongoose from "mongoose";

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: String, // Latitude of the office
    required: true,
  },
  longitude: {
    type: String, // Longitude of the office
    required: true,
  },
  radius: {
    type: Number, // Geofence radius in meters
    default: 200,
  },
});

const Office = mongoose.model("Office", officeSchema);
export default Office;
