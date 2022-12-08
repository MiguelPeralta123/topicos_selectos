import { Router } from "express";

import {
  getProv,
  createProv,
  getProvById,
  deleteProvById,
  countProv,
  updateProvById,
} from "../controllers/prov.controller";

const router = Router();

router.get("/prov", getProv);

router.post("/prov", createProv);

router.get("/prov/count", countProv);

router.get("/prov/:id", getProvById);

router.delete("/prov/:id", deleteProvById);

router.put("/prov/:id", updateProvById);

export default router;
