import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <h1> My To do List </h1>
      <TodoList />
    </div>
  );
}

export default App;
