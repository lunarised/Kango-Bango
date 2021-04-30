import Task from "../types/Task";
import React from "react";
import {
  FaTimes,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";

type KBColumnProps = {
  color: string;
  title: string;
  tasks: Task[];
  id: number;
  onDelete?: (id: number) => void;
  progressTask?: (cId: number, tId: number) => void;
  regressTask?: (cId: number, tId: number) => void;
  deleteTask?: (cId: number, tId: number) => void;
};

let bgc = "hotpink";
class KBColumn extends React.Component<KBColumnProps> {
  /* Creates the JSX for all the tasks in the tasks array
    @param None
    @return A JSX.Element[] containing each of the Divs for the task

    Bugs: None that I know of

    Last Edited: XXXX-XX-XX XX:XX

  */
  getTaskRender = () => {
    return this.props.tasks.map((task) => {
      if (task.priority === "urgent") {
        bgc = "red";
      } else if (task.priority === "important") {
        bgc = "yellow";
      } else if (task.priority === "normal") {
        bgc = "blue";
      }

      return (
        <div key={task.id} className="taskWrapper">
          <div
            style={{ backgroundColor: bgc, display: "inline" }}
            className="prioBlock"
            title={task.priority}
          ></div>
          <div className="taskText">
            <h3> {task.title} </h3>

            <p> {task.description} </p>
          </div>
          <div className="actionBlock">
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() =>
                this.props.deleteTask &&
                this.props.deleteTask(this.props.id, task.id)
              }
            />
            <FaLongArrowAltRight
              style={{ color: "red", cursor: "pointer", marginTop: "10px" }}
              onClick={() =>
                this.props.progressTask &&
                this.props.progressTask(this.props.id, task.id)
              }
            />
            <FaLongArrowAltLeft
              style={{ color: "red", cursor: "pointer", marginTop: "10px" }}
              onClick={() =>
                this.props.regressTask &&
                this.props.regressTask(this.props.id, task.id)
              }
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="KBColumn"
        style={{ backgroundColor: this.props.color }}
        key={this.props.id}
      >
        <h3>{this.props.title} </h3>
        {this.getTaskRender()}
        <button
          onClick={() => {
            this.props.onDelete && this.props.onDelete(this.props.id);
          }}
        >
          Delete Column
        </button>
      </div>
    );
  }
}

export default KBColumn;
