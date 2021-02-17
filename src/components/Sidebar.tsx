import ICONS from "../resources/IconsCollection";
import SidebarElement from './SidebarElement';

const Sidebar = () => {
    const sideElements = ["Time Tracker", "Calendar", "Dashboard", "Reports"];
    const icons = [
        ICONS.clock,
        ICONS.calendar,
        ICONS.dashboard,
        ICONS.reports,
    ];

    return (
        <div className="flex flex-col bg-gray-800 w-52">
            {
                sideElements.map((value, index) => <SidebarElement text={value} icon={icons[index]} key={index} />)
            }
          I am a sidebar
        </div>
    );
}

export default Sidebar;