import{d,r as h,o as x,B as f,a as p,c as D,l as m,x as v,_ as y,b as a,w as t,F as u,k as A,f as s,h as C,i as l}from"./app.1a5e139c.js";const g=d({__name:"index",props:{count:{default:3},gap:{default:"0px"},eqhMultiple:{default:0}},setup(c){const r=c;let o=[];const n=h(),F=()=>{requestAnimationFrame(()=>{o.forEach(e=>{e.style.height=`${e.offsetWidth*r.eqhMultiple}px`})})},_=()=>{o.forEach(e=>{e.style.height=`${e.scrollWidth*r.eqhMultiple}px`}),window.addEventListener("resize",F)};return x(()=>{o=[...n.value.children];let e=null;(function i(){if(r.eqhMultiple>0&&(o==null?void 0:o.length)){setTimeout(()=>{_()});return}e=requestAnimationFrame(i)})(),setTimeout(()=>{cancelAnimationFrame(e)},3e3)}),f(()=>{window.removeEventListener("resize",F)}),(e,i)=>(p(),D("div",{class:"LibGridLayout",ref_key:"LibGridLayout",ref:n,style:v({gridTemplateColumns:"repeat("+c.count+", 1fr)",gridGap:c.gap})},[m(e.$slots,"default",{},void 0,!0)],4))}});const B=y(g,[["__scopeId","data-v-7beb033b"]]),b={class:"grid"},E=d({__name:"index",setup(c){return(r,o)=>(p(),D("div",b,[a(B,{gap:"10px",count:3,eqhMultiple:.5},{default:t(()=>[(p(),D(u,null,A(8,n=>s("div",{class:"box",key:n})),64))]),_:1},8,["eqhMultiple"])]))}});const L=y(E,[["__scopeId","data-v-c3717ab0"]]);const w={},G={class:"flex"};function q(c,r){return p(),D("div",G,[(p(),D(u,null,A(10,o=>s("div",{class:"box",key:o})),64))])}const M=y(w,[["render",q],["__scopeId","data-v-345cb4a5"]]),k=s("h1",{id:"gridlayout",tabindex:"-1"},[l("GridLayout "),s("a",{class:"header-anchor",href:"#gridlayout","aria-hidden":"true"},"#")],-1),$=l(" \u8D34\u8FB9\u7B49\u8DDD\uFF0C\u53EF\u652F\u6301\u7B49\u6BD4\u7F29\u653E "),N=s("h2",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[l("\u4EE3\u7801\u6F14\u793A "),s("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#")],-1),S=s("p",null,[l("\u4E0D\u53EF\u4E3A\u5217\u8868\u76D2\u5B50\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C\u5982\u679C"),s("code",null,"eqhMultiple"),l("\u6709\u503C\uFF0C\u624B\u52A8\u8BBE\u7F6E\u7684\u9AD8\u5EA6\u5C06\u5931\u6548\uFF0C\u9664\u975E"),s("code",null,"!important"),l(" \u8BD5\u7740\u7F29\u5C0F\u6D4F\u89C8\u5668\u5BBD\u5EA6\u67E5\u770B\u6548\u679C")],-1),I={class:"demoBox"},P=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"grid"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"LibGridLayout"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"gap"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"10px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"count"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"5"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"eqhMultiple"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"0.5"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"box"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-for"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}}," in "),s("span",{style:{color:"#F78C6C"}},"8"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"key"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"LibGridLayout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"grid"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"100%"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"100%"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"box"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"100px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"border"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1px"),s("span",{style:{color:"#A6ACCD"}}," solid "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"000"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"transition"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," all "),s("span",{style:{color:"#F78C6C"}},"0.5s"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),T=s("p",null,[l("\u5176\u5B9E"),s("code",null,"Flex"),l("\u5E03\u5C40\u4E5F\u652F\u6301\u4F7F\u7528"),s("code",null,"gap"),l("\u5C5E\u6027")],-1),z=s("p",null,"\u8BD5\u7740\u7F29\u5C0F\u6D4F\u89C8\u5668\u5BBD\u5EA6",-1),V={class:"demoBox"},O=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"flex"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"box"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-for"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}}," in "),s("span",{style:{color:"#F78C6C"}},"10"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"key"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"flex"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," flex"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"flex-wrap"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," wrap"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"100%"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"gap"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"box"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"flex"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"min-width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"100px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10vh"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"border"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1px"),s("span",{style:{color:"#A6ACCD"}}," solid "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"000"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"transition"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," all "),s("span",{style:{color:"#F78C6C"}},"0.5s"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),W=s("h2",{id:"api",tabindex:"-1"},[l("API "),s("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#")],-1),j=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"\u53C2\u6570"),s("th",null,"\u8BF4\u660E"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u9ED8\u8BA4\u503C")])]),s("tbody",null,[s("tr",null,[s("td",null,"count"),s("td",null,"\u4E00\u884C\u4E2A\u6570"),s("td",null,"Number"),s("td",null,"3")]),s("tr",null,[s("td",null,"gap"),s("td",null,"\u76D2\u5B50\u95F4\u8DDD"),s("td",null,"String"),s("td",null,"0px")]),s("tr",null,[s("td",null,"eqhMultiple"),s("td",null,"\u9AD8\u5EA6\u662F\u5BBD\u5EA6\u7684\u591A\u5C11\u500D\uFF0C\u610F\u5473\u7740\u7B49\u6BD4"),s("td",null,"Number"),s("td",null,"0")])])],-1),U=JSON.parse('{"title":"GridLayout","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"Components/statics/GridLayout.md","lastUpdated":1668327499000}'),H={name:"Components/statics/GridLayout.md"},K=Object.assign(H,{setup(c){return(r,o)=>{const n=C("ContainerBox"),F=C("ShowCode");return p(),D("div",null,[k,a(n,{title:"\u4ECB\u7ECD"},{desc:t(()=>[$]),_:1}),N,a(n,{title:"\u57FA\u7840\u7528\u6CD5"},{desc:t(()=>[S]),default:t(()=>[s("div",I,[a(L)]),a(F,null,{codes:t(()=>[P]),_:1})]),_:1}),a(n,{title:"Flex\u5E03\u5C40\u5B9E\u73B0"},{desc:t(()=>[T,z]),default:t(()=>[s("div",V,[a(M)]),a(F,null,{codes:t(()=>[O]),_:1})]),_:1}),W,a(n,{title:"Props"},{desc:t(()=>[j]),_:1})])}}});export{U as __pageData,K as default};