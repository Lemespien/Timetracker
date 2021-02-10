import Icon from "./IconComponent";

type Props = {
    icon: string,
}

const IconContainer = (props: Props) => {
    return (
        <div className="flex flex-grow justify-center border-r border-gray-900 items-center">
            <Icon icon={props.icon} />
        </div>
    )
}

export default IconContainer;