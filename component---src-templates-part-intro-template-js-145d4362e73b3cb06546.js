(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return L}),t.d(a,"partInfoQuery",function(){return F});t(444),t(67),t(46),t(218),t(446);var n=t(294),r=t(152),l=t(147),o=t(159),i=t(161),c=t(239),s=t.n(c),u=t(326),m=t(0),p=t.n(m),f=t(160),d=t(154),g=t(324),k=t.n(g),b=t(595),v=t.n(b),h=t(233),E=t.n(h),y=t(157),N=t.n(y),w=t(213),x=t.n(w),j=t(361),C=t(293),_=t.n(C),R=t(240),S=t.n(R);function L(e){var a=e.data.markdownRemark,t=a.frontmatter,c=a.html,m=t.mainImage,g=t.part,b=t.lang,h=v()(x.a[b][g])?[]:Object.keys(x.a[b][g]),y={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"intro"===t.class)return p.a.createElement("div",{className:"col-7"},k()(n,y))}};return p.a.createElement(i.a,null,p.a.createElement(f.a,{lang:b,title:"Fullstack "+("en"===b?"part":"osa")+g,description:E.a[b],keywords:[].concat(N.a,[x.a[b][g]?Object.values(x.a[b][g]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(r.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+_.a.resolve(m.publicURL)+")",backgroundColor:d[j.a[g]]}},p.a.createElement(l.a,{className:"container"},p.a.createElement(n.a,{className:"breadcrumb",content:[{backgroundColor:d[j.a[g]],text:"Fullstack",link:"/"+("en"===b?"en/":"")+"#course-contents"},{backgroundColor:d.black,text:("en"===b?"Part":"Osa")+" "+g}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},s()(c,y)),h&&p.a.createElement(n.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:h.map(function(e){return{backgroundColor:d.white,letter:e,path:"/"+("en"===b?"en/part":"osa")+g+"/"+S()(x.a[b][g][e]),text:e+" "+x.a[b][g][e]}})}))),p.a.createElement(u.a,{part:g,lang:b})),p.a.createElement(o.a,{lang:b}))}var F="412899762"},152:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(28);var n=t(148),r=t.n(n),l=(t(162),t(4)),o=t.n(l),i=t(0),c=t.n(i),s=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return c.a.createElement("div",Object.assign({className:"banner "+a,style:l},n))};s.defaultProps={className:""},s.propTypes={className:o.a.string}},154:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},157:function(e,a){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi","university of helsinki","department of computer science","web development","software development","web","web application","single page app","programming"]},159:function(e,a,t){"use strict";t(163);var n=t(147),r=t(149),l=t(146),o=t(0),i=t.n(o),c=t(155),s=t.n(c),u=t(212),m=t(153),p=[{src:t.n(m).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:s.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(e){var a=e.lang;return i.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},i.a.createElement("div",{className:"footer__navigation-link-container"},u.b[a].map(function(e){return i.a.createElement(l.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},162:function(e,a,t){},163:function(e,a,t){},213:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}},en:{0:{a:"General info",b:"Fundamentals of Web-apps"},1:{a:"Introduction to React",b:"Javascript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{},5:{},6:{},7:{},8:{}}}},218:function(e,a,t){var n=t(30),r=t(29);t(230)("keys",function(){return function(e){return r(n(e))}})},230:function(e,a,t){var n=t(21),r=t(15),l=t(22);e.exports=function(e,a){var t=(r.Object||{})[e]||Object[e],o={};o[e]=a(t),n(n.S+n.F*l(function(){t(1)}),"Object",o)}},233:function(e,a){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},294:function(e,a,t){"use strict";t(28),t(237),t(296);var n=t(148),r=t.n(n),l=(t(297),t(147)),o=t(146),i=t(4),c=t.n(i),s=t(0),u=t.n(s),m=t(154),p=function(e){var a,t=e.className,n=e.wrapperClassName,i=e.link,c=e.content,s=e.stack,p=e.bold,f=e.thickBorder,d=e.upperCase,g=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),k=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},c.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},g),u.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(f?"arrow__rectangle--thick-border":""),style:t},e.link?u.a.createElement(o.Link,{to:e.link},d?e.text.toUpperCase():e.text):d?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(f?"arrow__point--thick-border":""),style:t}))}));return s||i?!s&&i?a=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(o.Link,{to:i,style:{display:"inline-block"}},k)):s&&(a=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},c.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},g),u.a.createElement(l.a,{flex:!0,className:"arrow__rectangle",style:a},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:a}))})))):a=u.a.createElement("div",{className:"col-10 spacing--after"},k),a};p.propTypes={className:c.a.string,wrapperClassName:c.a.string,link:c.a.string,content:c.a.array.isRequired,stack:c.a.bool,upperCase:c.a.bool,bold:c.a.bool,thickBorder:c.a.bool},p.defaultProps={className:"",wrapperClassName:""},a.a=p},296:function(e,a,t){"use strict";t(295)("link",function(e){return function(a){return e(this,"a","href",a)}})},297:function(e,a,t){},298:function(e,a,t){"use strict";var n=t(10);e.exports=function(){var e=n(this),a="";return e.global&&(a+="g"),e.ignoreCase&&(a+="i"),e.multiline&&(a+="m"),e.unicode&&(a+="u"),e.sticky&&(a+="y"),a}},326:function(e,a,t){"use strict";t(327),t(67),t(46),t(218),t(329),t(330),t(333);var n=t(147),r=t(146),l=t(4),o=t(0),i=t.n(o),c=t(213),s=t.n(c),u=t(240),m=t.n(u),p=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},f=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},d=function(e,a){return Object.keys(s.a[a]).includes(e.toString())},g=function(e,a,t){return f(e)in s.a[t][a]},k=function(e,a,t){return!e&&d(a+1,t)||e&&g(e,a,t)},b=function(e){return"en"===e?"Part":"Osa"},v=function(e){return"en"===e?"Previous part":"Edellinen osa"},h=function(e){return"en"===e?"Next part":"Seuraava osa"},E=function(e){return"/"+("en"===e?"en/part":"osa")},y=function(e){var a=e.part,t=e.letter,l=e.lang;return i.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&d(a-1,l)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a-1),i.a.createElement("b",null,v(l)))),k(t,a,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+a+"/"+m()(s.a[l][a][p(t)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",""+a+p(t)),i.a.createElement("b",null,v(l)))),k(t,a,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):d(a-1,l)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a-1),i.a.createElement("b",null,v(l)))),k(t,a,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(n.a,{className:"push-right-1"}):i.a.createElement(n.a,{className:"push-right-1"}),!t&&d(a+1,l)?i.a.createElement(r.Link,{to:""+E(l)+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a+1),i.a.createElement("b",null,h(l)))):t?g(t,a,l)?i.a.createElement(r.Link,{to:""+E(l)+a+"/"+m()(s.a[l][a][f(t)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",""+a+f(t)),i.a.createElement("b",null,h(l)))):d(a+1,l)?i.a.createElement(r.Link,{to:""+E(l)+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a+1),i.a.createElement("b",null,h(l)))):i.a.createElement(n.a,{className:"push-left-1"}):i.a.createElement(n.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},y.propTypes={part:l.PropTypes.number,letter:l.PropTypes.string,lang:l.PropTypes.string.isRequired},a.a=y},327:function(e,a,t){"use strict";t(328);var n=t(10),r=t(298),l=t(14),o=/./.toString,i=function(e){t(16)(RegExp.prototype,"toString",e,!0)};t(22)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&i(function(){return o.call(this)})},328:function(e,a,t){t(14)&&"g"!=/./g.flags&&t(23).f(RegExp.prototype,"flags",{configurable:!0,get:t(298)})},329:function(e,a,t){"use strict";var n=t(21),r=t(68)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t(48)("includes")},330:function(e,a,t){"use strict";var n=t(21),r=t(331);n(n.P+n.F*t(332)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},331:function(e,a,t){var n=t(72),r=t(24);e.exports=function(e,a,t){if(n(a))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},332:function(e,a,t){var n=t(3)("match");e.exports=function(e){var a=/./;try{"/./"[e](a)}catch(t){try{return a[n]=!1,!"/./"[e](a)}catch(e){}}return!0}},333:function(e,a,t){},361:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},444:function(e,a,t){var n=t(21),r=t(445)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},445:function(e,a,t){var n=t(29),r=t(32),l=t(73).f;e.exports=function(e){return function(a){for(var t,o=r(a),i=n(o),c=i.length,s=0,u=[];c>s;)l.call(o,t=i[s++])&&u.push(e?[t,o[t]]:o[t]);return u}}},446:function(e,a,t){},595:function(e,a,t){var n=t(334)("isEmpty",t(596),t(360));n.placeholder=t(309),e.exports=n},596:function(e,a,t){var n=t(350),r=t(292),l=t(315),o=t(215),i=t(351),c=t(316),s=t(317),u=t(346),m="[object Map]",p="[object Set]",f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||l(e)))return!e.length;var a=r(e);if(a==m||a==p)return!e.size;if(s(e))return!n(e).length;for(var t in e)if(f.call(e,t))return!1;return!0}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-145d4362e73b3cb06546.js.map