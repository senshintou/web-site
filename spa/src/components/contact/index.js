import { h } from 'preact';
import style from './style.scss'

const Contact=()=>(
  <section class={style.sec04}>
    <header>
      <h2 id="contact"><span>問合せ</span></h2>
    </header>
    <div class={style.innerS}>
      <p>
        何かありましたら、メール(info@senshintou.com)、もしくは下記の住所までお気軽にご連絡ください。
      </p>
      <br />
      <p class={style.impact2}>所在地</p>
      <p>〒144-0051</p>
      <p>東京都大田区西蒲田6-37-3 コンフォリア西蒲田807</p>
    </div>
  </section>
)
export default Contact