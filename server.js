if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const mongoose = require("mongoose");

// set the view engine to ejs
app.set("view engine", "ejs");
// set views for the app
app.set("views", __dirname + "/views");
// set the layout for the app
app.set("layout", "layouts/layout");
// use the layout
app.use(expressLayouts);
// set the public folder
app.use(express.static("public"));

// Database connection
console.log("Attempting to connect to the database...");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error("Database connection error:", error));
db.once("open", () => console.log("Connected to Mongoose"));

// Routes
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
