(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{398:function(e,a,t){"use strict";var n=t(167),r=t(66);a.__esModule=!0,a.default=void 0;var l=r(t(67)),i=r(t(95)),c=r(t(94)),o=n(t(0)),s=t(96),m=r(t(400)),u=r(t(441)),d=r(t(459)),f=r(t(444)),g=(0,u.default)("h5"),E=(0,u.default)("h6"),p=(0,m.default)("card-body"),h=o.default.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,r=e.bg,m=e.text,u=e.border,f=e.body,g=e.children,E=e.as,h=(0,i.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),_=(0,s.useBootstrapPrefix)(t,"card"),O=(0,o.useMemo)(function(){return{cardHeaderBsPrefix:_+"-header"}},[_]);return o.default.createElement(d.default.Provider,{value:O},o.default.createElement(E,(0,l.default)({ref:a},h,{className:(0,c.default)(n,_,r&&"bg-"+r,m&&"text-"+m,u&&"border-"+u)}),f?o.default.createElement(p,null,g):g))});h.displayName="Card",h.defaultProps={as:"div",body:!1},h.Img=f.default,h.Title=(0,m.default)("card-title",{Component:g}),h.Subtitle=(0,m.default)("card-subtitle",{Component:E}),h.Body=p,h.Link=(0,m.default)("card-link",{Component:"a"}),h.Text=(0,m.default)("card-text",{Component:"p"}),h.Header=(0,m.default)("card-header"),h.Footer=(0,m.default)("card-footer"),h.ImgOverlay=(0,m.default)("card-img-overlay");var _=h;a.default=_,e.exports=a.default},443:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=null,t=e.t,n=e.oneFlight,l=e.index,i=[0,"0","0PC","0 PC"],c=["",null],o=[0,"0","",null];return n.hasOwnProperty("baggage")?a=n.baggage:n.hasOwnProperty("Baggage")?a=n.Baggage:n.hasOwnProperty("baggage_info")&&(a=n.baggage_info),r.a.createElement("span",null,"pegasus"===e.selectedFlight.service?Array.isArray(a)&&1===a.length&&null===a[0]&&t("NO_LUGGAGE"):"tripstack"===e.selectedFlight.service||"multireisen"===e.selectedFlight.service?t("NO_LUGGAGE"):a?a&&(a[l]&&i.includes(a[l])?t("ALLOWED_BAGGAGE_HAND"):a[l]&&c.includes(a[l])?t("NO_LUGGAGE"):a[l]&&a[l].hasOwnProperty("NumberOfPieces")?r.a.createElement("span",null,null===a[l].NumberOfPieces?t("NO_LUGGAGE"):i.includes(a[l].NumberOfPieces)?t("ALLOWED_BAGGAGE_HAND"):a[l].NumberOfPieces+" "+t("ALLOWED_BAGGAGE_20KG"),a[l].MaxWeight&&!o.includes(a[l].MaxWeight)&&" ,"+a[l].MaxWeight+"kg"):a[l]&&a[l].hasOwnProperty("piece")?r.a.createElement("span",null,c.includes(a[l].piece)?t("NO_LUGGAGE"):i.includes(a[l].piece)?t("ALLOWED_BAGGAGE_HAND"):a[l].piece+" "+t("ALLOWED_BAGGAGE_20KG"),a[l].weight&&!o.includes(a[l].weight)&&" ,"+a[l].weight+"kg"):"string"===typeof a||"number"===typeof a?r.a.createElement("span",null,i.includes(a)?r.a.createElement("span",null,t("ALLOWED_BAGGAGE_HAND")):c.includes(a)?r.a.createElement("span",null,t("NO_LUGGAGE")):r.a.createElement("span",null,a," ",t("ALLOWED_BAGGAGE_20KG"))):a.hasOwnProperty("NumberOfPieces")?r.a.createElement("span",null,c.includes(a.NumberOfPieces)?t("NO_LUGGAGE"):i.includes(a.NumberOfPieces)?t("ALLOWED_BAGGAGE_HAND"):a.NumberOfPieces+" "+t("ALLOWED_BAGGAGE_20KG"),a.MaxWeight&&!o.includes(a.MaxWeight)&&" ,"+a.MaxWeight+"kg"):a[l]&&a[l].hasOwnProperty("freeAllowance")?r.a.createElement("span",null,c.includes(a[l].freeAllowance)?t("NO_LUGGAGE"):i.includes(a[l].freeAllowance)?t("ALLOWED_BAGGAGE_HAND"):a[l].freeAllowance+" "+t("ALLOWED_BAGGAGE_20KG")):a.hasOwnProperty("freeAllowance")?r.a.createElement("span",null,c.includes(a.freeAllowance)?t("NO_LUGGAGE"):i.includes(a.freeAllowance)?t("ALLOWED_BAGGAGE_HAND"):a.freeAllowance+" "+t("ALLOWED_BAGGAGE_20KG")):a.hasOwnProperty("included")?r.a.createElement("span",null,a.included,a.hasOwnProperty("dimension")&&a.dimension&&""!==a.dimension&&r.a.createElement("span",null,a.included.length>0&&", ",a.dimension),a.hasOwnProperty("weight")&&a.weight&&""!==a.weight&&r.a.createElement("span",null,", ",a.weight)):a[l]&&a[l].hasOwnProperty("included")&&r.a.createElement("span",null,a[l].included,a[l].hasOwnProperty("dimension")&&a[l].dimension&&""!==a[l].dimension&&r.a.createElement("span",null,a[l].included.length>0&&", ",a[l].dimension),a.hasOwnProperty("weight")&&a[l].weight&&""!==a[l].weight&&r.a.createElement("span",null,", ",a[l].weight))):t("NO_LUGGAGE"))}},444:function(e,a,t){"use strict";var n=t(66);a.__esModule=!0,a.default=void 0;var r=n(t(67)),l=n(t(95)),i=n(t(94)),c=n(t(0)),o=t(96),s=c.default.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,s=e.variant,m=e.as,u=(0,l.default)(e,["bsPrefix","className","variant","as"]),d=(0,o.useBootstrapPrefix)(t,"card-img");return c.default.createElement(m,(0,r.default)({ref:a,className:(0,i.default)(s?d+"-"+s:d,n)},u))});s.displayName="CardImg",s.defaultProps={as:"img",variant:null};var m=s;a.default=m,e.exports=a.default},780:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(68),l=t(0),i=t.n(l),c=t(31),o=t(411),s=t(405),m=t(397),u=t.n(m),d=t(398),f=t.n(d),g=t(380),E=t.n(g),p=t(69),h=t.n(p),_=t(391),O=t.n(_),b=t(382),A=t(32),w=t(4),G=t(2),N=t(443),v=t(7),L=t(8),I=t(12),y=t(13),P=t(14),D=t(6),x=t.n(D),B=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(I.a)(this,Object(y.a)(a).call(this,e))).state={affiliate:"",pixelData:""},t.record_locator="",t.total_price="",t.curr="",t.TDURLParts="",t.trackBackUrl="",t.TDcommonURLParts="",t.affiliate="",t.progid="",t.comid="",t.iu="",t}return Object(P.a)(a,e),Object(L.a)(a,[{key:"componentWillMount",value:function(){var e=this,a="";if(this.props.confirmFlight){this.total_price=this.props.confirmFlight.total_paid,this.record_locator=this.props.confirmFlight.record_locator,this.curr=this.props.confirmFlight.curr,this.affiliate=this.props.confirmFlight.affiliate,this.props.match.params.lang,(a=this.affiliate.split(".").join("_").split("_")).length>=2&&(a[a.length-1],this.affiliate=a[0]);var t="",n="";sessionStorage.getItem("CJEVENT")?(t="cjevent",n=sessionStorage.getItem("CJEVENT")):sessionStorage.getItem("KAYAKCLICKID")?(t="kayakclickid",n=sessionStorage.getItem("KAYAKCLICKID")):sessionStorage.getItem("TRADEDOUBLER")&&(t="tduid",n=sessionStorage.getItem("TRADEDOUBLER")),(sessionStorage.getItem("affiliate")||""!==t)&&x.a.get(G.O+"id_order="+this.record_locator+t!==""?"&"+t+"="+n:"").catch(function(e){}).then(function(a){e.setState({pixelData:a.data.data})})}}},{key:"render",value:function(){return this.props.confirmFlight?i.a.createElement("div",{className:"aff-pixel"},""!==this.state.pixelData&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.pixelData}})):i.a.createElement("div",null)}}]),a}(l.Component),k=t(100),R=t(34),S=t(101),C=t.n(S);!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("devel")&&k.a.pageview(window.location.pathname+window.location.search);a.default=Object(c.f)(function(e){var a=e.t,t=e.match,l=i.a.useState({}),c=Object(r.a)(l,2),m=c[0],d=c[1],g=i.a.useState(),p=Object(r.a)(g,2),_=p[0],v=p[1],L=i.a.useState(),I=Object(r.a)(L,2),y=I[0],P=I[1],D=i.a.useState(),x=Object(r.a)(D,2),k=x[0],S=x[1],T=i.a.useState(!1),j=Object(r.a)(T,2),U=j[0],W=j[1];return i.a.useEffect(function(){var a=window.location.search+"&lang=".concat(t.params.lang);e.appActions.setConfirmationInfo(a,e.userInfo,e.clientId)},[]),i.a.useEffect(function(){e.confirmationInfo.hasOwnProperty("status")&&e.confirmationInfo.hasOwnProperty("customer_email")&&(1===parseInt(e.confirmationInfo.status)||2===parseInt(e.confirmationInfo.status))&&"none"!==e.confirmationInfo.customer_email?(d(e.confirmationInfo),v(e.confirmationInfo.flights[0].lang_data),P(e.confirmationInfo.flights[0].language),S(function(){return e.confirmationInfo.full_name.map(function(e){return e.replace(/\//g," ")})}),Object(w.o)(Object(n.a)({},e.confirmationInfo,{reactLang:e.lang.value,clientId:e.clientId})).then(function(e){e.sendEmail.error&&console.log(e.sendEmail.error)}).catch(function(e){return console.log(e)})):e.confirmationInfo&&(e.confirmationInfo.hasOwnProperty("status")&&1!=e.confirmationInfo.status&&2!=e.confirmationInfo.status||e.confirmationInfo.hasOwnProperty("error")&&"BOOKING_FAILED"!==e.confirmationInfo.error)?window.location.assign("/"+e.lang.value+"/myreservation/"):e.confirmationInfo&&e.confirmationInfo.hasOwnProperty("error")&&"BOOKING_FAILED"===e.confirmationInfo.error&&d(e.confirmationInfo);var a={curr:e.curr.cc?e.curr.cc:"",lang:e.lang.value?e.lang.value:"",affiliate:sessionStorage.getItem("affiliate")?sessionStorage.getItem("affiliate"):"sky-tours"};m.status&&(1==m.status||2==m.status)&&m.from&&(m.record_locator||m.order)&&(a={curr:e.curr.cc?e.curr.cc:"",lang:e.lang.value?e.lang.value:"",affiliate:sessionStorage.getItem("affiliate")?sessionStorage.getItem("affiliate"):m.affiliate?m.affiliate:"",from:m.from[0]?m.from[0]:"",to:m.to[0]?m.to[0]:"",record_locator:m.record_locator?m.record_locator:"",id:m.order?m.order:"",total_price:m.total_paid?m.total_paid.toString():"",seats:m.full_name.length?m.full_name.length:""}),Object(R.a)("TRADEDOUBLER")&&(a=Object(n.a)({},a,{TRADEDOUBLER:Object(R.a)("TRADEDOUBLER")}));var t={dataLayer:{dataL:a},dataLayerName:"dLayer_1"};window.location.hostname.includes("localhost")||window.location.hostname.includes("devel")||C.a.dataLayer(t)},[e.confirmationInfo]),i.a.useEffect(function(){G.R.includes(y)?W(!0):W(!1)},[y]),i.a.useEffect(function(){if(m&&m.order){var e=document.documentElement.innerHTML;Object(w.s)({order:m.order,html:e}).then(function(e){return e}).catch(function(e){return console.log(e)})}},[m]),i.a.createElement("div",{className:"section1"},i.a.createElement(o.a,Object.assign({},e,{page:"confirmation"})),i.a.createElement(s.a,e),m&&(!m.hasOwnProperty("status")||m.hasOwnProperty("status")&&1!=m.status&&2!=m.status?m.hasOwnProperty("error")&&"BOOKING_FAILED"===m.error?i.a.createElement("div",null,i.a.createElement("div",{className:"confirmation-back"},i.a.createElement(u.a,null,i.a.createElement("div",{className:"padding-tb50 clearfix"}),i.a.createElement("div",{className:"text-center clearfix"},i.a.createElement(b.a,{icon:A.F,className:"fa-4x margin-lr-auto text-white"})),i.a.createElement("div",{className:"text-white font28 padding-tb25"},a("ERROR")),i.a.createElement("div",{className:"text-red padding-tb25 font20 maxw600 margin-lr-auto padding-r20",dangerouslySetInnerHTML:{__html:a("MAX_CONN_ERROR")}}),i.a.createElement(E.a,{className:"text-center"},i.a.createElement(O.a,{onClick:function(){return window.location.assign("/")},className:"margin-lr-auto"},a("GOTO_HOME"))),i.a.createElement(h.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"})))):i.a.createElement("div",null,i.a.createElement("div",{className:"confirmation-back"},i.a.createElement("div",{className:"padding-tb50 clearfix"}),i.a.createElement(u.a,null,i.a.createElement(h.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"})))):i.a.createElement("div",null,i.a.createElement(B,e),i.a.createElement("div",{className:"confirmation-back padding-tb50"},i.a.createElement(u.a,{className:"text-left"},i.a.createElement(f.a,{className:"info-pages-shadow margin-b50 padding-lr15 padding-tb50"},i.a.createElement("div",{className:"width-100 margin-b20  ".concat(U?"float-right text-right rtl":""," ")},i.a.createElement("p",{className:"font20"},i.a.createElement("b",null,a("BOOKING_SECTION"))),i.a.createElement("p",null,i.a.createElement("b",null,a("BREADCRUMB_STEP_5")," ",a("NUMBER").toLowerCase(),":"," "),m&&m.order),i.a.createElement("p",null,i.a.createElement("b",null,a("PASSENGERS_DETAILS"),": "),k&&k.length>0?k.map(function(e,a){return a===k.length-1?e:e+", "}):m&&m.customer_name),i.a.createElement("p",null,i.a.createElement("b",null,a("TOTAL_BLOCK_PRICE"),": "),m&&"".concat(m.total_paid," ").concat(m.curr)),m&&m.affiliate.includes("skyscanner")&&("1"==m.multi||"1"==m.is_multi)&&i.a.createElement("div",null,i.a.createElement("b",null,a("MULTI_PROTECTION")),i.a.createElement("br",null),i.a.createElement("a",{href:"https://support.sky-tours.com/en/kb/articles/the-sky-tours-multi-connection-guarantee",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:"float-left"},i.a.createElement(h.a,{src:"/images/multi_protection.png",className:"margin-t7"})),i.a.createElement("div",{className:"float-left margin-t30 padding-lr10"},a("MORE_DETAILS"),i.a.createElement("span",{className:"padding-lr10"},i.a.createElement(b.a,{icon:A.m})))))),i.a.createElement("div",{className:"flight-info-open mt-3"},m&&m.flights.map(function(a,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement("div",{className:"section",key:t},i.a.createElement("p",null,i.a.createElement("u",null,a.dep_weekday,", ",a.dep_date),i.a.createElement("br",null),a.confirmation_number?i.a.createElement("span",{className:"highlight"},i.a.createElement("b",null,_.confirm_number,":")," ",a.confirmation_number):""),i.a.createElement("p",null,i.a.createElement("span",{className:"logo"},i.a.createElement(h.a,{src:"/images/airlogos/"+"".concat(a.airline_code?a.airline_code.toLowerCase():a.printable_flight_number.slice(0,2).toLowerCase())+".gif",onError:function(e){e.target.src="/images/airlogos/_noimg.gif"}})),i.a.createElement("span",null,a.airline,", ",_.flight_number," ",a.flight_number,i.a.createElement("br",null),_.class,": ",a.fare_class)),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",null,i.a.createElement("p",null,a.dep_airport,"(",a.dep_airport_code,") - ",a.dep_location),i.a.createElement("p",null,i.a.createElement("b",null,"en"===y?"Departure Time":_.depart,":"," "),a.dep_time),i.a.createElement("p",null,i.a.createElement("b",null,_.baggage_allowance,":")," ",i.a.createElement(N.a,Object.assign({},e,{index:t,oneFlight:a}))),i.a.createElement("p",null,i.a.createElement("b",null,_.mileage,":")," ",a.mileage)),i.a.createElement("div",{className:"icon"},i.a.createElement(b.a,{icon:A.A,className:"svg"})),i.a.createElement("div",null,i.a.createElement("p",null,a.arr_airport,"(",a.arr_airport_code,") - ",a.arr_location),i.a.createElement("p",null,i.a.createElement("b",null,"en"===y?"Arrival Time":_.arrive,":"," "),a.arr_time)))),i.a.createElement("br",null))}))))))))})}}]);