(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{389:function(e,t,a){"use strict";function n(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}function r(e,t,a,n){var r=e+"="+t+"; expires="+a+"; path=/"+n+";";document.cookie=r}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},392:function(e,t,a){"use strict";var n=a(1),r=a(7),i=a(8),o=a(12),l=a(13),c=a(14),s=a(0),d=a.n(s),m=a(397),u=a.n(m),f=a(95),p=a.n(f),g=a(389),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(e){return!!p()(e.dataLayer,this.props.dataLayer)}},{key:"render",value:function(){var e=this.props.dataLayer;Object(g.a)("TRADEDOUBLER")&&(e=Object(n.a)({},this.props.dataLayer,{TRADEDOUBLER:Object(g.a)("TRADEDOUBLER")}));var t={gtmId:"GTM-57QJC3",dataLayer:e},a={gtmId:"GTM-N5HPZ2P",dataLayer:e};return window.location.hostname.includes("localhost")||window.location.hostname.includes("devel")||(u.a.initialize(t),u.a.initialize(a)),d.a.createElement("div",null)}}]),t}(s.Component);t.a=h},393:function(e,t,a){"use strict";var n=a(165),r=a(64);t.__esModule=!0,t.default=void 0;var i=r(a(65)),o=r(a(93)),l=r(a(92)),c=n(a(0)),s=a(94),d=r(a(401)),m=r(a(454)),u=r(a(480)),f=r(a(484)),p=(0,m.default)("h5"),g=(0,m.default)("h6"),h=(0,d.default)("card-body"),E=c.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,d=e.text,m=e.border,f=e.body,p=e.children,g=e.as,E=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=(0,s.useBootstrapPrefix)(a,"card"),_=(0,c.useMemo)(function(){return{cardHeaderBsPrefix:v+"-header"}},[v]);return c.default.createElement(u.default.Provider,{value:_},c.default.createElement(g,(0,i.default)({ref:t},E,{className:(0,l.default)(n,v,r&&"bg-"+r,d&&"text-"+d,m&&"border-"+m)}),f?c.default.createElement(h,null,p):p))});E.displayName="Card",E.defaultProps={as:"div",body:!1},E.Img=f.default,E.Title=(0,d.default)("card-title",{Component:p}),E.Subtitle=(0,d.default)("card-subtitle",{Component:g}),E.Body=h,E.Link=(0,d.default)("card-link",{Component:"a"}),E.Text=(0,d.default)("card-text",{Component:"p"}),E.Header=(0,d.default)("card-header"),E.Footer=(0,d.default)("card-footer"),E.ImgOverlay=(0,d.default)("card-img-overlay");var v=E;t.default=v,e.exports=t.default},397:function(e,t,a){"use strict";var n,r=a(402),i=(n=r)&&n.__esModule?n:{default:n};e.exports=i.default},402:function(e,t,a){"use strict";var n,r=a(403),i=(n=r)&&n.__esModule?n:{default:n};var o={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=i.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,a=e.events,n=void 0===a?{}:a,r=e.dataLayer,i=e.dataLayerName,o=void 0===i?"dataLayer":i,l=e.auth,c=void 0===l?"":l,s=e.preview,d=void 0===s?"":s,m=this.gtm({id:t,events:n,dataLayer:r||void 0,dataLayerName:o,auth:c,preview:d});r&&document.head.appendChild(m.dataScript),document.head.insertBefore(m.script(),document.head.childNodes[0]),document.body.insertBefore(m.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,a=e.dataLayerName,n=void 0===a?"dataLayer":a;if(window[n])return window[n].push(t);var r=i.default.dataLayer(t,n),o=this.dataScript(r);document.head.appendChild(o)}};e.exports=o},403:function(e,t,a){"use strict";var n,r=a(404),i=(n=r)&&n.__esModule?n:{default:n};var o={tags:function(e){var t=e.id,a=e.events,n=e.dataLayer,r=e.dataLayerName,o=e.preview,l="&gtm_auth="+e.auth,c="&gtm_preview="+o;return t||(0,i.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+l+c+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(a).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+l+c+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+r+"','"+t+"');",dataLayerVar:this.dataLayer(n,r)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=o},404:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},484:function(e,t,a){"use strict";var n=a(64);t.__esModule=!0,t.default=void 0;var r=n(a(65)),i=n(a(93)),o=n(a(92)),l=n(a(0)),c=a(94),s=l.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,s=e.variant,d=e.as,m=(0,i.default)(e,["bsPrefix","className","variant","as"]),u=(0,c.useBootstrapPrefix)(a,"card-img");return l.default.createElement(d,(0,r.default)({ref:t,className:(0,o.default)(s?u+"-"+s:u,n)},m))});s.displayName="CardImg",s.defaultProps={as:"img",variant:null};var d=s;t.default=d,e.exports=t.default},779:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(67),i=a(0),o=a.n(i),l=a(30),c=a(419),s=a(410),d=a(406),m=a.n(d),u=a(393),f=a.n(u),p=a(376),g=a.n(p),h=a(66),E=a.n(h),v=a(384),_=a.n(v),w=a(377),b=a(31),y=a(5),I=a(99),O=a(392),N=a(7),L=a(8),x=a(12),S=a(13),T=a(14),j=a(6),C=a.n(j),R=a(2),D=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(x.a)(this,Object(S.a)(t).call(this,e))).state={affiliate:"",pixelData:""},a.record_locator="",a.total_price="",a.curr="",a.TDURLParts="",a.trackBackUrl="",a.TDcommonURLParts="",a.affiliate="",a.progid="",a.comid="",a.iu="",a}return Object(T.a)(t,e),Object(L.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.total_price=this.props.confirmFlight.total_price,this.record_locator=this.props.confirmFlight.record_locator,this.curr=this.props.confirmFlight.curr,this.affiliate=this.props.confirmFlight.affiliate;this.props.match.params.lang;var t=this.affiliate.split(".").join("_").split("_");t.length>=2&&(t[t.length-1],this.affiliate=t[0]);var a="",n="";sessionStorage.getItem("CJEVENT")?(a="cjevent",n=sessionStorage.getItem("CJEVENT")):sessionStorage.getItem("KAYAKCLICKID")?(a="kayakclickid",n=sessionStorage.getItem("KAYAKCLICKID")):sessionStorage.getItem("TRADEDOUBLER")&&(a="tduid",n=sessionStorage.getItem("TRADEDOUBLER")),(sessionStorage.getItem("affiliate")||""!==a)&&C.a.get(R.L+"id_order="+this.record_locator+a!==""?"&"+a+"="+n:"").catch(function(e){}).then(function(t){e.setState({pixelData:t.data.data})})}},{key:"render",value:function(){return this.props.confirmFlight?o.a.createElement("div",{className:"aff-pixel"},""!==this.state.pixelData&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.pixelData}})):o.a.createElement("div",null)}}]),t}(i.Component);!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("devel")&&I.a.pageview(window.location.pathname+window.location.search);t.default=Object(l.f)(function(e){var t=e.t,a=o.a.useState({}),i=Object(r.a)(a,2),l=i[0],d=i[1],u=o.a.useState(),p=Object(r.a)(u,2),h=p[0],v=p[1],I=o.a.useState(),N=Object(r.a)(I,2),L=N[0],x=N[1],S=o.a.useState(),T=Object(r.a)(S,2),j=T[0],C=T[1];return o.a.useEffect(function(){e.appActions.setConfirmationInfo(window.location.search)},[]),o.a.useEffect(function(){e.confirmationInfo.hasOwnProperty("status")&&e.confirmationInfo.hasOwnProperty("customer_email")&&1===parseInt(e.confirmationInfo.status)&&"none"!==e.confirmationInfo.customer_email?(d(e.confirmationInfo),v(e.confirmationInfo.flights[0].lang_data),x(e.confirmationInfo.flights[0].language),C(function(){return e.confirmationInfo.full_name.map(function(e){return e.replace(/\//g," ")})}),Object(y.n)(Object(n.a)({},e.confirmationInfo,{reactLang:e.lang.value})).then(function(e){e.sendEmail.error&&console.log(e.sendEmail.error)}).catch(function(e){return console.log(e)})):e.confirmationInfo&&(e.confirmationInfo.hasOwnProperty("status")&&1!==parseInt(e.confirmationInfo.status)||e.confirmationInfo.hasOwnProperty("error")&&"BOOKING_FAILED"!==e.confirmationInfo.error)?window.location.assign("/"+e.lang.value+"/myreservation/"):e.confirmationInfo&&e.confirmationInfo.hasOwnProperty("error")&&"BOOKING_FAILED"===e.confirmationInfo.error&&d(e.confirmationInfo)},[e.confirmationInfo]),o.a.createElement("div",{className:"section1"},o.a.createElement(c.a,Object.assign({},e,{page:"confirmation"})),o.a.createElement(s.a,e),l&&(!l.hasOwnProperty("status")||l.hasOwnProperty("status")&&1!==parseInt(l.status)?l.hasOwnProperty("error")&&"BOOKING_FAILED"===l.error?o.a.createElement("div",null,o.a.createElement("div",{className:"confirmation-back"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"padding-tb50 clearfix"}),o.a.createElement("div",{className:"text-center clearfix"},o.a.createElement(w.a,{icon:b.H,className:"fa-4x margin-lr-auto text-white"})),o.a.createElement("div",{className:"text-white font28 padding-tb25"},t("ERROR")),o.a.createElement("div",{className:"text-red padding-tb25 font20 maxw600 margin-lr-auto padding-r20",dangerouslySetInnerHTML:{__html:t("MAX_CONN_ERROR")}}),o.a.createElement(g.a,{className:"text-center"},o.a.createElement(_.a,{onClick:function(){return window.location.assign("/")},className:"margin-lr-auto"},t("GOTO_HOME"))),o.a.createElement(E.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"})))):o.a.createElement("div",null,o.a.createElement("div",{className:"confirmation-back"},o.a.createElement("div",{className:"padding-tb50 clearfix"}),o.a.createElement(m.a,null,o.a.createElement(E.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"})))):o.a.createElement("div",null,o.a.createElement(D,(void 0).props),o.a.createElement("div",{className:"confirmation-back padding-tb50"},o.a.createElement(m.a,{className:"text-left"},o.a.createElement(f.a,{className:"info-pages-shadow margin-b50 padding-lr15 padding-tb50"},o.a.createElement("div",{className:"width-100 "},o.a.createElement("h1",null,t("TITLE_ORDER")),o.a.createElement("p",null,o.a.createElement("b",null,l&&l.etickets_err)),o.a.createElement("p",null,t("BOOKING_SECTION")," "),o.a.createElement("p",null,o.a.createElement("b",null,t("BREADCRUMB_STEP_5")," ",t("NUMBER").toLowerCase(),":"," "),l&&l.order),o.a.createElement("p",null,o.a.createElement("b",null,t("PASSENGERS_DETAILS"),": "),j&&j.length>0?j.map(function(e,t){return t===j.length-1?e:e+", "}):l&&l.customer_name),o.a.createElement("p",null,o.a.createElement("b",null,t("TOTAL_BLOCK_PRICE"),": "),l&&"".concat(l.total_fare?l.total_fare:l.total_price," ").concat(l.curr))),o.a.createElement("div",{className:"flight-info-open mt-3"},l&&l.flights.map(function(e,t){return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement("div",{className:"section",key:t},o.a.createElement("p",null,o.a.createElement("u",null,e.dep_weekday,", ",e.dep_date),o.a.createElement("br",null),e.confirmation_number?o.a.createElement("span",{className:"highlight"},o.a.createElement("b",null,h.confirm_number,":")," ",e.confirmation_number):""),o.a.createElement("p",null,o.a.createElement("span",{className:"logo"},o.a.createElement(E.a,{src:"/images/airlogos/"+"".concat(e.airline_code?e.airline_code.toLowerCase():e.printable_flight_number.slice(0,2).toLowerCase())+".gif",onError:function(e){e.target.src="/images/airlogos/_noimg.gif"}})),o.a.createElement("span",null,e.airline,", ",h.flight_number," ",e.flight_number,o.a.createElement("br",null),h.class,": ",e.fare_class)),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",null,o.a.createElement("p",null,e.dep_airport,"(",e.dep_airport_code,") - ",e.dep_location),o.a.createElement("p",null,o.a.createElement("b",null,"en"===L?"Departure Time":h.depart,":"," "),e.dep_time),o.a.createElement("p",null,o.a.createElement("b",null,h.mileage,":")," ",e.mileage)),o.a.createElement("div",{className:"icon"},o.a.createElement(w.a,{icon:b.C,className:"svg"})),o.a.createElement("div",null,o.a.createElement("p",null,e.arr_airport,"(",e.arr_airport_code,") - ",e.arr_location),o.a.createElement("p",null,o.a.createElement("b",null,"en"===L?"Arrival Time":h.arrive,":"," "),e.arr_time)))),o.a.createElement("br",null))}))))),l&&o.a.createElement(O.a,{dataLayer:{curr:e.curr.cc?e.curr.cc:"",lang:e.lang.value?e.lang.value:"",affiliate:sessionStorage.getItem("affiliate")?sessionStorage.getItem("affiliate"):l.affiliate?l.affiliate:"",from:l.from[0]?l.from[0]:"",to:l.to[0]?l.to[0]:"",record_locator:l.record_locator?l.record_locator:"",total_price:l.total_fare?l.total_fare:l.total_price?l.total_price:"",seats:l.full_name.length?l.full_name.length:""}}))))})}}]);