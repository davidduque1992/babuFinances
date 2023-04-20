const express = require("express");
const router = express.Router();
const {
  verificarUsuario,
} = require("../controllers/login");


router.post("", verificarUsuario);
module.exports = router;
