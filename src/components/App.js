import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    const [tasks, setTasks] = useState(TASKS)
    const [selectedCategory, setSelectedCategory] = useState("All")
    const handleDeleteTask = (e) =>{
        const temp = tasks.filter((task) => task.text !== e.target.dataset.text)
        setTasks(temp)
    }
    const handleChangeCategory = (e) => {
        setSelectedCategory(e.target.dataset.category)
    }
    const itemsToDisplay = tasks.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
    });

    const handleAddNewTask = (newTask) => {
        setTasks(
            [
                newTask,
                ...tasks
            ]
        )
    }

    return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
          categories={CATEGORIES}
          onChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddNewTask}/>
      <TaskList
          tasks={itemsToDisplay}
          onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
