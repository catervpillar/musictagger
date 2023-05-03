import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCompactDisc, faUser, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

import classes from './TaggerContent.module.css';

import Toolbar from './Toolbar';
import AlbumCover from './AlbumCover';

const TaggerContent = () => {

    return (
        <>
            <div className={classes.content}>
                <Toolbar />
                <div className={classes.parent}>
                    <AlbumCover />
                    <div className={`${classes.item} ${classes.div2}`}> 2</div>
                    <div className={classes.div3}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <div className={classes['main-input']}>
                                <FontAwesomeIcon icon={faMusic} />
                                <input id="title" type="text" name="email" placeholder='Type your track title here' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="artist">Artist</label>
                            <div className={classes['main-input']}>
                                <FontAwesomeIcon icon={faUser} />
                                <input id="artist" type="text" name="artist" placeholder='Type your song artist here' />
                            </div>
                        </div>
                        <div className={classes['album-and-year']}>
                            <div className={classes.album}>
                                <label htmlFor="album">Album</label>
                                <div className={classes['main-input']}>
                                    <FontAwesomeIcon icon={faCompactDisc} />
                                    <input id="album" type="text" name="album" placeholder='Type your song album here' />
                                </div>
                            </div>
                            <div className={classes['release-date']}>
                                <label htmlFor="album">Release Year</label>
                                <div className={classes['main-input']}>
                                    <FontAwesomeIcon icon={faCalendarDay} />
                                    <input id="release-date" type="number" name="release-year" placeholder='YYYY' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.div4}> 4</div>
                    <div className={classes.div5}> 5</div>
                    <div className={classes.div6}> 6</div>
                    <div className={classes.div7}> 7</div>
                </div>
            </div>
        </>
    );
};

export default TaggerContent;