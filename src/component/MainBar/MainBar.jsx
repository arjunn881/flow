import React from "react";
import style from "../MainBar/MainBar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Questions from "../Questions/Questions";

const questionList = [
  {
    _id: 1,
    votes: 3,
    upVotes: 2,
    downVotes: 1,
    noOfAnswers: 2,
    questionTitle: "Why people fail ?",
    questionBody: "It meant to be",
    questionTags: ["life", "failure", "life heck", "rejection"],
    userPosted: "Alex Mailer",
    askedOn: "2hrs ago",
    userId: 1,
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "manoj",
        answeredOn: "18 Mins ago",
        userId: 2,
      },
    ],
  },
  {
    _id: 2,
    votes: 3,
    upVotes: 2,
    downVotes: 1,
    noOfAnswers: 2,
    questionTitle: "Why people fail ?",
    questionBody: "It meant to be",
    questionTags: ["life", "failure", "life heck", "rejection"],
    userPosted: "Alex Mailer",
    askedOn: "2hrs ago",
    userId: 2,
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "manoj",
        answeredOn: "18 Mins ago",
        userId: 1,
      },
    ],
  },
  {
    _id: 3,
    votes: 3,
    upVotes: 2,
    downVotes: 1,
    noOfAnswers: 2,
    questionTitle: "Why people fail ?",
    questionBody: "It meant to be",
    questionTags: ["life", "failure", "life heck", "rejection"],
    userPosted: "Alex Mailer",
    askedOn: "2hrs ago",
    userId: 3,
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "manoj",
        answeredOn: "18 Mins ago",
        userId: 4,
      },
    ],
  },
  {
    _id: 4,
    votes: 3,
    upVotes: 2,
    downVotes: 1,
    noOfAnswers: 2,
    questionTitle: "Why people fail ?",
    questionBody: "It meant to be",
    questionTags: ["life", "failure", "life heck", "rejection"],
    userPosted: "Alex Mailer",
    askedOn: "2hrs ago",
    userId: 4,
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "manoj",
        answeredOn: "18 Mins ago",
        userId: 5,
      },
    ],
  },
  {
    _id: 5,
    votes: 3,
    upVotes: 2,
    downVotes: 1,
    noOfAnswers: 2,
    questionTitle: "Why people fail ?",
    questionBody: "It meant to be",
    questionTags: ["life", "failure", "life heck", "rejection"],
    userPosted: "Alex Mailer",
    askedOn: "2hrs ago",
    userId: 5,
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "manoj",
        answeredOn: "18 Mins ago",
        userId: 3,
      },
    ],
  },
];

export default function MainBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = 1;

  const redirect = () => {
    alert("Login or SignUP to Ask Questions!!!");
    navigate("/Auth");
  };

  const checkAuth = () => {
    if (user === null) {
      redirect();
    } else navigate("/AskQuestion");
  };

  return (
    <div className={style.mainbar}>
      <div className={style.mainbarheader}>
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <div className={style.askquestion}>
          <button onClick={checkAuth}>Ask Question</button>
        </div>
      </div>
      <div className="">
        {questionList === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <p>{questionList.length} Questions</p>
          </>
        )}
      </div>

      {questionList.map((item) => (
        <div className={style.qcon}>
          <Questions question={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}
