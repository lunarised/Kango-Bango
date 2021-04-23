import React from "react";
import { useState } from "react";
import KBColumn from "./components/KBColumn";
import "./App.css";
import Header from "./components/Header";
type Column = {
  id: number;
  name: string;
  color: string;
};

type State = {
  columns: Column[];
  iterator: number;
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.addColumn = this.addColumn.bind(this)
    this.state = {
      iterator: 3,
      columns: [
        {
          id: 1,
          name: "Harry",
          color: "green",
        },
        {
          id: 2,
          name: "Potter",
          color: "red",
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
    let columnId = this.state.iterator;
    this.setState({ iterator: columnId + 1 });
    this.state.columns.push({
      id: columnId,
      name: "tempName" + columnId,
      color: "red",
    });
  }

  render() {
    return (
      <div className="App">
        <Header addColumn={this.addColumn}/>
        {this.state.columns.map((column, index) => (
          <KBColumn
            color={column.color}
            title={column.name}
            key={index}
            onDelete={this.deleteColumn}
            id={column.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
