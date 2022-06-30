import { Menubar } from 'primereact/menubar'
import Logout from '../auth/Logout'
import { items } from '../models/MenuLinks'
const Header = () => {
     return (
        <Menubar model={items} end={<Logout />} />
     )
}

export default Header