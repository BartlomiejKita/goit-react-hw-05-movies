"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19],{1019:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r,a,c,o=n(885),u=n(168),s=n(2791),i=n(6871),p=n(3243),l=n(6444),d=n(184),f=l.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n  padding: 0px;\n  list-style-type: none;\n"]))),h=l.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 12px;\n  text-align: center;\n  background-color: #878f99;\n  overflow: hidden;\n"]))),v=l.ZP.img(c||(c=(0,u.Z)(["\n  display: block;\n  max-width: 300px;\n  width: 100%;\n"]))),g=function(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,i.UO)().movieId;return(0,s.useEffect)((function(){p.Z.fetchMovieCastById(a,r)}),[a]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f,{children:n.length<1?(0,d.jsx)("p",{children:"Sorry, the cast is not available"}):n.map((function(e){var t=e.character,n=e.name,r=e.profile_path;return(0,d.jsxs)(h,{children:[null===r?(0,d.jsx)(v,{src:"https://placehold.jp/200x300.png",alt:"just placeholder"}):(0,d.jsx)(v,{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:"".concat(n)}),(0,d.jsxs)("h4",{children:["Name: ",n]}),(0,d.jsxs)("p",{children:["Character: ",t]})]},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))})})}},3243:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),o=n(4569),u=n.n(o),s="deb4d54946abdc202a0e5e0e78d6bfcf",i="https://api.themoviedb.org/3/",p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"trending/movie/day?api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v={fetchTrending:p,fetchMovieById:l,fetchMovieCastById:d,fetchMovieReviewsById:f,fetchMovieByQuery:h};t.Z=v}}]);
//# sourceMappingURL=19.9fafa370.chunk.js.map