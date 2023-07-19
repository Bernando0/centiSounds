import React from 'react'
import ContextData from '../../context/Data/ContextData';
import GeneralView from '../../views/general/LoginView';

const General = () => {
    const {stateData} = React.useContext(ContextData);
    // console.log(stateData)
    return(
        <GeneralView></GeneralView>
    )

}

export default General;