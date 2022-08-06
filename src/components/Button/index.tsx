import React from 'react';

import style from './Botao.module.scss';

class Button extends React.Component<{type?: 'button' | 'submit' | 'reset' | undefined, onClick?: () => void}> {
  render() {
    const {type = 'button', onClick} = this.props;
    return <button onClick={onClick} className={style.botao} type={type}>{this.props.children}</button>;
  }
}

export default Button;
