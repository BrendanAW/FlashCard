import React, { Component } from "react";
import Flashcard from "./flashcard";

class Flashcards extends Component {
  render() {
    const { flashcards, onYes, onNo, onDelete, onFlip } = this.props;

    return (
      <>
        {flashcards.map((flashcard) => (
          <div className="card text-center text-white bg-primary mb-3">
            <Flashcard
              key={flashcard._id}
              flashcard={flashcard}
              onDelete={onDelete}
              onYes={onYes}
              onNo={onNo}
              onFlip={onFlip}
            />
          </div>
        ))}
      </>
    );
  }
}

export default Flashcards;
