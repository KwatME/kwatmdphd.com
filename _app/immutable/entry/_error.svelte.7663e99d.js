import{S as k,i as q,s as H,a as f,k as d,q as h,J as S,h as n,c as b,l as v,m as g,r as $,n as y,b as p,C as E,D as x,T as B}from"../chunks/index.05a2c346.js";import{s as C}from"../chunks/singletons.c6eadbf6.js";const G=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},A={subscribe(s){return G().page.subscribe(s)}};function D(s){let r,i,t,l,c,a,u;return document.title=r=s[0],{c(){i=f(),t=d("h1"),l=h(s[0]),c=f(),a=d("a"),u=h("Go Back Home"),this.h()},l(e){S("svelte-s9xyfm",document.head).forEach(n),i=b(e),t=v(e,"H1",{});var m=g(t);l=$(m,s[0]),m.forEach(n),c=b(e),a=v(e,"A",{href:!0,class:!0});var _=g(a);u=$(_,"Go Back Home"),_.forEach(n),this.h()},h(){y(a,"href","/"),y(a,"class","svelte-1axfqgo")},m(e,o){p(e,i,o),p(e,t,o),E(t,l),p(e,c,o),p(e,a,o),E(a,u)},p(e,[o]){o&1&&r!==(r=e[0])&&(document.title=r)},i:x,o:x,d(e){e&&n(i),e&&n(t),e&&n(c),e&&n(a)}}}function J(s,r,i){let t;B(s,A,u=>i(1,t=u));const{status:l,error:{message:c}}=t;return[`${l}: ${c}`]}let w=class extends k{constructor(r){super(),q(this,r,J,D,H,{})}};export{w as default};
