/* eslint-disable */
import { Storage } from './storage';
import { TodoDOMElement } from './classDom';
import { ProjectDOMElement } from './projectDom'; 

const todosContainer = document.querySelector('.todos-container');

const showTodos = (index = 0) => {
  const todos = Storage.getTodos(index);
  todosContainer.innerHTML = '';
  projectReference(index);

  if (todos.length > 0) {
    todos.forEach((todo, todoIndex) => {
      const {title, due, priority, done} = todo
      const todoEl = new TodoDOMElement(
        title,
        due,
        priority,
        todoIndex,
        done,
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

const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  const project = Storage.getProjects();

  project.forEach((element, index) => {
    const project = new ProjectDOMElement(element.title, index);

    projectDisplay.appendChild(project.div);
  });
};

export { showTodos, showTodosInClickedProject, showProjects };
