// import express from "express";
// import { config } from "dotenv";
// import morgan from "morgan";
// import appRouter from "./routes/index.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// config();
// const app = express();
// //middlewares
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());
// app.use(cookieParser(process.env.COOKIE_SECRET));
// //remove it in production
// app.use(morgan("dev"));
// app.use("/api/v1", appRouter);
// export default app;
import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const BASE_URL = process.env.BASE_URL;
config();
const app = express();
//middlewares
app.use(cors({ origin: "${BASE_URL}", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map