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
  return (
    <div className="KBColumn" style={{ backgroundColor: color, height: 200 }}>
      <h3>{title}</h3>
      
      {tasks.map((task) => (/*{
        if (task.priority === 'urgent'){
          bgc = "red"
        }else if(task.priority ==="important"){
          bgc = "yellow"

        }else if (task.priority === "normal"){
          bgc = "blue"
        }
      }
        */
        <div style={{borderColor: bgc, borderWidth: "5px"}}>
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
