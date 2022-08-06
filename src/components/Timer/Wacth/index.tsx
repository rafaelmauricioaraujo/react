import style from './Relogio.module.scss';

interface Props {
	time: number | undefined;
}

export default function Watch({ time = 0 }: Props) {
	
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	
	const [minutesDecimal, minutesUnite] = String(minutes).padStart(2, '0');
	const [secondsDecimal, secondsUnite] = String(seconds).padStart(2, '0');

	return(
		<>
			<span className={style.relogioNumero}>{minutesDecimal}</span>
			<span className={style.relogioNumero}>{minutesUnite}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{secondsDecimal}</span>
			<span className={style.relogioNumero}>{secondsUnite}</span>
		</>
	)
}