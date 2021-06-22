import React, { ReactNode, useEffect } from 'react';
import Logo from './logo';

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

        <h4 className="mb-1 mt-4">Материалы, использованные на сайте:</h4>
        <ul className="attribution">
          <li>
            Photo by{' '}
            <a href="https://unsplash.com/@museumsvictoria?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Museums Victoria
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{' '}
            <a href="https://unsplash.com/@nypl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              The New York Public Library
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{' '}
            <a href="https://unsplash.com/@filipthedesigner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Filip Mishevski
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{' '}
            <a href="https://unsplash.com/@juliusdrost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Julius Drost
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{' '}
            <a href="https://unsplash.com/@charissek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Charisse Kenion
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
          <li>
            Icons made by{' '}
            <a href="https://www.freepik.com" title="Freepik">
              <small>Freepik</small>
            </a>
            {', '}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              <small>Pixel perfect</small>
            </a>{' '}
            and{' '}
            <a href="https://icon54.com/" title="Pixel perfect">
              <small>Pixel perfect</small>
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              <small>www.flaticon.com</small>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
