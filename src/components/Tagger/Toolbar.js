import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh, faEraser, faUpload, faDownload, faFileAudio } from '@fortawesome/free-solid-svg-icons'

import classes from './Toolbar.module.css';

const Toolbar = () => {
    return (
        <nav className={classes.toolbar}>
            <div className={classes['current-file']}>
                <p>NOW EDITING</p>
                <div className={classes.name}>
                    <FontAwesomeIcon icon={faFileAudio} />
                    <h3>T-Square - Truth.mp3</h3>
                </div>
            </div>
            <div className={classes.actions}>
                <button>
                    <FontAwesomeIcon icon={faRefresh} />
                    Reset Tags
                </button>
                <button>
                    <FontAwesomeIcon icon={faEraser} />
                    Clear All Tags
                </button>
                <button>
                    <FontAwesomeIcon icon={faUpload} />
                    Upload New File
                </button>
                <button className={classes['download-button']}>
                    <FontAwesomeIcon icon={faDownload} />
                    Download My Song!
                </button>
            </div>
        </nav>
    );
};

export default Toolbar;