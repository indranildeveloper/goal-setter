import express from "express";
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers";

import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, createGoal);
router.route("/:goalId").put(protect, updateGoal).delete(protect, deleteGoal);

export default router;
