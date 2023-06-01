import React from 'react'
import LeftBar from '../../component/LeftBar/LeftBar'
import MainBar from '../../component/MainBar/MainBar'
import RightBar from '../../component/RightBar/RightBar'
import style from '../Questions/Questions.module.css'

export default function Questions() {
  return (
    <div className={style.questions}>
      <LeftBar/>
      <MainBar/>
      <RightBar/>
    </div>
  )
}
