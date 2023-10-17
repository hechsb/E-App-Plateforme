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
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"  style={{ position: "absolute", left: "750px", top: "150px" }}>
      <h2 className="text-2xl font-semibold text-center mb-6">Todo List</h2>
      <div className="flex items-center">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new todo"
          className="p-2 text-lg border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring focus:border-blue-400"
        />
        <button
          onClick={addTodo}
          className="bg-orange-500 text-white font-semibold p-2 px-4 rounded-r-lg cursor-pointer text-lg hover:bg-orange-600 transition duration-300"
        >
          Add
        </button>
      </div>
      <ul className="list-none text-center mt-6"  >
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center border border-gray-300 p-4 mb-4 rounded-lg"
          >
            <span className="text-xl">{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 text-white p-2 rounded-lg cursor-pointer text-lg hover:bg-red-600 transition duration-300"
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
