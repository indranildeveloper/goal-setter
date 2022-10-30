// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc    Create Goal
// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }

  res.json({ message: "Create Goal" });
};

// @desc    Update Goal
// @route   PUT /api/goals/:goalId
// @access  Private
const updateGoal = (req, res) => {
  res.json({ message: `Update Goal ${req.params.goalId}` });
};

// @desc    Delete Goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req, res) => {
  res.json({ message: `Delete Goal ${req.params.goalId}` });
};

export { getGoals, createGoal, updateGoal, deleteGoal };
