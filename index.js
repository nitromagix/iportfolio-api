// Modules and Globals

require("dotenv").config();
const express = require("express");
const expressReactViews = require("express-react-views").createEngine();
const methodOverride = require("method-override");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews);

// Controllers and Routes
app.use("/places", require("./controllers/places"));
app.use("/profiles", require("./controllers/profile_controller.js"));

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("*", async (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
