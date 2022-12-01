import sql from "mssql";

const dbSettings = {
  user: "sa",
  password: "123",
  server: "MIGUEL",
  database: "LA_CHEVERIA",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}