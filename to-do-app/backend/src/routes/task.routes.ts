import express from 'express';
import {
  getTasks, createTask, deleteTask, toggleComplete
} from '../controllers/task.controllers';
const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id/toggle', toggleComplete);
export default router;