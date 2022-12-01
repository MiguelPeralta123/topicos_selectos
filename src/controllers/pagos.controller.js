import { getConnection } from "../database/connection";

export const getPagos = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query("SELECT * FROM Pagos");

  console.log(result)

  res.json(result.recordset);
};
