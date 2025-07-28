const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
require("dotenv").config();

const app = express();
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "https://51.21.168.120",
  "https://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
