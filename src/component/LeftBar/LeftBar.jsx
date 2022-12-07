import React from 'react'
import style from '../LeftBar/LeftBar.module.css'
import { NavLink } from 'react-router-dom'

export default function LeftBar() {
  return (
    <div className={style.leftbar}>
      <NavLink to='/'className={style.list} activeClassName={style.active}>
        Home
      </NavLink>

      <div className={style.public}>
        <h4>Public</h4>
      <NavLink to='/'className={style.list} activeClassName={style.active}>
        Tag
      </NavLink>
      
      <NavLink to='/'className={style.list} activeClassName={style.active}>
        User
      </NavLink>
      </div>
    </div>
  )
}
