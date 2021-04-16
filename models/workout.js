const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now,
    },

    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type is needed",
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name is needed",
        },
        duration: {
          type: Number,
          required: "Exercise duration is needed",
        },
        distance: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        weight: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);





module.exports = mongoose.model("Workout", WorkoutSchema)
