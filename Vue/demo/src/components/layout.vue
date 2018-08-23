<template>
<div>
    <div class="app-head">
		<div class="app-head-inner">
			<router-link :to="{path: '/'}">
				<img src="../assets/logo.png" alt="Logo" class="head-logo">
			</router-link>	
			<div class="head-nav">
				<ul class="nav-list">
					<li>{{username}}</li>
					<li class="nav-pile" v-if="username !== ''">|</li>
					<li @click="outClick" v-if="username !== ''">退出</li>
					<li @click="logClick" v-if="username === ''">登录</li>
					<li class="nav-pile">|</li>
					<li @click="regClick" v-if="username === ''">注册</li>
					<li class="nav-pile">|</li>
					<li @click="aboutClick">关于</li>
				</ul>
			</div>
		</div>
	</div>
    <div class="app-content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="app-foot">
		<p>© 2018 AssassinZed MIT</p>
	</div>
	<my-dialog :is-shown='isLogDialogShown' @on-close="closeDialog('isLogDialogShown')">
		<log-form @has-log='onSuccessLog'></log-form>
	</my-dialog>
	<my-dialog :is-shown='isRegDialogShown' @on-close="closeDialog('isRegDialogShown')">
		<reg-form></reg-form>
	</my-dialog>
	<my-dialog :is-shown='isAboutDialogShown' @on-close="closeDialog('isAboutDialogShown')">
		<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
	</my-dialog>
</div>
</template>

<script>
import Dialog from './dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
    components: {
		MyDialog: Dialog,
		LogForm,
		RegForm
	},
	data() {
		return {
			isLogDialogShown: false,
			isRegDialogShown: false,
			isAboutDialogShown: false,
			username: ''
		}
	},
	methods: {
		logClick() {
			this.isLogDialogShown = true
		},
		regClick() {
			this.isRegDialogShown = true
		},
		aboutClick() {
			this.isAboutDialogShown = true
		},
		closeDialog(attr) {
			this[attr] = false
		},
		// 这里的data自动为子组件中的res.data
		onSuccessLog(data) {
			this.closeDialog('isLogDialogShown')
			this.username = data.username
		}
	}
}
</script>

<style>

/* CSS Reset */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* base */

a {
	color: inherit;
	text-decoration: none;
}

body {
	background: #f0f2f5;
	font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	font-size: 14px;
	color: #444;
}

/* head */

.app-head {
	width: 100%;
	height: 90px;
	background: #363636;
	color: #b2b2b2;
	line-height: 90px;
}

.app-head-inner {
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
}

.head-logo {
	float: left;
	width: 50px;
	margin-top: 20px;
}

.head-nav {
	float: right;
}

.nav-list {
	overflow: hidden;
}

.nav-list li {
	float: left;
	cursor: pointer;
}

.nav-pile {
	padding-left: 10px;
	padding-right: 10px;
}

/* foot */

.app-foot {
	width: 100%;
	height: 80px;
	margin-top: 30px;
	background: #e3e4e8;
	line-height: 80px;
	text-align: center;
}

/* g-form */

.button {
	display: inline-block;
	padding: 10px 20px;
	background: #4fc08d;
	color: #fff;
	cursor: pointer;
}

.button:hover {
	background: red;
}

.g-form-line {
	padding: 15px 0;
}

.g-form-label {
	display: inline-block;
	width: 100px;
	font-size: 16px;
}

.g-form-input {
	display: inline-block;
}

.g-form-input input {
	width: 200px;
	height: 30px;
	padding: 0 10px;
	border: 1px solid #ccc;
	line-height: 30px;
	vertical-align: middle;
}

.g-form-btn {
	padding-left: 100px;
}

.g-form-error {
	padding-left: 15px;
	color: red;
}

</style>

