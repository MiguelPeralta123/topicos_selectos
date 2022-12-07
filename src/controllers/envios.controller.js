import { getConnection, sql, queries } from "../database";

export const getEnvios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllEnvios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createEnvio = async (req, res) => {
  const { destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega } =
    req.body;

  if (
    destinatario == null ||
    productos == null ||
    nombre_destinatario == null ||
    direccion_origen == null ||
    direccion_destino == null ||
    fecha_entrega == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("destinatario", sql.VarChar, destinatario)
      .input("productos", sql.VarChar, productos)
      .input("nombre_destinatario", sql.VarChar, nombre_destinatario)
      .input("direccion_origen", sql.VarChar, direccion_origen)
      .input("direccion_destino", sql.VarChar, direccion_destino)
      .input("fecha_entrega", sql.Date, fecha_entrega)
      .query(queries.createEnvio);
    res.json({ destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEnvioById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.getEnvioById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteEnvioById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.deleteEnvio);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const countEnvios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.countEnvios);
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateEnvioById = async (req, res) => {
  const { destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega } =
    req.body;
  const { id } = req.params;

  if (
    destinatario == null ||
    productos == null ||
    nombre_destinatario == null ||
    direccion_origen == null ||
    direccion_destino == null ||
    fecha_entrega == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("destinatario", sql.VarChar, destinatario)
      .input("productos", sql.VarChar, productos)
      .input("nombre_destinatario", sql.VarChar, nombre_destinatario)
      .input("direccion_origen", sql.VarChar, direccion_origen)
      .input("direccion_destino", sql.VarChar, direccion_destino)
      .input("fecha_entrega", sql.Date, fecha_entrega)
      .input("id", sql.Int, id)
      .query(queries.updateEnvioById);
    res.json({
      id,
      destinatario,
      productos,
      nombre_destinatario,
      direccion_origen,
      direccion_destino,
      fecha_entrega,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
