import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import signupRoutes from "./routes/signup.js";
import crosswordRoutes from "./routes/crossword.js";
import CreateFormRoutes from "./routes/CreateForm.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/signup", signupRoutes);
app.use("/crossword", crosswordRoutes);
app.use("/CreateForm", CreateFormRoutes);
const CONNECTION_URL =
  "mongodb+srv://Arushi:<pass>@cluster0.lskvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server
running on port : ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
