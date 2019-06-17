import React, { Component } from 'react'

// Ejemplo de como se maneja el estado

class BotonState extends Component {

  state = {
    active: true,
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Ocultar</button>
        {this.state.active &&
          <h1>Hola Jesé</h1>
        }
      </>
    )
  }
}

export default BotonState;