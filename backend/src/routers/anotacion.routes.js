const express = require("express")
const router = express.Router();

const anotacionCtrl = require("../controllers/anotacion.controller");

router.post("/anotaciones", anotacionCtrl.createAnotacion);
router.get("/anotaciones/:id", anotacionCtrl.getAnotaciones);
router.put("/anotaciones", anotacionCtrl.marcarLibro);
router.put("/anotaciones/delete/:id", anotacionCtrl.deleteAnotacion);

module.exports = router;