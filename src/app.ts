import "express-async-errors"
import express, { Application } from "express";
import { handleErrors } from "./errors";
import sectorRoutes from "./routes/sectors.route";

const app: Application = express();

app.use(express.json())

app.use("/sectors", sectorRoutes)

app.use(handleErrors)

export default app;