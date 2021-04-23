import * as react from "react";
import Task from "../types/Task";
type KBColumnProps = {
  color?: string;
  title?: string;
  tasks: Task[];
  id: number;
  onDelete?: (id: number) => void;
};
const defaultProps: KBColumnProps = {
  color: "#00cc00",
  title: "waah",
  tasks: [],
  id: -1,
  onDelete: (id: number) => {},
};
const KBColumn = (props: KBColumnProps) => {
  const { color, title, tasks, onDelete, id } = { ...defaultProps, ...props };
  return (
    <div className="KBColumn" style={{ backgroundColor: color, height: 200 }}>
      <h3>{title}</h3>

      {tasks.map((task) => (
        <div>
          <p> {task.title} </p>

          <p> {task.description} </p>
        </div>
      ))}

      <button
        onClick={() => {
          onDelete && onDelete(id);
        }}
      >
        Deleete
      </button>
    </div>
  );
};
export default KBColumn;
