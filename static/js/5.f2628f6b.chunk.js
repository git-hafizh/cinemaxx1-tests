(this["webpackJsonpcinemaxxi-test"]=this["webpackJsonpcinemaxxi-test"]||[]).push([[5],{143:function(e,t,c){},171:function(e,t,c){"use strict";c.r(t);var s=c(19),n=c(1),r=c(26),i=c.n(r),d=c(0),j=c.n(d),a=c(135),l=c(136),b=c(2),o=c(4),h=c(5),x=c.n(h),O=c(6),p=j.a.forwardRef((function(e,t){var c=e.bsPrefix,s=e.className,n=e.striped,r=e.bordered,i=e.borderless,d=e.hover,a=e.size,l=e.variant,h=e.responsive,p=Object(o.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(O.a)(c,"table"),f=x()(s,m,l&&m+"-"+l,a&&m+"-"+a,n&&m+"-striped",r&&m+"-bordered",i&&m+"-borderless",d&&m+"-hover"),u=j.a.createElement("table",Object(b.a)({},p,{className:f,ref:t}));if(h){var v=m+"-responsive";return"string"===typeof h&&(v=v+"-"+h),j.a.createElement("div",{className:v},u)}return u})),m=(c(59),c(143),c(27));c(58),t.default=function(e){var t=Object(d.useState)({info:[],genre:[],companies:[],spoke:[]}),c=Object(s.a)(t,2),r=c[0],j=c[1];Object(d.useEffect)((function(){b()}),[]);var b=function(){var t=e.match.params.id;i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?").concat(m.a,"&language=en-US")).then((function(e){j({info:e.data,genre:e.data.genres,companies:e.data.production_companies,spoke:e.data.spoken_languages})}))};return console.log(r.info),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"main-content",children:Object(n.jsxs)(a.a,{children:[Object(n.jsx)(l.a,{md:4,children:Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r.info.poster_path),alt:"poster"})}),Object(n.jsxs)(l.a,{md:8,children:[Object(n.jsx)(p,{striped:!1,borderless:!0,children:Object(n.jsxs)("tbody",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:3,children:Object(n.jsx)("h2",{children:r.info.title})})}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Genre"}),Object(n.jsx)("td",{children:":"}),Object(n.jsx)("td",{children:r.genre.map((function(e){return Object(n.jsxs)("span",{children:[" ",e.name,", "]},e.id)}))})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"IMDB ID"}),Object(n.jsx)("td",{children:":"}),Object(n.jsxs)("td",{children:["https://www.imdb.com/title/",r.info.imdb_id]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Release Date"}),Object(n.jsx)("td",{children:":"}),Object(n.jsx)("td",{children:r.info.release_date})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Genre"}),Object(n.jsx)("td",{children:":"}),Object(n.jsx)("td",{children:r.companies.map((function(e){return Object(n.jsxs)("span",{children:[" ",e.name,", "]},e.id)}))})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Status"}),Object(n.jsx)("td",{children:":"}),Object(n.jsx)("td",{children:r.info.status})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Runtime"}),Object(n.jsx)("td",{children:":"}),Object(n.jsxs)("td",{children:[r.info.runtime," minutes"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Vote Average"}),Object(n.jsx)("td",{children:":"}),Object(n.jsx)("td",{children:r.info.vote_average})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Spoken Languages"}),Object(n.jsx)("td",{children:":"}),Object(n.jsx)("td",{children:r.spoke.map((function(e,t){return Object(n.jsxs)("span",{children:[" ",e.name,", "]},t)}))})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{}),Object(n.jsx)("td",{colSpan:2,children:Object(n.jsx)("div",{className:"watch-trailer",children:Object(n.jsx)("a",{href:"#trailer",children:"Watch Trailer"})})})]})]})}),Object(n.jsx)("p",{className:"sinopsis",children:"Sinopsis"}),Object(n.jsx)("p",{className:"overview",children:r.info.overview})]})]})})})}}}]);
//# sourceMappingURL=5.f2628f6b.chunk.js.map