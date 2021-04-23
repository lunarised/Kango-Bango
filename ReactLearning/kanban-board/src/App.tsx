import React from "react";
import KBColumn from "./components/KBColumn";
import "./App.css";
import Header from "./components/Header";
import Task from "./types/Task";

type Column = {
  id: number;
  name: string;
  color: string;
  tasks: Task[];
};

type State = {
  columns: Column[];
  columnIterator: number;
  taskIterator: number;
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      taskIterator: 1,
      columnIterator: 3,
      columns: [
        {
          id: 1,
          name: "Harry",
          color: "green",
          tasks: [],
        },
        {
          id: 2,
          name: "Potter",
          color: "red",
          tasks: [],
        },
      ],
    };
  }

  deleteColumn(id: number) {
    const { columns } = { ...this.state };
    const filteredColumns = columns.filter((column) => column.id !== id);
    this.setState({ columns: filteredColumns });
    console.log(this.state.columns);
  }

  addColumn() {
    let columnId = this.state.columnIterator;
    this.setState({ columnIterator: columnId + 1 });
    this.state.columns.push({
      id: columnId,
      name: "tempName" + columnId,
      color: "#404552",
      tasks: [],
    });
  }

  addTask() {
    if (this.state.columns.length > 0) {
      let taskId = this.state.taskIterator;
      this.setState({ taskIterator: taskId + 1 });
      this.state.columns[0].tasks.push({
        id: taskId,
        title: "Task " + taskId,
        description: "foo",
        priority: "normal",
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header addColumn={this.addColumn} addTask={this.addTask} />
        <div className='panel'>
        {this.state.columns.map((column, index) => (
          <KBColumn
            color={column.color}
            title={column.name}
            key={index}
            onDelete={this.deleteColumn}
            id={column.id}
            tasks={column.tasks}
          />
        ))}
          </div>
      </div>
    );
  }
}
export default App;
