import { renderAddTodo } from './add-todo.js';
import { projectDisplayListener } from './pLogic.js';
import { showProjects } from './show-project.js';
import { showTodos, showTodosInClickedProject } from './show-todos.js';
import { Storage } from './localStorage.js';

const todoApp = (() => {
  Storage.getProjects();
  renderAddTodo();
  projectDisplayListener();
  showProjects();
  showTodos();
  showTodosInClickedProject();
})();
