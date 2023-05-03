import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh, faEraser, faUpload } from '@fortawesome/free-solid-svg-icons'

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
                            <input id="title" type="text" name="email" placeholder='Enter your track title here' />
                        </div>
                        <div>
                            <label htmlFor="artist">Artist</label>
                            <input id="artist" type="text" name="artist" placeholder='Enter your song artist here' />
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