import { useState } from 'react';

import { timeToSeconds } from '../../common/utils/time';
import Button from '../Button';
import { ITask } from '../types/tasks';
import style from './Cronometro.module.scss';
import Watch from './Wacth';

interface Props {
	selected: ITask | undefined;
}

export default function Timer({selected}: Props) {
	const [time, setTime] = useState<Number>(0);
	if(selected?.time) {
		setTime(timeToSeconds(selected?.time));
	}
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>
				Escolha um card e inicie o cronômetro.
			</p>
			Time: {time}
			<div className={style.relogioWrapper}>
				<Watch />
			</div>
			<Button> Start </Button>
		</div>
	)
}