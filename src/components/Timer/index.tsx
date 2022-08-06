import {
  useEffect,
  useState,
} from 'react';

import { timeToSeconds } from '../../common/utils/time';
import Button from '../Button';
import { ITask } from '../types/tasks';
import style from './Cronometro.module.scss';
import Watch from './Wacth';

interface Props {
	selected: ITask | undefined;
}

export default function Timer({selected}: Props) {
	const [time, setTime] = useState<number>(0);

	useEffect(() => {
		if(selected?.time) {
			setTime(timeToSeconds(selected?.time));
		}		
	}, [selected]);

	const startTimer = (time: number) => {

		setTimeout(() => {
			if(time > 0) {
				setTime(time - 1);
				return startTimer(time - 1);
			}
			
		}, 1000);

	}

	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>
				Escolha um card e inicie o cronômetro.
			</p>
			<div className={style.relogioWrapper}>
				<Watch time={time} />
			</div>
			<Button onClick={() => startTimer(time)}> Start </Button>
		</div>
	)
}