import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import LogoFlat from '../images/logo.svg';

const Logo = () => {
  return (
    <div className="logo mb-2">
      <div>
        <span className="build-date">Build date</span>
        <span className="build-time">Build time</span>
      </div>
      <Link to="/" className="logo-link">
        <LogoFlat />
      </Link>
      <div className="comment-block mt-sm">
        <div>
          <div>Сводный календарь событий Roster.one</div>
          <div>eventCountText</div>
          <div>Обратная связь: telegram</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
