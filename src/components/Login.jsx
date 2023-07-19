import { Form } from './Form'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setUser } from './../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accesstoken
            }));
            navigate('/')
        })
        .catch(()=>alert('Неверный логин или пароль пользователя'))
    }

    return (
        <Form
        title={"Войти"}
        handleClick={handleLogin}
        />
    )
}

export { Login }