(this.webpackJsonpwhiteboard=this.webpackJsonpwhiteboard||[]).push([[0],{38:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(32),s=n.n(a),i=(n(38),n(10)),r=n(33),l=n.n(r),b=(n(70),n(0)),u=l()(),d=function(e){var t=e.color,n=Object(c.useState)(!1),o=Object(i.a)(n,2),a=o[0],s=o[1],r=Object(c.useState)([0,0]),l=Object(i.a)(r,2),d=l[0],h=l[1];return Object(c.useEffect)((function(){var e=document.getElementById("board"),n=e.getContext("2d");n.strokeStyle=t,n.lineJoin="round",n.lineWidth=2,e.onmousedown=function(e){s(!0),n.beginPath(),u.emit("down",{x:d[0],y:d[1]})},e.onmouseup=function(e){s(!1),u.emit("up",{x:d[0],y:d[1]})},u.on("onDown",(function(e){var t=e.x,c=e.y;n.moveTo(t,c),console.log("onDown")})),u.on("onDraw",(function(e){var t=e.x,c=e.y;n.lineTo(t,c),n.stroke()})),e.onmousemove=function(t){var c=e.getBoundingClientRect();h([(t.clientX-c.left)/c.width*e.width,(t.clientY-c.top)/c.height*e.height]),a&&(u.emit("draw",{x:d[0],y:d[1]}),n.lineTo(d[0],d[1]),n.stroke())}})),Object(b.jsx)("canvas",{id:"board",className:"box"})};n(72);var h=function(){var e=Object(c.useState)("#fffff"),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(b.jsxs)("div",{className:"has-background-link",children:[Object(b.jsxs)("nav",{className:"navbar has-background-link has-text-left has-text-white",children:[Object(b.jsx)("h1",{className:" ml-3 is-size-3",children:"Collaborative Whiteboard"}),Object(b.jsx)("p",{className:"ml-4 is-size-5",children:"By Pawel Marcinkiewicz"})]}),Object(b.jsxs)("div",{className:"columns",children:[Object(b.jsx)("div",{className:"column is-three-quarters",children:Object(b.jsx)(d,{color:n})}),Object(b.jsxs)("div",{className:"column is-2 m-3 box has-text-centered",children:[Object(b.jsx)("h2",{children:"Color"}),Object(b.jsx)("input",{type:"color",onChange:function(e){o(e.target.value)},value:n,className:"input"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"button is-danger is-outlined",children:"Clear Board"})]})]}),Object(b.jsx)("footer",{className:"footer has-background-link ",children:Object(b.jsxs)("div",{className:"content has-text-centered has-text-white",children:["See the code",Object(b.jsxs)("a",{href:"https://github.com/paweljm/whiteboard-collab-app",target:"__blank",className:"has-text-primary",children:[" ","here"]})]})})]})};var j=function(){return Object(b.jsx)(h,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),m()}},[[73,1,2]]]);
//# sourceMappingURL=main.cb7b3652.chunk.js.map