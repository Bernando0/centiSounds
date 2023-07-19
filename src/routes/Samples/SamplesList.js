import React from 'react'
import classes from './../../style.module.scss'
import ContextData from './../../context/Data/ContextData';
import { Link } from 'react-router-dom';
import NET from './../../network';
import Office from './../../layouts/office/Office';
import ItemList from '../../layouts/itemlist/ItemList';

const Sample = () => {
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


    return (
        <Office>
        <div>
            <div className={classes.titleslider}>
                    <Link to='/samples'>Семплы</Link>
                    <ItemList list={samples}></ItemList>
                </div>
        </div>
        </Office>
    )

}

export default Sample;