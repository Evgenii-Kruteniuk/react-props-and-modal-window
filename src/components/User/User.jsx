import React, { Component } from "react";
import "./User.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div
        className="block"
        style={{
          backgroundColor: this.props.bgCard,
          color: this.props.textColorCard,
        }}
      >
        <p>Привет, меня зовут {this.props.userName} </p>
        <p>
          Мне {this.props.age} {this.props.age === 1 ? "год" : "лет"}
        </p>
        <p>Мой цвет {this.props.color}</p>
        <p>Я {this.props.isFat === true ? "" : "не"} толстый</p>
        {this.props.isShow ? <p>Меня показывают только для Маши</p> : null}
      </div>
    );
  }
}

export default User;
