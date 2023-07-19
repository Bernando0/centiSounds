import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./navigation.module.scss";


const Navbar = () => {
    return (
        <div className={classes.navigation}>
            <div className={classes.navigation__innerblock}>
                <div className={classes.navigation__logoblock}>
                    
                </div>
                <div>
                    <Link to="/">Музыка</Link>
                </div>
                <div>
                    <Link to="/beats">Биты</Link>
                </div>
                <div>
                    <Link to="/samples">Сэмплы</Link>
                </div>
            </div>

        </div>
    )
}
export default Navbar