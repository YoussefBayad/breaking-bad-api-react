(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},17:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},18:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=a(3),u=a.n(s),i=a(14),m=a(2),o=(a(24),a(15)),g=a.n(o),p=a(16),E=a.n(p),d=function(e){e.setItemsPerPage,e.itemsPerPage;return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:E.a,alt:"Logo"}))},b=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status)))))},f=a(17),h=a.n(f),v=function(){return r.a.createElement("img",{src:h.a,alt:"isLoading...",style:{width:"200px",margin:"auto",display:"block"}})},y=function(e){var t=e.query;return r.a.createElement("div",{className:"empty"},r.a.createElement("h1",null,"There is no character his name contains ",r.a.createElement("span",null,t)))},N=function(e){var t=e.items,a=e.isLoading,n=e.isEmpty,c=e.query;return a?r.a.createElement(v,null):n?r.a.createElement(y,{query:c}):r.a.createElement("div",{className:"cards"},t.map((function(e){return r.a.createElement(b,{item:e})})))},j=function(e){var t=e.query,a=e.getQuery,n=(e.itemsPerPage,e.setItemsPerPage);return r.a.createElement("div",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search Characters",autoFocus:!0,value:t,onChange:function(e){a(e.target.value)}}),r.a.createElement("label",{className:"items-per-page-label"},"Items Per Page"),r.a.createElement("input",{className:"items-per-page",type:"number",placeholder:"Number",min:"1",max:"63",onChange:function(e){var t;((t=e.target.value)<1||t>63||void 0===t)&&(t=8),n(t)}})))},O=function(e){for(var t=e.pagesNumber,a=e.setCurrentPage,n=[],c=0;c<t;c++)n.push(c+1);return r.a.createElement("div",{className:"pagination"},n.map((function(e){return r.a.createElement("button",{className:"page",key:e,onClick:function(){return a(e)}},e)})))},P=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),s=Object(m.a)(l,2),o=s[0],p=s[1],E=Object(n.useState)(""),b=Object(m.a)(E,2),f=b[0],h=b[1],v=Object(n.useState)(!1),y=Object(m.a)(v,2),P=y[0],k=y[1],S=Object(n.useState)(1),w=Object(m.a)(S,2),x=w[0],q=w[1],C=Object(n.useState)(8),I=Object(m.a)(C,2),L=I[0],B=I[1],J=Object(n.useState)(8),M=Object(m.a)(J,2),Q=M[0],A=M[1];return Object(n.useEffect)((function(){console.log("runs"),function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,g()("https://www.breakingbadapi.com/api/characters?name=".concat(f));case 3:t=e.sent,n=(a=x*L)-L,r=t.data.slice(n,a),l=Math.ceil(t.data.length/L),console.log(l),c(r),k(0==r),A(l),p(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[f,x,L]),r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement(j,{query:f,getQuery:function(e){return function(e){h(e)}(e)},itemsPerPage:L,setItemsPerPage:function(e){return B(e)}}),r.a.createElement(N,{items:a,query:f,isLoading:o,isEmpty:P}),r.a.createElement(O,{pagesNumber:Q,setCurrentPage:function(e){return q(e)}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8bd8ab8b.chunk.js.map