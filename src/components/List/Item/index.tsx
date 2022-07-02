import { ITask } from '../../types/tasks';
import style from '../Lista.module.scss';

export default function Item({task, time, isSelected, isCompleted, uuid }: ITask) {
		return (
		<li className={style.item}>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}