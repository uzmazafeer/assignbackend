import express from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/AuthController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// GET /api/users - Get all users (protected)
router.get('/', authMiddleware, getAllUsers);

// GET /api/users/:id - Get user by ID (protected)
router.get('/:id', authMiddleware, getUserById);

// PUT /api/users/:id - Update user (protected)
router.put('/:id', authMiddleware, updateUser);

// DELETE /api/users/:id - Delete user (protected)
router.delete('/:id', authMiddleware, deleteUser);

export default router;