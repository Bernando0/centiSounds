import React, {useState} from 'react'
import classes from './../../style.module.scss'
import ContextData from './../../context/Data/ContextData';
import BeatItem from './modules/BeatItem';
import { Link, Navigate } from 'react-router-dom';
import NET from './../../network';
import Office from './../../layouts/office/Office';
import { useAuth } from './../../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from './../../store/slices/userSlice'



const Beats = () => {
    const { isAuth, email } = useAuth()
    const dispatch = useDispatch();


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

      //Player
      const player = document.querySelector('.player'),
      play = document.querySelector('.play'),
      prev = document.querySelector('.prev'),
      volume = document.querySelector('.volume'),
      title = document.querySelector('.title'),
      author = document.querySelector('.author'),
      title_image = document.querySelector('.title_image'),
      imgSrc = document.querySelector('.imgSrc');
  var progress = document.querySelector('#progress');
  var audio = document.querySelector('#audio');
  var progressContainer = document.querySelector('#prCont');


  const openPlayer = (elem) => {
      setIsPlaying('/play.png');
      title.innerHTML = elem.title;
      title_image.src = elem.imgPath;
      author.innerHTML = elem.authorName;
      audio.src = elem.filePath;
      progress.style.width = 0;
      audio.addEventListener('timeupdate', updateProgress);
      progressContainer = document.querySelector('#prCont');
      progressContainer.addEventListener('click', setProgress);
  }
  const [isPlaying, setIsPlaying] = useState('/play.png');

  const playSound = () => {
      setIsPlaying('/pause.png');
      audio.play();
  }
  const pauseSound = () => {
      setIsPlaying('/play.png');
      audio.pause();
  }

  const addEvent = () => {
      if (isPlaying == '/pause.png') {
          pauseSound();
      }
      else {
          playSound();
      }
  }

  const updateProgress = (e) => {
      const { duration, currentTime } = e.srcElement;
      const progressPrecents = (currentTime / duration) * 100;
      progress.style.width = `${progressPrecents}%`;
  }

  const setProgress = (e) => {
      const width = progressContainer.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
  }
  //Player


    return isAuth ? (
        <div>


            <Office>
                <div>
                    <div className={classes.titleslider}>
                        <Link to='/beatslist'>Популярные</Link>
                    </div>
                    <div className={classes.slider}>
                        {

                            beats.map((elem, index) => {
                                return (
                                    <div onClick={() => { openPlayer(elem) }} className={classes.pointerblock} >
                                    <BeatItem data={elem} key={index}></BeatItem>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Office>
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
        </div>
    ) : (<Navigate to="/login"></Navigate>)

}

export default Beats;