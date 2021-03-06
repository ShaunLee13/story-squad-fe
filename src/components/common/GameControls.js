import React from 'react';
import { useHistory } from 'react-router-dom';

const GameControls = ({ controls }) => {
  const { push, goBack } = useHistory();

  return (
    <section className="game-control">
      <button className="game-button dark" onClick={() => goBack()}>
        {controls.previousButtonLabel}
      </button>
      <button
        className="game-button "
        onClick={() => push(controls.navigateToOnNextButtonClick)}
      >
        {controls.nextButtonLabel}
      </button>
    </section>
  );
};

export default GameControls;
