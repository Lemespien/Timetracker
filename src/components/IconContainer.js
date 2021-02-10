import Icon from "./IconComponent";
const IconContainer = (props) => {
    return (
        <div className="flex flex-grow justify-center border-r border-gray-900 items-center">
            <Icon icon={props.icon} />
        </div>
    )
}

export default IconContainer;