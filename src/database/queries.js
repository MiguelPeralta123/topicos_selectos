import { updatePagoById } from "../controllers/pagos.controller";

export const queries = {
  getAllPagos: "SELECT * FROM Pagos",
  createPago:
    "INSERT INTO Pagos (Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto) VALUES (@notarjeta_org, @notarjeta_dst, @Fecha_venci_org, @Token_org, @mto)",
  getPagoById: "SELECT * FROM Pagos WHERE id_pago = @id",
  deletePago: "DELETE FROM Pagos WHERE id_pago = @id",
  countPagos: "SELECT COUNT (*) FROM Pagos",
  updatePagoById: "UPDATE Pagos SET Notarjeta_org = @notarjeta_org, Notarjeta_Dst = @notarjeta_dst, Fecha_venci_org = @Fecha_venci_org, Token_org = @Token_org, mto = @mto WHERE id_pago = @id"
};
