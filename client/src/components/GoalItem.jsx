import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-IN")}</div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
        <FaTimes />
      </button>
    </div>
  );
};

export default GoalItem;
