import Priority from "./Priority";

type TaskPassback = {
  title: string;
  description: string;
  priority: Priority;
  column: number;
};

export default TaskPassback;
