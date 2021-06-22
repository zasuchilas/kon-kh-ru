import React, { ReactNode, useEffect } from 'react';
import Logo from './logo';
import Attributions from './attributions';

type LayoutProps = {
  children: ReactNode;
  short?: boolean;
};

const Layout = ({ children, short }: LayoutProps) => {
  const setRoot = () => {
    if (+document.documentElement.clientHeight >= 512) {
      const fontSize = `${+document.documentElement.clientWidth * 0.046}px`;
      document.documentElement.style.setProperty('--font-size-sm', fontSize);
    }
  };

  const layoutClasses = short ? 'short' : '';

  useEffect(() => {
    setRoot();
  }, []);

  return (
    <div id="layout" className={layoutClasses}>
      {!short && (
        <header>
          <Logo />
        </header>
      )}
      <main>{children}</main>
      <footer>
        <div className="footer-row">
          <div className="bold">Будьте проще, и люди потянутся!</div>
          <div className="bold">kon-kh.ru</div>
        </div>
        <Attributions />
      </footer>
    </div>
  );
};

export default Layout;
