import React from "react";
import KBColumn from "./components/KBColumn";
import "./App.css";
import Header from "./components/Header";
import Column from "./types/Column";
import TaskPassback from "./types/TaskPassback";
import ColumnPassback from "./types/ColumnPassback";
import initState from "./state_examples/kbstate";

type State = {
  columns: Column[];
  columnIterator: number;
  taskIterator: number;
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      taskIterator: initState.taskIterator,
      columnIterator: initState.columnIterator,
      columns: initState.columns as Column[],
    };
  }

  deleteTask(cId: number, tId: number) {
    /* Find Column */
    const correctColunm = this.state.columns.filter(
      (column) => column.id === cId //Grabs the correct column according to the column ID
    );

    let columnsNew = this.state.columns; //Clones columns. Should be done earlier???????
    const corrIndex = columnsNew.indexOf(correctColunm[0]); //Grabs the index of the correct column. [0] is bad programming, but makes sense due to IDs being unique

    /* Find and Remove Task from Found Column */
    let alteredColumn = columnsNew[corrIndex]; //Collects a copt of the correct column. Again... unsure if timing is correct
    alteredColumn.tasks = alteredColumn.tasks.filter((task) => task.id !== tId); //Filter all the tasks to allow all except from the wanted. Maybe could be more efficient
                                                                                // Unsure how TS works under the hood
    columnsNew[corrIndex] = alteredColumn; //Input the altered column into the cloned list of columns
    this.setState({ columns: columnsNew }); //Push the cloned list with the altered column into the state
    alert("Deleted Task" + tId + "from Col" + cId); // Test for column numbers and IDs
  }

  deleteColumn(id: number) {
    const { columns } = { ...this.state };

    const filteredColumns = columns.filter((column) => column.id !== id);
    this.setState({ columns: filteredColumns });
    console.log(this.state.columns);
  }

  addColumn(columnInstance?: ColumnPassback) {
    let columnId = this.state.columnIterator;
    this.setState({ columnIterator: columnId + 1 });
    if (columnInstance !== undefined) {
      this.state.columns.push({
        id: columnId,
        name: columnInstance?.title,
        color: columnInstance?.color,
        tasks: [],
      });
    }
  }

  addTask(taskInstance?: TaskPassback) {
    console.log(taskInstance);
    if (this.state.columns.length > 0) {
      let taskId = this.state.taskIterator;
      let index = -2;
      if (taskInstance !== undefined) {
        this.setState({ taskIterator: taskId + 1 });
        console.log(this.state.columns);
        console.log(taskInstance.column);
        let indexObj = this.state.columns.find(
          (o) => o.id === taskInstance.column
        );
        if (indexObj) {
          index = this.state.columns.indexOf(indexObj);
        } else {
          alert("Clifford");
        }

        if (index >= 0) {
          this.state.columns[index].tasks.push({
            id: taskId,
            title: taskInstance.title,
            description: taskInstance.description,
            priority: taskInstance.priority,
          });
        } else {
          alert(
            "Error finding that column. Check it hasn't already been deleted!" +
              index
          );
        }
      } else {
        alert("Oh god, oh heck");
      }
    } else {
      alert("You might want to consider adding a column!");
    }
    console.log(this.state);
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
              deleteTask={this.deleteTask}
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
