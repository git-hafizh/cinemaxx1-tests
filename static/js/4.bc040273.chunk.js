(this["webpackJsonpcinemaxxi-test"]=this["webpackJsonpcinemaxxi-test"]||[]).push([[4],{144:function(e,t,c){},170:function(e,t,c){"use strict";c.r(t);var n=c(19),a=c(1),i=c(0),s=c.n(i),o=c(22),r=(c(144),c(65)),j=c(168),l=c(26),d=c.n(l),b=c(140),u=c(27);var h=c(148),m=c.n(h);function p(){return Object(b.usePromiseTracker)().promiseInProgress&&Object(a.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(m.a,{type:"ThreeDots",color:"#f6e58d",height:"100",width:"100"})})}t.default=function(){var e=Object(i.useState)(1),t=Object(n.a)(e,2),c=t[0],l=t[1],h=function(e){var t=s.a.useState([]),c=Object(n.a)(t,2),a=c[0],i=c[1];return s.a.useEffect((function(){Object(b.trackPromise)(d.a.get("https://api.themoviedb.org/3/movie/upcoming?".concat(u.a,"&language=en-US&page=").concat(e)).then((function(e){var t=e.data.results;i([].concat(Object(j.a)(a),Object(j.a)(t)))})).catch((function(e){console.log(e)})))}),[e]),[a,i]}(c),m=Object(n.a)(h,1)[0];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"main-badge",children:Object(a.jsx)("p",{className:"upcoming-badge",children:"Upcoming"})}),Object(a.jsx)("div",{className:"soon-list",children:m.map((function(e){return Object(a.jsx)("div",{className:"soon-item",children:Object(a.jsxs)(o.b,{to:"/movie/".concat(e.id),children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:"poster"}),Object(a.jsx)("p",{className:"soon-title",children:e.title?e.title:e.name})]})},e.id)}))}),Object(a.jsx)(p,{}),Object(a.jsx)(r.a,{variant:"secondary",onClick:function(){return l(c+1)},children:"Load More Movies"})]})}}}]);
//# sourceMappingURL=4.bc040273.chunk.js.map