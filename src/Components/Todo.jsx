import React, { Component } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export class Todo extends Component {
  render() {
    const { todo, onDelete, onCheck } = this.props;
    const RowBorder = css`
      &:before {
        content: '';
        position: absolute;
        left: -4%;
        width: 3.3px;
        height: 2.8rem;
        border-radius: 4px;
        background-color: ${todo.color};
        opacity: 0.8;
      }
    `;
    const Row = styled.div`
      ${RowBorder}
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 0.1rem 0.7rem 0.8rem;
      position: relative;
      cursor: pointer;
      /* font-family: 'Poppins'; */
    `;
    return (
      <Row
        onDoubleClick={() => onCheck(todo.id)}
        className={`${todo.completed ? 'checked' : ''}`}
      >
        <p>{todo.completed}</p>
        <div
          className="checkbox"
          style={{ backgroundColor: `${rgba(todo.color, 0.14)}` }}
        >
          <FaCheck
            className="checkbox-icon"
            style={{ color: `${todo.color}` }}
          />
        </div>
        <div className="text">
          <h3>{todo.title}</h3>
          <p>{todo.subtitle}</p>
        </div>
        <div className="action">
          <FaTrash
            style={{ color: `${rgba(todo.color, 0.8)}` }}
            onClick={() => onDelete(todo.id)}
          />
        </div>
      </Row>
    );
  }
}

export default Todo;
