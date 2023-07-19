import { useState } from 'react'
import classes from './../style.module.scss'



const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div className={classes.wrapper__inputs}>
                <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Логин" className={classes.inputpanel} ></input>
                <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Пароль" className={classes.inputpanel} ></input>
            </div>
            <div className={classes.wrapper__btns}><button className={classes.btn} onClick={() => handleClick(email, password)} >{title}</button>
            </div>
        </div>
    )
}

export { Form };