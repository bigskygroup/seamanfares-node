(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(e,t,n){"use strict";n.d(t,"t",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"Q",function(){return i}),n.d(t,"E",function(){return o}),n.d(t,"F",function(){return u}),n.d(t,"D",function(){return c}),n.d(t,"B",function(){return l}),n.d(t,"I",function(){return s}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"S",function(){return h}),n.d(t,"y",function(){return g}),n.d(t,"k",function(){return m}),n.d(t,"f",function(){return b}),n.d(t,"i",function(){return _}),n.d(t,"v",function(){return v}),n.d(t,"w",function(){return y}),n.d(t,"C",function(){return E}),n.d(t,"U",function(){return S}),n.d(t,"R",function(){return O}),n.d(t,"L",function(){return T}),n.d(t,"r",function(){return I}),n.d(t,"n",function(){return R}),n.d(t,"l",function(){return j}),n.d(t,"m",function(){return A}),n.d(t,"M",function(){return D}),n.d(t,"P",function(){return F}),n.d(t,"N",function(){return P}),n.d(t,"O",function(){return L}),n.d(t,"z",function(){return M}),n.d(t,"J",function(){return N}),n.d(t,"T",function(){return k}),n.d(t,"x",function(){return x}),n.d(t,"a",function(){return w}),n.d(t,"H",function(){return C}),n.d(t,"K",function(){return U}),n.d(t,"u",function(){return G}),n.d(t,"h",function(){return H}),n.d(t,"V",function(){return B}),n.d(t,"o",function(){return K}),n.d(t,"s",function(){return W}),n.d(t,"q",function(){return Y}),n.d(t,"A",function(){return q}),n.d(t,"G",function(){return z}),n.d(t,"W",function(){return V}),n.d(t,"j",function(){return Z}),n.d(t,"g",function(){return J}),n.d(t,"p",function(){return X});var r="RESET",a="FETCH_FLIGHTS_DATA",i="SET_SELECTED_FLIGHT",o="SET_FLIGHTS_DATA",u="SET_FLIGHTS_SEARCH_INFO",c="SET_FILTERED_FLIGHTS",l="SET_DATES",s="SET_NUM_PEOPLE",f="CHANGE_LANG",d="CHANGE_CURR",p="CHANGE_DIRECTION",h="SET_USERINFO",g="SET_AIRLINES",m="LOADING",b="FILTERS",_="G_MAP_LOADED",v="ROUTE_INFO",y="SET_AC_LIST",E="SET_DEST",S="SET_VAL_DEST",O="SET_TRIP_TYPE",T="SET_RETURN",I="PAGES",R="MOB_FILTERS",j="MAX_PRICE",A="MIN_PRICE",D="SET_SB_FOCUS",F="SET_SB_WHERE",P="SET_SB_INDEX",L="SET_SB_MODIFY",M="SET_ALERT",N="SET_PEOPLE_INFO",k="SET_VALIDATION",x="SET_ADDITIONAL_SERVICES",w="BOOK_FORM",C="SET_INPUT",U="SET_PERSONAL_INPUT",G="RESET_BOOK_FORM",H="GOLD",B="STANDARD",K="NONE",W="PROTECTION",Y="NO_PROTECTION",q="SET_BAG_INFO",z="SET_FLIGHT_KEY",V="TIME_STAMP",Z="INFO_MSG",J="FLEXIBLE",X="NO_FLEXIBLE"},150:function(e,t,n){e.exports=n(301)},155:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},3:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"g",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"o",function(){return s}),n.d(t,"f",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"j",function(){return h}),n.d(t,"x",function(){return g}),n.d(t,"h",function(){return m}),n.d(t,"t",function(){return b}),n.d(t,"r",function(){return _}),n.d(t,"l",function(){return v}),n.d(t,"n",function(){return y}),n.d(t,"s",function(){return E}),n.d(t,"p",function(){return S}),n.d(t,"u",function(){return O}),n.d(t,"i",function(){return T}),n.d(t,"q",function(){return I}),n.d(t,"y",function(){return R}),n.d(t,"v",function(){return j}),n.d(t,"m",function(){return A}),n.d(t,"k",function(){return D}),n.d(t,"w",function(){return F});var r=n(24),a=n(8),i=n.n(a),o="https://xml.sky-tours.com/xml.php?a=SKY-TOURS",u="https://xml.sky-tours.com/flights.php?method=details&",c="https://xml.sky-tours.com/flights.php?method=store_reservation&",l="https://xml.sky-tours.com/flights.php?method=closest_city",s="&limit=100",f="&owner=1",d="&master=sky-tours",p="&format=json",h="https://achelper.sky-tours.com/autocomplete?q=",g="https://viewtrip.sky-tours.com/get.php",m="https://xml.sky-tours.com/avia/viewtrip.php?",b=10,_=4,v=[{msg:""},{stops:[!1,!1,!1]},{price:[0,100],priceSlider:[0,100]},{out:[0,24],in:[0,24]},{outLand:[0,24],inLand:[0,24]},{ttomin:0,ttimin:0,ttomax:0,ttimax:0,totalTimeOut:0,totalTimeIn:0},{airlines:[],airlinesConst:[]},{selOut:0,selIn:0}],y={adult:1,child:0,infant:0,senior:0,youth:0},E=[{which:"adult",label:"PASSENGERS_ADULT",label1:"PASSENGERS_ADULTS",age:"SEARCH_ADULTS",icon:r.n,years:11,id:0},{which:"child",label:"PASSENGERS_CHILD",label1:"PASSENGERS_CHILDREN",age:"AGE_CHILDRENS",icon:r.f,years:1,id:1},{which:"infant",label:"PASSENGERS_INFANT",label1:"PASSENGERS_INFANTS",age:"AGE_INFANTS",icon:r.c,years:0,id:2},{which:"senior",label:"SMALL_SENIORS",label1:"SMALL_SENIORS",age:"AGE_SENIORS",icon:r.n,years:11,id:3},{which:"youth",label:"SMALL_YOUTHS",label1:"SMALL_YOUTHS",age:"AGE_YOUTHS",icon:r.n,years:11,id:4}],S=[{name:"MALE",value:"male"},{name:"FEMALE",value:"female"}],O=["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16","T17","T18","T19","T20","outdate1","outdate2","outdate3","outdate4","outdate5","outdate6","outdate7","outdate8","outdate9","outdate10","D1","D2","D3","D4","D5","trip","limit","curr"],T=["method","lang","curr","book","key","life","trip","api","check","affiliate","client_request"],I=["ae","bh","eg","ir","qr","sa"],R=["ae","eg","ir","jo","lb","sa","bh","kw","om","qr"],j={show:!0,langShow:["es"],services:["travelfusion","travelport","tripninja","auto","igola"],minEUR:50,maxEUR:3e3,outDayOffset:2},A={value:"en",lang:"en",country:"US",locale:"en_US",image:"us.gif",name:"United States",currency:"USD",top:"1",url:"en"},D={cc:"USD",symbol:"US$",name:"United States of America, Dollars",decimal:"2",side:"l",active:"1",top:"1",url:"USD"},F={timeStamp:i()(),browser:null,ipPublic:null,cc:null,city:null,lat:0,lng:0,closestAirport:"",facebook:null}},301:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"Reset",function(){return V}),n.d(r,"setFlightsData",function(){return Z}),n.d(r,"setFlightsSearchInfo",function(){return J}),n.d(r,"setSelectedFlight",function(){return X}),n.d(r,"setDate",function(){return Q}),n.d(r,"setNumPeople",function(){return $}),n.d(r,"setPeopleInfo",function(){return ee}),n.d(r,"setAddServices",function(){return te}),n.d(r,"setValidation",function(){return ne}),n.d(r,"setFilteredFlights",function(){return re}),n.d(r,"changeLang",function(){return ae}),n.d(r,"changeCurrency",function(){return ie}),n.d(r,"changeDirection",function(){return oe}),n.d(r,"setUserInfo",function(){return ue}),n.d(r,"loading",function(){return ce}),n.d(r,"setFilters",function(){return le}),n.d(r,"setPage",function(){return se}),n.d(r,"setMobFilters",function(){return fe}),n.d(r,"setMaxPrice",function(){return de}),n.d(r,"setMinPrice",function(){return pe}),n.d(r,"setGMapLoaded",function(){return he}),n.d(r,"setAcList",function(){return ge}),n.d(r,"setSelDest",function(){return me}),n.d(r,"setValDest",function(){return be}),n.d(r,"setTripType",function(){return _e}),n.d(r,"setReturnType",function(){return ve}),n.d(r,"setRouteInfo",function(){return ye}),n.d(r,"setSbFocus",function(){return Ee}),n.d(r,"setSbWhere",function(){return Se}),n.d(r,"setSbIndex",function(){return Oe}),n.d(r,"setSbModify",function(){return Te}),n.d(r,"setAlert",function(){return Ie}),n.d(r,"setInfoMsg",function(){return Re}),n.d(r,"setFlightKey",function(){return je}),n.d(r,"setBagInfo",function(){return Ae}),n.d(r,"setTimeStamp",function(){return De}),n.d(r,"setAirlines",function(){return Fe}),n.d(r,"fetchFlightsData",function(){return Pe}),n.d(r,"getFlightDetails",function(){return Le}),n.d(r,"storeReservation",function(){return Me}),n.d(r,"setBookForm",function(){return Ne}),n.d(r,"resetBookForm",function(){return ke}),n.d(r,"setInput",function(){return xe}),n.d(r,"setPersonalInput",function(){return we}),n.d(r,"stringifyRequest",function(){return Ce});var a=n(0),i=n.n(a),o=n(35),u=(n(155),n(47)),c=n(9),l=n(46),s=n(2),f=n(8),d=n.n(f),p=n(3);d.a.locale("en_US");var h=d()().add(7,"days"),g=d()().add(12,"days"),m={gMapLoaded:!1,routes:"none",timeStamp:d()(),selDest:[{from:null,to:null},{from:null,to:null}],selDates:[h,g],numPeople:p.n,valueDest:[{from:"",to:""},{from:"",to:""}],tripType:"round",returnType:"standard",alert:!1},b=n(1);var _={curr:p.k,lang:p.m,rightToLeft:!1,userInfo:p.w};var v={flights:[],filteredFlights:[],flightsSearchInfo:{reqUrl:""},acList:[],airlines:{},filters:p.l,mobFilters:!1,absMaxPrice:0,absMinPrice:0,page:1};var y={sbModify:!1,sbFocus:"none",sbWhere:null,sbIndex:null};var E={peopleInfo:[{}],validation:{},additionalServices:{}};var S={stage:1,email:{value:"",err:""},repeatEmail:{value:"",err:""},countryCode:{value:"",err:""},phoneNumber:{value:"",err:""},services:{cancel:0,protection:0,flexible:0,co2:0,baggage_assurance:0},usersData:""};var O={bagInfo:{price:0,all:{},selected:[]},flightKey:""};var T={infoMsg:"none"};var I=Object(c.c)({router:l.routerReducer,appRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"persist/REHYDRATE":return"undefined"!=typeof t.payload?Object(s.a)({},t.payload.appRed):e;case b.t:return m;case b.k:return Object(s.a)({},e,{loading:t.loading,error:!1});case b.v:return Object(s.a)({},e,{routes:t.routes});case b.i:return Object(s.a)({},e,{gMapLoaded:t.gMapLoaded});case b.B:return Object(s.a)({},e,{selDates:t.selDates});case b.I:return Object(s.a)({},e,{numPeople:t.numPeople});case b.C:return Object(s.a)({},e,{selDest:t.selDest});case b.U:return Object(s.a)({},e,{valueDest:t.valueDest});case b.R:return Object(s.a)({},e,{tripType:t.tripType});case b.L:return Object(s.a)({},e,{returnType:t.returnType});case b.z:return Object(s.a)({},e,{alert:t.alert});case b.W:return Object(s.a)({},e,{timeStamp:t.timeStamp});default:return e}},locRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.d:return Object(s.a)({},e,{lang:t.lang});case b.b:return Object(s.a)({},e,{curr:t.curr});case b.c:return Object(s.a)({},e,{rightToLeft:t.rightToLeft});case b.S:return Object(s.a)({},e,{userInfo:t.userInfo});default:return e}},resRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.E:return Object(s.a)({},e,{flights:t.flights,filteredFlights:[],filters:e.filters});case b.D:return Object(s.a)({},e,{filteredFlights:t.filteredFlights});case b.e:return Object(s.a)({},e,{filteredFlights:[],flights:[]});case b.Q:return Object(s.a)({},e,{selectedFlight:t.selectedFlight});case b.w:return Object(s.a)({},e,{acList:t.acList});case b.F:return Object(s.a)({},e,{flightsSearchInfo:t.flightsSearchInfo});case b.y:return Object(s.a)({},e,{airlines:t.airlines});case b.f:return Object(s.a)({},e,{filters:t.filters});case b.r:return Object(s.a)({},e,{page:t.page});case b.n:return Object(s.a)({},e,{mobFilters:t.mobFilters});case b.l:return Object(s.a)({},e,{absMaxPrice:t.absMaxPrice});case b.m:return Object(s.a)({},e,{absMinPrice:t.absMinPrice});default:return e}},barRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.M:return Object(s.a)({},e,{sbFocus:t.sbFocus});case b.P:return Object(s.a)({},e,{sbWhere:t.sbWhere});case b.N:return Object(s.a)({},e,{sbIndex:t.sbIndex});case b.O:return Object(s.a)({},e,{sbModify:t.sbModify});default:return e}},formRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.J:return Object(s.a)({},e,{peopleInfo:t.peopleInfo});case b.T:return Object(s.a)({},e,{validation:t.validation});case b.x:return Object(s.a)({},e,{additionalServices:t.additionalServices});default:return e}},bookFormRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a:return Object(s.a)({},t.payload,e);case b.H:case b.K:case b.u:return Object(s.a)({},e,t.payload);default:return e}},flightAddRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.A:return Object(s.a)({},e,{bagInfo:t.bagInfo});case b.G:return Object(s.a)({},e,{flightKey:t.flightKey});default:return e}},infoRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.j:return Object(s.a)({},e,{infoMsg:t.infoMsg});default:return e}}}),R=n(121),j=n(14),A=n(69),D=n(122),F=n.n(D),P=Object(j.a)(),L={key:"root",storage:F.a,blacklist:["router","barRed","infoRed","resRed"]},M=[R.a,Object(l.routerMiddleware)(P)],N=c.d.apply(void 0,[c.a.apply(void 0,M)].concat([])),k=n(123),x=n(4),w=n(5),C=n(10),U=n(11),G=n(12),H=n(30),B=n.n(H),K=n(78),W=n.n(K),Y=n(84),q=n.n(Y);function z(e){return"string"===typeof e?e.replace("<"," ").replace(">"," "):e}function V(){return function(e){e({type:b.t})}}function Z(e){return function(t){t({type:b.E,flights:e})}}function J(e){return function(t){t({type:b.F,flightsSearchInfo:e})}}function X(e){return{type:b.Q,selectedFlight:e}}function Q(e){return function(t){t({type:b.B,selDates:e})}}function $(e){return function(t){t({type:b.I,numPeople:e})}}function ee(e){return function(t){t({type:b.J,peopleInfo:e})}}function te(e){return function(t){t({type:b.x,additionalServices:e})}}function ne(e){return function(t){t({type:b.T,validation:e})}}function re(e){return{type:b.D,filteredFlights:e}}function ae(e){return{type:b.d,lang:e}}function ie(e){return{type:b.b,curr:e}}function oe(e){return{type:b.c,rightToLeft:e}}function ue(e){return function(t){t({type:b.S,userInfo:e})}}function ce(e){return{type:b.k,loading:e}}function le(e){return{type:b.f,filters:e}}function se(e){return{type:b.r,page:e}}function fe(e){return function(t){t({type:b.n,mobFilters:e})}}function de(e){return function(t){t({type:b.l,absMaxPrice:e})}}function pe(e){return function(t){t({type:b.m,absMinPrice:e})}}function he(e){return function(t){t({type:b.i,gMapLoaded:e})}}function ge(e){return function(t){t({type:b.w,acList:e})}}function me(e){return function(t){t({type:b.C,selDest:e})}}function be(e){return function(t){t({type:b.U,valueDest:e})}}function _e(e){return function(t){t({type:b.R,tripType:e})}}function ve(e){return function(t){t({type:b.L,returnType:e})}}function ye(e){return function(t){t({type:b.v,routes:e})}}function Ee(e){return function(t){t({type:b.M,sbFocus:e})}}function Se(e){return function(t){t({type:b.P,sbWhere:e})}}function Oe(e){return function(t){t({type:b.N,sbIndex:e})}}function Te(e){return function(t){t({type:b.O,sbModify:e})}}function Ie(e){return function(t){t({type:b.z,alert:e})}}function Re(e){return function(t){t({type:b.j,infoMsg:e})}}function je(e){return function(t){t({type:b.G,flightKey:e})}}function Ae(e){return function(t){t({type:b.A,bagInfo:e})}}function De(e){return function(t){t({type:b.W,timeStamp:e})}}function Fe(e,t){return function(n){var r={};B.a.get("/data/airlines.json").catch(function(e){}).then(function(a){for(var i=[],o=function(e){(i=a.data.filter(function(n){return n.code===t[e]}))&&i[0]?r[i[0].code]=i[0].name:r[t[e]]=t[e]},u=0;u<t.length;u++)o(u);"none"!==e&&(e[6].airlines=t.slice(),e[6].airlinesConst=t.slice(),n(le(e))),n({type:b.y,airlines:r})})}}function Pe(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=W()(t),a=p.a+e+"&lang="+r.lang.value+p.d,i=p.l;return function(e){e(ce("main")),e(De(d()())),B.a.get(a).catch(function(e){}).then(function(t){if("undefined"!==typeof t&&null!==t&&200===t.status)if(e(ce("none")),console.log(t.data),t.data.error&&t.data.error.message)t.data.error.message,e(Re("no_results"));else if(e(Z(t.data)),e(J(r)),n||e(ye("search")),e(re([])),e(se(1)),t.data.alt_inf&&t.data.alt_inf.length>0){for(var a=[],o=0,u=1e6,c=0,l=1e6,s=0,f=Math.floor(parseFloat(t.data.alt_inf[0].total_price)),d=Object.assign(t.data,{}),p=0;p<t.data.alt_inf.length;p++){var h=[];for(var g in t.data.alt_inf[p])g.includes("flight")&&h.push(g),"inbound"===g&&h.push(g),"outbound"===g&&h.push(g);h.includes("flight1")&&(h=h.sort()),parseFloat(t.data.alt_inf[p].total_price)>o&&(o=Math.floor(parseFloat(t.data.alt_inf[p].total_price))+1),parseFloat(t.data.alt_inf[p].total_price)<f&&(f=Math.floor(parseFloat(t.data.alt_inf[p].total_price)));for(var m=0,b=0,_=0;_<h.length;_++){if(m=0,Array.isArray(d.alt_inf[p][h[_]].fli_inf)){for(var v=0;v<d.alt_inf[p][h[_]].fli_inf.length;v++)m=m+60*parseInt(d.alt_inf[p][h[_]].fli_inf[v].elapsed_flight_time.substring(0,2))+parseInt(d.alt_inf[p][h[_]].fli_inf[v].elapsed_flight_time.substring(2,4))+60*parseInt(d.alt_inf[p][h[_]].fli_inf[v].ground_time.substring(0,2))+parseInt(d.alt_inf[p][h[_]].fli_inf[v].ground_time.substring(2,4)),a.includes(d.alt_inf[p][h[_]].fli_inf[v].airline_code)||a.push(d.alt_inf[p][h[_]].fli_inf[v].airline_code);d.alt_inf[p]["total_minutes_"+h[_]]=m}else m=60*parseInt(d.alt_inf[p][h[_]].fli_inf.elapsed_flight_time.substring(0,2))+parseInt(d.alt_inf[p][h[_]].fli_inf.elapsed_flight_time.substring(2,4))+60*parseInt(d.alt_inf[p][h[_]].fli_inf.ground_time.substring(0,2))+parseInt(d.alt_inf[p][h[_]].fli_inf.ground_time.substring(2,4)),a.includes(d.alt_inf[p][h[_]].fli_inf.airline_code)||a.push(d.alt_inf[p][h[_]].fli_inf.airline_code),d.alt_inf[p]["total_minutes_"+h[_]]=m;"outbound"===h[_]||"flight1"===h[_]?m>s?s=m:m<l&&(l=m):"inbound"!==h[_]&&"flight2"!==h[_]||(m>c?c=m:m<u&&(u=m)),b+=m}d.alt_inf[p].total_minutes=b}e(Z(d)),e(de(o)),e(pe(f)),e(Te(!1)),i[2].price=[f,o],i[2].priceSlider=[f,o],i[5].ttomin=l,i[5].ttimin=u,i[5].ttomax=s,i[5].ttimax=c,i[5].totalTimeOut=s,i[5].totalTimeIn=c,e(Fe(i,a))}})}}function Le(e,t){var n=q.a.parse(e),r="";for(var a in n)p.i.includes(a)&&(r=r+(""===r?"":"&")+a+"="+n[a]);var i=p.c+r+p.e+p.f+p.d;console.log(i);var o=0,u=[];return function(e){e(ce("main")),B.a.get(i).catch(function(e){}).then(function(n){if("undefined"!==typeof n&&null!==n&&200===n.status)if(e(ce("none")),console.log(n.data),n.data.hasOwnProperty("TOTAL_PRICE")){var a=n.data;a.book_query=r,a.from_search=t;for(var i=0;i<a.to_city.length;i++){o=0;for(var c=0;c<a.flight_info[i].elapsed_flight_time.length;c++)o+=parseInt(a.flight_info[i].elapsed_flight_time[c].slice(2,4))+parseInt(a.flight_info[i].stop_duration[c].slice(2,4))+60*(parseInt(a.flight_info[i].elapsed_flight_time[c].slice(0,2))+parseInt(a.flight_info[i].stop_duration[c].slice(0,2)));u.push(o)}a.total_mins=u,e(X(a)),t&&e(ye("book"))}else e(Re("no_flight"))})}}function Me(e,t){var n=p.g+e+p.f+p.e;return console.log(n),function(e){e(ce("main")),B.a.get(n).catch(function(t){e(ce("none"))}).then(function(t){"undefined"!==typeof t&&null!==t&&200===t.status?window.location.assign(t.data.url.replace("https://payment.sky-tours.com","http://devel5.payment.sky-tours.com")):(e(ce("none")),e(ye("home")))})}}function Ne(e){return{type:b.a,payload:e}}function ke(e,t){t.forEach(function(t){return delete e[t]});return Object.assign(e,{stage:1,services:{cancel:0,protection:0,flexible:0}}),{type:b.u,payload:e}}function xe(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=Object(s.a)({},e);return a||i?o[t][n].err=z(a):o[t][n].value=z(r),{type:b.H,payload:o}}function we(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4?arguments[4]:void 0,i=Object(s.a)({},e);return r||a?i[t].err=z(r):"stage"===t?i[t]=z(n):"string"===typeof n?i[t].value=z(n):i[t]=z(n),{type:b.K,payload:i}}function Ce(e,t,n,r){var a=Object(s.a)({},e),i="booking_uuid=".concat(t,"&lang=").concat(n,"&curr=").concat(r,"&email=").concat(a.email.value,"&phone=").concat(a.phoneNumber.value,"&area_code=").concat(a.countryCode.value.replace(/[^\d]/g,""),"&");return function(e,t){var n="",r=1;t.forEach(function(t){var a=e[t];n+="\n                    firstname[".concat(r,"]=").concat(a.firstName.value,"&\n                    lastname[").concat(r,"]=").concat(a.lastName.value,"&\n                    dateofbirth[").concat(r,"]=").concat(/\d{2}/.test(a.birthMonth.value)?a.birthMonth.value:"0"+a.birthMonth.value,"/").concat(/\d{2}/.test(a.birthDay.value)?a.birthDay.value:"0"+a.birthDay.value,"/").concat(a.birthYear.value,"&\n                    gender[").concat(r,"]=").concat(a.selectGender.value,"&\n                    nationality[").concat(r,"]=").concat(a.nationality.value,"&\n                    passport_number[").concat(r,"]=").concat(a.idNumber.value,"&\n                    passport_date[").concat(r,"]=").concat(/\d{2}/.test(a.idExpMonth.value)?a.idExpMonth.value:"0"+a.idExpMonth.value,"/").concat(/\d{2}/.test(a.idExpDay.value)?a.idExpDay.value:"0"+a.idExpDay.value,"/").concat(a.idExpYear.value,"&\n                    cancel_types[").concat(r,"]=").concat(a.cancel.value.toLowerCase(),"&           \n                    cancel[").concat(r,"]=").concat(a.cancel.cost,"& \n                    cancel_types2[").concat(r,"]=").concat("PROTECTION"===a.protection.value?"missed":"none","&\n                    protection[").concat(r,"]=").concat(a.protection.cost,"&\n                    emissions[").concat(r,"]=0&\n                    meal[").concat(r,"]=0&\n                    seat[").concat(r,"]=0&\n                    flyer_program[").concat(r,"]=").concat(a.flyerProgram.value,"&\n                    flyer_number[").concat(r,"]=").concat(a.flyerNumber.value,"&\n                    "),r+=1}),i+=n}(a,Object.keys(a).filter(function(e){return/^f_/.test(e)})),i=i.replace(/\n+/g,""),Object.assign(a,{usersData:i}),{type:b.K,payload:a}}n(251),n(277),n(278),n(279),n(280),n(281),n(282);var Ue=n(77),Ge=n(23),He=n(73),Be=n.n(He),Ke=n(74),We=n.n(Ke),Ye=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(C.a)(this,Object(U.a)(t).call(this,e))).r=0,n}return Object(G.a)(t,e),Object(w.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.loading!==e.loading&&(this.r=Math.ceil(4*Math.random()))}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",null,"main"===this.props.loading&&i.a.createElement("div",{className:"loading-holder fade-in"},i.a.createElement("div",{className:"loading fade-in"},i.a.createElement("div",{className:"loader1"},"...loading"),i.a.createElement(Be.a,{className:"padding-lr15 padding-tb15"},i.a.createElement(We.a,{src:"/images/icons/icon"+this.r+".png"}),i.a.createElement("br",null),i.a.createElement("div",{className:"font14 text-light-gray maxw200 margin-lr-auto"},e("WHY_SKY_TOURS_"+this.r))))))}}]),t}(a.Component),qe=n(66),ze=n.n(qe),Ve=n(124);function Ze(e){return function(t){function n(e){var t;return Object(x.a)(this,n),(t=Object(C.a)(this,Object(U.a)(n).call(this,e))).state={component:null},t}return Object(G.a)(n,t),Object(w.a)(n,[{key:"componentDidMount",value:function(){var t=Object(Ve.a)(ze.a.mark(function t(){var n,r;return ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?i.a.createElement(e,this.props):null}}]),n}(a.Component)}var Je=Ze(function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,756))}),Xe=Ze(function(){return Promise.all([n.e(0),n.e(2),n.e(6),n.e(1),n.e(9)]).then(n.bind(null,762))}),Qe=Ze(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(8)]).then(n.bind(null,761))}),$e=Ze(function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,757))}),et=Ze(function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,758))}),tt=Ze(function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,759))}),nt=Ze(function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,760))}),rt=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(Ye,Object.assign({loading:this.props.loading},this.props)),i.a.createElement(Ue.a,null,i.a.createElement(Ge.d,null,i.a.createElement(Ge.b,{exact:!0,path:"/([A-Za-z]{2})-([A-Za-z]{3})-([A-Za-z]{3})-([^\\.]{0,50}).html",render:function(){return i.a.createElement(et,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/search",render:function(){return i.a.createElement(Xe,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/book",render:function(){return i.a.createElement(Qe,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/confirmation/:lang([A-Za-z]{2})*/:orderid(\\d+)/:tname*",render:function(){return i.a.createElement(nt,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/info/:type",render:function(){return i.a.createElement($e,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/([A-Za-z]{3})-([\\w-]{0,50}).html",render:function(){return i.a.createElement(et,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/([A-Za-z]{2})-([\\w-]{0,50}).html",render:function(){return i.a.createElement(et,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/([A-Za-z_]{2,22}\\.htm)",render:function(){return i.a.createElement($e,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang",render:function(){return i.a.createElement(Je,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/",render:function(){return i.a.createElement(Je,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/(myreservation|viewtrip)",render:function(){return i.a.createElement(Je,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/(myreservation|viewtrip)",render:function(){return i.a.createElement(Je,e.props)}}),i.a.createElement(Ge.b,{exact:!0,path:"/:lang/404/",render:function(){return i.a.createElement(tt,e.props)}}),i.a.createElement(Ge.b,{render:function(){return i.a.createElement(Ge.a,{to:"/"+e.props.lang.value+"/404"})}}))))}}]),t}(a.Component),at=n(48),it=Object(at.b)(["lang","countries"])(rt),ot=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(C.a)(this,Object(U.a)(t).call(this,e))).loadDeskPro=function(){window.DESKPRO_WIDGET_OPTIONS={helpdeskUrl:"https://support.sky-tours.com/"},n.scriptDeskPro.src="https://support.sky-tours.com/dyn-assets/pub/build/widget_loader.min.js",n.scriptDeskPro.id="dp-widget-loader",document.body.appendChild(n.scriptDeskPro)},n.scriptDeskPro=document.createElement("script"),n}return Object(G.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){(d.a.duration(d()().diff(d()(this.props.timeStamp))).asHours()>24||d()(this.props.selDates[0])<d()())&&this.props.appActions.Reset(),this.props.userInfo&&this.props.userInfo.publicIp||this.props.appActions.setUserInfo(p.w),this.props.numPeople||this.props.appActions.setNumPeople(p.n),"none"!==this.props.loading&&this.props.appActions.loading("none"),"none"!==this.props.routes&&this.props.appActions.setRouteInfo("none"),"none"!==this.props.alert&&this.props.appActions.setAlert("none")}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.loadDeskPro()},1e4)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(a.Suspense,{fallback:" "},i.a.createElement(it,this.props)))}}]),t}(a.Component);var ut=Object(c.d)(Object(u.b)(function(e){return{flights:e.resRed.flights,filteredFlights:e.resRed.filteredFlights,selectedFlight:e.resRed.selectedFlight,acList:e.resRed.acList,flightsSearchInfo:e.resRed.flightsSearchInfo,filters:e.resRed.filters,mobFilters:e.resRed.mobFilters,absMaxPrice:e.resRed.absMaxPrice,absMinPrice:e.resRed.absMinPrice,page:e.resRed.page,airlines:e.resRed.airlines,lang:e.locRed.lang,curr:e.locRed.curr,rightToLeft:e.locRed.rightToLeft,userInfo:e.locRed.userInfo,gMapLoaded:e.appRed.gMapLoaded,routes:e.appRed.routes,loading:e.appRed.loading,selDest:e.appRed.selDest,selDates:e.appRed.selDates,numPeople:e.appRed.numPeople,valueDest:e.appRed.valueDest,tripType:e.appRed.tripType,returnType:e.appRed.returnType,alert:e.appRed.alert,timeStamp:e.appRed.timeStamp,sbFocus:e.barRed.sbFocus,sbWhere:e.barRed.sbWhere,sbIndex:e.barRed.sbIndex,sbModify:e.barRed.sbModify,peopleInfo:e.formRed.peopleInfo,validation:e.formRed.validation,additionalServices:e.formRed.additionalServices,bookForm:e.bookFormRed,flightKey:e.flightAddRed.flightKey,bagInfo:e.flightAddRed.bagInfo,infoMsg:e.infoRed.infoMsg}},function(e){return{appActions:Object(c.b)(r,e)}}))(ot),ct=n(68),lt=n(130),st=n(129),ft=n.n(st);ct.a.use(lt.a).use(ft.a).use(at.a).init({fallbackLng:"en",returnEmptyString:!0,load:"languageOnly",ns:["lang","countries"],defaultNS:"lang",debug:!1,backend:{loadPath:"/locales/{{ns}}/{{lng}}.json"},interpolation:{escapeValue:!1},react:{wait:!0}});ct.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dt=function(){var e=Object(c.e)(Object(A.a)(L,I),N);return{store:e,persistor:Object(A.b)(e)}}(),pt=dt.store,ht=dt.persistor,gt=document.querySelector("#root");Object(o.render)(i.a.createElement(u.a,{store:pt},i.a.createElement(k.a,{loading:null,persistor:ht},i.a.createElement("div",null,i.a.createElement(ut,null)))),gt),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,4,5]]]);