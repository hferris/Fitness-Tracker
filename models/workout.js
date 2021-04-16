const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: () => new Date() },
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

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
