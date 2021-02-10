import Icon from './IconComponent';

type Props = {
    icon: string,
    text: string,
}

const SidebarElement = (props: Props) => {
    return (
        <div className="flex flex-row bg-gray-800 p-4 items-center justify-between text-gray-300">
            <Icon icon={props.icon} size="8" />
            <h2 className="mr-4">{props.text}</h2>
        </div>
    )
}

export default SidebarElement;