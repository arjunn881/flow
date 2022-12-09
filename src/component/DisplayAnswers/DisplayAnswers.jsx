import React from "react";
import { Link } from "react-router-dom";
import style from "../DisplayAnswers/DisplayAnswers.module.css";

export default function DisplayAnswers({ question }) {
  return (
    <div className={style.disans}>
      {question.answer.map((ans) => (
        <div className={style.ansbody} key={ans._id}>
          <p>{ans.answerBody}</p>

          <div className={style.quedetailscon}>
          <div className="">
          
            <button type="button">Share</button>
            <button type="button">Delete</button>
          </div>
          <div className={style.ansuser}>
            <p>Answered {ans.answeredOn}</p>
            <Link to={`/User/${ans.userId}`} className={style.user}>
              <i class="fa-solid fa-user"></i>
              <div className="">{ans.userAnswered}</div>
            </Link>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
