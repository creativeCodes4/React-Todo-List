import { useState } from 'react';
import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { RiErrorWarningFill } from 'react-icons/ri';
const Wrapper = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState([]);

  // Sample Data
  // {
  //   id: 1,
  //   title: 'Learn CSS 3',
  //   subtitle: '30 mins',
  //   completed: false,
  //   color: '#0985cc',
  // },
  // {
  //   id: 2,
  //   title: 'Start Vue Js',
  //   subtitle: 'Monday',
  //   completed: false,
  //   color: '#28cc7f',
  // },
  // {
  //   id: 3,
  //   title: 'Read a Book',
  //   subtitle: 'Next Week',
  //   completed: true,
  //   color: '#f5437e',
  // },

  // Add Todos ...

  const addTodo = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const defaultCompleted = false;
    const newTodo = { id, ...task, defaultCompleted };
    setTodos([...todos, newTodo]);
  };

  // Delete ToDo...

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Checked...

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="wrapper">
      {showAddTodo && <AddTodo onAdd={addTodo} />}
      <Header
        onShowTodo={() => setShowAddTodo(!showAddTodo)}
        showTodo={showAddTodo}
      />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTodo} onCheck={checkTodo} />
      ) : (
        <p className="no-tasks">
          <RiErrorWarningFill /> Please, Add Tasks to Show
        </p>
      )}
    </div>
  );
};

export default Wrapper;
