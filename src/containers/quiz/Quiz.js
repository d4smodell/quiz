import React from "react";
import s from "./Quiz.module.scss";
import ActiveQuiz from "./../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

export default class Quiz extends React.Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "What the color of sky is?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Black", id: 1 },
          { text: "Blue", id: 2 },
          { text: "Red", id: 3 },
          { text: "Violet", id: 4 },
        ],
      },
      {
        question: "What year is the birth of Jesus Christ",
        rightAnswerId: 1,
        id: 2,
        answers: [
          { text: "0", id: 1 },
          { text: "1", id: 2 },
          { text: "2012", id: 3 },
          { text: "1987", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
        if(!results[answerId]) {
            results[answerId] = 'success'
        }
      this.setState({
        answerState: { [answerId]: "success" },
        results
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
        results[answerId] = 'error'
      this.setState({
        answerState: { [answerId]: "error" },
        results
      });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  retryHandler = () => {
      this.setState({
          activeQuestion: 0,
          answerState: null,
          isFinished: false,
          results: {}
      })
  }

  render() {
    return (
      <div className={s.Quiz}>
        <div className={s.QuizWrapper}>
          <h1>Answer all the questions</h1>
          {this.state.isFinished ? (
            <FinishedQuiz results={this.state.results} quiz={this.state.quiz} onRetry={this.retryHandler}/>
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}
