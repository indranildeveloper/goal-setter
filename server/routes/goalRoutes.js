import express from "express";
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers";

const router = express.Router();

router.route("/").get(getGoals).post(createGoal);
router.route("/:goalId").put(updateGoal).delete(deleteGoal);

export default router;
