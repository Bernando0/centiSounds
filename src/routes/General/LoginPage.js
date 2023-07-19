import React, { useState } from "react";
import ContextData from './../../context/Data/ContextData';
import classes from './../../style.module.scss'
import { Link, Navigate } from 'react-router-dom';
import { Login } from './../../components/Login'

const LoginPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__inner}>
                <div className={classes.wrapper__inner__i}>
                    <div className={classes.wrapper__title}>Авторизация</div>
                    <Login></Login>
                    <div className={classes.additional_message}>
                        <h4 >Создать нового <Link to='/register'>пользователя</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default LoginPage;