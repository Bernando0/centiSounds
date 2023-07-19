import React from "react";
import classes from './../../../style.module.scss'

const Input = ({
    value,
    setValue,
    name,
    type,
    placeholder
})=>{
    return (
        <div>
            <input placeholder={placeholder} type={type} className={classes.inputpanel}  value={value[name]} onChange={(e)=>{
                setValue({
                    ...value,
                    [name]: e.target.value
                })
            }}  ></input>
        </div>
    )
}

export default Input;