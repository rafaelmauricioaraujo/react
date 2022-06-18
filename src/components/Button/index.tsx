import React from 'react';

import style from './Botao.module.scss';

class Button extends React.Component {
  render() {
    return <button className={style.Botao} type='submit'>Button</button>;
  }
}

export default Button;
