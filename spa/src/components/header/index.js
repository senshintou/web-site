import React from 'preact/compat';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header = () => (
  <header className={ style.header }>
    <div className={ style.headerWrap }>
      <h1>
        <img src="assets/images/logo.jpg" width="142" height="80" alt="logo" />
      </h1>
      <nav className={ style.mainnav }>
        <p className={ style.menuWrap }>
          <a className={ style.menu }><span className={ style.menuBtn }></span></a>
        </p>
        <div className={ style.panel }>
          <ul>
            <li><Link href="/">ホーム画面へ</Link></li>
            <li><a href="#about">先進党とは</a></li>
            <li><a href="#poricy">政策情報</a></li>
            <li><a href="#report">活動レポート</a></li>
            <li><a href="#recruit">党員募集</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
