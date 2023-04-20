//captura las peticiones , las maneja y las resuelve // basicamente recibe los parametos , lueog lo envia a un servicio que si hace logica de negocio y procesa los datos y se los retorna a este controlador
const { verificar } = require("../services/login");
const verificarUsuario = async (req, res) => {
  const { usuario, clave } = req.body;
  let resp = await verificar(usuario, clave);
  console.log(resp);
  res.send({ status: resp });
};

module.exports = { verificarUsuario };
