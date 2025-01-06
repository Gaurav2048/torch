import mongoose from "mongoose";

const orgSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  sprints: {
    type: [
      {
        id: String,
        name: String,
        size: Number,
      },
    ],
  },
  workTypes: {
    type: [
      {
        id: String,
        name: String,
        color: String,
      },
    ],
  },
  boards: {
    type: [
      {
        name: String,
        _id: String,
      },
    ],
  },
});

const Org = mongoose.model("Org", orgSchema);

export default Org;
