(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},17:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},18:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(3),s=a.n(i),u=a(14),m=a(2),o=(a(24),a(15)),d=a.n(o),E=a(16),f=a.n(E),p=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:f.a,alt:"Logo"}))},g=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status)))))},b=a(17),h=a.n(b),v=function(){return r.a.createElement("img",{src:h.a,alt:"isLoading...",style:{width:"200px",margin:"auto",display:"block"}})},N=function(e){var t=e.items;return e.isLoading?r.a.createElement(v,null):r.a.createElement("div",{className:"cards"},t.map((function(e){return r.a.createElement(g,{item:e})})))},j=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement("div",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search Characters",autoFocus:!0,value:l,onChange:function(e){t(l),i(e.target.value)}})))},k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],E=i[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),b=g[0],h=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,d()("https://www.breakingbadapi.com/api/characters?name=".concat(b));case 3:t=e.sent,c(t.data),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(j,{getQuery:function(e){return function(e){h(e)}(e)}}),r.a.createElement(N,{items:a,isLoading:o}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0693732f.chunk.js.map