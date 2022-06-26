import React from 'react';

import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add new subject</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Task"
            required
          />
        </div>
        <div className={style.inputContainer}>
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
        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;
