import React from 'react';
import {dateParser,hourParser,minParser,secParser,msParser} from '../../utility.js';
// class TimeDisplay extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return(
//             <div>
//                 <h3>Time Display Section Connected...</h3>
//             </div>
//         )
//     }
// }

// function TimeDisplay(props) {
    
//     const test = "functional stateless 'TimeDisplay' components implemented";

//     return <h3>{props.test}</h3>
// }
const TimeDisplay = ({stopTime}) => {

    const timeNow = new Date();
    const remainTime = stopTime.getTime() - timeNow.getTime();
    const days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    // const dateParser = time => Math.floor(time/ (1000 * 60 * 60 *24));
    const hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainTime % (1000 * 60)) / 1000);

    return (
        <div>
            <h3>TimeDisplay.jsx: {dateParser(remainTime)} Days {hourParser(remainTime)} hours {minParser(remainTime)} minutes {secParser(remainTime)} seconds...</h3>
        </div>
    )
}

export default TimeDisplay;

