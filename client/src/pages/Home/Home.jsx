import React from 'react'
import style from '../Home/Home.module.css'
import LeftBar from '../../component/LeftBar/LeftBar'
import MainBar from '../../component/MainBar/MainBar'
import RightBar from '../../component/RightBar/RightBar'

export default function Home() {
  return (
    <div className={style.home}>
    <LeftBar/>
    <MainBar/>
    <RightBar/>
    </div>
  )
}
