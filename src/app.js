import express from "express"
import {router as employeeRoutes} from "./routes/employees.routes.js"
import {router as indexRoutes} from "./routes/index.routes.js"
//
const app = express()
//
app.use(express.json())
app.use("/api", employeeRoutes)
app.use("/api", indexRoutes)

export default app;