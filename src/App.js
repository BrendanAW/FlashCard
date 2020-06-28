import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Flashcards from "./components/flashcards.jsx";
import { getValues } from "./cardValues";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    flashcards: getValues(),
    originalCards: getValues(),
    answer: "",
    question: "",
  };

  handleDelete = (flashcard) => {
    const flashcards = this.state.flashcards.filter(
      (v) => v._id !== flashcard._id
    );
    this.setState({ flashcards });
  };

  handleYes = (flashcard) => {
    this.switchAnswerIsCorrect(true, flashcard);
  };

  handleNo = (flashcard) => {
    this.switchAnswerIsCorrect(false, flashcard);
  };

  handleOnFlip = (flashcard) => {
    const flashcards = [...this.state.flashcards];
    const index = flashcards.indexOf(flashcard);
    flashcards[index] = { ...flashcard };
    flashcards[index].flipped = !flashcards[index].flipped;
    this.setState({ flashcards });
  };

  switchAnswerIsCorrect = (b, flashcard) => {
    const flashcards = [...this.state.flashcards];
    const index = flashcards.indexOf(flashcard);
    flashcards[index] = { ...flashcard };
    flashcards[index].answeredCorrectly = b;
    this.setState({ flashcards });
  };

  refreshCards = () => {
    const flashcards = [...this.state.originalCards];
    this.setState({ flashcards });
  };

  addNewCard = () => {
    const nextId = this.state.flashcards.length + 1;
    const frontVal = this.state.question;
    const backVal = this.state.answer;
    const originalCards = [...this.state.originalCards];
    const index = this.state.originalCards.length;
    if (nextId !== null && frontVal !== "" && backVal !== "") {
      const card = {
        _id: nextId,
        theme: "",
        frontValue: frontVal,
        backValue: backVal,
        answeredCorrectly: false,
        flipped: false,
      };
      originalCards[index] = card;
      this.setState({ originalCards });
      this.refreshCards();
    }
  };

  updateAnswer = (evt) => {
    let answer = this.state.answer;
    answer = evt.target.value;
    this.setState({ answer });
  };

  updateQuestion = (evt) => {
    let question = this.state.question;
    question = evt.target.value;
    this.setState({ question });
  };

  render() {
    return (
      <>
        <Navbar refreshCards={this.refreshCards} />
        <main className="container" role="main">
          <Flashcards
            flashcards={this.renderCards()}
            onYes={this.handleYes}
            onNo={this.handleNo}
            onDelete={this.handleDelete}
            onFlip={this.handleOnFlip}
          />
          <div className="container">
            <div className="row">
              <input
                type="text"
                id="question"
                className="form-control col"
                placeholder="Enter card question"
                value={this.state.question}
                onChange={this.updateQuestion}
              />
              <input
                type="text"
                id="answer"
                className="form-control col"
                placeholder="Enter card answer"
                value={this.state.answer}
                onChange={this.updateAnswer}
              />
            </div>
            <button
              onClick={() => this.addNewCard()}
              className="btn btn-primary"
            >
              Add Card
            </button>
          </div>
        </main>
      </>
    );
  }

  renderCards = () => {
    const flashcards = [...this.state.flashcards];
    return flashcards.filter((v) => !v.answeredCorrectly);
  };
}

export default App;
