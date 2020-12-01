import { renderAddTodo } from './add-todo.js'
import { projectDisplayListener } from './pLogic.js'
import { showProjects } from './show-project.js'

const todoApp = (() => {
    renderAddTodo();
    projectDisplayListener();
    showProjects();
})();