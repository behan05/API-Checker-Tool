const express = require("express")
const router = express.Router();

// import controller to handle request.
const { getAllUsers, getUserById, updateUserById, createNewUser } = require("../controllers/userApi.controller")

router.get("/users", getAllUsers)
router.get("/users/:id", getUserById)
router.patch("/users/:id", updateUserById)
router.post("/users", createNewUser)

module.exports = router;