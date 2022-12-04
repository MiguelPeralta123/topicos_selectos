import { Router } from "express";

import {
  getPagos,
  createPago,
  getPagoById,
  deletePagoById,
  countPagos,
  updatePagoById,
} from "../controllers/pagos.controller";

const router = Router();

router.get("/pagos", getPagos);

router.post("/pagos", createPago);

router.get("/pagos/count", countPagos);

router.get("/pagos/:id", getPagoById);

router.delete("/pagos/:id", deletePagoById);

router.put("pagos/:id", updatePagoById);

export default router;
