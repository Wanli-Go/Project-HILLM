import React from "react";
import Stopwatch from "./stopwatch";
import './index.css';

const LoadingVisual : React.FC = () => {
    return <div className="loader">
        <div className="loader-icon"></div>
        <Stopwatch/>
    </div>
}

export default LoadingVisual;