import React from 'react';

import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
  
  state = {
    task: '',
    time: '00:00'
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({task: this.state.task, time: this.state.time});
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add new subject</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Task"
            required
            onChange={(event) => this.setState({ task: event.target.value })}
            value={this.state.task}
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
            onChange={(event) => this.setState({ time: event.target.value })}
            value={this.state.time}
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
