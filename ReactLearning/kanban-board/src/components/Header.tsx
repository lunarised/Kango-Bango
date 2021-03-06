import React from "react";
import Modal from "./Modal";
import Column from "../types/Column";
import TaskPassback from "../types/TaskPassback";
import Priority from "../types/Priority";
import ColumnPassback from "../types/ColumnPassback";

type HeaderProps = {
  addColumn: (columnInstance?: ColumnPassback) => void;
  addTask: (taskInstance?: TaskPassback) => void;
  columns: Column[];
};

type State = {
  showTask: boolean;
  taskTitle: string;
  taskDesc: string;
  taskPrio: Priority;
  taskColumnNumber: number;
  showColumn: boolean;
  columnTitle: string;
  columnColor: string;
};

class Header extends React.Component<HeaderProps, State> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      showTask: false,
      showColumn: false,
      taskTitle: "",
      taskDesc: "",
      taskPrio: "normal",
      taskColumnNumber: -1,
      columnTitle: "",
      columnColor: "#00CC00",
    };
  }

  showTaskModal = () => {
    if (this.props.columns.length > 0) {
      let { showTask, taskColumnNumber } = { ...this.state };
      showTask = true;
      taskColumnNumber = this.props.columns[0].id;
      this.setState({ showTask, taskColumnNumber });
    } else {
      alert("Add a column please!");
    }
  };
  showColumnModal = () => {
    let { showColumn } = { ...this.state };
    showColumn = true;
    this.setState({ showColumn });
  };

  hideModal = () => {
    this.setState({ showTask: false });
  };
  hideColumnModal = () => {
    this.setState({ showColumn: false });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.id;
    if (target === "titleInput") {
      this.setState({ taskTitle: event.target.value });
    }

    if (target === "columnTitle") {
      this.setState({ columnTitle: event.target.value });
    }
    if (target === "columnColor") {
      this.setState({ columnColor: event.target.value });
    }
  };
  handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ taskDesc: event?.target.value });
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.id === "prioritySelect") {
      const selectedValue = event.target.value as Priority;
      this.setState({ taskPrio: selectedValue });
    }

    if (event.target.id === "columnSelect") {
      const selectedValue = parseInt(event.target.value);
      this.setState({ taskColumnNumber: selectedValue });
    }
  };

  render() {
    return (
      <div className="header" style={{ height: 60 }}>
        <h1
          key="Title"
          style={{
            float: "left",
            margin: 0,
            padding: 0,
            verticalAlign: "center",
          }}
        >
          Kango Bango
        </h1>

        <Modal
          show={this.state.showTask}
          handleClose={this.hideModal}
          key="addTask"
        >
          <h3> Add Task ????</h3>
          <select
            value={this.state.taskColumnNumber}
            onChange={this.handleSelectChange}
            id="columnSelect"
            title="columnSelect"
          >
            {this.props.columns.map((column) => (
              <option value={column.id} key={column.id}>
                {column.name}
              </option>
            ))}
            ;
          </select>
          <label>
            {" "}
            Title:
            <input
              type="text"
              id="titleInput"
              value={this.state.taskTitle}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Description:
            <textarea
              id="descInput"
              value={this.state.taskDesc}
              onChange={this.handleTextAreaChange}
            />
          </label>

          <br />
          <label>
            {" "}
            Priority:
            <select
              value={this.state.taskPrio}
              onChange={this.handleSelectChange}
              id="prioritySelect"
              title="prioSelect"
            >
              <option value="normal">Normal</option>
              <option value="important">Important</option>
              <option value="urgent">Urgent</option>
            </select>
          </label>
          <br />
          <button
            onClick={() =>
              this.props.addTask({
                title: this.state.taskTitle,
                description: this.state.taskDesc,
                priority: this.state.taskPrio,
                column: this.state.taskColumnNumber,
              })
            }
          >
            Add Task
          </button>
          <button
            onClick={() => {
              this.hideModal();
            }}
          >
            Close
          </button>
        </Modal>
        <Modal
          show={this.state.showColumn}
          handleClose={this.hideModal}
          key="addColumn"
        >
          <h3>Lets add a column! ????</h3>

          <label>
            {" "}
            Title:
            <input
              type="text"
              id="columnTitle"
              value={this.state.columnTitle}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            {" "}
            Color:
            <input
              type="text"
              id="columnColor"
              value={this.state.columnColor}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <button
            onClick={() =>
              this.props.addColumn({
                title: this.state.columnTitle,
                color: this.state.columnColor,
              })
            }
          >
            Add Column
          </button>

          <button
            onClick={() => {
              this.hideColumnModal();
            }}
          >
            Close
          </button>
        </Modal>
        <button onClick={this.showTaskModal} key="Task Button">
          {" "}
          Add task{" "}
        </button>
        <button onClick={this.showColumnModal} key="Column Button">
          {" "}
          Add column{" "}
        </button>
      </div>
    );
  }
}

export default Header;
