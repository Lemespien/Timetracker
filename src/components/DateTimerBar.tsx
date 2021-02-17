import ICONS from '../resources/IconsCollection';
import Icon from './IconComponent';

interface DateObject {
    date: Date,
    project: string,
    title: string,
    duration: number,
}
type Prop = {
    info: DateObject,
}
const formatTime = (timer: number) => {
    const hours = Math.floor(timer / (60 * 60));
    const minutes = Math.floor((timer % (60 * 60)) / 60);
    const seconds = (timer % (60 * 60)) % 60;
    return { hours, minutes, seconds }
}
const getTimeString = (timer: number, excludeSeconds: boolean) => {
    const { hours, minutes, seconds } = formatTime(timer)
    const hourString = hours < 10 ? `0${hours}` : `${hours}`;
    const minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    if (excludeSeconds) return `${hourString}:${minuteString}`;

    const secondString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${hourString}:${minuteString}:${secondString}`;
}

const myFunc = (date: Date) => {
    const timeArray = date.toLocaleTimeString().split(":").splice(0, 2);
    const formattedStart = timeArray.reduce((a, b) => a + ":" + b)
    return formattedStart;
}

const getEndTime = (date: Date, duration: number) => {
    const timeArray = new Date(date.getTime() + duration * 1000).toLocaleTimeString().split(":").splice(0, 2);
    const formattedEnd = timeArray.reduce((a, b) => a + ":" + b);
    return formattedEnd;
}

const DateTimerBar = (props: Prop) => {
    return (
        <div className="flex flex-row flex-grow bg-gray-700 border border-gray-900 p-1 items-center justify-between text-white">
            <div className="flex flex-row items-center justify-between w-1/4 mr-auto">
                <p className="text-sm w-6 ml-2 bg-gray-800 text-center text-gray-200">10</p>
                <input
                    type="text"
                    className="flex-grow ml-2 mr-2 bg-transparent placeholder-gray-400"
                    placeholder="What are you working on?"
                    defaultValue={props.info.title} />
                <div className="flex flex-row flex-grow items-center justify-between w-36 h-12">
                    <Icon icon={ICONS.plus} />
                    <p>{props.info.project || "Project"}</p>
                </div>
            </div>
            <div className="flex flex-row w-1/2 justify-between mr-2">
                <Icon icon={ICONS.tag} />
                <Icon icon={ICONS.money} />
                <div className="flex flex-row w-28 justify-between">
                    <input type="text"
                        className="w-14 bg-transparent text-center text-white placeholder-gray-200"
                        placeholder="12:00"
                        defaultValue={myFunc(props.info.date)} />
                    <p>-</p>
                    <input type="text"
                        className="w-14 bg-transparent text-center text-white placeholder-gray-200"
                        placeholder="12:30"
                        defaultValue={getEndTime(props.info.date, props.info.duration)} />
                </div>
                <Icon icon={ICONS.calendar} />
                <p>duration</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ICONS.start[0]} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ICONS.start[1]} />
                </svg>
                <Icon icon={ICONS.menu} />
            </div>
        </div>
    )
}

export default DateTimerBar;