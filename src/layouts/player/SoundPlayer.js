const SoundPlayer = ()=>{
    return (
        <div class="player" className={classes.buttomPlayer}>
                <div className={classes.buttomPlayer__innerBlock}>
                    <div className={classes.buttomPlayer__innerBlock__title}>
                        <img class="title_image"></img>
                        <div className={classes.buttomPlayer__words}>
                            <div className={classes.buttomPlayer__titlew}><h3 class="title"  ></h3></div>
                            <div className={classes.buttomPlayer__authorw}><h3 class="author" ></h3></div>
                        </div>
                    </div>
                    <div className={classes.buttomPlayer__centerblock}>
                        <div className={classes.buttomPlayer__innerBlock__player}>
                            <div class="prev" className={classes.buttomPlayer__btnprev}>
                                <div className={classes.buttomPlayer__btnprev}>
                                    <img src='/prev.png'></img>
                                </div>

                            </div>
                            <div class="play" onClick={() => { addEvent() }} className={classes.buttomPlayer__btnplay}>
                                <div className={classes.buttomPlayer__btn}>
                                    <img class="imgSrc" className={classes.buttomPlayer__imgsrc} src={isPlaying}></img>
                                </div>
                            </div>
                            <div className={classes.buttomPlayer__btnvolume}>
                                <div className={classes.buttomPlayer__btnvolume}>
                                    <img class="volume" src='/volume.png'></img>
                                </div>
                            </div>
                        </div>
                        <div id="prCont" className={classes.buttomPlayer__innerBlock__progresscontainer}>
                            <div id="progress" className={classes.buttomPlayer__progress}></div>
                        </div>
                    </div>

                    <div className={classes.buttomPlayer__rightBlock}>
                        <div><img src='/burger.png'></img></div>
                    </div>
                    <audio id="audio" ></audio>
                </div>
            </div>
    )
}

export default SoundPlayer;