const { pool } = require("./db");

const verificarUser = async (usuario, clave) => {
  const [rows, fields] = await pool.query(
    "SELECT * FROM usuarios WHERE mail = ? AND clave = ?",
    [usuario, clave]
  );
  // console.log(rows.length);
  return !!rows.length;
};

module.exports = { verificarUser };
