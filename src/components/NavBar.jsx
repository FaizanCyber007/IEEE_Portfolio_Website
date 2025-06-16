import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import ieeeLogo from "/images/IEEELogo.png"; 

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.8)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 h-16">
        {/* Left: Logo */}
        <div className="w-1/4">
          <a href="/" className="logo flex items-center">
            <img
              src={ieeeLogo}
              alt="Logo"
              className="logo-img h-20 w-auto sm:h-25 md:h-35 lg:h-35 lg:mt-10 md:mt-6 sm:mt-2 transition-all duration-300"
            />
          </a>
        </div>

        {/* Center: Navigation */}
        <div className="w-2/4 flex justify-center">
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map(({ link, name, subLinks }) => (
                <li
                  key={name}
                  className="group relative"
                  onMouseEnter={() => setDropdown(name)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <a
                    href={link}
                    className="px-3 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:text-white flex items-center gap-2"
                  >
                    {name}
                    {subLinks && subLinks.length > 0 && (
                      <span
                        className={`ml-1 transition-transform duration-200 ${
                          dropdown === name ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </a>
                  {subLinks && subLinks.length > 0 && (
                    <ul
                      className={`absolute left-0 mt-2 bg-black bg-opacity-95 rounded-xl shadow-2xl min-w-[200px] py-2 transition-all duration-300 ${
                        dropdown === name ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
                      }`}
                    >
                      {subLinks.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.link}
                            className="block px-5 py-2 text-white hover:bg-blue-700 hover:text-white rounded-lg transition-all duration-200"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              
            </ul>
          </nav>
        </div>

        {/* Right: Mobile Menu Button */}
        <div className="w-1/4 flex justify-end">
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(({ link, name, subLinks }) => (
              <li key={name} className="w-full text-center">
                <a 
                  href={link} 
                  className="block py-2 text-white hover:bg-blue-700 transition-all duration-200" 
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
                {subLinks && subLinks.length > 0 && (
                  <ul className="bg-black bg-opacity-50">
                    {subLinks.map((sub) => (
                      <li key={sub.name}>
                        <a
                          href={sub.link}
                          className="block py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-700 transition-all duration-200"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;