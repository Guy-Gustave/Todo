/* eslint-disable */
class Storage {
  static getProjects() {
    let projects = [
      {
        title: 'Default',
        todos: [],
      },
    ];

    if (!localStorage.getItem('todoApp')) {
      localStorage.setItem('todoApp', JSON.stringify(projects));
      projects = JSON.parse(localStorage.getItem('todoApp'));
    } else {
      projects = JSON.parse(localStorage.getItem('todoApp'));
    }

    return projects;
  }

  static saveProject(project) {
    const projects = JSON.parse(localStorage.getItem('todoApp'));

    projects.push(project);
    localStorage.setItem('todoApp', JSON.stringify(projects));
  }

  static removeProject(target) {
    const projects = JSON.parse(localStorage.getItem('todoApp'));
    const todoContainerEl = document.querySelector('.todos-container');

    const index = projects.findIndex((el) => el.title === target);

    projects.splice(index, 1);
    localStorage.setItem('todoApp', JSON.stringify(projects));
    todoContainerEl.innerHTML = 'Project deleted, please choose other project';
  }

  static getTodos(index) {
    const targetProject = this.getProjects()[index].todos;
    return targetProject;
  }

  static saveTodo(todo, index) {
    const projects = this.getProjects();

    projects[index].todos.push(todo);

    localStorage.setItem('todoApp', JSON.stringify(projects));
  }

  static removeTodo(index, todoIndex) {
    const projects = this.getProjects();

    projects[index].todos.splice(todoIndex, 1);
    localStorage.setItem('todoApp', JSON.stringify(projects));
  }

  static modifyTodo(index, todoIndex, ...changes) {
    const projects = this.getProjects();
    const change = [...changes];
    projects[index].todos[todoIndex] = {
      title: `${change[0]}`,
      priority: `${change[1]}`,
      due: `${change[2]}`,
      done: change[3],
    };

    localStorage.setItem('todoApp', JSON.stringify(projects));
  }
}
export { Storage };
