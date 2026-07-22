let todos = JSON.parse(localStorage.getItem("todos")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Button Event
addBtn.addEventListener("click", addTodo);

// Load Existing Tasks
renderTodo();

// Add Task
function addTodo(){

    let text = taskInput.value.trim();

    if(text===""){
        alert("Please enter a task");
        return;
    }

    const todo={
        text:text,
        completed:false
    };

    todos.push(todo);

    saveTodo();

    renderTodo();

    taskInput.value="";
}

// Render Tasks
function renderTodo(){

    taskList.innerHTML="";

    todos.forEach((todo,index)=>{

        const li=createTodoItem(todo,index);

        taskList.appendChild(li);

    });

}

// Create Task Item
function createTodoItem(todo,index){

    const li=document.createElement("li");

    if(todo.completed){
        li.classList.add("completed");
    }

    // Checkbox
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked=todo.completed;

    checkbox.addEventListener("change",function(){

        todos[index].completed=this.checked;

        saveTodo();

        renderTodo();

    });

    // Task Text
    const span=document.createElement("span");
    span.innerText=todo.text;

    // Button Container
    const btnDiv=document.createElement("div");
    btnDiv.className="task-buttons";

    // Edit Button
    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.className="edit";

    editBtn.addEventListener("click",function(){

        let newTask=prompt("Edit Task",todo.text);

        if(newTask!==null && newTask.trim()!==""){

            todos[index].text=newTask;

            saveTodo();

            renderTodo();

        }

    });

    // Delete Button
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.className="delete";

    deleteBtn.addEventListener("click",function(){

        todos.splice(index,1);

        saveTodo();

        renderTodo();

    });

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnDiv);

    return li;

}

// Save to Local Storage
function saveTodo(){

    localStorage.setItem("todos",JSON.stringify(todos));

}