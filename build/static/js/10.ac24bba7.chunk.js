(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{352:function(e,a,t){"use strict";var n=t(150),r=t(59);a.__esModule=!0,a.default=void 0;var l=r(t(60)),o=r(t(85)),c=r(t(84)),i=n(t(0)),s=t(86),m=r(t(358)),u=r(t(410)),f=r(t(440)),d=r(t(443)),E=(0,u.default)("h5"),p=(0,u.default)("h6"),g=(0,m.default)("card-body"),b=i.default.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,r=e.bg,m=e.text,u=e.border,d=e.body,E=e.children,p=e.as,b=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),_=(0,s.useBootstrapPrefix)(t,"card"),v=(0,i.useMemo)(function(){return{cardHeaderBsPrefix:_+"-header"}},[_]);return i.default.createElement(f.default.Provider,{value:v},i.default.createElement(p,(0,l.default)({ref:a},b,{className:(0,c.default)(n,_,r&&"bg-"+r,m&&"text-"+m,u&&"border-"+u)}),d?i.default.createElement(g,null,E):E))});b.displayName="Card",b.defaultProps={as:"div",body:!1},b.Img=d.default,b.Title=(0,m.default)("card-title",{Component:E}),b.Subtitle=(0,m.default)("card-subtitle",{Component:p}),b.Body=g,b.Link=(0,m.default)("card-link",{Component:"a"}),b.Text=(0,m.default)("card-text",{Component:"p"}),b.Header=(0,m.default)("card-header"),b.Footer=(0,m.default)("card-footer"),b.ImgOverlay=(0,m.default)("card-img-overlay");var _=b;a.default=_,e.exports=a.default},443:function(e,a,t){"use strict";var n=t(59);a.__esModule=!0,a.default=void 0;var r=n(t(60)),l=n(t(85)),o=n(t(84)),c=n(t(0)),i=t(86),s=c.default.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,s=e.variant,m=e.as,u=(0,l.default)(e,["bsPrefix","className","variant","as"]),f=(0,i.useBootstrapPrefix)(t,"card-img");return c.default.createElement(m,(0,r.default)({ref:a,className:(0,o.default)(s?f+"-"+s:f,n)},u))});s.displayName="CardImg",s.defaultProps={as:"img",variant:null};var m=s;a.default=m,e.exports=a.default},767:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(62),l=t(0),o=t.n(l),c=t(28),i=t(373),s=t(365),m=t(361),u=t.n(m),f=t(352),d=t.n(f),E=t(337),p=t.n(E),g=t(61),b=t.n(g),_=t(347),v=t.n(_),N=t(339),h=t(29),I=t(9);a.default=Object(c.f)(function(e){var a=e.t,t=o.a.useState({}),l=Object(r.a)(t,2),c=l[0],m=l[1],f=o.a.useState(),E=Object(r.a)(f,2),g=E[0],_=E[1],w=o.a.useState(),O=Object(r.a)(w,2),x=O[0],y=O[1],P=o.a.useState(),C=Object(r.a)(P,2),R=C[0],L=C[1];return o.a.useEffect(function(){e.appActions.setConfirmationInfo(window.location.search)},[]),o.a.useEffect(function(){e.confirmationInfo.hasOwnProperty("status")&&e.confirmationInfo.hasOwnProperty("customer_email")&&1===parseInt(e.confirmationInfo.status)&&"none"!==e.confirmationInfo.customer_email?(m(e.confirmationInfo),_(e.confirmationInfo.flights[0].lang_data),y(e.confirmationInfo.flights[0].language),L(function(){return e.confirmationInfo.full_name.map(function(e){return e.replace(/\//g," ")})}),Object(I.m)(Object(n.a)({},e.confirmationInfo,{reactLang:e.lang.value})).then(function(e){e.sendEmail.error&&console.log(e.sendEmail.error)}).catch(function(e){return console.log(e)})):e.confirmationInfo&&(e.confirmationInfo.hasOwnProperty("status")&&1!==parseInt(e.confirmationInfo.status)||e.confirmationInfo.hasOwnProperty("error")&&"BOOKING_FAILED"!==e.confirmationInfo.error)?window.location.assign("/"+e.lang.value+"/myreservation/"):e.confirmationInfo&&e.confirmationInfo.hasOwnProperty("error")&&"BOOKING_FAILED"===e.confirmationInfo.error&&m(e.confirmationInfo)},[e.confirmationInfo]),o.a.createElement("div",{className:"section1"},o.a.createElement(i.a,Object.assign({},e,{page:"confirmation"})),o.a.createElement(s.a,e),c&&(!c.hasOwnProperty("status")||c.hasOwnProperty("status")&&1!==parseInt(c.status)?c.hasOwnProperty("error")&&"BOOKING_FAILED"===c.error?o.a.createElement("div",null,o.a.createElement("div",{className:"confirmation-back"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"padding-tb50 clearfix"}),o.a.createElement("div",{className:"text-center clearfix"},o.a.createElement(N.a,{icon:h.F,className:"fa-4x margin-lr-auto text-white"})),o.a.createElement("div",{className:"text-white font28 padding-tb25"},a("ERROR")),o.a.createElement("div",{className:"text-red padding-tb25 font20 maxw600 margin-lr-auto padding-r20",dangerouslySetInnerHTML:{__html:a("MAX_CONN_ERROR")}}),o.a.createElement(p.a,{className:"text-center"},o.a.createElement(v.a,{onClick:function(){return window.location.assign("/")},className:"margin-lr-auto"},a("GOTO_HOME"))),o.a.createElement(b.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"})))):o.a.createElement("div",null,o.a.createElement("div",{className:"confirmation-back"},o.a.createElement("div",{className:"padding-tb50 clearfix"}),o.a.createElement(u.a,null,o.a.createElement(b.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"})))):o.a.createElement("div",null,o.a.createElement("div",{className:"confirmation-back padding-tb50"},o.a.createElement(u.a,{className:"text-left"},o.a.createElement(d.a,{className:"info-pages-shadow margin-b50 padding-lr15 padding-tb50"},o.a.createElement("div",{className:"width-100 "},o.a.createElement("h1",null,a("TITLE_ORDER")),o.a.createElement("p",null,o.a.createElement("b",null,c&&c.etickets_err)),o.a.createElement("p",null,a("BOOKING_SECTION")," "),o.a.createElement("p",null,o.a.createElement("b",null,a("BREADCRUMB_STEP_5")," ",a("NUMBER").toLowerCase(),":"," "),c&&c.order),o.a.createElement("p",null,o.a.createElement("b",null,a("PASSENGERS_DETAILS"),": "),R&&R.length>0?R.map(function(e,a){return a===R.length-1?e:e+", "}):c&&c.customer_name),o.a.createElement("p",null,o.a.createElement("b",null,a("TOTAL_BLOCK_PRICE"),": "),c&&"".concat(c.total_fare?c.total_fare:c.total_price," ").concat(c.curr))),o.a.createElement("div",{className:"flight-info-open mt-3"},c&&c.flights.map(function(e,a){return o.a.createElement(o.a.Fragment,{key:a},o.a.createElement("div",{className:"section",key:a},o.a.createElement("p",null,o.a.createElement("u",null,e.dep_weekday,", ",e.dep_date),o.a.createElement("br",null),e.confirmation_number?o.a.createElement("span",{className:"highlight"},o.a.createElement("b",null,g.confirm_number,":")," ",e.confirmation_number):""),o.a.createElement("p",null,o.a.createElement("span",{className:"logo"},o.a.createElement(b.a,{src:"/images/airlogos/"+"".concat(e.airline_code?e.airline_code.toLowerCase():e.printable_flight_number.slice(0,2).toLowerCase())+".gif",onError:function(e){e.target.src="/images/airlogos/_noimg.gif"}})),o.a.createElement("span",null,e.airline,", ",g.flight_number," ",e.flight_number,o.a.createElement("br",null),g.class,": ",e.fare_class)),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",null,o.a.createElement("p",null,e.dep_airport,"(",e.dep_airport_code,") - ",e.dep_location),o.a.createElement("p",null,o.a.createElement("b",null,"en"===x?"Departure Time":g.depart,":"," "),e.dep_time),o.a.createElement("p",null,o.a.createElement("b",null,g.mileage,":")," ",e.mileage)),o.a.createElement("div",{className:"icon"},o.a.createElement(N.a,{icon:h.A,className:"svg"})),o.a.createElement("div",null,o.a.createElement("p",null,e.arr_airport,"(",e.arr_airport_code,") - ",e.arr_location),o.a.createElement("p",null,o.a.createElement("b",null,"en"===x?"Arrival Time":g.arrive,":"," "),e.arr_time)))),o.a.createElement("br",null))}))))))))})}}]);