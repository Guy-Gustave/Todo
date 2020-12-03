import addProject from '../functions';
import createNewTodo from '../add-todo';

test('it will create a new project', () => {
  const firstProject = addProject('Project 1');
  expect(firstProject.title).toBe('Project1');
});

test('It creates a new To-Do', () => {
  const ToDo = createNewTodo('title-test', Date.now(), 'high');
  expect(ToDo.title).toBe('title-test');
  expect(Todo.priority).toBe('high');
});



// test('It appends the todo to Project', () => {
//   const newAddToProject = new AddToProject('Test project title', 'Test project desc');
//   const newAddToDo = new AddToDo('test title', 'test desc', Date.now(), 2, true);
//   newAddToProject.toDoList.push(newAddToDo);
//   expect(newAddToProject.toDoList.length).toEqual(1);
// });


// test('displays a user after a click', () => {
//   // Set up our document body
//   document.body.innerHTML =
//     '<div>' +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     '</div>';