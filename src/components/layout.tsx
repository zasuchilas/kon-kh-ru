import React, { Fragment, ReactNode, useEffect } from 'react';
import Logo from './logo';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const scrollToLeft = () => {};
  const scrollToRight = () => {};

  const setRoot = () => {
    if (+document.documentElement.clientHeight >= 512) {
      const fontSize = `${+document.documentElement.clientWidth * 0.046}px`;
      document.documentElement.style.setProperty('--font-size-sm', fontSize);
    }
    console.log('2', +document.documentElement.clientHeight);
  };

  useEffect(() => {
    setRoot();
  }, []);

  return (
    <Fragment>
      <button className="btn scroll-btn to-left" onClick={scrollToLeft}>
        ≪ Влево
      </button>
      <button className="btn scroll-btn to-right" onClick={scrollToRight}>
        Вправо ≫
      </button>

      <div className="layout">
        <header>
          <Logo />
        </header>
        <div className="article">{children}</div>
        <footer className="footer">site.name</footer>
      </div>
    </Fragment>
  );
};

export default Layout;
