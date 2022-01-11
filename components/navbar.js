import { navigationItems } from '../const/navbarList';

const NavBar = ({ classes }) => {
    return (
        <nav
            className={`${
                classes ? 'block' : 'hidden'
            } sm:inline-flex list-none font-medium text-hci-lila ${classes}`}
        >
            {navigationItems.map((item) => (
                <li
                    key={item}
                    className="px-5 py-2 whitespace-nowrap w-min hover:bg-hci-lila hover:bg-opacity-50 hover:text-white cursor-pointer"
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBar;
