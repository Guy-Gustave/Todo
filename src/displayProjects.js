/* eslint-disable */
import { Storage } from './storage';
import { ProjectDOMElement } from './projectDom';

const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  const project = Storage.getProjects();

  project.forEach((element, index) => {
    const project = new ProjectDOMElement(element.title, index);

    projectDisplay.appendChild(project.div);
  });
};

export { showProjects };
