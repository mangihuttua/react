import "./Navbar.css";
function Navbar () {
    return (
        <div className="navbar">
                < div className="">
                <img src="Logo.png"></img></div>
                <h1 className="navbar-brand">Cafe Delight </h1>
                <nav className="navbar-nav" id="navbar-nav">
                    <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;