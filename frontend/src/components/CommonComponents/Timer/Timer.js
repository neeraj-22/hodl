import React, { Fragment, useState, useEffect } from 'react'
import './Timer.css'

const Timer = () => {

    const [progress, setProgress] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress <= 0 ? 60 : prevProgress - 1
            );
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Fragment>
            <div className="circleProgress_wrapper">
                <div className="wrapper right">
                    <div className="circleProgress rightcircle right_cartoon"  ></div>
                </div>
                <div className="wrapper left">
                    <div className="circleProgress leftcircle left_cartoon"  ></div>
                </div>
                <span style={{color:"white"}}id="timer">{progress}</span>
            </div>
        </Fragment>
    )
}

export default Timer