const sum = require('./sum');
import { Project } from './projectDom';
import { Todo } from './classDom'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('It creates new project', () => {
  const newAddToProject = new Project('Test project title');
  expect(newAddToProject.title).toBe('Test project title');
});

test('It creates new todo', () => {
  const newAddTodo = new Todo('title-test', Date.now(), 'high');
  expect(newAddTodo.title).toBe('title-test');
  expect(newAddTodo.priority).toBe('high');  
});

// test('It creates a new To-Do', () => {
//   const newAddToDo = new AddToDo('test title', 'test desc', Date.now(), 2, true);
//   expect(newAddToDo.title).toBe('test title');
//   expect(newAddToDo.description).toBe('test desc');
// });

// test('It appends the todo to Project', () => {
//   const newAddToProject = new AddToProject('Test project title', 'Test project desc');
//   const newAddToDo = new AddToDo('test title', 'test desc', Date.now(), 2, true);
//   newAddToProject.toDoList.push(newAddToDo);
//   expect(newAddToProject.toDoList.length).toEqual(1);
// });
