import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header=() =>(
	<header class={style.header}>
		<div class={style.headerWrap}>
			<h1>
				<img src="assets/images/logo.jpg" width="142" height="80" alt="logo" />
			</h1>
			<nav class={style.mainnav}>
				<p class={style.menuWrap}>
					<a class={style.menu}><span class={style.menuBtn}></span></a>
				</p>
				<div class={style.panel}>
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
