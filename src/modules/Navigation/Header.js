import React from 'react'
import classes from './navigation.module.scss'
import { Link } from 'react-router-dom'
import {useAuth} from './../../hooks/use-auth'


const Header = () => {
    const {email} = useAuth()
    return (
        <div className={classes.header}>
            <nav className={classes.header__innerBlock}>
                <div className={classes.inputPanel}>
                    <input placeholder='Введите название трека...'></input>
                </div>
                <div className={classes.headerbutton__studio}>
                    <Link to="/musicstudio">СТУДИЯ</Link>
                </div>
                <div className={classes.headerprofile}>
                    <div className={classes.dropdown}>
                        <img className={classes.dropbtn} src='/Blank_Pfp.jpeg'></img>
                        <div className={classes.dropdown_content}>
                            <a href="#">{email}</a>
                            <Link to='/login'>Выйти</Link>
                        </div>
                    </div>

                </div>
            </nav>


        </div>
    )
}
export default Header