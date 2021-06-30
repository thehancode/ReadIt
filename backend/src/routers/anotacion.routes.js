const express = require("express")
const router = express.Router();

const anotacionCtrl = require("../controllers/anotacion.controller");

router.post("/anotaciones", anotacionCtrl.createAnotacion);
router.get("/anotaciones/:id", anotacionCtrl.getAnotaciones);

module.exports = router;