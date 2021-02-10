type iconProps = {
    icon: string,
    size?: string,
}

const Icon = ({ icon, size = "6" }: iconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-${size} h-${size}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
    )
}

export default Icon;