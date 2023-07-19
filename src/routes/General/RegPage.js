import React, { useState } from "react";
import ContextData from './../../context/Data/ContextData';
import classes from './../../style.module.scss'
import { Link, Navigate } from 'react-router-dom';
import {SignUp} from './../../components/SignUp'

const RegPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__inner}>
                <div className={classes.wrapper__inner__i}>
                    <div className={classes.wrapper__title}>Регистрация</div>
                    <SignUp></SignUp>
                    <div className={classes.additional_message}>
                        <h4 >Уже есть <Link to='/login'>аккаунт</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default RegPage;