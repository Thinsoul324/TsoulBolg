(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{61:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(90),m=t(88),c=t(84);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:l,name:s,count:i}=a;return r.a.createElement(m.a,{title:`Posts tagged "${s}"`,description:`Blog | Tagged "${s}"`},r.a.createElement("div",{className:"container-fluid my-4"},r.a.createElement("header",{className:"text-center"},r.a.createElement("h1",null,i," ",function(e,a){return e>1?`${a}s`:a}(i,"post"),' tagged with "',s,'"'),r.a.createElement(c.a,{href:l},"View All Tags")),r.a.createElement("div",{className:"my-4"},t.map((({content:e})=>r.a.createElement("div",{key:e.metadata.permalink,className:"col col-xl-4 offset-xl-4 col-xs-6 mb-5"},r.a.createElement(n.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null))))))))}},90:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(83),m=t(91),c=t(84);const s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=e=>Math.ceil(e);a.a=function(e){const{children:a,frontMatter:t,metadata:l,truncated:o,isBlogPostPage:d=!1}=e,{date:u,readingTime:g,tags:E,permalink:h,editUrl:p}=l,{author:f,title:b}=t,N=t.author_url||t.authorURL,v=t.author_image_url||t.authorImageURL,w=u.substring(0,10).split("-"),y=w[0],x=s[parseInt(w[1],10)-1],k=parseInt(w[2],10);return r.a.createElement("article",{className:"card shadow"},r.a.createElement("div",{className:"row no-gutters rows-col-2 m-3"},r.a.createElement("div",{className:"col-xs mr-3"},v&&r.a.createElement("img",{style:{width:"50px"},src:v,alt:f})),r.a.createElement("div",{className:"col"},f&&r.a.createElement("h5",null,r.a.createElement("a",{href:N,rel:f},f)),r.a.createElement("time",{className:"card-subtitle mb-md-4 font-weight-light",dateTime:u},x," ",k,", ",y," ",d&&g&&r.a.createElement(r.a.Fragment,null," \xb7 ",i(g)," min read"))),r.a.createElement("div",{className:"col text-right"},d&&p&&r.a.createElement("span",null,r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-primary mr-2"},b),r.a.createElement("section",null,r.a.createElement(n.a,{components:m.a},a))),r.a.createElement("footer",{className:"row no-gutters m-3 justify-content-between"},r.a.createElement("div",{className:"col col-xs"},E.length>0&&r.a.createElement(r.a.Fragment,null,E.map((({label:e,permalink:a})=>r.a.createElement(c.a,{key:a,className:"m-1",to:a},r.a.createElement("span",{className:"badge badge-primary"},e)))))),r.a.createElement("div",{className:"col align-self-center text-right"},!d&&g&&r.a.createElement("small",{className:o?"mr-2":""},i(g)," min read"),o&&r.a.createElement(c.a,{to:h,"aria-label":`Read more about ${b}`},r.a.createElement("span",{className:"stretched-link"},"Read more")))))}}}]);