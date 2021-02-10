import ICONS from "../resources/IconsCollection";
import Icon from "./IconComponent";
import IconContainer from "./IconContainer";
import { useState, useEffect } from "react";

const CurrentTimer = () => {
    const [workingTitle, setWorkingtitle] = useState("What are you working on?");
    const [timer, setTimer] = useState(0);
    const [timeString, setTimeString] = useState("00:00:00");
    const [active, setActive] = useState(false);
    useEffect(() => {

        const formatTime = (timer) => {
            const hours = Math.floor(timer / (60 * 60));
            const minutes = Math.floor((timer % (60 * 60)) / 60);
            const seconds = (timer % (60 * 60)) % 60;
            const hourString = hours < 10 ? `0${hours}` : `${hours}`;
            const minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const secondString = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${hourString}:${minuteString}:${secondString}`;
        }

        if (localStorage.getItem("today") !== null && timer === 0) {
            const { workingTitle, timer } = JSON.parse(localStorage.getItem("today"));
            setWorkingtitle(workingTitle);
            setTimer(timer);
            setTimeString(formatTime(timer));
        }

        const updateTimer = () => {
            setTimer(timer + 1);
            setTimeString(formatTime(timer));
            const savingObject = {
                workingTitle: workingTitle,
                timer: timer,
                date: Date.now(),
            }
            localStorage.setItem("today", JSON.stringify(savingObject))
        }

        if (active) {
            const timerID = setInterval(updateTimer, 1000);
            // Clear timeout if the component is unmounted
            return () => clearInterval(timerID);
        } else {

        }
    }, [active, workingTitle, timer]);



    const toggleTimer = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    }

    const updateWorkingTitle = (e) => {
        setWorkingtitle(e.target.value);
    }

    return (
        <div className="h-1/3 bg-gray-700 border border-gray-900 mb-5">
            <div className="flex flex-row h-14 items-center justify-between p-2">
                <input type="text" placeholder="What are you working on?" className="w-1/3 h-8 bg-transparent" onChange={updateWorkingTitle} value={workingTitle} />
                <div className="flex flex-row w-20 justify-between text-blue-500 mr-4 cursor-pointer">
                    <Icon icon={ICONS.plus} />
                    <p>Project</p>
                </div>
            </div>
            <div className="flex flex-row justify-between h-10 border-t border-gray-900">
                <IconContainer icon={ICONS.tag} />
                <IconContainer icon={ICONS.money} />
                <div className="flex flex-row w-48 justify-between ml-5 p-2 items-center text-gray-200">
                    <p className="font-bold">{timeString}</p>
                    <button className="bg-blue-500 w-14 h-6 rounded text-white text-xs" onClick={toggleTimer}>{active ? "STOP" : "START"}</button>
                    <Icon icon={ICONS.menu} />
                </div>
            </div>
        </div>
    );
}

export default CurrentTimer;