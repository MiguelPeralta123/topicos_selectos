import { Router } from "express";

import { getPagos } from "../controllers/pagos.controller";

const router = Router();

router.get("/pagos", getPagos);

router.post("/pagos", );

export default router;
