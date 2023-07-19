import React from "react";
import classes from './../../../style.module.scss'

const Button = ({
    text,
    onClick
})=>{
    return (
        <div>
            <button className={classes.btn} onClick={onClick} >{text}</button>
        </div>
    )
}

export default Button;