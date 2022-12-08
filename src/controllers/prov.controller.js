import { getConnection, sql, queries } from "../database";

export const getProv = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProv);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createProv = async (req, res) => {
  const { nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto } =
    req.body;

  if (
    nombreComercial == null ||
    razonSocial == null ||
    rfc == null ||
    direccion == null ||
    telefono == null ||
    representanteLegal == null ||
    correoElectronico == null ||
    tipoProducto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombreComercial", sql.VarChar, nombreComercial)
      .input("razonSocial", sql.VarChar, razonSocial)
      .input("rfc", sql.VarChar, rfc)
      .input("direccion", sql.VarChar, direccion)
      .input("telefono", sql.VarChar, telefono)
      .input("representanteLegal", sql.VarChar, representanteLegal)
      .input("correoElectronico", sql.VarChar, correoElectronico)
      .input("tipoProducto", sql.VarChar, tipoProducto)
      .query(queries.createProv);
    res.json({ nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProvById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.getProvById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProvById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.deleteProv);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const countProv = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.countProv);
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProvById = async (req, res) => {
  const { nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto } =
    req.body;
  const { id } = req.params;

  if (
    nombreComercial == null ||
    razonSocial == null ||
    rfc == null ||
    direccion == null ||
    telefono == null ||
    representanteLegal == null ||
    correoElectronico == null ||
    tipoProducto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombreComercial", sql.VarChar, nombreComercial)
      .input("razonSocial", sql.VarChar, razonSocial)
      .input("rfc", sql.VarChar, rfc)
      .input("direccion", sql.VarChar, direccion)
      .input("telefono", sql.VarChar, telefono)
      .input("representanteLegal", sql.VarChar, representanteLegal)
      .input("correoElectronico", sql.VarChar, correoElectronico)
      .input("tipoProducto", sql.VarChar, tipoProducto)
      .input("id", sql.Int, id)
      .query(queries.updateProvById);
    res.json({
      id,
      nombreComercial,
      razonSocial,
      rfc,
      direccion,
      telefono,
      representanteLegal,
      correoElectronico,
      tipoProducto
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
