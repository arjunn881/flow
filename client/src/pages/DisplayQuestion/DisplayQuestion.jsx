import React from 'react'
import style from '../DisplayQuestion/DisplayQuestion.module.css'
import style2 from '../../component/MainBar/MainBar.module.css'
import LeftBar from '../../component/LeftBar/LeftBar'
import RightBar from '../../component/RightBar/RightBar'
import QuestionDetails from '../../component/QuestionDetails/QuestionDetails'


export default function DisplayQuestion() {
  return (
    <div className={style.displayquestion}>
        <LeftBar/>
        <div className={style2.mainbar}>
          <div className={style2.qcon}>
            <QuestionDetails/>
          </div>
        </div>
        <RightBar/>

    </div>
  )
}
