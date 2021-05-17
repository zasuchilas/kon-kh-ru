import React, { Fragment, ReactNode } from 'react';
import Logo from './logo';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const scrollToLeft = () => {};
  const scrollToRight = () => {};

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
