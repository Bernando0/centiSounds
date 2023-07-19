import React from "react";
import classes from './../../../style.module.scss'
import { Link } from 'react-router-dom';
import Image from './../../../components/ui/Image/Image';

const MusicItem = ({ data }) => {
    return (
        <div>
            <Link>
                <div className={classes.cart}>
                    <div className={classes.cart__container}>
                        <Image sizeWidth="250px">
                            <img className={classes.cart__photo} src={data.imgPath}></img>
                        </Image>
                    </div>
                    <div className={classes.cart__text}>
                        <div>{data.title}</div>
                        <div className={classes.greyColorText}>{data.authorName}</div>
                    </div>
                </div>
            </Link>


        </div>
    )
}

export default MusicItem