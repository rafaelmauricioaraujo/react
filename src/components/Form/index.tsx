import React from 'react';

import Button from '../Button';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Add new subject</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Task"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step={1}
            min="00:00:00"
            max="01:30:00"
            name="time"
            id="time"
            placeholder="Time"
            required
          ></input>
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
