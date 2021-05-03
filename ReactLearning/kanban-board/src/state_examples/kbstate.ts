let initState = {
  taskIterator: 9,
  columnIterator: 6,
  columns: [
    {
      id: 1,
      name: "To Do",
      color: "#666",
      tasks: [
        {
          id: 1,
          title: "Impliment Drag and Drop",
          description:
            "Impliment some drag and drop functionality so that tasks can actually be moved from one column to another ",
          priority: "normal",
        },
        { id: 8,
        title: "Priority Changing for already made tasks",
        description: "Project priorities change after planning. Add some functionality to address this",
        priority: "important"}
      ],
    },
    {
      id: 2,
      name: "Doing",
      color: "#777",
      tasks: [
        {
          id: 7,
          title: "Do show and tell",
          description:
            "Show people bad UI design and pretend its not as bad as it is",
          priority: "normal",
        },
      ],
    },
    {
      id: 3,
      name: "In Testing",
      color: "#888",
      tasks: [
        {
          id: 5,
          title: "Regress Tasks",
          description: "Move tasks to the previous column",
          priority: "important",
        },
      ],
    },
    {
      id: 4,
      name: "In Review",
      color: "#AAA",
      tasks: [
        {
          id: 6,
          title: "Progress Tasks",
          description: "Move tasks to the next column",
          priority: "urgent",
        },
      ],
    },
    {
      id: 5,
      name: "Done",
      color: "#006600",
      tasks: [
        {
          id: 2,
          title: "Remove Task",
          description: "Impliment some functionality to remove tasks ",
          priority: "urgent",
        },
        {
          id: 3,
          title: "Dynamically Create Column",
          description: "Be able to create a column dynamically using modals",
          priority: "urgent",
        },
        {
          id: 4,
          title: "Impliment FlexBox",
          description:
            "Use flexbox as the primary CSS display style in this project",
          priority: "important",
        },
      ],
    },
  ],
};
export default initState;
