import { Storage } from './storage.js';
import { ProjectDOMElement } from './projectDom.js';

const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  let project = Storage.getProjects();

  project.forEach((element, index) => {
    let project = new ProjectDOMElement(element.title, index);

    projectDisplay.appendChild(project.div);
  });
};

export { showProjects };
