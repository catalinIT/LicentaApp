
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Question, QuestionState } from '../../../app/models/question';
import { useStore } from '../../../app/stores/store';
import QuestionCard from './questionCard';

export interface AnswerObject  {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}


const TOTAL_QUESTIONS = 5;

export default observer(function RandomQuiz() {

    const {questionStore} = useStore();
    const { loadQuestions} = questionStore;
    const [loading, setLoading] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    useEffect(() => {
        loadQuestions();
    }, [loadQuestions, loading, gameOver]);



  const startTrivia = async () => {

    // because we start fetching data from the API, we set the loading indicator equal to true
    setLoading(true);
    setGameOver(false);
    loadQuestions();
    setQuizQuestions(questionStore.quizQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setLoading(false);
  }

  // the checkAnswer function is going to be triggered when the user answers a question and 
  // it receives as parameter a Mouse Event associated with an html button
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // retrieve the user's answer from the event properties
      const answer = e.currentTarget.value;
      // Check the answer against the correct answer
      const correct = quizQuestions[number].question.correctAnswer === answer;
      // add the score it the asnwer is correct indeed
      if (correct) {
        setScore(prev => prev + 1);
      }
      // save asnwer in the array for user answers
      const answerObject: AnswerObject = {
        question: questionStore.quizQuestions[number].question.question,
        answer,
        correct,
        correctAnswer: questionStore.quizQuestions[number].question.correctAnswer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Move on the the next question in we did not fit the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <h1>React QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startTrivia}>
          Start
        </button>
      ) : <></>}
      {!gameOver ? <p className='score'>Score:{score}</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
         <QuestionCard
         questionNr={number + 1}
         totalQuestions={TOTAL_QUESTIONS}
         question={quizQuestions[number].question.question}
         answers={quizQuestions[number].answers}
         userAnswer={userAnswers ? userAnswers[number] : undefined}
         callback={checkAnswer}
       />)}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQuestion}>
          Next question
        </button>
      ) : null}
    </div>
  );
})