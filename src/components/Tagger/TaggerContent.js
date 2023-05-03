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
                    {/* <div className={`${classes.item} ${classes.div2}`}> 2</div> */}
                    <div className={classes['main-tags']}>
                        <p>MAIN TAGS</p>
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
                                <input id="artist" type="text" name="artist" placeholder='Type your track artist here' />
                            </div>
                        </div>
                        <div className={classes['album-and-year']}>
                            <div className={classes.album}>
                                <label htmlFor="album">Album</label>
                                <div className={classes['main-input']}>
                                    <FontAwesomeIcon icon={faCompactDisc} />
                                    <input id="album" type="text" name="album" placeholder='Type your track album here' />
                                </div>
                            </div>
                            <div className={classes['release-year']}>
                                <label htmlFor="release-year">Release Year</label>
                                <div className={classes['main-input']}>
                                    <FontAwesomeIcon icon={faCalendarDay} />
                                    <input id="release-date" type="number" name="release-year" placeholder='YYYY' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes['additional-tags']}>
                        <p>ADDITIONAL TAGS</p>
                        <div className={classes['track-disc-genre']}>
                            <div className={classes['track-no']}>
                                <label htmlFor="track-no">Track No.</label>
                                <input id="track-no" type="text" name="track-no" placeholder='X/Y' />
                            </div>
                            <div className={classes['disc-no']}>
                                <label htmlFor="disc-no">Disc No.</label>
                                <input id="disc-no" type="text" name="disc-no" placeholder='X/Y' />
                            </div>
                            <div className={classes.genre}>
                                <label htmlFor="genre">Genre</label>
                                <input id="genre" type="text" name="genre" placeholder='Type your track genre here' />
                            </div>
                        </div>
                        <div className={classes['album-artist-composer']}>
                            <div className={classes['album-artist']}>
                                <label htmlFor="album-artist">Album Artist</label>
                                <input id="album-artist" type="text" name="album-artist" placeholder='Type your track album artist here' />
                            </div>
                            <div className={classes['composer']}>
                                <label htmlFor="composer">Composer</label>
                                <input id="composer" type="text" name="composer" placeholder='Type your track composer(s) here' />
                            </div>
                        </div>
                        {/* <div className={classes['comment']}>
                            <label htmlFor="comment">Comment</label>
                            <input id="comment" type="text" name="comment" placeholder='Type any comment here' />
                        </div> */}
                    </div>
                    {/* <div className={classes.div5}> 5</div>
                    <div className={classes.div6}> 6</div>
                    <div className={classes.div7}> 7</div> */}
                </div>
            </div>
        </>
    );
};

export default TaggerContent;