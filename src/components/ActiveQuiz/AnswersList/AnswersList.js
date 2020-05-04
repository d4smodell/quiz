import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import s from "./AnswersList.module.scss";

const AnswersList = (props) => (
  <ul className={s.AnswersList}>
    {props.answers.map((answer, id) => {
      return (
        <AnswerItem
          key={id}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;
