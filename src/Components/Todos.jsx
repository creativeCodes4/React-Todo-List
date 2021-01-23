import Todo from './Todo';
const Todos = ({ todos, onDelete, onCheck }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      ))}
    </div>
  );
};

export default Todos;
