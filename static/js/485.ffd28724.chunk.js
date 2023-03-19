/*! For license information please see 485.ffd28724.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{475:function(t,e,n){n.d(e,{Rj:function(){return f},YT:function(){return h},b:function(){return m},f_:function(){return l},tK:function(){return T},wI:function(){return u},y9:function(){return y}});var r=n(861),o=n(757),s=n.n(o),i=n(243),a="https://api.themoviedb.org/3/",l="http://image.tmdb.org/t/p/w500",c="df88ba4f44a5ed712dd0a71f1b3d877c";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(s().mark((function t(){var e,n,r=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,i.Z.get("".concat(a,"trending/movie/day?api_key=").concat(c,"&page=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(s().mark((function t(e){var n,r,o=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,i.Z.get("".concat(a,"search/movie?api_key=").concat(c,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function f(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(a,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(a,"genre/movie/list?api_key=").concat(c,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},485:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r,o,s,i=n(433),a=n(439),l=n(791),c=n(475),u=n(689),p=n(771),h=n(168),d=n(444),f=n(87),g=d.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),m=d.ZP.li(o||(o=(0,h.Z)(["\n  margin-bottom: 5px;\n"]))),v=(0,d.ZP)(f.rU)(s||(s=(0,h.Z)(["\n  width: 600px;\n  display: block;\n  padding: 5px;\n  margin-right: auto;\n  color: #3f3f3f;\n  text-decoration: none;\n  border: 1px solid gray;\n  border-radius: 5px;\n  :hover {\n    opacity: 0.7;\n  }\n"]))),y=n(184),w=function(){var t=(0,u.TH)(),e=(0,l.useState)([]),n=(0,a.Z)(e,2),r=n[0],o=n[1],s=(0,l.useState)(1),h=(0,a.Z)(s,2),d=h[0],f=h[1],w=(0,l.useState)(1),T=(0,a.Z)(w,2),b=T[0],S=T[1];(0,l.useEffect)((function(){(0,c.wI)(d).then((function(t){o(1===d?t.results:function(e){return[].concat((0,i.Z)(e),(0,i.Z)(t.results))}),S(t.total_pages)})).catch((function(t){console.log(t)}))}),[d]);return(0,y.jsx)(g,{children:(0,y.jsx)(p.Z,{dataLength:r.length,next:function(){d<b&&setTimeout((function(){f((function(t){return t+1}))}),500)},hasMore:!0,px:!0,loader:(0,y.jsx)("p",{children:"Loading..."}),children:r.map((function(e){return(0,y.jsx)(m,{children:(0,y.jsx)(v,{to:"movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})})}},771:function(t,e,n){var r=n(791),o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},o(t,e)};var s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};var i="Pixel",a="Percent",l={unit:a,value:.8};function c(t){return"number"===typeof t?{unit:a,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:a,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),l):(console.warn("scrollThreshold should be string or number"),l)}var u=function(t){function e(e){var n=t.call(this,e)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(t){n.lastScrollTop||(n.dragging=!0,t instanceof MouseEvent?n.startY=t.pageY:t instanceof TouchEvent&&(n.startY=t.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(t){n.dragging&&(t instanceof MouseEvent?n.currentY=t.pageY:t instanceof TouchEvent&&(n.currentY=t.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(t){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(t)}),0);var e=n.props.height||n._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(e,n.props.scrollThreshold):n.isElementAtBottom(e,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=e.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},n.throttledOnScrollListener=function(t,e,n,r){var o,s=!1,i=0;function a(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-i,u=arguments;function p(){i=Date.now(),n.apply(l,u)}function h(){o=void 0}s||(r&&!o&&p(),a(),void 0===r&&c>t?p():!0!==e&&(o=setTimeout(r?h:p,void 0===r?t-c:t)))}return"boolean"!==typeof e&&(r=n,n=e,e=void 0),l.cancel=function(){a(),s=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?s(s({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=c(e);return r.unit===i?t.scrollTop<=r.value+n-t.scrollHeight+1:t.scrollTop<=r.value/100+n-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=c(e);return r.unit===i?t.scrollTop+n>=t.scrollHeight-r.value:t.scrollTop+n>=r.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(r.Component);e.Z=u}}]);
//# sourceMappingURL=485.ffd28724.chunk.js.map