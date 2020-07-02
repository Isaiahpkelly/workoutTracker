// API ROUTE Handler
var db = require("../models/Workout");

// API Routes
module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.workout.updateOne({
        _id: req.params.id
      }, {
        $push: {
          exercises: req.body
        }
      })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.post("/api/workouts", ({
    body
  }, res) => {
    db.workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });
};