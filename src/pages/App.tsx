import { useState } from 'react';

import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../components/types/tasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>      
      <List tasks={tasks} />
      <Form setTask={setTasks} />
      <Timer />
    </div>
  );
}

export default App;
