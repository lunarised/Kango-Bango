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
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      columns: [
        {
          id: 1,
          name: "Harry",
          color: "green",
        },
        {
          id: 2,
          name: 'Potter',
          color: "red",
        },
      ],
    };
  }

  deleteColumn(id: number) {
    const { columns } = { ...this.state };
    columns.filter((column) => column.id !== id);
    this.setState({ columns });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.columns.map((column, index) => (
          <KBColumn color={column.color} title={column.name} key={index} />
        ))}
      </div>
    );
  }
}

export default App;
