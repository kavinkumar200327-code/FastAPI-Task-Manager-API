import { useState, useEffect } from "react";

function TaskForm({addTask, updateTask, editingTask}) {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[status, setStatus] = useState("Pending");

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || "");
            setStatus(editingTask.status);
        } else {
            setTitle("")
            setDescription("")
            setStatus("Pending")
        }
    }, [editingTask]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const task = {
            title,
            description,
            status
        };

        if (editingTask) {
            await updateTask ({
                ...task,
                id: editingTask.id
            });
            } else {
            await addTask(task);
            };

            setTitle("");
            setDescription("");
            setstatus("Pending");
    }


return(

    <form onSubmit={handleSubmit}>

        <input type="text" name="title"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <textarea name="Description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <select name=""
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>

        </select>

        <button type="submit">
            {editingTask ? "Update Task" : "Add Task"}
        </button>
    </form>

    );
}

export default TaskForm;