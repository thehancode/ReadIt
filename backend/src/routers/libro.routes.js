const express = require("express");
const router = express.Router();

const libroCtrl = require("../controllers/libro.controller");

router.get("/libros", libroCtrl.getLibros);
router.get("/libros/:id", libroCtrl.getLibro);
router.post("/libros", libroCtrl.createLibro);
router.delete("/libros/:id", libroCtrl.deleteLibro);
router.put("/libros/:id", libroCtrl.updateLibro);

module.exports = router;
