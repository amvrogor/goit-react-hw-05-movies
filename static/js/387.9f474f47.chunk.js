"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{249:function(n,t,e){e.d(t,{Rj:function(){return l},YT:function(){return h},f_:function(){return i},tK:function(){return y},wI:function(){return p},y9:function(){return g}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",i="http://image.tmdb.org/t/p/w500",s="df88ba4f44a5ed712dd0a71f1b3d877c";function p(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s,"&page=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&page=").concat(e,"&include_adult=false&query=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u,o=e(439),i=e(791),s=e(689),p=e(249),f=e(168),h=e(444),d=h.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  margin: 0 auto 0 0;\n  padding: 0 15px;\n"]))),l=h.ZP.li(a||(a=(0,f.Z)([""]))),v=h.ZP.h2(c||(c=(0,f.Z)(["\n  font-size: 20px;\n"]))),g=h.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 16px;\n"]))),m=e(184),y=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,p.tK)(n).then((function(n){a(n.results)})).catch((function(n){console.log(n)}))}),[n]),(0,m.jsx)(d,{children:0!==r.length?r.map((function(n){return(0,m.jsxs)(l,{children:[(0,m.jsxs)(v,{children:["Author: ",n.author]}),(0,m.jsxs)(g,{children:[n.content," "]})]},n.id)})):"We don't have any reviews for this movie"})}}}]);
//# sourceMappingURL=387.9f474f47.chunk.js.map