import express from "express";
import config from "./config";

import pagosRoutes from "./routes/pagos.routes"

const app = express()

//settings
app.set("port", config.port)

app.use(pagosRoutes)

export default app