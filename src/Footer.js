import React from 'react';
import './footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <p>Album and song details</p>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="foter_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <p>Volume controls</p>
            </div>

        </div>
    )
}

export default Footer;