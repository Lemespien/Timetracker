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

const formatTime = (timer: number) => {
  const hours = Math.floor(timer / (60 * 60));
  const minutes = Math.floor((timer % (60 * 60)) / 60);
  const seconds = (timer % (60 * 60)) % 60;
  return { hours, minutes, seconds }
}
const getTimeString = (timer: number) => {
  const { hours, minutes, seconds } = formatTime(timer)
  const hourString = hours < 10 ? `0${hours}` : `${hours}`;
  const minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${hourString}:${minuteString}:${secondString}`;
}

type DateObject = {
  date: Date,
  project: string,
  title: string,
  duration: number,
}

type date = {
  [key: number]: DateObject[]
}

type month = {
  [key: string]: date
}

const App = () => {
  const elements = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "placeholder", "placeholder"];
  useEffect(() => {

  })
  const dateDict: month = {}

  const filterDates = (date: DateObject) => {
    const monthShort = locale["en"].month_names_short[date.date.getMonth()];
    const dateOfDay = date.date.getDate();
    if (!(monthShort in dateDict)) {
      const dateObject: date = {
        [dateOfDay]: [date],
      }
      dateDict[monthShort] = dateObject;

    } else {
      const dateArray = [date];
      if (!(dateOfDay in dateDict[monthShort])) {
        dateDict[monthShort][dateOfDay] = dateArray;
      } else {
        dateDict[monthShort][dateOfDay].push(date);
      }
    }
  }

  MOCKDATA.dates.map((date, index) => filterDates(date));

  // run this when creating the total time for element
  const keys = Object.keys(dateDict);
  let previousTimers: JSX.Element[] = [];
  keys.forEach(key => {
    const dateKeys = Object.keys(dateDict[key]);
    dateKeys.forEach(dateKey => {
      const date = parseInt(dateKey);
      const total = dateDict[key][date].reduce<number>((a, b) => a + b.duration, 0);
      const totalString = getTimeString(total);
      console.log(totalString);

      const children = dateDict[key][date];
      console.log(children);

      const currentDate = dateDict[key][date][0];
      const month = locale["en"].month_names_short[currentDate.date.getMonth()];
      const weekday = locale["en"].week_names_short[currentDate.date.getDay()]; // weekday
      const dateString = `${weekday}, ${month} ${currentDate.date.getDate()}`;

      previousTimers.push(<PreviousTimers title={dateString} children={children} totalTime={totalString} key={key + "-" + dateKey} />);
    })
  })
  // const dateKeys = Object.keys(dateDict[keys[0]])
  // const date = parseInt(dateKeys[0]);
  // console.log(dateDict[keys[0]][date]);


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
          {previousTimers}
          I am Main Content
        </div>
      </div>
    </div >
  )
}

export default App;