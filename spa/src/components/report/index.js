import React from 'preact/compat';
import style from './style.scss';

const Report = () => (
  <section className={ style.sec02 }>
    <header>
      <h2 id="report"><span>活動レポート</span></h2>
    </header>
    <div className={ style.innerS }>
      <p>2019年09月16日　印鑑から国民を守る党の結党</p>
      <p>2020年02月26日　先進党に改名</p>
      <p>2020年03月25日　<a href="https://www.hacker.or.jp/coinhiveopinion/" target="_blank">コインハイブ事件　意見書提出</a></p>
      <p>2020年04月07日　スマートシティin会津を視察～会津大学訪問～</p>
    </div>
  </section>
);
export default Report;
