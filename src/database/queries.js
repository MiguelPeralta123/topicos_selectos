import { updatePagoById } from "../controllers/pagos.controller";

export const queries = {

  // Queries para banco
  getAllPagos: "SELECT * FROM Pagos",
  createPago:
    "INSERT INTO Pagos (Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto) VALUES (@notarjeta_org, @notarjeta_dst, @Fecha_venci_org, @Token_org, @mto)",
  getPagoById: "SELECT * FROM Pagos WHERE id_pago = @id",
  deletePago: "DELETE FROM Pagos WHERE id_pago = @id",
  countPagos: "SELECT COUNT (*) FROM Pagos",
  updatePagoById: "UPDATE Pagos SET Notarjeta_org = @notarjeta_org, Notarjeta_Dst = @notarjeta_dst, Fecha_venci_org = @Fecha_venci_org, Token_org = @Token_org, mto = @mto WHERE id_pago = @id",

  // Queries para transporte
  getAllEnvios: "SELECT * FROM Envios",
  createEnvio:
    "INSERT INTO Envios (destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega) VALUES (@destinatario, @productos, @nombre_destinatario, @direccion_origen, @direccion_destino, @fecha_entrega)",
  getEnvioById: "SELECT * FROM Envios WHERE id_envio = @id",
  deleteEnvio: "DELETE FROM Envios WHERE id_envio = @id",
  countEnvios: "SELECT COUNT (*) FROM Envios",
  updateEnvioById: "UPDATE Envios SET destinatario = @destinatario, productos = @productos, nombre_destinatario = @nombre_destinatario, direccion_origen = @direccion_origen, direccion_destino = @direccion_destino, fecha_entrega = @fecha_entrega WHERE id_envio = @id",

  // Queries para proveedores
  getAllProv: "SELECT * FROM Prov",
  createProv:
    "INSERT INTO Prov (nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto) VALUES (@nombreComercial, @razonSocial, @rfc, @direccion, @telefono, @representanteLegal, @correoElectronico, @tipoProducto)",
  getProvById: "SELECT * FROM Prov WHERE id_prov = @id",
  deleteProv: "DELETE FROM Prov WHERE id_prov = @id",
  countProv: "SELECT COUNT (*) FROM Prov",
  updateProvById: "UPDATE Prov SET nombreComercial = @nombreComercial, razonSocial = @razonSocial, rfc = @rfc, direccion = @direccion, telefono = @telefono, representanteLegal = @representanteLegal, correoElectronico = @correoElectronico, tipoProducto = @tipoProducto WHERE id_prov = @id"
};
