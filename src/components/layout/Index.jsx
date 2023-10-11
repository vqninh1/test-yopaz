import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import IconSpin from './IconSpin';
import { useState } from 'react';

const Index = () => {
  const [toggle, setToggle] = useState(false);

  const handleOutClick = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };
  return (
    <div onClick={handleOutClick}>
      <Header toggle={toggle} setToggle={setToggle} />
      <IconSpin />
      <main>
        <Outlet />
      </main>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Index;
