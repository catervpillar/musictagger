import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import classes from './AlbumCover.module.css';

const AlbumCover = () => {
    const [albumCover, setAlbumCover] = useState('');

    const setAlbumCoverHandler = () => {
        setAlbumCover('https://sp.arena.emtg.jp/image/arena/album/tsquare/new/VRCL2112-B-vrcl-2055-TRUTH.jpg');
    };

    const deleteALbumCoverHandler = () => {
        setAlbumCover('');
    };

    return (
        <div className={`item ${classes['album-cover']}`}>
            {!albumCover && (
                <div className={classes.default} onClick={setAlbumCoverHandler}>
                    <div className={classes['default-content']}>
                        <FontAwesomeIcon icon={faImage} className={classes["image-icon"]} />
                        <div className={classes['upload-button']}>
                            <FontAwesomeIcon icon={faUpload} />
                            Upload Cover
                        </div>
                    </div>
                </div>
            )}
            {albumCover && <img src={albumCover} alt="Album Cover" />}
            {albumCover && <div className={classes.overlay}>
                <div className={classes.actions}>
                    <button className={classes.button}>
                        <FontAwesomeIcon icon={faUpload} className={''} />
                        Change Cover
                    </button>
                    <button onClick={deleteALbumCoverHandler} className={classes.button}>
                        <FontAwesomeIcon icon={faTrash} className={''} />
                        Delete Cover
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default AlbumCover;