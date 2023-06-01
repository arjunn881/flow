import React from 'react'
import style from '../About/About.module.css'
import LeftBar from '../../component/LeftBar/LeftBar'

export default function About() {
  return (
    <div className={style.about}>
      <LeftBar/>
      <h1>About Page</h1>
    </div>
  )
}
