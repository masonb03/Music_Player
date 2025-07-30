import { Link } from "react-router-dom";

function Nav({ token }){
    return(
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/playlist'>Playlist</Link>
            {token ? <Link to='/account'>Account</Link> : <Link to='auth'>Login</Link>}
        </nav>
    )
}

export default Nav;