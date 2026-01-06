import { useState } from "react";
import { Link } from "react-router-dom";

const PublicNavbar = ({ toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false); 

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-black shadow">

      <h1 className="text-xl font-bold text-black dark:text-white">
        SecureAuth
      </h1>

      {/* Hamburger */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-black dark:text-white focus:outline-none"
        >
          ☰
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden">
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Register
            </Link>

            <button
              onClick={() => {
                toggleDarkMode();
                closeMenu();
              }}
              className="w-full text-left px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Dark/Light 
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavbar;

