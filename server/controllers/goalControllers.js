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
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.json(goal);
});

// @desc    Update Goal
// @route   PUT /api/goals/:goalId
// @access  Private
const updateGoal = asyncHandler((req, res) => {
  res.json({ message: `Update Goal ${req.params.goalId}` });
});

// @desc    Delete Goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler((req, res) => {
  res.json({ message: `Delete Goal ${req.params.goalId}` });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
