import React from "react";
import Modal from "./Modal";
import Column from "../types/Column";
import TaskPassback from "../types/TaskPassback";
import Priority from "../types/Priority";

type HeaderProps = {
  addColumn: () => void;
  addTask: (taskInstance?: TaskPassback) => void;
  columns: Column[];
};

type State = {
  show: boolean;
  titleVar: string;
  descVar: string;
  prioVar: Priority;
  columnNumber: number;
};

class Header extends React.Component<HeaderProps, State> {
  constructor(props: HeaderProps) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      show: false,
      titleVar: "",
      descVar: "",
      prioVar: "normal",
      columnNumber: props.columns[0].id,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target.id;
    if (target === "titleInput") {
      this.setState({ titleVar: event.target.value });
    }
    if (target === "descInput") {
      this.setState({ descVar: event.target.value });
    }
  }

  handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.id === "prioritySelect") {
      const selectedValue = event.target.value as Priority;
      this.setState({ prioVar: selectedValue });
    }

    if (event.target.id === "columnSelect") {
      const selectedValue = parseInt(event.target.value);
      this.setState({ columnNumber: selectedValue });
    }
  }

  render() {
    return (
      <div className="header" style={{ height: 60 }}>
        <h1
          style={{
            float: "left",
            margin: 0,
            padding: 0,
            verticalAlign: "center",
          }}
        >
          Kango Bango
        </h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3> Add Task</h3>
          <p>{this.props.columns.length}</p>
          <select
            value={this.state.columnNumber}
            onChange={this.handleSelectChange}
            id="columnSelect"
          >
            {this.props.columns.map((column) => (
              <option value={column.id}>{column.name}</option>
            ))}
            ;
          </select>
          <label>
            {" "}
            Title:
            <input
              type="text"
              id="titleInput"
              value={this.state.titleVar}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Description:
            <input
              type="textarea"
              id="descInput"
              value={this.state.descVar}
              onChange={this.handleInputChange}
            />
          </label>

          <br />
          <label>
            {" "}
            Priority:
            <select
              value={this.state.prioVar}
              onChange={this.handleSelectChange}
              id="prioritySelect"
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
                title: this.state.titleVar,
                description: this.state.descVar,
                priority: this.state.prioVar,
                column: this.state.columnNumber,
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
        <button onClick={this.showModal}> Add task </button>
        <button onClick={this.props.addColumn}> Add column </button>
      </div>
    );
  }
}
export default Header;
