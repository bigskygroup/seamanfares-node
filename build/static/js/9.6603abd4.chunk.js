(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{351:function(e,a,t){"use strict";var n=t(150),r=t(58);a.__esModule=!0,a.default=void 0;var l=r(t(59)),o=r(t(85)),i=r(t(84)),c=n(t(0)),m=t(86),s=r(t(357)),f=r(t(409)),u=r(t(437)),d=r(t(441)),p=(0,f.default)("h5"),E=(0,f.default)("h6"),g=(0,s.default)("card-body"),b=c.default.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,r=e.bg,s=e.text,f=e.border,d=e.body,p=e.children,E=e.as,b=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),_=(0,m.useBootstrapPrefix)(t,"card"),v=(0,c.useMemo)(function(){return{cardHeaderBsPrefix:_+"-header"}},[_]);return c.default.createElement(u.default.Provider,{value:v},c.default.createElement(E,(0,l.default)({ref:a},b,{className:(0,i.default)(n,_,r&&"bg-"+r,s&&"text-"+s,f&&"border-"+f)}),d?c.default.createElement(g,null,p):p))});b.displayName="Card",b.defaultProps={as:"div",body:!1},b.Img=d.default,b.Title=(0,s.default)("card-title",{Component:p}),b.Subtitle=(0,s.default)("card-subtitle",{Component:E}),b.Body=g,b.Link=(0,s.default)("card-link",{Component:"a"}),b.Text=(0,s.default)("card-text",{Component:"p"}),b.Header=(0,s.default)("card-header"),b.Footer=(0,s.default)("card-footer"),b.ImgOverlay=(0,s.default)("card-img-overlay");var _=b;a.default=_,e.exports=a.default},441:function(e,a,t){"use strict";var n=t(58);a.__esModule=!0,a.default=void 0;var r=n(t(59)),l=n(t(85)),o=n(t(84)),i=n(t(0)),c=t(86),m=i.default.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,m=e.variant,s=e.as,f=(0,l.default)(e,["bsPrefix","className","variant","as"]),u=(0,c.useBootstrapPrefix)(t,"card-img");return i.default.createElement(s,(0,r.default)({ref:a,className:(0,o.default)(m?u+"-"+m:u,n)},f))});m.displayName="CardImg",m.defaultProps={as:"img",variant:null};var s=m;a.default=s,e.exports=a.default},762:function(e,a,t){"use strict";t.r(a);var n=t(62),r=t(0),l=t.n(r),o=t(27),i=t(373),c=t(366),m=t(362),s=t.n(m),f=t(351),u=t.n(f),d=t(61),p=t.n(d),E=t(339),g=t(28),b=t(9);a.default=Object(o.f)(function(e){var a=e.t,t=(e.match,e.fn,l.a.useState()),r=Object(n.a)(t,2),o=r[0],m=r[1],f=l.a.useState(),d=Object(n.a)(f,2),_=d[0],v=d[1],I=l.a.useState(),h=Object(n.a)(I,2),w=h[0],N=h[1],y=l.a.useState(),O=Object(n.a)(y,2),P=O[0],x=O[1];return l.a.useEffect(function(){e.appActions.setConfirmationInfo(window.location.search)},[]),l.a.useEffect(function(){e.confirmationInfo.hasOwnProperty("status")&&e.confirmationInfo.hasOwnProperty("customer_email")&&1===parseInt(e.confirmationInfo.status)&&"none"!==e.confirmationInfo.customer_email?(console.log("cofnirmation data ok",e.confirmationInfo),m(e.confirmationInfo),v(e.confirmationInfo.flights[0].lang_data),N(e.confirmationInfo.flights[0].language),x(function(){return e.confirmationInfo.full_name.map(function(e){return e.replace(/\//g," ")})}),Object(b.l)(e.confirmationInfo).then(function(e){e.sendEmail.error&&console.log(e.sendEmail.error)}).catch(function(e){return console.log(e)})):e.confirmationInfo&&(!e.confirmationInfo.hasOwnProperty("customer_email")||e.confirmationInfo.hasOwnProperty("status")&&1!==parseInt(e.confirmationInfo.status))&&(console.log("myreservation",e.confirmationInfo),window.location.assign("/"+e.lang.value+"/myreservation/"))},[e.confirmationInfo]),e.confirmationInfo&&(!e.confirmationInfo.hasOwnProperty("status")||e.confirmationInfo.hasOwnProperty("status")&&1!==parseInt(e.confirmationInfo.status))?e.confirmationInfo.flights?e.confirmationInfo.hasOwnProperty("customer_email")&&"none"!==e.confirmationInfo.customer_email&&e.confirmationInfo.hasOwnProperty("status")&&1===parseInt(e.confirmationInfo.status)&&l.a.createElement("div",null,l.a.createElement(i.a,Object.assign({},e,{page:"confirmation"})),l.a.createElement(c.a,e),l.a.createElement("div",{className:"confirmation-back padding-tb50"},l.a.createElement(s.a,{className:"text-left"},l.a.createElement(u.a,{className:"info-pages-shadow margin-b50 padding-lr15 padding-tb50"},l.a.createElement("div",{className:"width-100 "},l.a.createElement("p",null,l.a.createElement("b",null,o&&o.etickets_err)),l.a.createElement("p",null,a("BOOKING_SECTION")," "),l.a.createElement("p",null,l.a.createElement("b",null,a("BREADCRUMB_STEP_5")," ",a("NUMBER").toLowerCase(),":"," "),o&&o.order),l.a.createElement("p",null,l.a.createElement("b",null,a("PASSENGERS_DETAILS"),": "),P&&P.length>0?P.map(function(e,a){return a===P.length-1?e:e+", "}):o&&o.customer_name),l.a.createElement("p",null,l.a.createElement("b",null,a("TOTAL_BLOCK_PRICE"),": "),o&&"".concat(o.total_fare," ").concat(o.curr))),l.a.createElement("div",{className:"flight-info-open mt-3"},o&&o.flights.map(function(e,a){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement("div",{className:"section",key:a},l.a.createElement("p",null,l.a.createElement("u",null,e.dep_weekday,", ",e.dep_date),l.a.createElement("br",null),e.confirmation_number?l.a.createElement("span",{className:"highlight"},l.a.createElement("b",null,_.confirm_number,":")," ",e.confirmation_number):""),l.a.createElement("p",null,l.a.createElement("span",{className:"logo"},l.a.createElement(p.a,{src:e.airline_code?"/images/airlogos/"+e.airline_code.toLowerCase()+".gif":"/images/airlogos/_noimg.gif",onError:function(e){e.target.src="/images/airlogos/_noimg.gif"}})),l.a.createElement("span",null,e.airline,", ",_.flight_number," ",e.flight_number,l.a.createElement("br",null),_.class,": ",e.fare_class)),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",null,l.a.createElement("p",null,e.dep_airport,"(",e.dep_airport_code,") -"," ",e.dep_location),l.a.createElement("p",null,l.a.createElement("b",null,"en"===w?"Departure Time":_.depart,":"," "),e.dep_time),l.a.createElement("p",null,l.a.createElement("b",null,_.mileage,":")," ",e.mileage)),l.a.createElement("div",{className:"icon"},l.a.createElement(E.a,{icon:g.x,className:"svg"})),l.a.createElement("div",null,l.a.createElement("p",null,e.arr_airport,"(",e.arr_airport_code,") -"," ",e.arr_location),l.a.createElement("p",null,l.a.createElement("b",null,"en"===w?"Arrival Time":_.arrive,":"," "),e.arr_time)))),l.a.createElement("br",null))})))))):e.confirmationInfo.hasOwnProperty("customer_email")&&"none"===e.confirmationInfo.customer_email?l.a.createElement("div",null,l.a.createElement(i.a,Object.assign({},e,{page:"confirmation"})),l.a.createElement(c.a,e),l.a.createElement(s.a,null,l.a.createElement(p.a,{src:"/images/st_logo_white.svg",width:"70%",className:"padding-tb50"}))):l.a.createElement("div",null):l.a.createElement("div",null)})}}]);