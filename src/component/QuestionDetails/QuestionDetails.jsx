import React from "react";
import style from "../QuestionDetails/QuestionDetails.module.css";
import { Link, useParams } from "react-router-dom";
import DisplayAnswers from "../DisplayAnswers/DisplayAnswers";

const questionList = [
  {
    _id: "1",
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
    _id: "2",
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
    _id: "3",
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
    _id: "4",
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
    _id: "5",
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

export default function QuestionDetails() {
  const { id } = useParams();

  return (
    <div className={style.quedetails}>
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList
            .filter((question) => question._id === id)
            .map((question) => (
              <div className="" key={question._id}>
                <div className={style.qdetailcon}>
                  <h1>{question.questionTitle}</h1>
                  <div className={style.qdetailcon2}>
                    <div className={style.qvotes}>
                      <i class="fa-solid fa-arrow-up"></i>
                      <p>{question.upVotes - question.downVotes}</p>
                      <i class="fa-solid fa-arrow-down"></i>
                    </div>
                    <div className={style.quebody}>
                      <p>{question.questionBody}</p>
                      <div className={style.tags}>
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>

                      <div className="">
                        <div className="">
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div className={style.queuser}>
                          <p>Asked {question.askedOn}</p>
                          <Link to={`/User/${question.userId}`} className={style.user}>
                            <i class="fa-solid fa-user"></i>
                            <div className="">{question.userPosted}</div>
                          </Link>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {question.noOfAnswers !== 0 && (
                  <div className="">
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswers key={question._id} question={question} />
                  </div>
                )}
                <div className={style.postanscon}>
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <input
                      type="Submit"
                      className={style.postansbtn}
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className={style.anstags}>
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or {<Link to="/AskQuestion">ask your own question.</Link>}
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
