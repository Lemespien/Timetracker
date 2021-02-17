type Props = {
    title: string,
    totalTime: string,
}
const DateHeader = (props: Props) => {
    return (
        <div className="flex justify-between p-2 text-gray-300">
            <p >{props.title}</p>
            <div className="flex flex-row items-center justify-between w-28 mr-1">
                <p className="text-sm">Total:</p>
                <h2 className="text-lg">{props.totalTime}</h2>
            </div>
        </div>
    );
}

export default DateHeader;