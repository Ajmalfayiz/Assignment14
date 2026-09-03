require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");

const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running");
});


app.use("/api/auth", authRoutes);

app.use("/api/customers", customerRoutes);


app.use(errorHandler);


const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();