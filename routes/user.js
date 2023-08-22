const express = require("express");

const router = express.Router();
const User = require("../models/user");
const userController = require("../controllers/user");

router.post("/user/add-user", userController.postUser);

router.get("/user/get-users", userController.getUser);

router.delete("/user/delete-user/:id", userController.deleteUser);

router.put("/user/edit-user/:id", userController.editUser);

module.exports = router;
