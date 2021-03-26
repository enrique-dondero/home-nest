import React from 'react';

import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";

const styles = {
    innerCircleWrap: {
        padding: "15%",
        width: '100%',
        height: '100%'
    },

    innerCircle: {
        borderRadius: '50%',
        background: 'linear-gradient(to top right, #49D7ED, #35F6D0)',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        verticalAlign: 'middle',
        lineHeight: "63px",
    }
};

export default function CommentsProgress({ progress }) {
    return (
        <div style={{width: 90, height: 90}}>
            <CircularProgressbarWithChildren
                value={progress}
                strokeWidth={5}
                styles={buildStyles({
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Colors
                    pathColor: '#49D7ED',
                    trailColor: '#f1f1Fc',
                })}
            >
                <div style={styles.innerCircleWrap}>
                    <div style={styles.innerCircle}>
                        {progress}
                    </div>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}
