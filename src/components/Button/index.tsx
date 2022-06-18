import React from 'react';

class Button extends React.Component {
  render() {
    const isActive = true;
    const styles = {backgroundColor: isActive ? "blue" : "gray"};
    return <button type='submit' style={styles}>Button</button>;
  }
}

export default Button;
