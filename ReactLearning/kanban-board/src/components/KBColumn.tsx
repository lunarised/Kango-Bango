import Task from "../types/Task";
import React from 'react';
type KBColumnProps = {
  color: string;
  title: string;
  tasks: Task[];
  id: number;
  onDelete?: (id: number) => void;
};




let bgc = "hotpink";
class KBColumn extends React.Component<KBColumnProps> {
  
      
  getTaskRender = () =>{
  return this.props.tasks.map((task) => {
    if (task.priority === "urgent") {
      bgc = "red";
    } else if (task.priority === "important") {
      bgc = "yellow";
    } else if (task.priority === "normal") {
      bgc = "blue";
    }
    
  
    return (
      <div
        style={{
          borderColor: "#ccc",
          borderWidth: "1px",
          borderStyle: "solid",
          margin: "10px",
        }}
        className="taskWrapper"
      >
        <div
          style={{ backgroundColor: bgc, display: "inline" }}
          className="prioBlock"
          title={task.priority}
        ></div>
        <div className="taskText">
          <h3> {task.title} </h3>

          <p> {task.description} </p>
        </div>
      </div>
    );
  });
};
  
render() {
  return (
    <div className="KBColumn" style={{ backgroundColor: this.props.color }}>
      <h3>{this.props.title} </h3>
      {this.getTaskRender()}
      <button
        onClick={() => {
          this.props.onDelete && this.props.onDelete(this.props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
      }
    }

export default KBColumn;
