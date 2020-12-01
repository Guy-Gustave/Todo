import { Storage } from './localStorage.js'
import { ProjectDOMElement } from './projectClass.js'

const projectAddFormEl = document.getElementById('project-add-form');
// const storage = new Storage()

const validation = (el) => {
  let projects = Storage.getProjects();

  let index = projects.findIndex((project) => {
    return project.title === el
  })

  return index
}

//Add project to Localstorage
const addProject = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  const projectAddInput = document.getElementById('project-add').value;

  // check if there is duplicate
  console.log(validation(projectAddInput))
  if (validation(projectAddInput) === -1) {
    let numberOfProjects = Storage.getProjects().length;
    // instantiate and save to LocalStorage
    let project = new classProject(projectAddInput);
    // create elements for new project
    let div = new ProjectDOMElement(projectAddInput, numberOfProjects+1);

    Storage.saveProject(project);
    projectDisplay.appendChild(div.div)
    console.log(project)
  } else {
    console.log('Duplicate Project')
  }
}

const projectDisplayListener = () => {
  projectAddFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
  });
}

export { projectDisplayListener } 