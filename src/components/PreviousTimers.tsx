import DateHeader from './DateHeader';
import DateTimerBar from './DateTimerBar';

interface DateObject {
    date: Date,
    project: string,
    title: string,
    duration: number,
}

interface Props {
    title: string,
    totalTime: string,
    children: DateObject[]
}
const PreviousTimers = (props: Props) => {

    return (
        //need to add DateTimerBar based on props
        <div className="flex flex-col bg-gray-800 mb-5 pb-1">
            <DateHeader title={props.title} totalTime={props.totalTime} />
            {props.children.map((child, index) => <DateTimerBar info={child} key={index} />)}
        </div>
    );
}

export default PreviousTimers