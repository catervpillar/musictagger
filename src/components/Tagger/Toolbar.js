import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh, faEraser, faUpload } from '@fortawesome/free-solid-svg-icons'

import classes from './Toolbar.module.css';

const Toolbar = () => {
    return (
        <nav className={classes.toolbar}>
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
            <button>Download My Song!</button>
        </nav>
    );
};

export default Toolbar;