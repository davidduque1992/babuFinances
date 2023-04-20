////logica de negocio
const { verificarUser } = require("../models/login");
const verificar = async (usuario, clave) => {
  let res = await verificarUser(usuario, clave);
  return res;
};

module.exports = { verificar };
