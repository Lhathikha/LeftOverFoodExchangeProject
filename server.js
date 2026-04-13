const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const foodRoutes = require("./routes/foodRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/leftoverFoodApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
