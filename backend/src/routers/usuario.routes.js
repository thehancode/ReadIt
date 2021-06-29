const express = require("express")
const router = express.Router();

const usuarioCtrl = require("../controllers/usuarios.controller");

router.post("/login", usuarioCtrl.login);
router.get("/users", usuarioCtrl.getUsuarios);
router.get("/users/:id", usuarioCtrl.getUsuario);
router.post("/users", usuarioCtrl.createUsuario);
router.delete("/users/:id", usuarioCtrl.deleteUsuario);
router.put("/users/:id", usuarioCtrl.updateUsuario);

module.exports = router;