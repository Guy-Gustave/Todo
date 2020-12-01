/* eslint-disable */
import { renderAddTodo } from './add-todo';
import { projectDisplayListener } from './functions';
import { showProjects } from './displayProjects';
import { showTodos, showTodosInClickedProject } from './displayTodos';
import { Storage } from './storage';

const todoApp = (() => {
  Storage.getProjects();
  renderAddTodo();
  projectDisplayListener();
  showProjects();
  showTodos();
  showTodosInClickedProject();
})();
