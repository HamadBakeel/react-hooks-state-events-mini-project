import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

    const [formData, setFormData] = useState({
        text: "",
        category : "",
    });
    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const addNewTask = (e) =>{
        e.preventDefault();
        onTaskFormSubmit(formData)
    }

  return (
    <form className="new-task-form" onSubmit={addNewTask}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
            {
                categories.map((category) =>{
                    return category !== "All" ? <option key={category} value={category}>{category}</option> : ""
                })
            }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
