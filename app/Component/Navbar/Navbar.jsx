import Link from "next/link";
import Style from './navbar.module.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
    return (
        <div className={Style.navbar}>
            <div className="container">
                <div className={Style.menuContainer}>
                    <div className={Style.leftMenu}>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                    <div className={Style.rightMenu}>
                        <h1>0</h1>
                    </div>
               </div>
            </div>
        </div>
    );
}