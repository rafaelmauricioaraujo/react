import { useState } from 'react';

import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../components/types/tasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  
  const [selected, setSelected ] = useState<ITask | undefined>();
  

  const selectTask = (taskSelected: ITask) => {
    setSelected(taskSelected);
    setTasks(prevTask => prevTask.map(task =>({...task, isSelected: task.uuid === taskSelected?.uuid})));
  };

  return (
    <div className={style.AppStyle}>      
      <List tasks={tasks} selectTask={selectTask} />
      <Form setTask={setTasks} />
      <Timer selected={selected} />
    </div>
  );
}

export default App;
