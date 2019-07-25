const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Database setup 
mongoose.connect("mongodb://localhost:auth/auth", {useNewUrlParser: true, useCreateIndex: true});

// Middleware setup 
app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); //backup for 

// If in production, serve clients' build folder
// Folder will only be created during production
if(process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'))
};

//Routes setup
const routes = require("./routes");
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
  console.log("server started on port" + PORT);
}) 