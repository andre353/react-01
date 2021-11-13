import React from "react";
import './ChartBar.css';

const ChartBar = props => {
    // setting css height of the ChartBar dinamycally
    let barFillHeight = '0%';

    // if for the given dataPoint we have maxValue greater than 0 = we have expenses in the month
    if (props.maxValue > 0) {
        // getting percentage value, round to the nearest int, converting to a string with % sign
        barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
    }


    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
};

export default ChartBar;