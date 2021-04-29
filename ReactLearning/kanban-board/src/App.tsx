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

    this.state = {
      taskIterator: initState.taskIterator,
      columnIterator: initState.columnIterator,
      columns: initState.columns as Column[],
    };
  }
  /* Deletes a task from a specific column with a specific ID
    @param columnID: The ID of the column in which the task to be deleted resides
    @param taskID: The ID of the task which is to be deleted
    @return void

    !!!Bugs: TBA

    Last Edited 2020/04/29 15:20

  */
  deleteTask = (columnID: number, taskID: number) => {
    // Find Column
    let columnsNew = this.state.columns;
    const correctColunm = columnsNew.find((column) => column.id === columnID);
    if (!correctColunm) {
      return;
    }
    const corrIndex = columnsNew.indexOf(correctColunm);

    // Find and Remove Task from Found Column
    let alteredColumn = correctColunm;
    alteredColumn.tasks = alteredColumn.tasks.filter(
      (task) => task.id !== taskID
    );
    columnsNew[corrIndex] = alteredColumn;
    this.setState({ columns: columnsNew });
    alert("Deleted Task" + taskID + "from Col" + columnID);
  };

  /* Deletes a column with a specific ID 
    @param id: The ID of the column that is to be deleted
    @return void

    Bugs: None that i know of

    Last Edited 2020/04/27 17:30
  */
  deleteColumn = (id: number) => {
    const { columns } = { ...this.state };

    const filteredColumns = columns.filter((column) => column.id !== id);
    this.setState({ columns: filteredColumns });
    console.log(this.state.columns);
  };

  /* Adds a column to the panel
    @param columnInstance: Data massed back from the modal which contains all the information to create a column
    @return void

    Bugs: None that I am aware of

    Last Edited 2020/04/28 16:00
  */

  addColumn = (columnInstance?: ColumnPassback) => {
    let columnId = this.state.columnIterator;
    this.setState({ columnIterator: columnId + 1 });
    if (columnInstance) {
      this.state.columns.push({
        id: columnId,
        name: columnInstance?.title,
        color: columnInstance?.color,
        tasks: [],
      });
    }
  };

  /* Adds a task to a specified column
    @param taskInstance: Data passed back from the modal which contains the necessary information to create the task
    @return void

    Bugs: None that I am aware of

    Last Edited 2020/04/29 15:00
  */
  addTask = (taskInstance?: TaskPassback) => {
    if (this.state.columns.length === 0) {
      alert("You might want to consider adding a column!");
      return;
    }

    let taskId = this.state.taskIterator;
    let columns = this.state.columns;
    let index = -2;
    if (taskInstance) {
      this.setState({ taskIterator: taskId + 1 });

      let indexObj = columns.find((o) => o.id === taskInstance.column);
      if (indexObj) {
        index = columns.indexOf(indexObj);
      }

      if (index >= 0) {
        columns[index].tasks.push({
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
    }
  };

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
