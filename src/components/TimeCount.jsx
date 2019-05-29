import React from 'react';

const TimeCount = ({timeUnit, remaingTime, unitParser}) => {
    return (
        <div>
            <h3 className={timeUnit} >{`${unitParser(remaingTime)} ${timeUnit}`}</h3>
        </div>
    )
}

export default TimeCount;