import React, { useState } from 'react';
import { QUESTIONS } from './questions';

const QuizApp: React.FC = () => {
  const questionKeys = Object.keys(QUESTIONS).map(Number);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [yesCount, setYesCount] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleAnswer = (answer: 'yes' | 'no'): void => {
    if (answer === 'yes') {
      setYesCount(prevYesCount => prevYesCount + 1);
    }

    if (currentQuestionIndex < questionKeys.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      const score = (100 * yesCount) / questionKeys.length;
      setScores(prevScores => [...prevScores, score]);
      setCompleted(true);
    }
  };

  const restartQuiz = (): void => {
    setCurrentQuestionIndex(0);
    setYesCount(0);
    setCompleted(false);
  };

  const overallScore: number =
    scores.reduce((acc, score) => acc + score, 0) / (scores.length || 1);

  return (
    <div>
      {completed ? (
        <div>
          <h2>Score for this run: {((100 * yesCount) / questionKeys.length).toFixed(2)}</h2>
          <h2>Overall Score: {overallScore.toFixed(2)}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{QUESTIONS[questionKeys[currentQuestionIndex]]}</h2>
          <button onClick={() => handleAnswer('yes')}>Yes</button>
          <button onClick={() => handleAnswer('no')}>No</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
