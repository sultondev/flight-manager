// importing style files to the component
import "./styles/NavBar.style.sass";
// Importing functions from libraries
import { NavLink } from "react-router-dom";

// Declare the component
const NavBar = () => {
  const links = [
    {
      name: "Airports",
      path: "/",
      active: true,
    },
    {
      name: "Flight",
      path: "/flight",
      active: false,
    },
  ];
  return (
    <nav className="nav">
      <ul className="nav-list">
        {links &&
          links.map((link) => (
            <li className="nav-list__item" key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link-chosen"
                    : "nav-list__link"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
export default NavBar;
