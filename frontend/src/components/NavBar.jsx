import { Link } from "react-router-dom"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorite" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar
