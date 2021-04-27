import React from "react";
import KBColumn from "./components/KBColumn";
import "./App.css";
import Header from "./components/Header";
import Column from "./types/Column";
import TaskPassback from "./types/TaskPassback";

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

  addTask(taskInstance?: TaskPassback) {
    console.log(taskInstance);
    if (this.state.columns.length > 0) {
      let taskId = this.state.taskIterator;
      let index = -2;
      if (taskInstance !== undefined) {
        this.setState({ taskIterator: taskId + 1 });
        console.log(this.state.columns)
        console.log(taskInstance.column)
        let indexObj = this.state.columns.find(
          (o) => o.id === taskInstance.column
        );
        if (indexObj) {
          index = this.state.columns.indexOf(indexObj);
        }
        else{
          alert("Clifford")
        }

        if (index >= 0) {
          this.state.columns[index].tasks.push({
            id: taskId,
            title: taskInstance.title,
            description: taskInstance.description,
            priority: taskInstance.priority,
          });
        }
        else{
          alert("Error finding that column. Check it hasn't already been deleted!" + index)
        }
      }
      else{
        alert("Oh god, oh heck")
      }
    } else {
      alert("You might want to consider adding a column!");
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          addColumn={this.addColumn}
          addTask={this.addTask}
          columns={this.state.columns}
        />
        <div className="panel">
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
