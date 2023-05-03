import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faList, faFileAudio } from '@fortawesome/free-solid-svg-icons'

import classes from './HomeContent.module.css';

const HomeContent = () => {
    return (
        <>
            <div className={classes.content}>

                <div className={classes.slide}>
                    <div className={classes.slogan}>
                        <h1>The simplest and most effective ID3 tag editor you can find online.</h1>
                        <p>MusicTagger is a <span>free</span> online tool to edit ID3 tags embedded in your audio files</p>
                    </div>
                    <div className={classes['upload-section']}>
                        <div className={classes['drop-area']}>
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faUpload} />
                                    Upload an Audio File
                                </button>
                            </div>
                            <div className={classes['or-phrase']}>
                                <p>To get started</p>
                                <p>or</p>
                            </div>
                            <h3>drop a file here</h3>
                        </div>
                    </div>
                </div>

                <div className={classes['cards-container']}>
                    <div className={classes.card}>
                        <FontAwesomeIcon icon={faList} className={classes.icon} />
                        <p>ID3 tags are a type of metadata that can be embedded in audio files and contain information such as artist name, album title, track number, and genre.</p>
                    </div>

                    <div className={classes.card}>
                        <FontAwesomeIcon icon={faFileAudio} className={classes.icon} />
                        <div>
                            <p> Support for a wide range of audio file formats, including .mp3, .m4a, .wav, .flac and many more.</p>
                            <p style={{ margin: 0 }}>Sort your music library in the blink of an eye!</p>
                        </div>
                    </div>
                </div>


                <svg className={`${classes['wave-background']} ${classes.wave1}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#aecfd6" fill-opacity="1" d="M0,0L48,21.3C96,43,192,85,288,106.7C384,128,480,128,576,112C672,96,768,64,864,58.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                {/* <svg className={`${classes['wave-background']} ${classes.wave2}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e4eff1" fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,170.7C274.3,160,343,192,411,176C480,160,549,96,617,74.7C685.7,53,754,75,823,90.7C891.4,107,960,117,1029,112C1097.1,107,1166,85,1234,80C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
                <svg className={`${classes['wave-background']} ${classes.wave2}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e4eff1" fill-opacity="1" d="M0,128L34.3,117.3C68.6,107,137,85,206,112C274.3,139,343,213,411,213.3C480,213,549,139,617,122.7C685.7,107,754,149,823,170.7C891.4,192,960,192,1029,165.3C1097.1,139,1166,85,1234,74.7C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>
        </>
    );
};

export default HomeContent;