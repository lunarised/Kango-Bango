import { FaTimes } from 'react-icons/fa'
const Task = ( {task, color, onDelete, onToggle} ) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={ () => onToggle(task.id)}>
            <h3 style={{ backgroundColor: color }}>
                {task.text} 
                <FaTimes  style={{color: 'red', cursor: 'pointer'}}
                onClick = { () => onDelete(task.id)}
                />
                </h3>
            <p> {task.id}</p>
        </div>
    )
}
export default Task