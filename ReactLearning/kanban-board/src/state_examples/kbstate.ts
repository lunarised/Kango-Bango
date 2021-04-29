
let initState = {
    taskIterator: 6,
    columnIterator: 7,
    columns: [
        {
            id: 1,
            name: "To Do",
            color: "Grey",
            tasks: [
                {id: 1,
                title: "Impliment Drag and Drop",
                description: "Impliment some drag and drop functionality so that tasks can actually be moved from one column to another ",
                priority: "important"
                },
                {id: 2,
                    title: "Remove Task",
                    description: "Impliment some functionality to remove tasks ",
                    priority: "urgent"
                    }
            ]

        }
    ]    

}
export default initState