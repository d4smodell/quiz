import React from 'react'
import s from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)
    return (
        <div className={s.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, idx) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        s[props.results[quizItem.id]]
                    ]
                    
                    return (
                        <li key={idx}>
                            <strong>{idx + 1} </strong>
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>Right is {successCount} of {props.quiz.length}</p>
            <div>
                <Button type='primary' onClick={props.onRetry}>Repeat</Button>
                <Button type='success' onClick={props.onRetry}>Go to the list</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz