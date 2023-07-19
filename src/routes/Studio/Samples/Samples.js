import React from 'react'
import classes from './../../../style.module.scss'
import ContextData from './../../../context/Data/ContextData';
import { Link } from 'react-router-dom';
import NET from './../../../network';
import StudioOffice from './../../../layouts/office/StudioOffice';

const Samples = () => {
    const { stateData, dispatchData } = React.useContext(ContextData);
    // console.log(stateData);
    const music = stateData.music;

    React.useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response =
                    await fetch(`${NET.APP_URL}/music`);
                if (response.status == 200) {
                    const result = await response.json()
                    // console.log(result);
                    dispatchData({
                        type: "FETCH_MUSIC",
                        payload: result
                    })
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchMusic();
    }, [])


    return (
        <StudioOffice>
        SamplesStudio
       </StudioOffice>
    )

}

export default Samples;