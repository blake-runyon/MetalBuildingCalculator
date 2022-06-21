import { Menubar } from 'primereact/menubar'
import { items } from '../models/MenuLinks'
const Header = () => {
     return (
        <Menubar model={items} />
     )
}

export default Header