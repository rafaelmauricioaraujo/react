import { ITask } from '../types/tasks';
import Item from './Item';
import style from './Lista.module.scss';

function List({tasks}: {tasks: ITask[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2 className={style.item}>Tasks to work today</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
