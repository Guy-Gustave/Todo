import { Storage } from './localStorage.js'
import { ProjectDOMElement } from './projectClass.js'

const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  let project = Storage.getProjects();
  project.foreach (element =>{
    let project = new ProjectDOMElement(element.title);
    projectDisplay.appendChild(project.div)
  });
  
};
export { showProjects } 