import express from "express";
import config from "./config";

import pagosRoutes from "./routes/pagos.routes";
import enviosRoutes from "./routes/envios.routes";
import provRoutes from "./routes/prov.routes";

const app = express();

//settings
app.set("port", config.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(pagosRoutes);
app.use(enviosRoutes);
app.use(provRoutes);

export default app;
