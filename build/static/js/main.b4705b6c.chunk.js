(this["webpackJsonpmemory-king"]=this["webpackJsonpmemory-king"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(4),r=t.n(a),s=t(2),o=(t(9),t(0));function l(e){var n=Object(c.useState)(!1),t=Object(s.a)(n,2),i=t[0],a=t[1];return Object(o.jsx)("section",{className:"container",children:Object(o.jsxs)("div",{onClick:function(){e.onBoxClick(i,a,e.img)},className:"card "+(i?"flipped":""),children:[Object(o.jsx)("div",{className:"front",children:Object(o.jsx)("img",{alt:"what image",src:"images/what.png"})}),Object(o.jsx)("div",{className:"back",children:Object(o.jsx)("img",{alt:"image to find",src:"images/"+e.img})})]})})}t(11);for(var d=function(e){for(var n,t=e.length;0!==t;){n=Math.floor(Math.random()*t),t--;var c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e},u=[],j=1;j<=19;j++)u.push(j+".png");d(u),u=u.slice(0,3);for(var m=[],f=0;f<u.length;f++)m[f]=u[f],m[u.length+f]=u[f];d(m);for(var b=[],g=0,h=0;h<2;h++){for(var O=[],p=0;p<3;p++)O[p]={isFlipped:!0,id:g,img:m[g++]};b[h]=O}var v=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],i=n[1],a=null,r=[],d=function(e,n,t){t&&(n(!0),setTimeout((function(){-1===r.indexOf(t)&&(a?a===t?(r.push(t),a=null,parseInt(3)===r.length&&alert("Well done !!")):n(!1):a=t)}),500))};return Object(c.useEffect)((function(){i(b)}),[]),Object(o.jsx)("div",{className:"card-container",children:t.map((function(e){return Object(o.jsx)("div",{className:"row",children:e.map((function(e){return Object(o.jsx)("div",{className:"column",style:{backgroundColor:"#aaa"},children:Object(o.jsx)(l,{onBoxClick:d,img:e.img})},e.id)}))},e[0].id)}))})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.b4705b6c.chunk.js.map