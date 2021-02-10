const Icon = (props) => {
    let size = "w-6 h-6";
    if (props.size)
        size = `w-${props.size} h-${props.size}`;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={size}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.icon} />
        </svg>
    )
}

export default Icon;