import React from 'react'
import style from '../LeftBar/LeftBar.module.css'
import { NavLink } from 'react-router-dom'

export default function LeftBar() {
  return (
    <div className={style.leftbar}>
      <NavLink to='/'className={style.list} activeClassName={style.active}>
        <span>Home</span>
      </NavLink>

      <div className={style.public}>
        <h4>PUBLIC</h4>
      <NavLink to='/Questions' className={style.list} activeClassName={style.active}>
        <span>Questions</span>
        </NavLink>
      <NavLink to='/Tags'className={style.list} activeClassName={style.active}>
        Tags
      </NavLink>
      
      <NavLink to='/'className={style.list} activeClassName={style.active}>
        User
      </NavLink>
      </div>
    </div>
  )
}
