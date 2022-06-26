import Button from '../Button';
import style from './Cronometro.module.scss';
import Watch from './Wacth';

export default function Timer() {
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>
				Escolha um card e inicie o cronômetro.
			</p>
			<div className={style.relogioWrapper}>
				<Watch />
			</div>
			<Button> Start </Button>
		</div>
	)
}