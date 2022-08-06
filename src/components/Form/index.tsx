import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';
import { ITask } from '../types/tasks';
import style from './Form.module.scss';

interface Props {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTask}: Props) {

  const [newTask, setNewTask ] = useState<string>('');
  const [newTime, setNewTime] = useState<string>('00:00');

  const addTask = (event: React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    
    setTask(oldTasks => [...oldTasks, {task: newTask, time: newTime, isSelected: false, isCompleted: false, uuid: uuidv4()}] );
    
    setNewTask('');
    setNewTime("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
    <div className={style.inputContainer}>
      <label htmlFor="task">Add new subject</label>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Task"
        required
        onChange={(event) => setNewTask(event.target.value)}
        value={newTask}
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
        onChange={(event) => setNewTime(event.target.value)}
        value={newTime}
      ></input>
    </div>
    <Button type='submit'>
      Adicionar
    </Button>
  </form>
  )

}

export default Form;
