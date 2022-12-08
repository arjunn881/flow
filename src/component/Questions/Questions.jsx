import React from "react";
import style from "../Questions/Questions.module.css";
import { Link } from "react-router-dom";

export default function Questions({ question }) {
  return (
    <div className={style.question}>
      <div className={style.votes}>
        <p>{question.votes}</p>
        <p>Votes</p>
      </div>
      <div className={style.answers}>
        <p>{question.noOfAnswers}</p>
        <p>Answers</p>
      </div>
      <div className={style.qtitle}>
        <Link to={`/Questions/${question.id}`}>{question.questionTitle}</Link>
        <div className={style.tagcon}>
          <div className={style.tags}>
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p>
            Asked {question.askedOn}, {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
}
