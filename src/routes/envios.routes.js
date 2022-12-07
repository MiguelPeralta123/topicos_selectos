import { Router } from "express";

import {
  getEnvios,
  createEnvio,
  getEnvioById,
  deleteEnvioById,
  countEnvios,
  updateEnvioById,
} from "../controllers/envios.controller";

const router = Router();

router.get("/envios", getEnvios);

router.post("/envios", createEnvio);

router.get("/envios/count", countEnvios);

router.get("/envios/:id", getEnvioById);

router.delete("/envios/:id", deleteEnvioById);

router.put("/envios/:id", updateEnvioById);

export default router;