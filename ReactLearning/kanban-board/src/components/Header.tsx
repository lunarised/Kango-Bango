import * as react from "react";

type HeaderProps = {
  addColumn: () => void;
  addTask: () => void;
};
const Header = (props: HeaderProps) => {
  return (
    <div className="header" style={{  height: 60 }}>
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
      <button onClick={props.addTask}> Add task </button>
      <button onClick={props.addColumn}> Add column </button>
    </div>
  );
};
export default Header;
