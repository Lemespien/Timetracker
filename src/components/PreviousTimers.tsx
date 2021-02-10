import DateHeader from './DateHeader';
import DateTimerBar from './DateTimerBar';

type Props = {
    title: string,
    totalTime: string,
}
const PreviousTimers = (props: Props) => {

    return (
        <div className="flex flex-col flex-grow bg-gray-800 mb-5 pb-1">
            <DateHeader title={props.title} totalTime={props.totalTime} />
            <DateTimerBar />
        </div>
    );
}

export default PreviousTimers