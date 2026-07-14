function TaskList({tasks, deleteTasks, setEditingTask}) {

    return(
        <div className="task-list">
            {tasks.map((task) => (
                <div className="card" key={task.id}>

                    <h2>{task.title}</h2>

                    <p>{task.description}</p>

                    <span className="status">{task.status}</span>

                    <div className="buttons">
                        <button className="edit"
                        onClick={() => setEditingTask(task)}
                        >
                            Edit
                        </button>

                        <button className="delete"
                        onClick={() => deleteTasks(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;