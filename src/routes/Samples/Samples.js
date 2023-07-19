import React from 'react'
import classes from './../../style.module.scss'
import ContextData from './../../context/Data/ContextData';
import SampleItem from './modules/SampleItem';
import { Link, Navigate } from 'react-router-dom';
import NET from './../../network';
import Office from './../../layouts/office/Office';
import { useAuth } from './../../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from './../../store/slices/userSlice'



const Samples = () => {
    const { isAuth, email } = useAuth()
    const dispatch = useDispatch();


    const { stateData, dispatchData } = React.useContext(ContextData);
    // console.log(stateData);
    const samples = stateData.samples;

    React.useEffect(() => {
        const fetchSamples = async () => {
            try {
                const response =
                    await fetch(`${NET.APP_URL}/samples`);
                if (response.status == 200) {
                    const result = await response.json()
                    // console.log(result);
                    dispatchData({
                        type: "FETCH_SAMPLES",
                        payload: result
                    })
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchSamples();
    }, [])


    return isAuth ? (
        <Office>
            <div>
                <div className={classes.titleslider}>
                    <Link to='/sampleslist'>Популярные</Link>
                </div>
                <div className={classes.slider}>
                    {

                        samples.map((elem, index) => {
                            return (
                                <SampleItem data={elem} key={index}></SampleItem>
                            )
                        })
                    }
                </div>
            </div>
        </Office>
    ) : (<Navigate to="/login"></Navigate>)

}

export default Samples;