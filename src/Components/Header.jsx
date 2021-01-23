import React from 'react';
import Button from './Button';

const Header = ({ onShowTodo, showTodo }) => {
  return (
    <div className="todo-header">
      <p>Todos</p>
      <Button
        title={showTodo ? 'Close' : 'Create'}
        status="Not Clicked"
        showTodo={showTodo}
        onClick={onShowTodo}
      />
    </div>
  );
};

export default Header;
