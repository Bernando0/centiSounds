import { Form } from './Form'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setUser } from './../store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleReg = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accesstoken
            }));
            navigate('/')
        })
        .catch(console.error)
    }

    return (
        <Form
        title={"Зарегестрироваться"}
        handleClick={handleReg}
        />
    )
}

export { SignUp }