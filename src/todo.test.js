import { Project } from './projectDom';
import { Todo } from './classDom';

const sum = require('./sum');

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

test('It could not create empty project', () => {
  const newProject = new Project('');
  expect(newProject.title).not.toBe('Test project title');
});

test('It could not create empty title todo', () => {
  const newtodo = new Todo('', Date.now, 'low');
  expect(newtodo.title).not.toBe('Test-title', Date.now, 'low');
});