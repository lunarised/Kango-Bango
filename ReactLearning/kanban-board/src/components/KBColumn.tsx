import Task from "../types/Task";
type KBColumnProps = {
  color?: string;
  title?: string;
  tasks: Task[];
  id: number;
  onDelete?: (id: number) => void;
};
const defaultProps: KBColumnProps = {
  color: "#404552",
  title: "waah",
  tasks: [],
  id: -1,
  onDelete: (id: number) => {},
};
let bgc = "#666";
const KBColumn = (props: KBColumnProps) => {
  const { color, title, tasks, onDelete, id } = { ...defaultProps, ...props };

  
    let colTasks = tasks.map((task) => {
      if (task.priority === "urgent") {
        bgc = "red";
      } else if (task.priority === "important") {
        bgc = "yellow";
      } else if (task.priority === "normal") {
        bgc = "blue";
      }

      return (
        <div style={{borderColor: "#ccc", borderWidth: "1px", borderStyle: "solid", margin: "10px"}} className="taskWrapper"> 
          <div style={{ backgroundColor: bgc, display: "inline"}} className="prioBlock" title={task.priority}></div>
          <div className="taskText">
          <p> {task.title} </p>

          <p> {task.description} </p>
        </div>
        </div>
      );
    });
  
  return (
    <div className="KBColumn" style={{ backgroundColor: color  }}>
      <h3>{title}</h3>
    {colTasks}
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
