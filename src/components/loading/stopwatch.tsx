import React, { useEffect, useRef, useState } from "react";

type StopWatchProps = {
    className?: string
}

/**
 * 
 * @param className 
 * @returns A stopwatch component that immediately starts the time the component mounts.
 */

const Stopwatch : React.FC<StopWatchProps> = ({className}) => {
    const [runningTime, setRunningTime] = useState(0);
    const initialTime = useRef<number>(0);
    const isUnmounted = useRef<boolean>(false); // Track if the component is mounted

    useEffect(()=>{
        isUnmounted.current = false;
        initialTime.current = Date.now();

        const updateTime = () => {
            if(isUnmounted.current) return;
            const elaspedTime = Date.now() - initialTime.current;
            setRunningTime(elaspedTime);
            requestAnimationFrame(updateTime);
        }
        const animationFrameId = requestAnimationFrame(updateTime);

        // Cleanup: Mark the component as unmounted on unmount and cancel the rAF
        return () => {
            isUnmounted.current = true;
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const formatTime = (milSecond: number) : string => {
        const aTenthOfSecond = Math.floor((milSecond % 1000) / 100);
        const second = Math.floor((milSecond / 1000) % 60);
        const minutes = Math.floor((milSecond / (1000 * 60)));
        return `${minutes > 0 ? `${minutes} minute(s) ` : ''}${second}.${aTenthOfSecond} seconds`
    }

    return <span className={className}>
        {`${formatTime(runningTime)} passed...`}
    </span>
}

export default Stopwatch