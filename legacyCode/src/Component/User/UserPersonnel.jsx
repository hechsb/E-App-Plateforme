import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';
import { HiOutlineTrash } from 'react-icons/hi';

const UserPersonnel = () => {
  const { todos, setTodos } = useTodoContext();
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ fontSize: '32px' }}>Todo List</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new todo"
          style={{
            padding: '10px',
            fontSize: '18px',
            marginRight: '20px',
            flex: 1,
          }}
        />
        <button
          onClick={addTodo}
          style={{
            backgroundColor: '#FF6219',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
         
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
              maxWidth: '100%',
              width: '100%', // Set a fixed width
              fontSize: '24px',
            }}
          >
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '20px',
              }}
            >
              <HiOutlineTrash size={24} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPersonnel;
