import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
<div>
{tasks.map((task) => (
    <Task key={task.id} task={task} color="yellow" onDelete={onDelete} onToggle={onToggle}/>
    ))}
</div>
    )
}
export default Tasks