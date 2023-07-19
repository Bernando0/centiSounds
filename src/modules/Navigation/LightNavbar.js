import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./navigation.module.scss";


const Navbar = () => {
    return (
        <div className={classes.navigationLight}>
            <div className={classes.navigationLight__innerblock}>
                <div className={classes.navigationLight__logoblock}>
                    
                </div>
                <div>
                    <Link to="/musicstudio">Музыка</Link>
                </div>
                <div>
                    <Link to="/beatsstudio">Биты</Link>
                </div>
                <div>
                    <Link to="/samplesstudio">Сэмплы</Link>
                </div>
            </div>

        </div>
    )
}
export default Navbar