import React from 'react'
import classes from './../../style.module.scss'
import  LightNavbar  from './../../modules/Navigation/LightNavbar';
import LightHeader from '../../modules/Navigation/LightHeader';

const Office = ({
    children
}) => {
    return(
        <div className={classes.mainLight}>
            <div className={classes.mainLight__navigation}>
            <LightNavbar></LightNavbar>
            </div>
            <div className={classes.mainLight__content}>
                <LightHeader></LightHeader>
                {children}
                </div>
        </div>
    )

}

export default Office;