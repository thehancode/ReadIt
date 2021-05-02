const express = require("express")
const router = express.Router();

const userCtrl = require("../controllers/user.controller");

router.post("/login", userCtrl.login);
router.get("/users", userCtrl.getUsers);
router.get("/users/:id", userCtrl.getUser);
router.post("/users", userCtrl.createUser);
router.delete("/users/:id", userCtrl.deleteUser);
router.put("/users/:id", userCtrl.updateUser);

module.exports = router;