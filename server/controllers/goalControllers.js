import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel";
import User from "../models/userModel";

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  return res.status(200).json(goals);
});

// @desc    Create Goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }

  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Update Goal
// @route   PUT /api/goals/:goalId
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.goalId);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found!");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }
  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.goalId,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

// @desc    Delete Goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.goalId);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found!");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }
  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.goalId });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
