import { Link } from "react-router-dom";
import logo from '../../src/assets/SonaraLogo.png'
import Search from "../ui/SearchBar";

function Nav({ token }){
    return(
        <nav className="nar-bar">
            <div className="logo-container">
                <Link to='/home'>
                <img src={logo} alt="Sonara Logo" className="logo" />
                </Link>
            </div>
            <div className="nav-links">
                <Link to='/home'>Home</Link>
                <Link to='/playlist'>Playlist</Link>
                {token ? <Link to='/account'>Account</Link> : <Link to='auth'>Login</Link>}
                <Search onSearch={(query) => console.log("Searching for:", query)} />
            </div>
        </nav>
    )
}

export default Nav;