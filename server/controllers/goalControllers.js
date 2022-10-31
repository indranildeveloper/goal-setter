import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel";

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
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

  await goal.remove();
  res.status(200).json({ id: req.params.goalId });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
