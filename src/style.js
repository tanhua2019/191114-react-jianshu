import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1574408328704'); /* IE9 */
  src: url('iconfont.eot?t=1574408328704#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1574408328704') format('woff'),
  url('iconfont.ttf?t=1574408328704') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1574408328704#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconpencil-write-draw-pen-tool-stationery-product-eacfab:before {
  content: "\e780";
}

.iconAa:before {
  content: "\e636";
}

.iconApache:before {
  content: "\e61b";
}

.iconfangdajing:before {
  content: "\e629";
}

.iconweibiaoti--:before {
  content: "\e612";
}


`