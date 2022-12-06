import { getConnection, sql, queries } from "../database";

export const getPagos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllPagos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createPago = async (req, res) => {
  const { notarjeta_org, notarjeta_dst, Fecha_venci_org, Token_org, mto } =
    req.body;

  if (
    notarjeta_org == null ||
    notarjeta_dst == null ||
    Fecha_venci_org == null ||
    Token_org == null ||
    mto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Notarjeta_org", sql.VarChar, notarjeta_org)
      .input("Notarjeta_Dst", sql.VarChar, notarjeta_dst)
      .input("Fecha_venci_org", sql.VarChar, Fecha_venci_org)
      .input("Token_org", sql.VarChar, Token_org)
      .input("mto", sql.Float, mto)
      .query(queries.createPago);
    res.json({ notarjeta_org, notarjeta_dst, Fecha_venci_org, Token_org, mto });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPagoById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.getPagoById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletePagoById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.deletePago);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const countPagos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.countPagos);
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updatePagoById = async (req, res) => {
  const { notarjeta_org, notarjeta_dst, Fecha_venci_org, Token_org, mto } =
    req.body;
  const { id } = req.params;

  if (
    notarjeta_org == null ||
    notarjeta_dst == null ||
    Fecha_venci_org == null ||
    Token_org == null ||
    mto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Notarjeta_org", sql.VarChar, notarjeta_org)
      .input("Notarjeta_Dst", sql.VarChar, notarjeta_dst)
      .input("Fecha_venci_org", sql.VarChar, Fecha_venci_org)
      .input("Token_org", sql.VarChar, Token_org)
      .input("mto", sql.Float, mto)
      .input("id", sql.Int, id)
      .query(queries.updatePagoById);
    res.json({
      id,
      notarjeta_org,
      notarjeta_dst,
      Fecha_venci_org,
      Token_org,
      mto,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
