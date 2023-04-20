const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const { router } = require("./routes");
const { checkJWT } = require("./middlewares/auth");

const app = express();

// Middleware de carga de archivos
app.use(fileUpload());

// Middleware de cors
app.use(cors());

// Middleware de autenticación
app.use("/api", checkJWT, router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Api corriendo por el puerto", PORT));
