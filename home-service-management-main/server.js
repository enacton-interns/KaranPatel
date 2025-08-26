import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());


//import Routes
import UserRouter from "./routes/userRoutes.js";
import serviceRouter from "./routes/serviceProvider.Routes.js";
import ticketRouter from "./routes/ticketRoutes.js";
import profileRouter from "./routes/userProfileRoutes.js";
app.use("/api/users", UserRouter);
app.use("/api/providers", serviceRouter);
app.use("/api/tickets", ticketRouter);
app.use("/api/users/profile", profileRouter);


connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
