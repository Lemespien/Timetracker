import ICONS from './resources/IconsCollection';
import MOCKDATA from "./mockdata/MOCKDATA"
import Icon from './components/IconComponent';
import CurrentTimer from "./components/CurrentTimer";
import Sidebar from "./components/Sidebar";
import PreviousTimers from "./components/PreviousTimers";
import { useEffect } from "react";
const locale = {
  en: {
    month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    week_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    week_names_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
};

const formatTime = (timer) => {
  const hours = Math.floor(timer / (60 * 60));
  const minutes = Math.floor((timer % (60 * 60)) / 60);
  const seconds = (timer % (60 * 60)) % 60;
  const hourString = hours < 10 ? `0${hours}` : `${hours}`;
  const minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${hourString}:${minuteString}:${secondString}`;
}

const App = () => {
  const elements = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "placeholder", "placeholder"];

  useEffect(() => {

  })
  return (
    <div className="flex flex-col h-full text-gray-400">
      <div className="flex bg-gray-800 h-14 p-4 items-center justify-between text-blue-500">
        <div className="flex flex-row justify-between w-1/6">
          <Icon icon={ICONS.menu} size="8" />
          <h2 className="text-2xl font-bold">App Title</h2>
        </div>
        <div className="flex flex-row w-1/5 justify-between">
          <Icon icon={ICONS.clock} />
            right side
        </div>
      </div>
      <div className="flex flex-row h-full bg-green-500">
        <Sidebar />
        <div className="flex flex-col flex-grow bg-gray-600 p-4">
          <CurrentTimer />
          {
            MOCKDATA.timers.map((timer, index) => {
              console.log(timer);
              const durations = timer.times.map(time => time.duration);
              const totalDuration = durations.reduce((a, b) => a + b);
              const totalString = formatTime(totalDuration);
              const dateObject = new Date();
              console.log(new Date(timer.times[0].start).getHours(), new Date(timer.times[0].start).getMinutes());
              const timerDate = timer.times[0].start;
              const weekday = locale.en.week_names_short[dateObject.getDay(timerDate)];
              const month = locale.en.month_names_short[dateObject.getMonth(timerDate)];
              const dateString = `${weekday}, ${month} ${dateObject.getDate(timerDate)}`;
              // const weekday = locale["en"][timer.times[0].start.getDay()]
              return <PreviousTimers title={dateString} totalTime={totalString} key={index} />
            })
          }
          {elements.map((value, index) => {
            return (
              <PreviousTimers title={value} totalTime="00:57:26" key={index} />
            )
          })}
          I am Main Content
        </div>
      </div>
    </div >
  )
}

export default App;