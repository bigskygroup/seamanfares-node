(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{351:function(e,t,a){"use strict";function n(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}function r(e,t,a,n){var r=e+"="+t+"; expires="+a+"; path="+n+";";document.cookie=r}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},354:function(e,t,a){"use strict";var n=a(1),r=a(6),i=a(7),o=a(12),d=a(13),c=a(14),s=a(0),u=a.n(s),l=a(357),f=a.n(l),m=a(88),p=a.n(m),w=a(351),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(e){return!!p()(e.dataLayer,this.props.dataLayer)}},{key:"render",value:function(){var e=this.props.dataLayer;Object(w.a)("TRADEDOUBLER")&&(e=Object(n.a)({},this.props.dataLayer,{TRADEDOUBLER:Object(w.a)("TRADEDOUBLER")}));var t={gtmId:"GTM-57QJC3",dataLayer:e},a={gtmId:"GTM-N5HPZ2P",dataLayer:e};return window.location.hostname.includes("localhost")||window.location.hostname.includes("devel")||(f.a.initialize(t),f.a.initialize(a)),u.a.createElement("div",null)}}]),t}(s.Component);t.a=v},357:function(e,t,a){"use strict";var n,r=a(364),i=(n=r)&&n.__esModule?n:{default:n};e.exports=i.default},364:function(e,t,a){"use strict";var n,r=a(365),i=(n=r)&&n.__esModule?n:{default:n};var o={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=i.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,a=e.events,n=void 0===a?{}:a,r=e.dataLayer,i=e.dataLayerName,o=void 0===i?"dataLayer":i,d=e.auth,c=void 0===d?"":d,s=e.preview,u=void 0===s?"":s,l=this.gtm({id:t,events:n,dataLayer:r||void 0,dataLayerName:o,auth:c,preview:u});r&&document.head.appendChild(l.dataScript),document.head.insertBefore(l.script(),document.head.childNodes[0]),document.body.insertBefore(l.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,a=e.dataLayerName,n=void 0===a?"dataLayer":a;if(window[n])return window[n].push(t);var r=i.default.dataLayer(t,n),o=this.dataScript(r);document.head.appendChild(o)}};e.exports=o},365:function(e,t,a){"use strict";var n,r=a(366),i=(n=r)&&n.__esModule?n:{default:n};var o={tags:function(e){var t=e.id,a=e.events,n=e.dataLayer,r=e.dataLayerName,o=e.preview,d="&gtm_auth="+e.auth,c="&gtm_preview="+o;return t||(0,i.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+d+c+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(a).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+d+c+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+r+"','"+t+"');",dataLayerVar:this.dataLayer(n,r)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=o},366:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},771:function(e,t,a){"use strict";a.r(t);var n=a(62),r=a(0),i=a.n(r),o=a(380),d=a(372),c=a(28),s=a(91),u=a(354);!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("devel")&&s.a.pageview(window.location.pathname+window.location.search);t.default=Object(c.f)(function(e){var t=i.a.useState(""),a=Object(n.a)(t,2),r=a[0],c=a[1];return i.a.useEffect(function(){return c("d-block"),function(){return c("d-none")}}),i.a.createElement("div",{className:r},i.a.createElement(o.a,e),i.a.createElement(d.a,e),i.a.createElement(u.a,{dataLayer:{curr:(void 0).props.curr.cc,lang:(void 0).props.lang.value,affiliate:sessionStorage.getItem("affiliate")?sessionStorage.getItem("affiliate"):"sky-tours"}}))})}}]);