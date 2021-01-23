import { rgba } from 'polished';
import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const onsubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('No');
      return;
    }
    onAdd({ color, title, subtitle });
    setColor('');
    setTitle('');
    setSubtitle('');
  };

  const colors = [
    {
      name: 'Green',
      hex: '#28cc7f',
    },
    {
      name: 'Rose',
      hex: '#f5437e',
    },
    {
      name: 'Blue',
      hex: '#0985cc',
    },
  ];
  return (
    <div className="form-container">
      <form className="add-form" onSubmit={onsubmit}>
        <div className="form-color-group">
          <label>Color</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="default">Color</option>
            {colors.map((color) => (
              <option
                value={color.hex}
                key={color.hex}
                style={{ backgroundColor: rgba(color.hex, 0.5) }}
              >
                {color.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Todo</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add To Do"
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="text"
            className="form-control"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Add Time"
          />
        </div>
        <div className="form-group">
          <button className="add-btn" type="submit">
            Add To Do
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
