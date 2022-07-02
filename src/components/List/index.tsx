import { useState } from 'react';

import Item from './Item';
import style from './Lista.module.scss';

function List() {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Go",
      time: "01:00:00",
    }
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => setTasks([...tasks, {task: 'NodeJs', time: '01:00:00'}])} className={style.item}>Tasks to work today</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
