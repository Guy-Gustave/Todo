import { renderAddTodo } from './add-todo.js'
import { projectDisplayListener } from './pLogic.js'

const todoApp = (() => {
    renderAddTodo()
    projectDisplayListener
})();