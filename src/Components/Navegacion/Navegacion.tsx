import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { seleccionarPost } from "../../Redux/estados/Post.estado";

function Navegacion() {
  const [toggle, setToggle] = useState(true);

  const obtenerPosts = useSelector(seleccionarPost);
  console.log(obtenerPosts.length);

  let activeStyle = {
    backgroundColor: "rgb(55, 65, 81, 1)",
    color: "white",
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-40 bg-gray-800 p-2.5 mb-1">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div>
          <NavLink to="/">
          <img
            src="/logoposts.png"
            className="h-8"
          />
          </NavLink>
          
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="text-white h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            toggle ? "hidden " : ""
          }w-full md:flex md:items-center md:w-auto`}
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
                className="md:p-4 py-2 block text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/favoritos"
                className="md:p-4 py-2 block text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
              >
                Favoritos :{" "}
                <span className="rounded-full bg-blue-400 p-2 text-black font-bold">
                  {obtenerPosts.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navegacion;
