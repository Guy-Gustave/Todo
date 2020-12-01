import { renderAddTodo } from './add-todo.js';
import { projectDisplayListener } from './functions.js';
import { showProjects } from './displayProjects.js';
import { showTodos, showTodosInClickedProject } from './displayTodos.js';
import { Storage } from './storage.js';

const todoApp = (() => {
  Storage.getProjects();
  renderAddTodo();
  projectDisplayListener();
  showProjects();
  showTodos();
  showTodosInClickedProject();
})();
