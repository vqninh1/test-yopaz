import { Link } from 'react-router-dom';
import { BiSun } from 'react-icons/bi';
import { AiFillAlipayCircle } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { HiMoon } from 'react-icons/hi2';
import { FaBars } from 'react-icons/fa';

const Header = ({}) => {
  const whiteTheme = useRef();
  const blackTheme = useRef();

  const menuRef = useRef(null);

  const [theme, setTheme] = useState('light');
  const [dropDowMenu, setDropDownMenu] = useState(false);

  const handleBgMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.theme;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.theme = theme;
    document.body.classList.toggle('white-theme', theme === 'light');
  }, [theme]);

  const toggleDropDown = (e) => {
    e.stopPropagation();
    setDropDownMenu(!dropDowMenu);
  };

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (dropDowMenu && !menuRef.current.contains(e.target)) {
  //       setDropDownMenu(false);
  //     }
  //   };

  //   if (dropDowMenu) {
  //     window.addEventListener('click', handleOutsideClick);
  //   } else {
  //     window.removeEventListener('click', handleOutsideClick);
  //   }

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [dropDowMenu]);

  return (
    <nav
      className="flex fixed w-full top-0 z-40 min-h-fit text-white justify-center header"
      style={{
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="container min-w-fit md:max-w-2xl flex items-center justify-between p-3 md:p-2"
        style={{}}
      >
        <div className="header-logo mr-5">
          <span className="logo">
            <Link to="/" className="header-logo text-white flex items-center">
              <AiFillAlipayCircle className="text-2xl mt-1 mr-1" />
              <p className="text-lg md:text-xl font-bold tracking-tighter">
                Vuong Quang Ninh
              </p>
            </Link>
          </span>
        </div>

        <div className="hidden md:flex flex-1">
          <Link to="/" className="p-2 text-md font-normal">
            Home
          </Link>
          <Link to="/" className="p-2 text-md font-normal">
            About
          </Link>
          <Link to="/portfolio" className="p-2 text-md font-normal">
            Portfolio
          </Link>
          <Link to="/contact" className="p-2 text-md font-normal">
            Contact
          </Link>
        </div>
        <div className="flex">
          <div
            className="theme-white flex p-3 rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300"
            ref={whiteTheme}
            onClick={handleBgMode}
            style={{ display: theme === 'dark' ? 'flex' : 'none' }}
          >
            <button className="btn-header">
              <BiSun className="text-black text-xl" />
            </button>
          </div>
          <div
            className="theme-black flex p-3 rounded-lg cursor-pointer bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            ref={blackTheme}
            onClick={handleBgMode}
            style={{ display: theme === 'light' ? 'flex' : 'none' }}
          >
            <button className="btn-header">
              <HiMoon className="text-white text-xl" />
            </button>
          </div>

          <div
            className="theme-white relative flex md:hidden p-3 ml-2 rounded-lg cursor-pointer bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            style={{}}
            onClick={toggleDropDown}
          >
            <button className="btn-header">
              <FaBars className="text-black text-xl" />
              {dropDowMenu && (
                <div
                  className="absolute top-14 right-0 w-52 bg-gray-700 shadow-lg shadow-gray-950 rounded border border-gray-50"
                  ref={menuRef}
                >
                  <ul className=" text-left">
                    <li className="p-2 py-3">
                      <Link to="/" className="p-2 text-md font-normal">
                        Home
                      </Link>
                    </li>
                    <li className="p-2 py-3">
                      <Link to="/about" className="p-2 text-md font-normal">
                        About
                      </Link>
                    </li>
                    <li className="p-2 py-3">
                      <Link to="/portfolio" className="p-2 text-md font-normal">
                        Portfolio
                      </Link>
                    </li>
                    <li className="p-2 py-3">
                      <Link to="/" className="p-2 text-md font-normal">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
