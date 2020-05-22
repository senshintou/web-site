import React from 'preact/compat';
import style from './style.scss';

const About = () => (
  <div>
    <section className={ style.sec00 }>
      <header>
        <h2 id="about"><span>先進党とは</span></h2>
      </header>
      <div className={ style.innerS }>
        <ul className={ style.about, style.col2 }>
          <li>
            <img src="assets/images/woman.jpg" width="852" height="418" alt="" />
          </li>
          <li>
            <p className={ style.impact }>先進党は、日本唯一のIT特化政党です<br /><br /></p>
            <p className={ style.impact2 }>
              我々は先進技術により、日本を安全で豊かにします
            </p>
            <p className={ style.impact2 }>・先進技術で日本を豊かに</p>
            <p className={ style.impact2 }>・誰でもわかりやすい、使いやすいシステム</p>
            <p className={ style.impact2 }>・安全で不正のない仕組み</p>
          </li>
        </ul>
      </div>
    </section>
    <section id="sec00">
      <header>
        <h2><span>役員紹介</span></h2>
      </header>
      <div className="innerS">
        <ul className={ style.about, style.col2 }>
          <li>
            <img src="assets/images/kondou.jpg" width="852" height="418" alt="" />
          </li>
          <li>
            <p className="impact">代表</p>
            <p className="impact2">近藤祐輝(こんどうゆうき)<br /></p>
            <p>
              私は現在、フリーランスとしてSEをする傍ら、正社員SEの方に対して、フリーランスへの転向サポートを法人として行っています。
            </p>
            <p>
              若い時分は政治にはそこまで関心がありませんでしたが、
            </p>
            <p>
              今は日本の税制や働き方改革、IT行政のあり方に関心があります。
            </p>
            <br />
            <p>現在はお子様と保護者の方を対象にした「プログラミング教育」</p>
            <p>
              そして「行政手続きのオンライン化」に注力しようと考えています。
            </p>
          </li>
        </ul>
      </div>
      <div className="innerS">
        <ul className={ style.about, style.col2 }>
          <li>
            <img src="assets/images/joya.jpg" width="265" height="300" alt="" />
          </li>
          <li>
            <p className="impact">副代表</p>
            <p className="impact2">城谷弘明(じょうやひろあき)<br /></p>
            <p>
              学部時代は経営学やマーケティング、会計などを学び、
            </p>
            <p>
              社会人としての数年はブロックチェーンなどの技術に触れていました。
            </p>
            <p>
              昔から一貫して政治には興味があり、各国の政治史やIT行政、
            </p>
            <p>
              イデオロギーの変遷などを独学で学んでおります。
            </p>
            <br />
            <p>
              ・元ブロックチェーンエンジニア兼マーケター
            </p>
            <p>
              ・電子政策会議(電政会) 代表
            </p>
            <p>
              ・先進党 副代表
            </p>
            <p>
              ・暗号資産古物商協会 理事
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
);
export default About;
