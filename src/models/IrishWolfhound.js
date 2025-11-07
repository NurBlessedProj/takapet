import mongoose from "mongoose";

const IrishWolfhoundSchema = new mongoose.Schema(
  {
    breed: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    sex: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const IrishWolfhound =
  mongoose.models.IrishWolfhound ||
  mongoose.model("IrishWolfhound", IrishWolfhoundSchema);
export default IrishWolfhound;
