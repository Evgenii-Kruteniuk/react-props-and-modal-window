import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  constructor() {
    super();
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
      <div>
        <button onClick={this.openModal}>Открыть модалку</button>
        <div
          className={`modal-window-wrapper ${
            this.state.isShow ? null : "modal-hide"
          }`}
        >
          <div className="modal-window">
            <img
              src="https://w-dog.ru/wallpapers/1/10/286501823616691/avtomobil-oboi-zheltyj-mclaren-mp4-12c-spyder-2012-oboya-maklaren-spajder-krasivaya-mashina.jpg"
              alt="рисунок"
            ></img>
            <button onClick={this.closeModal}>Закрыть окно</button>
          </div>
        </div>
      </div>
    );
  }
}
