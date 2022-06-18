import React from 'react';

import style from './Lista.module.scss';

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Go",
      time: "01:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Tasks to work today</h2>
      <ul>
        {tasks.map((item, index) => (
          <li className={style.item} key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
