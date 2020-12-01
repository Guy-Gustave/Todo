/* eslint-disable */
import { Storage } from './storage';
import { TodoDOMElement } from './classDom';

const todosContainer = document.querySelector('.todos-container');

const showTodos = (index = 0) => {
  const todos = Storage.getTodos(index);
  todosContainer.innerHTML = '';
  projectReference(index);

  if (todos.length > 0) {
    todos.forEach((todo, todoIndex) => {
      const todoEl = new TodoDOMElement(
        todo.title,
        todo.due,
        todo.priority,
        todoIndex,
        todo.done,
      );
      todosContainer.appendChild(todoEl.div);
    });
  } else {
    const emptyDiv = document.createElement('div');
    emptyDiv.textContent = 'Empty Todo List';
    todosContainer.appendChild(emptyDiv);
  }
};

const showTodosInClickedProject = () => {
  const projectsTitleEl = document.querySelectorAll('.project-title');

  projectsTitleEl.forEach((project) => {
    project.addEventListener('click', () => {
      const projectIndex = project.parentElement.getAttribute('data-index');

      if (projectIndex !== -1) {
        projectReference(projectIndex);
        showTodos(projectIndex);
      }
    });
  });
};

const projectReference = (target) => {
  const projectContainerEls = document.querySelectorAll('.project-container');
  projectContainerEls.forEach((el) => el.classList.remove('current'));
  projectContainerEls[target].classList.add('current');
};

export { showTodos, showTodosInClickedProject };
