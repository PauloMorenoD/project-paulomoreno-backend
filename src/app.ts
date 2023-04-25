import "express-async-errors"
import express, { Application } from "express";
import { handleErrors } from "./errors";
import sectorRoutes from "./routes/sectors.route";
import userRoutes from "./routes/users.route";
import loginRoutes from "./routes/login.route";
import companieRoutes from "./routes/companies.route";
import departmentsRoutes from "./routes/departments.route";
const cors = require('cors');
const app: Application = express();

app.use(express.json())
app.use(cors({
    origin: 'https://api-empresas.onrender.com'
}));

app.use("/sectors", sectorRoutes)
app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/companies", companieRoutes)
app.use("/departments", departmentsRoutes)

app.use(handleErrors)

export default app;