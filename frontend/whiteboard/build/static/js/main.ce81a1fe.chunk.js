(this.webpackJsonpwhiteboard=this.webpackJsonpwhiteboard||[]).push([[0],{38:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var o=n(6),c=n.n(o),i=n(32),a=n.n(i),r=(n(38),n(16)),u=n(33),s=n.n(u),d=(n(70),n(0)),l=s.a.connect("http://collaborative-whiteboard.herokuapp.com"),b=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)([0,0]),a=Object(r.a)(i,2),u=a[0],s=a[1];return Object(o.useEffect)((function(){var e=document.getElementById("board"),t=e.getContext("2d");t.fillStyle="blue",t.lineJoin="round",t.lineWidth=2,e.onmousedown=function(e){c(!0),t.beginPath(),l.emit("down",{x:u[0],y:u[1]})},e.onmouseup=function(e){c(!1),l.emit("up",{x:u[0],y:u[1]})},l.on("onDown",(function(e){var n=e.x,o=e.y;t.moveTo(n,o),console.log("onDown")})),l.on("onDraw",(function(e){var n=e.x,o=e.y;t.lineTo(n,o),t.stroke()})),e.onmousemove=function(o){var c=e.getBoundingClientRect();s([(o.clientX-c.left)/c.width*e.width,(o.clientY-c.top)/c.height*e.height]),n&&(l.emit("draw",{x:u[0],y:u[1]}),t.lineTo(u[0],u[1]),t.stroke())}})),Object(d.jsx)("canvas",{id:"board",className:"board"})};n(72);var j=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"color-picker-container",children:Object(d.jsx)("input",{type:"color"})}),Object(d.jsx)("div",{className:"board-container",children:Object(d.jsx)(b,{})})]})};var h=function(){return Object(d.jsx)(j,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),f()}},[[73,1,2]]]);
//# sourceMappingURL=main.ce81a1fe.chunk.js.map