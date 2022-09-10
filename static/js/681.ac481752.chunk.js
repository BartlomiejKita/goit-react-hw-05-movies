"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{9681:function(e,t,n){n.r(t);var r,a,c=n(885),o=n(168),u=n(2791),s=n(6871),i=n(3243),p=n(6444),v=n(184),f=p.ZP.ul(r||(r=(0,o.Z)(["\n  padding: 0px;\n"]))),l=p.ZP.li(a||(a=(0,o.Z)(["\n  border: 1px solid black;\n  border-radius: 12px;\n  padding: 15px;\n  text-align: justify;\n  margin-bottom: 10px;\n  background-color: #878f99;\n  overflow: hidden;\n"])));t.default=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,s.UO)().movieId;return(0,u.useEffect)((function(){i.Z.fetchMovieReviewsById(a,r)}),[a]),(0,v.jsx)(v.Fragment,{children:n.length<1?(0,v.jsx)("p",{children:"Sorry, no one has reviewed this title yet!"}):(0,v.jsx)(f,{children:n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,v.jsxs)(l,{children:[(0,v.jsx)("p",{children:n}),(0,v.jsxs)("h4",{children:["Review author: ",t]})]},r)}))})})}},3243:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),o=n(4569),u=n.n(o),s="deb4d54946abdc202a0e5e0e78d6bfcf",i="https://api.themoviedb.org/3/",p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"trending/movie/day?api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),h={fetchTrending:p,fetchMovieById:v,fetchMovieCastById:f,fetchMovieReviewsById:l,fetchMovieByQuery:d};t.Z=h}}]);
//# sourceMappingURL=681.ac481752.chunk.js.map