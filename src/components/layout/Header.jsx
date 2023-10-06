import { Link } from 'react-router-dom';
import { BiSun } from 'react-icons/bi';
import { AiFillAlipayCircle } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { HiMoon } from 'react-icons/hi2';

const Header = ({}) => {
  const whiteTheme = useRef();
  const blackTheme = useRef();

  const [theme, setTheme] = useState('light');

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

  return (
    <nav
      className="flex fixed w-full top-0 z-40 text-white justify-center header"
      style={{
        minHeight: '40px',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="container flex items-center p-2"
        style={{ maxWidth: '700px' }}
      >
        <div className="header-logo mr-5">
          <span className="logo">
            <Link to="/" className="header-logo text-white flex items-center">
              <AiFillAlipayCircle className="text-2xl mt-1 mr-1" />
              <p className="text-xl font-bold tracking-tighter">
                Vuong Quang Ninh
              </p>
            </Link>
          </span>
        </div>

        <div className="header-list flex flex-1">
          <Link to="/" className="p-2 text-md font-normal">
            Home
          </Link>
          <Link to="/about" className="p-2 text-md font-normal">
            About
          </Link>
          <Link to="/portfolio" className="p-2 text-md font-normal">
            Portfolio
          </Link>
          <Link to="/" className="p-2 text-md font-normal">
            Contact
          </Link>
        </div>
        <div>
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
