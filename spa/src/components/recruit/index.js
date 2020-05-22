import style from './style.scss';

const Recruit = () => (
  <section className={ style.sec03 }>
    <header>
      <h2 id="recruit"><span>党員募集</span></h2>
    </header>
    <div className={ style.innerS }>
      <p className={ style.impact }>入党資格</p>
      <p>
        *入党資格の審査に際し、記載事項に不備があった場合は、受け付けられません。
      </p>
      <p>*党員には党員証をお送りさせていただきます。</p>
      <p>・我が党の網領、主義、政策に賛同される方。</p>
      <p>・日本国籍を有する方。</p>
      <p>・年齢不問</p>
      <p>
        ・選挙に立候補できる方は25歳以上となりますが、政党にご参加頂くことは可能です。
      </p>
      <p>・他の政党の党籍を持たない方。<br /></p>
      <br />
      <p>
        その他の詳細は<a href="https://github.com/senshintou/Terms"
        >先進党規約</a
        >を御覧ください
      </p>
      <p>入党希望は info@senshintou.com までご連絡ください。</p>
    </div>
  </section>
);
export default Recruit;
