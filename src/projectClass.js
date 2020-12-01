import { Storage } from './localStorage.js'

class ClassProject {
  constructor(title, todos = []) {
    this.title = title,
      this.todos = todos
  }

  addTodoToProject(todo) {
    this.todos.push(todo);
  }

  removeTodoInProject(todo) {
    let index = this.todos.findIndex((list) => {
      return list.title == todo;
    });
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  getTodos() {
    return this.todos
  }
}

class ProjectDOMElement {
  constructor(title, index) {
    this.title = title;
    this.index = index;

    this.div = document.createElement('div');
    this.h3 = document.createElement('h3');
    this.deletButton = document.createElement('button');

    this.div.classList.add('project-container');
    this.h3.classList.add('project-title');
    this.deletButton.classList.add('btn', 'project-delet-btn');

    this.div.setAttribute('data-index', index);

    this.h3.textContent = title;
    this.deletButton.textContent = 'Delet';

    this.deletButton.onclick = this.onClickDelete.bind(this);

    this.div.appendChild(this.h3);
    this.div.appendChild(this.deletButton);
  }

  //Delete project when clicked
  onClickDelete() {
    const projectDisplay = document.querySelector('.project-display-container');

    Storage.removeProject(this.title);
    projectDisplay.querySelector(`[data-index='${this.index}']`).remove()
  }
}

export { ClassProject, ProjectDOMElement }