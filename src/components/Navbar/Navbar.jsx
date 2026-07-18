import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";


// menu list 
const menus = [ {name: "Home",path: "/"},
                {name: "About",path: "/about"},
                {name: "Menu",path: "/menu"},
                {name: "Contact",path: "/contact"},
              ]

function Navbar () {
    return (
        <section className="bg-amber-100 py-4 px-5">
            <nav  className="flex justify-between items-center max-w-7xl  mx-auto ">
                {/* Logo */}
                <div  className="flex gap-3"> 
                    <img src={logo} alt="Cafe Delight Logo" className="w-10 h-10 rounded-full" />
                    <span className="text-2xl font-semibold uppercase tracking-wide text-amber-700">Cafe Delight</span>
                </div>
            
                {/* import list menu */}
                <ul className="flex gap-6">
                    {menus.map((menu) => (
                        <li key={menu.name}>
                        <NavLink
                            to={menu.path}
                            className={({ isActive }) =>
                            isActive
                                ? "text-amber-700 font-semibold border-b-2 border-amber-700"
                                : "hover:text-amber-700 transition"
                            }
                        >
                            {menu.name}
                        </NavLink>
                        </li>
                    ))}
                </ul>
            
                <button className="bg-orange-800 text-white px-5 py-2 rounded-lg
                                hover:bg-amber-700 hover:scale-105
                                    transition-all duration-300">
                    Reserve Table
                </button>

            </nav>
        </section>
    );
}

export default Navbar;