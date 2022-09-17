import {Box, Navbar, NavLink} from '@mantine/core'
import {IconMenu2, IconDots, IconRobot} from '@tabler/icons'
import Logo from '../images/LogoWhite.png'
import { Link, useLocation  } from 'react-router-dom'
function Sidebar(){

    const location = useLocation();

    return(
        <div className='Sidebar'>
            <Box sx={{ width: 240 }}>
                <Navbar.Section>
                    <img src={Logo} className='logoSidebar'/>
                    <div className='line lineSidebar'/>
                </Navbar.Section>
                <Navbar.Section>
                    <NavLink className="SidebarItem" icon={<IconMenu2 size={16} stroke={1.5} />} childrenOffset={28}     label="Main" component={Link} to="/" active={location.pathname === '/'} />
                    <NavLink
                        className="SidebarItem"
                        label="Katalog"
                        icon={<IconDots size={16} stroke={1.5} />}
                        childrenOffset={28}
                        defaultOpened                     
                    >
                        <NavLink className="SidebarItem" label="Весь каталог" component={Link} to="/katalog" active={location.pathname === '/katalog'} />
                        <NavLink className="SidebarItem" label="Электроника" component={Link} to="/electronics" active={location.pathname === '/electronics'} />
                        <NavLink className="SidebarItem" label="Другие товары" component={Link} to="/other" active={location.pathname === '/other'} />

                    </NavLink>
                </Navbar.Section>
            </Box>
        </div>
    )
}

export default Sidebar
