import style from './style.scss';

const Policy = () => (
  <section id="sec01">
    <header>
      <h2 id="policy"><span>政策情報</span></h2>
    </header>
    <div className={ style.innerS }>
      以下は我々の政策の一部です。詳細は
      <a href="https://github.com/senshintou/Policy" target="_blank" rel='noreferrer'>
        先進党政策一覧
      </a>
      を御覧ください
      <ul id="gallery1" className={ style.col2 }>
        <li>
          <img src="assets/images/photo01.jpg" width="426" height="418" alt="" />
        </li>
        <li>
          <p className={ style.impact }>役所手続きのデジタル化<br /></p>
          <p>
            「この書類は印鑑が必要です」「このシステムは午前9:00から午後5:00までの運用です」
          </p>
          <p>このような行政の非効率はやめにしましょう。</p>
          <p>
            印章制度やシステムの非効率は、国民の皆様のご負担を増やすだけです。<br />
          </p>
          <p>我々先進党の政策ならば、上記問題を全て解決可能です。</p>
          <p>eKYC(電子署名)を用いた本人確認を導入し、</p>
          <p>
            皆様が役所に出向くことなくあらゆる手続きを可能にします。<br />
          </p>
          <p>我々は役所手続きにおける業務をデジタル化し、</p>
          <p>
            市民の作業待ち時間の削減や役所担当者の業務効率化を目指します。
          </p>
          <p>
            障害・福祉の手続きや婚姻届など、24時間家から受け付けることができるようにします。
          </p>
        </li>
      </ul>
      <ul id="gallery2" className={ style.col2 }>
        <li>
          <img src="assets/images/photo02.jpg" width="426" height="418" alt="" />
        </li>
        <li>
          <p className={ style.impact }>選挙のデジタル化<br /></p>
          <p>今の選挙は限られた時間に投票所まで移動し、</p>
          <p>不正投票を監視するために大きなコストが発生しています。<br /></p>
          <p>我々は選挙をデジタル化します<br /></p>
          <p>
            場所も選ばず、eKYCにより家からでも外国からでも投票を可能にします。
          </p>
          <p>
            大量の紙を集計するわけではないので、結果も正確に瞬時に判明します。
          </p>
          <p>eKYCによる本人確認を行うので、不正な代理投票もできませんし、</p>
          <p>投票先を他人に知られることもありません</p>
          <p>これにより若者の選挙参加も促進され、</p>
          <p>より民意を反映した世の中を作ることができます。</p>
        </li>
      </ul>
      <ul id="gallery3" className={ style.col2 }>
        <li>
          <img src="assets/images/photo03.jpg" width="426" height="418" alt="" />
        </li>
        <li>
          <p className={ style.impact }>リモートワーク推進<br /></p>
          <p>
            現状、子供の世話に手がかかったり、交通の弁が良くないなどの理由から、
          </p>
          <p>仕事に従事できない方が数多くいらっしゃいます。</p>
          <p>
            それに加え、伝染病の蔓延などで満員電車の問題も表面化しています<br />
          </p>
          <p>我々はリモートワークを推進します。<br /></p>
          <p>
            自宅からでも社会に貢献できるイメージを具体化し、リモートワークを推奨していきます。
          </p>
          <p>社会的立場を認められるよう仕事の拡充を促し、</p>
          <p>地方活性化とも繋がる労働環境の増強を測ります。</p>
        </li>
      </ul>
      <ul id="gallery4" className={ style.col2 }>
        <li>
          <img src="assets/images/photo04.jpg" width="426" height="418" alt="" />
        </li>
        <li>
          <p className={ style.impact }>IT人材の育成推進<br /></p>
          <p>
            IT政策を押し進めるにあたり、今後ますます人材不足が深刻化していきます。
          </p>
          <p>AIやブロックチェーンなどの技術も多岐に渡り進化も早く、</p>
          <p>IoTによりあらゆるデバイスにITが関わるようになります。<br /></p>
          <p>そこで我々は、今後必要になっていくと思われる</p>
          <p>ITスキルを高める施策を官民共同で実施していきます。</p>
          <p>義務教育や高等教育機関でもアルゴリズムの学習を強化させます。</p>
        </li>
      </ul>
    </div>
  </section>
);
export default Policy;
