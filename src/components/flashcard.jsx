import React, { Component } from "react";
import "../App.css";

class Flashcard extends Component {
  getFrontValue() {
    const { frontValue } = this.props.flashcard;
    return frontValue;
  }

  getBackValue() {
    const { backValue } = this.props.flashcard;
    return backValue;
  }

  isFlipped() {
    const { flipped } = this.props.flashcard;
    if (flipped) return true;
    return false;
  }

  render() {
    return (
      <div className="card-body">
        <div
          className={this.isFlipped() ? "front-card invisible" : "front-card"}
        >
          <h3>{this.getFrontValue()}</h3>
          <p onClick={() => this.props.onFlip(this.props.flashcard)}>
            Click to flip
          </p>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.flashcard)}
          >
            Delete
          </button>
        </div>
        <div className={this.isFlipped() ? "back-card" : "back-card invisible"}>
          <h4>{this.getBackValue()}</h4>
          <p onClick={() => this.props.onFlip(this.props.flashcard)}>
            Click to flip
          </p>
          <span>Were you correct?</span>
          <button
            className="btn btn-success"
            onClick={() => this.props.onYes(this.props.flashcard)}
          >
            Yes
          </button>
          <button
            className="btn btn-warning"
            onClick={() => this.props.onNo(this.props.flashcard)}
          >
            No
          </button>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.flashcard)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;
