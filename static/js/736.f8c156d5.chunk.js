"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{249:function(t,n,e){e.d(n,{Rj:function(){return d},YT:function(){return h},f_:function(){return i},tK:function(){return y},wI:function(){return p},y9:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",i="http://image.tmdb.org/t/p/w500",s="df88ba4f44a5ed712dd0a71f1b3d877c";function p(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s,"&page=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&page=").concat(e,"&include_adult=false&query=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},736:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,c,u,o=e(439),i=e(791),s=e(689),p=e(249),f=e(168),h=e(444),l=h.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  list-style: none;\n"]))),d=h.ZP.li(a||(a=(0,f.Z)(["\n  width: 200px;\n"]))),g=h.ZP.img(c||(c=(0,f.Z)(["\n  display: block;\n  width: 200px;\n"]))),m=h.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 16px;\n"]))),v=e(184),y=function(){var t=(0,s.UO)().movieId,n=(0,i.useState)([]),e=(0,o.Z)(n,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,p.y9)(t).then((function(t){a(t.cast)})).catch((function(t){console.log(t)}))}),[t]),(0,v.jsx)(l,{children:0!==r.length?r.map((function(t){return(0,v.jsxs)(d,{children:[(0,v.jsx)(g,{src:t.profile_path?"".concat(p.f_).concat(t.profile_path):"https://dummyimage.com/200x300/e0e0e0/ffffff.jpg&text=No+photo",alt:t.name}),(0,v.jsx)(m,{children:t.name}),(0,v.jsxs)(m,{children:["Character: ",t.character," "]})]},t.id)})):"We don't have the cast for this movie"})}}}]);
//# sourceMappingURL=736.f8c156d5.chunk.js.map