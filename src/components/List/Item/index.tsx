import { ITask } from '../../types/tasks';
import style from '../Lista.module.scss';

interface Props extends ITask {	
	selectTask: (task: ITask) => void;
}	

export default function Item({task, time, isSelected, isCompleted, uuid, selectTask }: Props) {
		return (
		<li className={style.item} onClick={() => selectTask(
				{
					task, time, isSelected, isCompleted, uuid
				}
			)}
		>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}