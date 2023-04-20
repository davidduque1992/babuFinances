require("dotenv").config();
let tokenLocal = process.env.API_TOKEN;
const checkJWT = (req, res, next) => {
  const headerAuth = req.headers.authorization || "";
  const token = headerAuth;
  if (token !== tokenLocal) {
    res.status(405);
    res.send({ error: "no tienes autorización" });
  } else {
    next();
  }
};
module.exports = { checkJWT };
