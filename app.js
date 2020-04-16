// Reference to form-field
const addForm = document.querySelector(".add");

// Used to store added items in ul list
const list = document.querySelector(".todos"); 

// Generate code and add to html
const generateTempate = function(todo){
    // Template strings
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${todo}</span>
              <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    // Appends html content 
    list.innerHTML += html;

};

addForm.addEventListener("submit", function(e){

    e.preventDefault();
    // Adds value from form field 
    // trim: Removes spaces before and after from input tag
    const todo = addForm.add.value.trim().toLowerCase();

    // Checks if user inputed a character
    // Evaluates to true if length > 0
    if(todo.length){
        generateTempate(todo);
        // Resets input field inside form
        add.addForm.reset();
    }

    // Passes in todo user has typed in
    generateTempate(todo);

});

// delete todos
// EVENT DELEGATION
list.addEventListener("click", function(e){

    // class = delete: Is the trash icon
    if(e.target.classList.contains("delete")){
        // Removes parent element which is the li tag
        e.target.parentElement.remove();
    }
});

const filterTodos = function(term){

    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// keyup event
search.addEventListener("keyup", function(){
    // trim: Remove white spaces
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});