import ICONS from '../resources/IconsCollection';
import Icon from './IconComponent';
const DateTimerBar = () => {
    return (
        <div className="flex flex-row flex-grow bg-gray-700 border border-gray-900 p-1 items-center justify-between text-white">
            <div className="flex flex-row items-center justify-between w-1/6 mr-auto">
                <p className="text-sm w-6 ml-2 bg-gray-800 text-center text-gray-200">10</p>
                <input type="text" className="flex-grow ml-2 mr-2 bg-transparent placeholder-gray-400" placeholder="What are you working on?" />
                <div className="flex flex-row items-center justify-between w-20 h-12">
                    <Icon icon={ICONS.plus} />
                    <p>Project</p>
                </div>
            </div>
            <div className="flex flex-row w-1/2 justify-between mr-2">
                <Icon icon={ICONS.tag} />
                <Icon icon={ICONS.money} />
                <div className="flex flex-row w-28 justify-between">
                    <input type="text" className="w-14 bg-transparent text-center text-white placeholder-gray-200" placeholder="12:00" />
                    <p>-</p>
                    <input type="text" className="w-14 bg-transparent text-center text-white placeholder-gray-200" placeholder="12:30" />
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