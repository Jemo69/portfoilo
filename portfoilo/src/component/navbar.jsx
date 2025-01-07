function NavBar(){
    return(
        <nav>
            <div className="navbar-brand">
                <Link to="/"><h1>Movie App</h1></Link>
            </div>
            <div className="nav-links">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/favorites' className="nav-link">Favorites</Link>

            </div>
        </nav>
    )
}
export default NavBar