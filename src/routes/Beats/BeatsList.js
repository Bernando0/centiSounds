import React from 'react'
import classes from './../../style.module.scss'
import ContextData from './../../context/Data/ContextData';
import { Link } from 'react-router-dom';
import NET from './../../network';
import Office from './../../layouts/office/Office';
import ItemList from '../../layouts/itemlist/ItemList';

const Beats = () => {
    const { stateData, dispatchData } = React.useContext(ContextData);
    // console.log(stateData);
    const beats = stateData.beats;

    React.useEffect(() => {
        const fetchBeats = async () => {
            try {
                const response =
                    await fetch(`${NET.APP_URL}/beats`);
                if (response.status == 200) {
                    const result = await response.json()
                    // console.log(result);
                    dispatchData({
                        type: "FETCH_BEATS",
                        payload: result
                    })
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchBeats();
    }, [])


    return (
        <Office>
        <div>
            <div className={classes.titleslider}>
                    <Link to='/beats'>Биты</Link>
                    <ItemList list={beats}></ItemList>
                </div>
        </div>
        </Office>
    )

}

export default Beats;