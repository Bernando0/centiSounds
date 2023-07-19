import React, { useState } from "react";
import classes from './../../style.module.scss'
import Input from '../../components/ui/Input/Input';
import Button from "../../components/ui/Button/Button";


const GeneralView = () => {
    const [value, setValue] = useState({})
const Login = () =>{
    console.log('login');
}

const goReg = () =>{

}

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__inner}>
                <div className={classes.wrapper__inner__i}>
                    <div className={classes.wrapper__title}>Авторизация</div>
                    <div><Input placeholder="login" value={value} setValue={setValue} type="text" name="login"></Input>
                        <Input placeholder="password" value={value} setValue={setValue} type="password" name="password"></Input></div>
                    <div className={classes.wrapper__btns}><Button text="Войти" onClick={Login} ></Button>
                    
                        <Button text="Регистрация" onClick={goReg} ></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GeneralView;
