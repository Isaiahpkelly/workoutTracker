const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});



// routes
// app.use(require("./routes/api.js"));

// Set up Routes 
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});