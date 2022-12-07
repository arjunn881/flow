import React from 'react'
import style from '../header/header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {
    const user = null
  return (
    <div className={style.header}>
        <div className={style.logo}>
           <Link to='/'><span>THOUGHT{'  '}FLOW</span></Link>
        </div>
        <div className={style.menu}>
            <Link to='/About'><li>About</li></Link>
            <Link to='/Products'><li>Products</li></Link>
            <Link to='/ForTeams'><li>For Teams</li></Link>

        </div>
        <div className={style.searchbar}>
            <input type="text" placeholder='Search............................................................'/>
            <i className="fa-solid fa-search"></i>
        </div>
        <div className={style.admin}>
            {
                user === null ? (
                    <Link to = '/Auth'>Login</Link>
                ):(
                    <>
                     <i className='fa-solid fa-user'></i>
                    </>
                   
                )
            }
            
        </div>
        
    </div>
  )
}
