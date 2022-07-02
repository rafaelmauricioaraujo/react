import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';
import { ITask } from '../types/tasks';
import style from './Form.module.scss';

class Form extends React.Component<{setTask: React.Dispatch<React.SetStateAction<ITask[]>>}> {
  state = {
    task: '',
    time: '00:00'
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTask(oldTasks => [...oldTasks, {...this.state, isSelected: false, isCompleted: false, uuid: uuidv4()}] );
    this.setState({
      task: '',
      time: '00:00'
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
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
        <Button type='submit'>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;
