import * as react from "react";
type KBColumnProps = {
  color?: string;
  title?: string;
  tasks?: string[];
  id: number;
  onDelete?: (id: number) => void
};
const defaultProps: KBColumnProps = {
  color: "#00cc00",
  title: "waah",
  tasks: [],
  id: -1,
  onDelete: (id: number) => {}
};
const KBColumn = (props: KBColumnProps) => {
  const { color, title, tasks, onDelete, id } = { ...defaultProps, ...props };
  return (
    <div className="KBColumn" style={{ backgroundColor: color, height: 200 }}>
      <h1>{title}</h1>
      <button onClick={() => {onDelete && onDelete(id)}}>Deleete</button>
    </div>
  );
};
export default KBColumn;