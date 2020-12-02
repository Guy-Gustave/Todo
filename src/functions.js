/* eslint-disable */
import { Storage } from './storage';
import { Project, ProjectDOMElement } from './projectDom';
import { showTodosInClickedProject } from './displayTodos';

const projectAddFormEl = document.getElementById('project-add-form');

const validation = (el) => {
  const projects = Storage.getProjects();
  if (!el) return;

  const index = projects.findIndex((project) => project.title === el);

  return index;
};

const addProject = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  const projectAddInput = document.getElementById('project-add').value.trim();

  if (validation(projectAddInput) === -1) {
    const numberOfProjects = Storage.getProjects().length;

    const project = new Project(projectAddInput);

    const div = new ProjectDOMElement(projectAddInput, numberOfProjects);

    Storage.saveProject(project);
    projectDisplay.appendChild(div.div);
    showTodosInClickedProject();
    document.getElementById('project-add').value = '';
  } else {
    console.log('Duplicate Project');
  }
};

const projectDisplayListener = () => {
  projectAddFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
  });
};

export { projectDisplayListener };
