import { useEffect, useRef, useState } from 'react';
import { AiOutlineUp } from 'react-icons/ai';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);
  return (
    <div
      className="fixed w-12 h-12 bottom-12 right-5 z-30 rounded-full bg-amber-300 shadow-amber-500 cursor-pointer"
      onClick={scrollToTop}
      style={{
        display: visible ? 'block' : 'none',
      }}
    >
      <button className="absolute top-4 left-4">
        <AiOutlineUp />
      </button>
    </div>
  );
};

export default ScrollTop;
