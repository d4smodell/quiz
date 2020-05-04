import React from 'react'
import s from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={s.ActiveQuiz}>
        <p className={s.Question}>
            <span>
                <strong>{props.activeQuestion}</strong>
                {props.question}
            </span>
            <small>
                {props.answerNumber} of {props.quizLength}
            </small>
        </p>

        <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz