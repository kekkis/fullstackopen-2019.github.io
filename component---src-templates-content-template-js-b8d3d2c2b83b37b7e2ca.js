(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{137:function(e,a,t){"use strict";t.r(a);t(178),t(69),t(316);var n=t(6),r=t.n(n),l=(t(486),t(0)),o=t.n(l),i=t(156),s=t(242),c=t.n(s),m=t(149),u=(t(487),t(139)),p=t(4),d=t.n(p),g=function(e){var a=e.part,t=e.letter;return o.a.createElement(u.a,{flex:!0,className:"container spacing",centered:!0},o.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"https://github.com/fullstackopen-2019/fullstackopen-2019.github.io/edit/source/src/content/osa"+a+"/osa"+a+t+".md"},o.a.createElement("span",null,"Ehdota muutosta materiaalin sisältöön")))};g.propTypes={part:d.a.number.isRequired,letter:d.a.string.isRequired};var h=g,f=t(146),b=t(163),E=t(174),k=t.n(E),v=t(212),N=(t(145),t(173),t(162)),y=(t(488),t(140)),x=t(489),A=t.n(x),w=t(175),C=t.n(w),T=t(151),S=t.n(T),I=t(180),M=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")),a=document.querySelector("h1"),n=e.map(function(e){return e.id=A()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}});t.setState({headings:n,h1Top:a.offsetTop})},t.loopThroughPartsNode=function(e){var a=t.state.headings,n=t.props,r=n.part,l=n.letter,i=n.currentPath,s=n.currentPartTitle,c=n.colorCode,m=[];for(var u in e)s!==e[u]?m.push(o.a.createElement(y.Link,{key:u,className:"left-navigation-link",style:{borderColor:c},to:"/osa"+r+"/"+C()(e[u])},u+" "+e[u])):m.push(o.a.createElement(I.a,{containerClassName:"accordion--side-navigation",style:{color:c},titleStyle:{backgroundColor:c,borderColor:c},initiallyOpened:!0,key:u,title:l+" "+e[u],list:a.map(function(e){return{href:i+"#"+e.id,text:e.text}})}));return m},t.state={h1Top:0,headings:[]},t}return r()(a,e),a.prototype.render=function(){var e=this.props.part;return o.a.createElement(u.a,{tag:"ul",flex:!0,dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(S.a[e]))},a}(l.Component);M.defaultProps={className:""},M.propTypes={className:d.a.string,colorCode:d.a.string.isRequired};var B=M,j=t(182),R=t(144),L=t(166),D=t.n(L),P=t(241),Z=t(315),F=t.n(Z);t.d(a,"default",function(){return J}),t.d(a,"contentPageQuery",function(){return O});var J=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleScroll=function(){t.setState({top:window.scrollY})},t.state={h1Top:0,h1Title:"",top:0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),a=document.querySelector("h1"),t=this.props.data.markdownRemark.frontmatter;e.map(function(e){return e.style="border-color: "+R[P.a[t.part]],e.target="_blank",e.onmouseover=function(){e.style.backgroundColor=R[P.a[t.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null}),this.setState({h1Top:a.offsetTop,h1Title:a.innerText}),window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.data.markdownRemark,a=e.frontmatter,t=e.html,n=a.mainImage,r=a.letter,l=a.part,s=R[P.a[l]],p={replace:function(e){var a=e.type,t=e.name,n=e.attribs,r=e.children;return"tag"===a&&"picture"===t?o.a.createElement("picture",null,o.a.createElement("img",{style:{borderColor:s},alt:"fullstack content",src:r[0].attribs.src})):"tag"===a&&"pre"===t?o.a.createElement("pre",null,D()(r,p)):"tag"===a&&"content"===n.class?o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"course-content col-6 push-right-3"},D()(r,p))):"tag"===a&&"tasks"===n.class?o.a.createElement(m.a,{style:{backgroundColor:s},className:"spacing spacing--after tasks"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"course-content col-6 push-right-3",style:{borderColor:s,backgroundColor:"transparent"}},"pre"===r.name?o.a.createElement("pre",null,D()(r,p)):D()(r,p)))):void 0}};return o.a.createElement(b.a,null,o.a.createElement(N.a,{title:"Fullstack osa"+l+" | "+this.state.h1Title,keywords:["Fullstack",this.state.h1Title]}),this.state.top>300&&o.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},o.a.createElement("img",{src:c.a,alt:"arrow-up"})),o.a.createElement("div",{className:"course-container spacing--after"},o.a.createElement(m.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:s,style:{backgroundImage:"url("+F.a.resolve(n.publicURL)+")",backgroundColor:s}},o.a.createElement("div",{className:"container spacing--after"},o.a.createElement(i.a,{className:"breadcrumb",content:[{backgroundColor:s,text:"Fullstack",link:"/#course-contents"},{backgroundColor:s,text:"osa "+l,link:"/osa"+l},{backgroundColor:R.black,text:S.a[l][r]}]}))),o.a.createElement(u.a,{className:"course"},o.a.createElement(u.a,{flex:!0,className:"container",relative:!0},o.a.createElement(B,{part:l,letter:r,currentPartTitle:S.a[l][r],currentPath:"/osa"+l+"/"+C()(S.a[l][r]),colorCode:s,className:"col-2 spacing",style:{top:this.state.h1Top}}),o.a.createElement(u.a,{className:"course-content col-6 push-right-3",autoBottomMargin:!0},o.a.createElement("p",{className:"col-1 letter",style:{borderColor:s}},r),o.a.createElement(j.a,{headingLevel:"h1",text:S.a[l][r]}))),k()(t,p)),!1,o.a.createElement(h,{part:l,letter:r}),o.a.createElement(v.a,{part:l,letter:r})),o.a.createElement(f.a,null))},a}(l.Component),O="1293465836"},144:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},145:function(e,a,t){"use strict";t.d(a,"a",function(){return f});t(28),t(157);var n=t(141),r=t.n(n),l=(t(179),t(174)),o=t.n(l),i=t(166),s=t.n(i),c=t(4),m=t.n(c),u=t(0),p=t.n(u),d=t(169),g=t.n(d),h=t(139),f=function(e){var a=e.text,t=e.className,n=e.heading,l=e.headingFontSize,i=e.bold,c=e.centered,m=e.noPadding,u=e.headingFont,d=r()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),f=[];c&&f.push("centered"),i&&f.push("bold"),m&&f.push("body-text--no-padding"),u&&f.push("heading-font");var b={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"github-logo"===t.class)return p.a.createElement(h.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},p.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:g.a}),p.a.createElement("p",{style:{marginLeft:"0.611rem"}},s()(n,b)))}};return p.a.createElement("div",Object.assign({className:"body-text "+t},d),n.title&&function(){if(n){var e=n.level;return p.a.createElement(e,{className:"body-text__title",style:l?{fontSize:l}:{}},n.title)}return null}(),a&&"string"==typeof a?p.a.createElement("p",{className:"body-text__content "+f.join(" ")},a):a&&a.map(function(e){return p.a.createElement("div",{key:e,className:"body-text__content "+f.join(" ")},o()(e,b))}))};f.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},f.propTypes={heading:m.a.shape({text:m.a.string,level:m.a.string}),headingFontSize:m.a.string,text:m.a.oneOfType([m.a.string,m.a.array]),className:m.a.string,centered:m.a.bool,bold:m.a.bool,noPadding:m.a.bool}},146:function(e,a,t){"use strict";t(147);var n=t(139),r=t(150),l=t(140),o=t(0),i=t.n(o),s=t(152),c=t.n(s),m=t(164),u=t(153),p=[{src:t.n(u).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){return i.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(n.a,{className:"col-5 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},i.a.createElement("div",{className:"footer__navigation-link-container"},m.b.map(function(e){return i.a.createElement(l.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},147:function(e,a,t){},149:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(141),r=t.n(n),l=(t(172),t(4)),o=t.n(l),i=t(0),s=t.n(i),c=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return s.a.createElement("div",Object.assign({className:"banner "+a,style:l},n))};c.defaultProps={className:""},c.propTypes={className:o.a.string}},151:function(e,a){e.exports={0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}}},156:function(e,a,t){"use strict";t(28),t(157),t(165);var n=t(141),r=t.n(n),l=(t(158),t(139)),o=t(140),i=t(4),s=t.n(i),c=t(0),m=t.n(c),u=t(144),p=function(e){var a,t=e.className,n=e.wrapperClassName,i=e.link,s=e.content,c=e.stack,p=e.bold,d=e.thickBorder,g=e.upperCase,h=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),f=m.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},s.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===u.black?"white":u.black};return m.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},h),m.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(d?"arrow__rectangle--thick-border":""),style:t},e.link?m.a.createElement(o.Link,{to:e.link},g?e.text.toUpperCase():e.text):g?e.text.toUpperCase():e.text),m.a.createElement("div",{className:"arrow__point "+(d?"arrow__point--thick-border":""),style:t}))}));return c||i?!c&&i?a=m.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},m.a.createElement(o.Link,{to:i,style:{display:"inline-block"}},f)):c&&(a=m.a.createElement("div",{className:"col-10 spacing--after "+n},m.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===u.black?"white":u.black};return m.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},h),m.a.createElement(l.a,{flex:!0,className:"arrow__rectangle",style:a},m.a.createElement("p",{className:"arrow--stacked-title"},m.a.createElement("span",null,e.text))),m.a.createElement("div",{className:"arrow__point",style:a}))})))):a=m.a.createElement("div",{className:"col-10 spacing--after"},f),a};p.propTypes={className:s.a.string,wrapperClassName:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},p.defaultProps={className:"",wrapperClassName:""},a.a=p},158:function(e,a,t){},169:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},172:function(e,a,t){},178:function(e,a,t){var n=t(23).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(14)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},179:function(e,a,t){},180:function(e,a,t){"use strict";var n=t(6),r=t.n(n),l=(t(181),t(140)),o=t(4),i=t.n(o),s=t(0),c=t.n(s),m=t(145),u=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpened:!1},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},t.render=function(){var e=this,a=this.props,t=a.title,n=a.content,r=a.className,o=a.containerClassName,i=a.list,s=a.titleStyle,u=this.state.isOpened;return c.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},c.a.createElement("button",{className:"accordion accordion__title "+(u?"active":"")+" "+r,style:s,onClick:function(){return e.setState({isOpened:!u})}},t),c.a.createElement("div",{className:"panel",style:{padding:u?"2rem 18px":"",maxHeight:""+(u?"unset":0),transition:"max-height 0.2s ease-out"}},n&&c.a.createElement(m.a,{className:"col-8 push-right-1",text:n}),i&&c.a.createElement("ul",null,i.map(function(e){return c.a.createElement("li",{key:e.text},c.a.createElement(l.Link,{to:e.href},e.text))}))))},a}(s.Component);u.propTypes={title:i.a.string.isRequired,content:i.a.oneOfType([i.a.string,i.a.array]),list:i.a.array,className:i.a.string,containerClassName:i.a.string,initiallyOpened:i.a.bool,titleStyle:i.a.object},u.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},a.a=u},181:function(e,a,t){},182:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(141),r=t.n(n),l=(t(183),t(4)),o=t.n(l),i=t(0),s=t.n(i),c=function(e){var a=e.className,t=e.headingLevel,n=void 0===t?"h2":t,l=e.headingFontSize,o=e.text,i=r()(e,["className","headingLevel","headingFontSize","text"]),c=n;return s.a.createElement(c,Object.assign({className:"sub-header "+a,style:l?{fontSize:l}:{}},i),o)};c.propTypes={className:o.a.string,headingLevel:o.a.string,text:o.a.string.isRequired,headingFontSize:o.a.string},c.defaultProps={className:""}},183:function(e,a,t){},212:function(e,a,t){"use strict";t(271),t(273),t(274),t(67),t(46),t(155),t(213);var n=t(139),r=t(140),l=t(4),o=t(0),i=t.n(o),s=t(151),c=t.n(s),m=t(175),u=t.n(m),p=Object.keys(c.a),d=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},g=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},h=function(e){return p.includes(e.toString())},f=function(e,a){return g(e)in c.a[a]},b=function(e,a){return!e&&h(a+1)||e&&f(e,a)},E=function(e){var a=e.part,t=e.letter;return i.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&h(a-1)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:"/osa"+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a-1),i.a.createElement("b",null,"Edellinen osa"))),b(t,a)&&i.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:"/osa"+a+"/"+u()(c.a[a][d(t)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",""+a+d(t)),i.a.createElement("b",null,"Edellinen osa"))),b(t,a)&&i.a.createElement("div",{className:"col-1--mobile separator"})):h(a-1)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:"/osa"+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a-1),i.a.createElement("b",null,"Edellinen osa"))),b(t,a)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(n.a,{className:"push-right-1"}):i.a.createElement(n.a,{className:"push-right-1"}),!t&&h(a+1)?i.a.createElement(r.Link,{to:"/osa"+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a+1),i.a.createElement("b",null,"Seuraava osa"))):t?f(t,a)?i.a.createElement(r.Link,{to:"/osa"+a+"/"+u()(c.a[a][g(t)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",""+a+g(t)),i.a.createElement("b",null,"Seuraava osa"))):h(a+1)?i.a.createElement(r.Link,{to:"/osa"+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a+1),i.a.createElement("b",null,"Seuraava osa"))):i.a.createElement(n.a,{className:"push-left-1"}):i.a.createElement(n.a,{className:"push-left-1"}))};E.defaultProps={part:void 0,letter:void 0},E.propTypes={part:l.PropTypes.number,letter:l.PropTypes.string},a.a=E},213:function(e,a,t){},241:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},242:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},316:function(e,a,t){"use strict";var n=t(17),r=t(21),l=t(30),o=t(72),i=t(73),s=t(32),c=t(485),m=t(74);r(r.S+r.F*!t(75)(function(e){Array.from(e)}),"Array",{from:function(e){var a,t,r,u,p=l(e),d="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,f=void 0!==h,b=0,E=m(p);if(f&&(h=n(h,g>2?arguments[2]:void 0,2)),null==E||d==Array&&i(E))for(t=new d(a=s(p.length));a>b;b++)c(t,b,f?h(p[b],b):p[b]);else for(u=E.call(p),t=new d;!(r=u.next()).done;b++)c(t,b,f?o(u,h,[r.value,b],!0):r.value);return t.length=b,t}})},485:function(e,a,t){"use strict";var n=t(23),r=t(47);e.exports=function(e,a,t){a in e?n.f(e,a,r(0,t)):e[a]=t}},486:function(e,a,t){},487:function(e,a,t){},488:function(e,a,t){},489:function(e,a,t){var n=t(214)("kebabCase",t(490),t(240));n.placeholder=t(193),e.exports=n},490:function(e,a,t){var n=t(313)(function(e,a,t){return e+(t?"-":"")+a.toLowerCase()});e.exports=n}}]);
//# sourceMappingURL=component---src-templates-content-template-js-b8d3d2c2b83b37b7e2ca.js.map