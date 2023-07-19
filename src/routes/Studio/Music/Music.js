import React, { useState } from 'react'
import classes from './../../../style.module.scss'
import ContextData from './../../../context/Data/ContextData';
import { Link } from 'react-router-dom';
import NET from './../../../network';
import StudioOffice from './../../../layouts/office/StudioOffice';

const Music = () => {
    const { stateData, dispatchData } = React.useContext(ContextData);
    // console.log(stateData);
    const genres = stateData.genres;

    React.useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response =
                    await fetch(`${NET.APP_URL}/genres`);
                if (response.status == 200) {
                    const result = await response.json()
                    // console.log(result);
                    dispatchData({
                        type: "FETCH_GENRES",
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

    const [title, setTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const type = 'music';
    const [file, setFile] = useState('');
    const [img, setImg] = useState('');
    const [genreId, setGenreId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const sound = { title, authorName, type, file, img, genreId }

        console.log(sound);

        fetch('http://127.0.0.1:8000/api/sound', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sound)
        }).then(() => {
            console.log('new sound added');
        })
    }

    return (
        <StudioOffice>
            <div className={classes.titlesliderLight}>
                Загрузить музыку
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Название трека:</label>
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Название трека' className={classes.inputpanel}></input>
                    <label>Исполнтель:</label>
                    <input type='text' value={authorName} onChange={(e)=>setAuthorName(e.target.value)} placeholder='Исполнтель' className={classes.inputpanel}></input>
                    <label>Жанр:</label>
                    <select value={genreId} onChange={(e)=>setGenreId(e.target.value)} className={classes.inputpanel}>
                        {
                            genres.map((elem) => {
                                return (
                                    <option value={elem.id}>{elem.title}</option>
                                )
                            })
                        }
                    </select>
                    <label>Путь к аудио файлу:</label>
                    <input type='file' value={file} onChange={(e)=>setFile(e.target.value)} placeholder='Путь к треку' className={classes.inputpanel}></input>
                    <label>Путь к абложке трека:</label>
                    <input type='file' value={img} onChange={(e)=>setImg(e.target.value)} placeholder='Путь к треку' className={classes.inputpanel}></input>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        </StudioOffice>
    )

}

export default Music;