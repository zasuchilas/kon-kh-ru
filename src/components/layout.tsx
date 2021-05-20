import React, { Fragment, ReactNode, useEffect, useRef } from 'react';
import Logo from './logo';

const SCROLL_OFFSET = 512;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  const scrollToLeft = () => {
    if (!layoutRef || !layoutRef.current) {
      return;
    }
    layoutRef.current.scrollLeft -= SCROLL_OFFSET;
  };
  const scrollToRight = () => {
    if (!layoutRef || !layoutRef.current) {
      return;
    }
    layoutRef.current.scrollLeft += SCROLL_OFFSET;
  };

  const setRoot = () => {
    if (+document.documentElement.clientHeight >= 512) {
      const fontSize = `${+document.documentElement.clientWidth * 0.046}px`;
      document.documentElement.style.setProperty('--font-size-sm', fontSize);
    }
  };

  useEffect(() => {
    setRoot();
  }, []);

  return (
    <Fragment>
      <button className="btn scroll-btn to-left" onClick={scrollToLeft}>
        ⋘
      </button>
      <button className="btn scroll-btn to-right" onClick={scrollToRight}>
        ⋙
      </button>

      <div className="layout" ref={layoutRef}>
        <header>
          <Logo />
        </header>
        <div className="article">{children}</div>
        <footer className="footer">kon-kh.ru</footer>
      </div>
    </Fragment>
  );
};

export default Layout;
