(this["webpackJsonprx-rdx-ut"]=this["webpackJsonprx-rdx-ut"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(25),a=n.n(i),s=(n(32),n(33),n(9)),u=n(16),o=n(40),l=n(22),j=n(41),d=new o.a([]),b=d.pipe(Object(l.a)((function(e){return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{power:e.attack+e.defense+e.hp+e.special_attack+e.special_defense+e.speed})}))}))),f=new o.a([]),O=b.pipe(Object(j.a)(f),Object(l.a)((function(e){var t=Object(s.a)(e,2),n=t[0],c=t[1];return n.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{selected:c.includes(e.id)})}))}))),p=O.pipe(Object(l.a)((function(e){return e.filter((function(e){return e.selected}))})));fetch("/pokemon-simplified.json").then((function(e){return e.json()})).then((function(e){return d.next(e)}));var h=n(26),x=(n(34),n(35),n(3)),v=function(e){var t=Object(c.useState)(e.searchString),n=Object(s.a)(t,2),r=n[0];n[1];return Object(x.jsx)("div",{className:"Search","data-testid":"Search",children:Object(x.jsx)("input",{type:"text",defaultValue:r,onChange:function(t){return e.returnFnc(t.target.value)}})})},m=n(42),g=function(){var e=Object(m.a)(p);return console.log("deck1",p),console.log("deck2",e),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Deck"}),e&&e.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("label",{className:"container",children:[Object(x.jsxs)("strong",{children:[" ",e.name]})," - ",e.power]})},e.name)}))]})},k=function(){var e=Object(c.useState)("ba"),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(s.a)(i,2),u=a[0],o=a[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){var e=O.subscribe(o);return function(){return e.unsubscribe()}},j=Object(c.useMemo)((function(){return u.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))}),[u,n]);return Object(x.jsxs)("div",{className:"Main","data-testid":"Main",children:["Main Component",Object(x.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",textAlign:"left"},children:[Object(x.jsx)(v,{searchString:n,returnFnc:r}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",textAlign:"left"},children:[Object(x.jsx)("div",{id:"divDisplay",className:"divDisplay",children:j.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("label",{className:"container",children:[Object(x.jsxs)("strong",{children:[" ",e.name]})," - ",e.power,Object(x.jsx)("input",{type:"checkbox",checked:f.value.includes(e.id),onChange:function(t){return n=e.id,console.log("clicking",n),f.value.includes(n)?f.next(f.value.filter((function(e){return e!=n}))):f.next([].concat(Object(h.a)(f.value),[n])),void console.log("selected",f);var n}}),Object(x.jsx)("span",{className:"checkmark"})]})},e.name)}))}),Object(x.jsx)(g,{})]})]})};var C=function(){return Object(c.useEffect)((function(){b.subscribe(console.log)}),[]),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(k,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.e4fd83af.chunk.js.map