import express from 'express'
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router() // Rota

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router;