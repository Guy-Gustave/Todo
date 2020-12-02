/* eslint-disable */
import { renderAddTodo } from './add-todo';
import { projectDisplayListener } from './functions';
import { showTodos, showTodosInClickedProject, showProjects } from './displayTodos';
import { Storage } from './storage';

const todoApp = (() => {
  Storage.getProjects();
  renderAddTodo();
  projectDisplayListener();
  showProjects();
  showTodos();
  showTodosInClickedProject();
})();
