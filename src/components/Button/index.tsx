import React from 'react';

import style from './Botao.module.scss';

interface Props {
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined
  children?: React.ReactNode,
}

function Button({onClick, type, children}: Props) {
  return(
    <button onClick={onClick} className={style.botao} type={type}>{children}</button>
  )
}

export default Button;
