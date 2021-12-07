var H=Object.defineProperty,F=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var j=(e,n,s)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,h=(e,n)=>{for(var s in n||(n={}))$.call(n,s)&&j(e,s,n[s]);if(S)for(var s of S(n))O.call(n,s)&&j(e,s,n[s]);return e},P=(e,n)=>F(e,E(n));import{j as R,a as W,F as _,l,y as f,H as I,s as z,b as q,B as J,S as G}from"./vendor.dd2786ac.js";const V=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};V();const t=R,i=W,v=_,K=e=>new Promise(n=>setTimeout(n,e)),Q=()=>t("span",{className:"typewriter-cursor",children:"|"}),x=({str:e="",delayTime:n=50,play:s=!0,showCursor:o=!1,displayFunc:a=null})=>{const[r,c]=l([]),[u,g]=l(!1),b=async d=>{g(!1);for(let p=0;p<e.length;p++){let k=e.slice(0,p+1).split(`
`);await K(n),d.isMounted&&c(k)}g(!0)};return f(()=>{const d={isMounted:!0};return s&&b(d),()=>{d.isMounted=!1}},[s]),i(v,{children:[t("span",{className:`typewriter-text ${u?"finished-typing":"typing"}`,children:a?a(r):r}),o&&t(Q,{})]})};function T(){const{innerWidth:e,innerHeight:n}=window;return{width:e,height:n}}function Z(){const[e,n]=l(T());return f(()=>{function s(){n(T())}return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e}const y={sm:576,md:768,lg:992,xl:1200},w=()=>{const{width:e}=Z(),n=e<=y.md,s=e<=y.sm,o=e>y.lg;return{isTouchDevice:n,isMobile:s,isLargeScreen:o}},X=e=>{if(e.includes(" ")){const[n,s]=e.toLowerCase().split(" ");return`.${n}(${s})`}else return`.${e.toLowerCase()}()`},Y=({str:e,linkTo:n})=>{const[s,o]=l(!1),[a,r]=l(!1),{isTouchDevice:c}=w(),u=s||a;return c?t(I,{to:n,smooth:!0,className:"nav-button",children:t("span",{className:"nav-button-text",children:e})}):t(I,{to:n,smooth:!0,className:"nav-button",onFocus:()=>o(!0),onMouseEnter:()=>r(!0),onBlur:()=>o(!1),onMouseLeave:()=>r(!1),children:t(ee,{str:e,isActive:u})})},ee=({isActive:e,str:n})=>e?t("span",{className:"nav-button-text","data-req-width":`${n.length*10+42}px`,children:t(x,{str:X(n)})}):t("span",{className:"nav-button-text","data-req-width":`${n.length*10+42}px`,children:n});var te="/assets/symbol-defs.ebf0eb0b.svg";const N=({slug:e=""})=>t("svg",{"aria-label":e,className:`icon icon-${e}`,children:t("use",{href:`${te}#icon-${e}`})}),ne=({str:e,isActive:n=!1,pos:s=null,offsetX:o=0,offsetY:a=18})=>n&&s?t("span",{className:"tooltip",style:{top:s.y+a,left:s.x+o},children:e}):null,se=({email:e="",children:n})=>{const s="click to copy my email address",o="email address copied! \u{1F642}",[a,r]=l(!1),[c,u]=l(!1),[g,b]=l(null),d=z(null),p=m=>{m.preventDefault(),navigator.clipboard.writeText(e).then(()=>{u(!0),r(!0)})},k=()=>{if(d.current){const m=d.current.getBoundingClientRect(),D=(m.left+m.right)/2,M=(m.top+m.bottom)/2;b({x:D,y:M}),r(!0)}};return f(()=>{}),f(()=>{c&&setTimeout(()=>{u(!1),r(!1)},1e3)},[c]),i(v,{children:[t("a",{href:`mailto:${e}`,onMouseEnter:k,onMouseLeave:()=>r(!1),onFocus:()=>r(!0),onBlur:()=>r(!1),onClick:p,ref:d,children:n}),t(ne,{isActive:a,str:c?o:s,pos:g})]})},re=[{slug:"github",url:"https://github.com/kapppa-joe/"},{slug:"email",email:"kapppa.joe@gmail.com"},{slug:"linkedin",url:"https://www.linkedin.com/in/joeccf/"},{slug:"twitter",url:"https://twitter.com/kapppa_joe"}],ae=({url:e="",email:n="",children:s})=>e?t("a",{href:e,target:"_blank",children:s}):n?t(se,{email:n,children:s}):t(v,{children:s}),A=()=>t("div",{className:"contact-icons",children:re.map(e=>t(ae,P(h({},e),{children:t(N,{slug:e.slug})})))}),oe=[{str:"Home",linkTo:"#intro"},{str:"About me",linkTo:"#about-me"},{str:"Projects",linkTo:"#projects"},{str:"Contact",linkTo:"#contact"}],ie=()=>i("nav",{id:"main-nav",role:"navigation",children:[t("ul",{id:"nav-menu",children:oe.map(e=>t("li",{className:"nav-item",children:Y(e)}))}),t("span",{id:"nav-contact-icons",children:t(A,{})})]}),ce=`Hey, nice to meet you :)
My name is Joe Fong.`,le=e=>{const n=e.indexOf(":)");return n>=0?i("p",{children:[e.slice(0,n),t("span",{className:"emoji",children:":)"}),e.slice(n+2)]}):t("p",{children:e})},de=e=>n=>n.map(s=>e(s)),ue=()=>t("section",{id:"intro",children:t("div",{className:"welcome-msg",children:t(x,{str:ce,delayTime:100,displayFunc:de(le)})})}),me=`Hi, I am <em>Joe Fong</em>. A curiosity-driven guy who has a little hobby of coding.
Having graduated from the coding boot camp <em>#Northcoders</em> recently, I am now ready to embark on my journey as a software developer.

My previous workplace - a Japanese electronic firm - had piles of unmaintained legacy excel files and VBA macros which we had to run every day. Tinkering and debugging those legacy macros has sparked my interest in coding. Since then, I have developed a little hobby of teaching myself how to code. 
Although my job position wasn't much related to software development, I have always liked to adopt the things I learned to solve some daily problems. I built some Excel <em>VBA macros</em> and little utility scripts in <em>Python</em> to speed up my routine office works.
Aside from work, I also enjoyed bashing a kata on <em>Codewars</em> or tackling a challenge from <em>Project Euler</em>.
<strong>Learning something new and tinkering with it never fails to fill me with delight, and that's what sparks me to pursue a career as a Software Developer</strong>`,he=me.split(`
`).map(e=>t("p",{dangerouslySetInnerHTML:{__html:e}})),pe=()=>t("section",{id:"about-me",children:i("div",{className:"container",children:[t("h2",{className:"section-title",children:"About me"}),t("h3",{className:"subtitle",children:"Software Engineer"}),t("div",{className:"about-me-contents",children:he})]})}),ge=({name:e,slug:n,value:s,description:o})=>i("div",{className:"skillbar",children:[t(N,{slug:n}),t("label",{children:e}),t("span",{className:"empty-bar",children:t("span",{className:"filled-bar",style:{width:`${s*100}%`},children:t("small",{children:o})})})]}),L=({subHeading:e,data:n})=>i("div",{className:"skills-chart",children:[t("h4",{className:"skills-chart-subheading",children:e}),t("div",{className:"skillbar-wrapper",children:n.map(s=>ge(s))})]}),fe=[{name:"Javascript",slug:"javascript",value:.8,description:"Pretty good at this"},{name:"Python",slug:"python",value:.55,description:"Intermediate"},{name:"React",slug:"react",value:.35,description:"Still much more to learn"},{name:"HTML/CSS",slug:"code",value:.55,description:"Intermediate"},{name:"SASS",slug:"sass",value:.25,description:"Beginner"},{name:"Ruby",slug:"ruby",value:.25,description:"Beginner"},{name:"Nim",slug:"nim",value:.55,description:"Some experiences"},{name:"VBA (Excel)",slug:"code",value:.55,description:"Some experiences"}],ve=[{name:"Linux",slug:"linux",value:.5,description:"Not a guru but using it daily"},{name:"git",slug:"git",value:.4,description:"Basic operations"},{name:"sushi eating",slug:"sushi",value:.9,description:"Can eat a lot"}],be=()=>t("section",{id:"skills",children:i("div",{className:"container",children:[t("h3",{className:"subtitle",children:"Skills"}),t(L,{data:fe,subHeading:"Coding"}),t(L,{data:ve,subHeading:"Other Skills"})]})}),ke=e=>i("article",{className:`project-card ${e.landscapePic&&"project-landscape-pic"}`,children:[i("div",{className:"project-text-wrapper",children:[t("h3",{className:"project-title",children:e.title}),e.landscapePic&&t(C,h({},e)),t("div",{className:"project-description",children:e.description.split(`
`).map(n=>t("p",{children:n}))}),i("div",{className:"project-techstack",children:[t("label",{children:"Tech Stack:"}),t("div",{className:"project-techstack-tags",children:e.techStack.map(n=>t(v,{children:t("span",{children:n})}))})]}),i("div",{className:"link-wrapper",children:[e.hostedUrl&&t("a",{className:"button",href:e.hostedUrl,target:"_blank",children:"Live Demo"}),t("a",{className:"button",href:e.repoUrl,target:"_blank",children:"See the code"})]})]}),e.landscapePic||t(C,h({},e))]}),B=({url:e,title:n,className:s=""})=>t("img",{className:`project-img ${s}`,src:e,alt:n}),ye=()=>t("div",{className:"project-swipe-helper",onTouchStart:e=>{e.stopPropagation()}}),C=e=>{const{isLargeScreen:n,isTouchDevice:s}=w();return e.demoImgUrl&&n?t(we,h({},e)):i("div",{className:"project-img-wrapper",children:[s&&t(ye,{}),t("a",{href:e.hostedUrl,target:"_blank",children:t(B,{url:e.imgUrl,title:e.title})})]})},we=e=>{const[n,s]=l(!1),[o,a]=l(!1),r=n&&o;return i("div",{className:"project-img-wrapper",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[o&&t("small",{children:"\u2B07 Try hover on the image! "}),i("a",{href:e.hostedUrl,target:"_blank",children:[t("img",{className:`project-img ${r||"hidden"}`,src:e.demoImgUrl,alt:e.title,onLoad:()=>a(!0)}),t(B,{url:e.imgUrl,title:e.title,className:r?"hidden":""})]})]})};var Ne="/assets/out-of-orbit-screenshot.c38a7455.png",Se="/assets/out-of-orbit-demo.cceb35bc.webp",je="/assets/jack-o-hangman-screenshot.b8d2b31a.png",Pe="/assets/jack-o-hangman-demo.fd229192.webp",Ie="/assets/nc-boardgamers-screenshot.53d7423d.png",xe="/assets/nc-broad-gamers.99565819.png",Te="/assets/python-sudoku-api-screenshot.8a89db32.png",Ae="/assets/project-euler-trial-screenshot.9d737b86.png";const Le=[{title:"Out of Orbit",description:`A space themed educational game with element of 3D and Augmented Reality. Brings the planets & spacecrafts of our solar system to life in front of your eye.
Built in a team of five members as a final project at #Northcoders.`,techStack:["React","A-Frame","AR.js","Firebase"],hostedUrl:"https://out-of-orbit.netlify.app/",repoUrl:"https://github.com/kapppa-joe/space-app-frontend",imgUrl:Ne,demoImgUrl:Se},{title:"Jack-o-hangman",description:`A word guessing minigame with a Halloween theme. Built as a personal project to practise using react with CSS animations.
[ Spoiler: may contain jump scare ]`,techStack:["React"],hostedUrl:"https://kapppa-joe.github.io/jack-o-hangman/",repoUrl:"https://github.com/kapppa-joe/jack-o-hangman",imgUrl:je,demoImgUrl:Pe},{title:"Sudoku API",description:"A RESTful micro-service webAPI which solves any given Sudoku puzzle or serves a list of Sudoku puzzles with various difficulties. Built as a personal project to practise Python & Flask.",techStack:["Python","Flask","SQLAlchemy","Pytest","Prosgresql"],hostedUrl:"https://sudoku-solver-12345.herokuapp.com/api/",repoUrl:"https://github.com/kapppa-joe/python-sudoku-api",imgUrl:Te,landscapePic:!0},{title:"Project Euler trial",description:"A collection of my attempts in solving project Euler problems with a functional programming (FP) approach. I started this repo to practise on TDD & FP in Python.",techStack:["Python","Pytest"],repoUrl:"https://github.com/kapppa-joe/project-euler-trial",imgUrl:Ae,landscapePic:!0},{title:"NC Boardgamers",description:"A discussion website for board games. Built as a front-end project at #Northcoders. Aimed at a clean and sleek design.",techStack:["React"],hostedUrl:"https://nc-boardgamers.netlify.app/",repoUrl:"https://github.com/kapppa-joe/nc-games",imgUrl:Ie},{title:"NC Boardgamers (back end)",description:"A backend server of NC Boardgamers. Provide access to CRUD operations via a RESTful API.",techStack:["Express.js","Postgresql"],hostedUrl:"https://nc-board-gamers.herokuapp.com/api/",repoUrl:"https://github.com/kapppa-joe/backend-project-nc-games",imgUrl:xe}];const U=e=>(n,s,o)=>t("button",{className:`arrow-button arrow-button-${e}`,onClick:n,"aria-label":o,children:t("svg",{className:"arrow-svg",viewBox:"0 0 100 100",children:t("path",{d:"M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z",className:"arrow"})})}),Be=()=>{const{isTouchDevice:e}=w();return t(q.Carousel,{infiniteLoop:!0,centerMode:!e,centerSlidePercentage:70,selectedItem:0,renderArrowPrev:U("prev"),renderArrowNext:U("next"),showThumbs:!1,children:Le.map(n=>t(ke,h({},n)))})},Ce=()=>t("section",{id:"projects",children:i("div",{className:"container",children:[t("h2",{className:"section-title",children:"Projects"}),t("p",{className:"subtitle",children:"Some of the things I've made..."}),t(Be,{})]})}),Ue=()=>t("section",{id:"contact",children:i("div",{className:"container",children:[t("h2",{className:"section-title",children:"Contact me"}),i("div",{className:"contact-body",children:["Location: Manchester, United Kingdom",t(A,{})]})]})}),De=({isDarkMode:e,toggleTheme:n})=>t("span",{className:"theme-toggle-button",onClick:n,role:"button","aria-label":"toggle-colour-theme",children:i("span",{className:"theme-button-icon",children:[t(N,{slug:e?"sunny":"moon"}),i("span",{className:"theme-button-text",children:["Switch to ",e?"light":"dark "," mode"]})]})});function Me(){const[e,n]=l(!1);return t(J,{children:i("div",{id:"app","data-theme":e?"dark":"light",children:[t(De,{isDarkMode:e,toggleTheme:()=>n(o=>!o)}),t(ie,{}),i("div",{id:"sections-wrapper",children:[t(ue,{}),t(pe,{}),t(be,{}),t(Ce,{}),t(Ue,{})]})]})})}G(t(Me,{}),document.getElementById("root"));
