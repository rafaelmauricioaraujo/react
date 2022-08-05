import { ITask } from '../types/tasks';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

function List({tasks, selectTask}: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2 className={style.item}>Tasks to work today</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.uuid} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
