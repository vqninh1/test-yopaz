import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import IconSpin from './IconSpin';

const Index = () => {
  return (
    <div>
      <Header />
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
