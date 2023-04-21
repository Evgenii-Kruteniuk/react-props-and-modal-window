import "./Film.css";
import React, { Component } from "react";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  openModal = () => {
    this.setState({
      isShow: true,
    });
  };

  closeModal = () => {
    this.setState({
      isShow: false,
    });
  };

  render() {
    return (
      <div className="wrapper">
        
        <div className="wrapper__item">
          <h1>{this.props.name}</h1>
          <img src={this.props.src} alt={this.props.name} />
          <p>Режиссер фильма: {this.props.produser}</p>
          <p>Год выхода фильма: {this.props.year}</p>
          <p>Цена:{this.props.price}</p>
          {this.props.likeFilm ? (
            <p>Это мой любимый фильм. Рекомендую!!</p>
          ) : null}
          <button onClick={this.openModal}>Купить</button>
        </div>

        <div
          className={`modal-window-wrapper ${
            this.state.isShow ? null : "modal-hide"
          }`}
        >
          <div className="modal-window">
            <img src={this.props.src} alt={this.props.name} />
            <p>Вы должны оплатить:{this.props.price}</p>
            <button onClick={this.closeModal}>Вернуться к покупке</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Film;
