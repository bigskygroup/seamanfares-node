(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(e,t,n){e.exports=n(322)},167:function(e,t,n){},2:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"h",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return s}),n.d(t,"p",function(){return f}),n.d(t,"g",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"e",function(){return h}),n.d(t,"j",function(){return g}),n.d(t,"A",function(){return m}),n.d(t,"v",function(){return b}),n.d(t,"t",function(){return v}),n.d(t,"y",function(){return y}),n.d(t,"o",function(){return _}),n.d(t,"l",function(){return E}),n.d(t,"n",function(){return S}),n.d(t,"u",function(){return O}),n.d(t,"q",function(){return I}),n.d(t,"w",function(){return T}),n.d(t,"i",function(){return R}),n.d(t,"s",function(){return j}),n.d(t,"B",function(){return A}),n.d(t,"x",function(){return D}),n.d(t,"m",function(){return L}),n.d(t,"k",function(){return M}),n.d(t,"z",function(){return F}),n.d(t,"r",function(){return w});var r=n(26),a=n(3),o=n.n(a),i="https://xml.sky-tours.com/xml.php?a=SKY-TOURS",c="https://xml.sky-tours.com/flights.php?method=details&",l="https://xml.sky-tours.com/flights.php?method=store_reservation&",u="https://xml.sky-tours.com/flights.php?method=closest_city",s="https://xml.sky-tours.com/flights.php?method=book&_r=",f="",d="&owner=1",p="&master=sky-tours",h="&format=json",g="https://achelper.sky-tours.com/autocomplete?q=",m="https://viewtrip.sky-tours.com/get.php",b=10,v=4,y=o()().add(7,"days"),_=o()().add(12,"days"),E=[{msg:""},{stops:[!1,!1,!1]},{price:[0,100],priceSlider:[0,100]},{out:[0,24],in:[0,24]},{outLand:[0,24],inLand:[0,24]},{ttomin:0,ttimin:0,ttomax:0,ttimax:0,totalTimeOut:0,totalTimeIn:0},{airlines:[],airlinesConst:[]},{selOut:0,selIn:0}],S={adult:1,child:0,infant:0,senior:0,youth:0},O=[{which:"adult",label:"PASSENGERS_ADULT",label1:"PASSENGERS_ADULTS",age:"SEARCH_ADULTS",icon:r.n,years:11,id:0},{which:"child",label:"PASSENGERS_CHILD",label1:"PASSENGERS_CHILDREN",age:"AGE_CHILDRENS",icon:r.f,years:1,id:1},{which:"infant",label:"PASSENGERS_INFANT",label1:"PASSENGERS_INFANTS",age:"AGE_INFANTS",icon:r.c,years:0,id:2},{which:"senior",label:"SMALL_SENIORS",label1:"SMALL_SENIORS",age:"AGE_SENIORS",icon:r.n,years:11,id:3},{which:"youth",label:"SMALL_YOUTHS",label1:"SMALL_YOUTHS",age:"AGE_YOUTHS",icon:r.n,years:11,id:4}],I=[{name:"MALE",value:"male"},{name:"FEMALE",value:"female"}],T=["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16","T17","T18","T19","T20","outdate1","outdate2","outdate3","outdate4","outdate5","outdate6","outdate7","outdate8","outdate9","outdate10","D1","D2","D3","D4","D5","trip","limit","curr"],R=["method","lang","curr","book","key","life","trip","api","check","affiliate","client_request"],j=["ae","bh","eg","ir","qr","sa"],A=["ae","eg","ir","jo","lb","sa","bh","kw","om","qr"],D={show:!0,langShow:["es"],services:["travelfusion","travelport","tripninja","auto","igola"],minEUR:50,maxEUR:3e3,outDayOffset:2},L={value:"en",lang:"en",country:"US",locale:"en_US",image:"us.gif",name:"United States",currency:"USD",top:"1",url:"en"},M={cc:"USD",symbol:"US$",name:"United States of America, Dollars",decimal:"2",side:"l",active:"1",top:"1",url:"USD"},F={timeStamp:o()(),browser:null,ipPublic:null,cc:null,city:null,lat:0,lng:0,closestAirport:"",facebook:null},w="https://hotelapi.sky-tours.com/"},297:function(e,t,n){},298:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"Reset",function(){return Je}),n.d(r,"setFlightsData",function(){return Xe}),n.d(r,"setFlightsSearchInfo",function(){return $e}),n.d(r,"setSelectedFlight",function(){return Qe}),n.d(r,"setDate",function(){return et}),n.d(r,"setNumPeople",function(){return tt}),n.d(r,"setPeopleInfo",function(){return nt}),n.d(r,"setAddServices",function(){return rt}),n.d(r,"setValidation",function(){return at}),n.d(r,"setFilteredFlights",function(){return ot}),n.d(r,"changeLang",function(){return it}),n.d(r,"changeCurrency",function(){return ct}),n.d(r,"changeDirection",function(){return lt}),n.d(r,"setUserInfo",function(){return ut}),n.d(r,"loading",function(){return st}),n.d(r,"setFilters",function(){return ft}),n.d(r,"setPage",function(){return dt}),n.d(r,"setMobFilters",function(){return pt}),n.d(r,"setMaxPrice",function(){return ht}),n.d(r,"setMinPrice",function(){return gt}),n.d(r,"setGMapLoaded",function(){return mt}),n.d(r,"setAcList",function(){return bt}),n.d(r,"setSelDest",function(){return vt}),n.d(r,"setValDest",function(){return yt}),n.d(r,"setTripType",function(){return _t}),n.d(r,"setReturnType",function(){return Et}),n.d(r,"setRouteInfo",function(){return St}),n.d(r,"setSbFocus",function(){return Ot}),n.d(r,"setSbWhere",function(){return It}),n.d(r,"setSbIndex",function(){return Tt}),n.d(r,"setSbModify",function(){return Rt}),n.d(r,"setAlert",function(){return jt}),n.d(r,"setInfoMsg",function(){return At}),n.d(r,"setFlightKey",function(){return Dt}),n.d(r,"setBagInfo",function(){return Lt}),n.d(r,"setTimeStamp",function(){return Mt}),n.d(r,"setAirlines",function(){return Ft}),n.d(r,"fetchFlightsData",function(){return wt}),n.d(r,"getFlightDetails",function(){return Pt}),n.d(r,"storeReservation",function(){return kt}),n.d(r,"setConfirmationInfo",function(){return Ht}),n.d(r,"setBookForm",function(){return Nt}),n.d(r,"resetBookForm",function(){return xt}),n.d(r,"setInput",function(){return Ct}),n.d(r,"setPersonalInput",function(){return Ut}),n.d(r,"stringifyRequest",function(){return Gt});var a={};n.r(a),n.d(a,"receiveData",function(){return Wt}),n.d(a,"fetchTempData",function(){return Bt}),n.d(a,"manageShowAllHotels",function(){return Kt}),n.d(a,"manageShowOneHotel",function(){return Vt}),n.d(a,"receiveHotelInfo",function(){return zt}),n.d(a,"clearFilterHotels",function(){return Zt}),n.d(a,"FilterHotels",function(){return Jt}),n.d(a,"selectedHotel",function(){return Xt}),n.d(a,"setPack",function(){return $t}),n.d(a,"getHotelInfo",function(){return Qt}),n.d(a,"setHotelSearch",function(){return en}),n.d(a,"fetchData",function(){return tn});var o=n(0),i=n.n(o),c=n(21),l=(n(167),n(50)),u=n(8),s=n(49),f=n(1),d=n(2),p=n(3),h=n.n(p);h.a.locale("en_US");var g={gMapLoaded:!1,routes:"none",timeStamp:h()(),selDest:[{from:null,to:null},{from:null,to:null}],selDates:[d.y,d.o],numPeople:d.n,valueDest:[{from:"",to:""},{from:"",to:""}],tripType:"round",returnType:"standard",alert:!1},m="RESET",b="FETCH_FLIGHTS_DATA",v="SET_SELECTED_FLIGHT",y="SET_FLIGHTS_DATA",_="SET_FLIGHTS_SEARCH_INFO",E="SET_FILTERED_FLIGHTS",S="SET_DATES",O="SET_NUM_PEOPLE",I="CHANGE_LANG",T="CHANGE_CURR",R="CHANGE_DIRECTION",j="SET_USERINFO",A="SET_AIRLINES",D="LOADING",L="FILTERS",M="G_MAP_LOADED",F="ROUTE_INFO",w="SET_AC_LIST",P="SET_DEST",k="SET_VAL_DEST",H="SET_TRIP_TYPE",N="SET_RETURN",x="PAGES",C="MOB_FILTERS",U="MAX_PRICE",G="MIN_PRICE",Y="SET_SB_FOCUS",q="SET_SB_WHERE",W="SET_SB_INDEX",B="SET_SB_MODIFY",K="SET_ALERT",V="SET_PEOPLE_INFO",z="SET_VALIDATION",Z="SET_ADDITIONAL_SERVICES",J="BOOK_FORM",X="SET_INPUT",$="SET_PERSONAL_INPUT",Q="RESET_BOOK_FORM",ee="SET_BAG_INFO",te="SET_FLIGHT_KEY",ne="TIME_STAMP",re="INFO_MSG",ae="SET_CONFIRMATION_INFO";var oe={curr:d.k,lang:d.m,rightToLeft:!1,userInfo:d.z};var ie={flights:[],filteredFlights:[],flightsSearchInfo:{reqUrl:""},acList:[],airlines:{},filters:d.l,mobFilters:!1,absMaxPrice:0,absMinPrice:0,page:1};var ce={sbModify:!1,sbFocus:"none",sbWhere:null,sbIndex:null};var le={peopleInfo:[{}],validation:{},additionalServices:{}};var ue={stage:1,email:{value:"",err:""},repeatEmail:{value:"",err:""},countryCode:{value:"",err:""},phoneNumber:{value:"",err:""},services:{cancel:0,protection:0,flexible:0,emissions:0,baggage:0,supportLevel:0,airhelp:0},usersData:""};var se={bagInfo:{price:0,all:{},selected:[]},flightKey:""};var fe={infoMsg:"none"};var de={hotels:[],filteredHotels:[],filtersHotels:[{msg:""},{name:""},{stars:[]},{rating:-1},{facilities:[]},{price:[0,0],priceSlider:[0,0]},{type:[]},{offer:!1,hasOffers:0}],searchHotelInfo:{city:"",lat:0,lng:0,start:d.y,end:d.o,rooms:[[1,0]],rad:5,searchLang:"en",searchUrl:"/"},showAllHotels:!1,order:["relevance",!1],hotelsMap:!1,mapInfo:{},mapInfoHover:null,start:d.y,end:d.o,rooms:[[1,0]],guests:[],showRoom:!1,activeRoom:"0",filterModal:!1,filterMap:!1,lat:0,lng:0,hotelInfo:{},priceValidation:{},storeReservation:null,packSelected:{},hotelSelected:{}},pe="FETCH_TEMP_DATA",he="RECEIVE_DATA",ge="SHOW_ALL_HOTELS",me="SHOW_ONE_HOTEL",be="CLEAR_FILTER_HOTELS",ve="FILTERED_HOTELS",ye="FILTERS_HOTELS",_e="HOTEL_INFO",Ee="PRICE_VALIDATION",Se="PACK_SELECTED",Oe="SELECT_HOTEL";var Ie={confirmationInfo:{customer_email:"none"}};var Te=n(74),Re={};Re.currentURL=function(){var e=window.location.origin;return e.match(/localhost/)?"https://devel5.prod.sky-tours.com":e},Re.isGodIP=function(e){console.log(e,Re.currentURL());var t='{\n\t\t\t\t\t\t\t\t\t\t\t\t\t isGodIP(ip: "'.concat(e,'") {\n\t\t\t\t\t\t\t\t\t\t\t\t\t  result\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t}');return Object(Te.request)("".concat(Re.currentURL(),"/graphql"),t).then(function(e){return e.isGodIP.result})},Re.ipRequest=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{refetch:!1},n='\n                    query {\n                      ip(ip: "'.concat(e,'", refetch: ').concat(t.refetch,") {\n\t\t                      ip\n\t\t                      latitude\n\t\t                      longitude\n\t\t                      city\n\t\t                      city2\n\t\t                      country\n\t\t                      countryCode\n                      }\n                    }\n                  ");return Object(Te.request)("".concat(Re.currentURL(),"/graphql"),n).then(function(e){return e.ip})};var je=Object(u.c)({router:s.routerReducer,appRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"persist/REHYDRATE":return"undefined"!=typeof t.payload?Object(f.a)({},t.payload.appRed):e;case m:return g;case D:return Object(f.a)({},e,{loading:t.loading,error:!1});case F:return Object(f.a)({},e,{routes:t.routes});case M:return Object(f.a)({},e,{gMapLoaded:t.gMapLoaded});case S:return Object(f.a)({},e,{selDates:t.selDates});case O:return Object(f.a)({},e,{numPeople:t.numPeople});case P:return Object(f.a)({},e,{selDest:t.selDest});case k:return Object(f.a)({},e,{valueDest:t.valueDest});case H:return Object(f.a)({},e,{tripType:t.tripType});case N:return Object(f.a)({},e,{returnType:t.returnType});case K:return Object(f.a)({},e,{alert:t.alert});case ne:return Object(f.a)({},e,{timeStamp:t.timeStamp});default:return e}},locRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(f.a)({},e,{lang:t.lang});case T:return Object(f.a)({},e,{curr:t.curr});case R:return Object(f.a)({},e,{rightToLeft:t.rightToLeft});case j:return Object(f.a)({},e,{userInfo:t.userInfo});default:return e}},resRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(f.a)({},e,{flights:t.flights,filteredFlights:[],filters:e.filters});case E:return Object(f.a)({},e,{filteredFlights:t.filteredFlights});case b:return Object(f.a)({},e,{filteredFlights:[],flights:[]});case v:return Object(f.a)({},e,{selectedFlight:t.selectedFlight});case w:return Object(f.a)({},e,{acList:t.acList});case _:return Object(f.a)({},e,{flightsSearchInfo:t.flightsSearchInfo});case A:return Object(f.a)({},e,{airlines:t.airlines});case L:return Object(f.a)({},e,{filters:t.filters});case x:return Object(f.a)({},e,{page:t.page});case C:return Object(f.a)({},e,{mobFilters:t.mobFilters});case U:return Object(f.a)({},e,{absMaxPrice:t.absMaxPrice});case G:return Object(f.a)({},e,{absMinPrice:t.absMinPrice});default:return e}},barRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(f.a)({},e,{sbFocus:t.sbFocus});case q:return Object(f.a)({},e,{sbWhere:t.sbWhere});case W:return Object(f.a)({},e,{sbIndex:t.sbIndex});case B:return Object(f.a)({},e,{sbModify:t.sbModify});default:return e}},formRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(f.a)({},e,{peopleInfo:t.peopleInfo});case z:return Object(f.a)({},e,{validation:t.validation});case Z:return Object(f.a)({},e,{additionalServices:t.additionalServices});default:return e}},confirmRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(f.a)({},e,{confirmationInfo:t.confirmationInfo});default:return e}},bookFormRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(f.a)({},t.payload,e);case X:case $:case Q:return Object(f.a)({},e,t.payload);default:return e}},flightAddRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(f.a)({},e,{bagInfo:t.bagInfo});case te:return Object(f.a)({},e,{flightKey:t.flightKey});default:return e}},infoRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(f.a)({},e,{infoMsg:t.infoMsg});default:return e}},hotelsRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(f.a)({},e,{hotelSelected:t.hotelSelected});case Se:return Object(f.a)({},e,{packSelected:t.packSelected,loading:!1});case Ee:return Object(f.a)({},e,{priceValidation:t.priceValidation,loading:!1});case ge:return Object(f.a)({},e,{showAllHotels:t.showAllHotels});case me:return Object(f.a)({},e,{showOneHotel:t.showOneHotel});case pe:return Object(f.a)({},e);case he:return Object(f.a)({},e,{hotels:t.hotels});case be:return Object(f.a)({},e,{filtered:[]});case ve:return Object(f.a)({},e,{filteredHotels:t.filteredHotels});case ye:return Object(f.a)({},e,{filtersHotels:t.filtersHotels});case _e:return Object(f.a)({},e,{hotelInfo:t.hotelInfo});default:return e}},fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;return arguments.length>1&&arguments[1],Object.keys(e)<1?Re:e}}),Ae=n(133),De=n(14),Le=n(78),Me=n(134),Fe=n.n(Me),we=Object(De.a)(),Pe={key:"root",storage:Fe.a,blacklist:["router","barRed","infoRed","confirmRed","resRed"]},ke=[Ae.a,Object(s.routerMiddleware)(we)],He=u.d.apply(void 0,[u.a.apply(void 0,ke)].concat([])),Ne=n(135),xe=n(4),Ce=n(5),Ue=n(10),Ge=n(11),Ye=n(12),qe=n(15),We=n.n(qe),Be=n(87),Ke=n.n(Be),Ve=n(33),ze=n.n(Ve);function Ze(e){return"string"===typeof e?e.replace("<"," ").replace(">"," "):e}function Je(){return function(e){e({type:m})}}function Xe(e){return function(t){t({type:y,flights:e})}}function $e(e){return function(t){t({type:_,flightsSearchInfo:e})}}function Qe(e){return{type:v,selectedFlight:e}}function et(e){return function(t){t({type:S,selDates:e})}}function tt(e){return function(t){t({type:O,numPeople:e})}}function nt(e){return function(t){t({type:V,peopleInfo:e})}}function rt(e){return function(t){t({type:Z,additionalServices:e})}}function at(e){return function(t){t({type:z,validation:e})}}function ot(e){return{type:E,filteredFlights:e}}function it(e){return{type:I,lang:e}}function ct(e){return{type:T,curr:e}}function lt(e){return{type:R,rightToLeft:e}}function ut(e){return function(t){t({type:j,userInfo:e})}}function st(e){return{type:D,loading:e}}function ft(e){return{type:L,filters:e}}function dt(e){return{type:x,page:e}}function pt(e){return function(t){t({type:C,mobFilters:e})}}function ht(e){return function(t){t({type:U,absMaxPrice:e})}}function gt(e){return function(t){t({type:G,absMinPrice:e})}}function mt(e){return function(t){t({type:M,gMapLoaded:e})}}function bt(e){return function(t){t({type:w,acList:e})}}function vt(e){return function(t){t({type:P,selDest:e})}}function yt(e){return function(t){t({type:k,valueDest:e})}}function _t(e){return function(t){t({type:H,tripType:e})}}function Et(e){return function(t){t({type:N,returnType:e})}}function St(e){return function(t){t({type:F,routes:e})}}function Ot(e){return function(t){t({type:Y,sbFocus:e})}}function It(e){return function(t){t({type:q,sbWhere:e})}}function Tt(e){return function(t){t({type:W,sbIndex:e})}}function Rt(e){return function(t){t({type:B,sbModify:e})}}function jt(e){return function(t){t({type:K,alert:e})}}function At(e){return function(t){t({type:re,infoMsg:e})}}function Dt(e){return function(t){t({type:te,flightKey:e})}}function Lt(e){return function(t){t({type:ee,bagInfo:e})}}function Mt(e){return function(t){t({type:ne,timeStamp:e})}}function Ft(e,t){return function(n){var r={};We.a.get("/data/airlines.json").catch(function(e){}).then(function(a){for(var o=[],i=function(e){(o=a.data.filter(function(n){return n.code===t[e]}))&&o[0]?r[o[0].code]=o[0].name:r[t[e]]=t[e]},c=0;c<t.length;c++)i(c);"none"!==e&&(e[6].airlines=t.slice(),e[6].airlinesConst=t.slice(),n(ft(e))),n({type:A,airlines:r})})}}function wt(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=Ke()(t),o=r?t.reqUrl:d.a+e+"&lang="+a.lang.value+d.e,i=d.l;return function(e){r||e(st("main")),e(Mt(h()())),We.a.get(o).catch(function(e){}).then(function(t){if("undefined"!==typeof t&&null!==t&&200===t.status)if(r||e(st("none")),console.log(t.data),t.data.error&&t.data.error.message)t.data.error.message,e(At("no_results"));else if(e(Xe(t.data)),e($e(a)),n||r||e(St("search")),e(ot([])),e(dt(1)),t.data.alt_inf&&t.data.alt_inf.length>0){for(var o=[],c=0,l=1e6,u=0,s=1e6,f=0,d=Math.floor(parseFloat(t.data.alt_inf[0].total_price)),p=Object.assign(t.data,{}),h=0;h<t.data.alt_inf.length;h++){var g=[];for(var m in t.data.alt_inf[h])m.includes("flight")&&g.push(m),"inbound"===m&&g.push(m),"outbound"===m&&g.push(m);g.includes("flight1")&&(g=g.sort()),parseFloat(t.data.alt_inf[h].total_price)>c&&(c=Math.floor(parseFloat(t.data.alt_inf[h].total_price))+1),parseFloat(t.data.alt_inf[h].total_price)<d&&(d=Math.floor(parseFloat(t.data.alt_inf[h].total_price)));for(var b=0,v=0,y=0;y<g.length;y++){if(b=0,Array.isArray(p.alt_inf[h][g[y]].fli_inf)){for(var _=0;_<p.alt_inf[h][g[y]].fli_inf.length;_++)b=b+60*parseInt(p.alt_inf[h][g[y]].fli_inf[_].elapsed_flight_time.substring(0,2))+parseInt(p.alt_inf[h][g[y]].fli_inf[_].elapsed_flight_time.substring(2,4))+60*parseInt(p.alt_inf[h][g[y]].fli_inf[_].ground_time.substring(0,2))+parseInt(p.alt_inf[h][g[y]].fli_inf[_].ground_time.substring(2,4)),o.includes(p.alt_inf[h][g[y]].fli_inf[_].airline_code)||o.push(p.alt_inf[h][g[y]].fli_inf[_].airline_code);p.alt_inf[h]["total_minutes_"+g[y]]=b}else b=60*parseInt(p.alt_inf[h][g[y]].fli_inf.elapsed_flight_time.substring(0,2))+parseInt(p.alt_inf[h][g[y]].fli_inf.elapsed_flight_time.substring(2,4))+60*parseInt(p.alt_inf[h][g[y]].fli_inf.ground_time.substring(0,2))+parseInt(p.alt_inf[h][g[y]].fli_inf.ground_time.substring(2,4)),o.includes(p.alt_inf[h][g[y]].fli_inf.airline_code)||o.push(p.alt_inf[h][g[y]].fli_inf.airline_code),p.alt_inf[h]["total_minutes_"+g[y]]=b;"outbound"===g[y]||"flight1"===g[y]?b>f?f=b:b<s&&(s=b):"inbound"!==g[y]&&"flight2"!==g[y]||(b>u?u=b:b<l&&(l=b)),v+=b}p.alt_inf[h].total_minutes=v}e(Xe(p)),e(ht(c)),e(gt(d)),e(Rt(!1)),i[2].price=[d,c],i[2].priceSlider=[d,c],i[5].ttomin=s,i[5].ttimin=l,i[5].ttomax=f,i[5].ttimax=u,i[5].totalTimeOut=f,i[5].totalTimeIn=u,e(Ft(i,o))}})}}function Pt(e,t,n){var r=ze.a.parse(e),a="";for(var o in r)d.i.includes(o)&&(a=a+(""===a?"":"&")+o+"="+r[o]);var i=d.d+a+d.f+d.g+d.e;console.log(i);var c=0,l=[];return function(r){r(st("main")),We.a.get(i).catch(function(e){}).then(function(o){if("undefined"!==typeof o&&null!==o&&200===o.status)if(r(st("none")),console.log(o.data),o.data.hasOwnProperty("TOTAL_PRICE")){var i=o.data;i.book_query=a,i.from_search=t;for(var u=0;u<i.to_city.length;u++){c=0;for(var s=0;s<i.flight_info[u].elapsed_flight_time.length;s++)c+=parseInt(i.flight_info[u].elapsed_flight_time[s].slice(2,4))+parseInt(i.flight_info[u].stop_duration[s].slice(2,4))+60*(parseInt(i.flight_info[u].elapsed_flight_time[s].slice(0,2))+parseInt(i.flight_info[u].stop_duration[s].slice(0,2)));l.push(c)}i.total_mins=l,r(Qe(i)),t&&r(St("book"))}else t&&r(wt(e,n,!1,!0)),r(At("no_flight"))})}}function kt(e,t){var n=d.h+e+d.g+d.f;return console.log(n),function(e){e(st("main")),We.a.get(n).catch(function(t){e(st("none"))}).then(function(t){"undefined"!==typeof t&&null!==t&&200===t.status?window.location.assign(t.data.url.replace("https://payment.sky-tours.com","http://devel5.payment.sky-tours.com")):(e(st("none")),e(St("home")))})}}function Ht(e){var t=ze.a.parse(e);d.c,encodeURIComponent(t._r);return function(e){We.a.get("/data/confirmation_data.json").then(function(t){console.log(t),e({type:ae,confirmationInfo:t.data})})}}function Nt(e){return{type:J,payload:e}}function xt(e,t){t.forEach(function(t){return delete e[t]});return Object.assign(e,{stage:1,services:{cancel:0,protection:0,flexible:0}}),{type:Q,payload:e}}function Ct(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=Object(f.a)({},e);return a||o?i[t][n].err=Ze(a):i[t][n].value=Ze(r),{type:X,payload:i}}function Ut(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4?arguments[4]:void 0,o=Object(f.a)({},e);return r||a?o[t].err=Ze(r):"stage"===t?o[t]=Ze(n):"string"===typeof n?o[t].value=Ze(n):o[t]=Ze(n),{type:$,payload:o}}function Gt(e,t,n,r){var a=Object(f.a)({},e),o="booking_uuid=".concat(t,"&lang=").concat(n,"&curr=").concat(r,"&email=").concat(a.email.value,"&phone=").concat(a.phoneNumber.value,"&area_code=").concat(a.countryCode.value.replace(/[^\d]/g,""),"&");return function(t,n){var r="",a=1;n.forEach(function(n){var o=t[n];r+="\n                    firstname[".concat(a,"]=").concat(o.firstName.value,"&\n                    lastname[").concat(a,"]=").concat(o.lastName.value,"&\n                    dateofbirth[").concat(a,"]=").concat(/\d{2}/.test(o.birthMonth.value)?o.birthMonth.value:"0"+o.birthMonth.value,"/").concat(/\d{2}/.test(o.birthDay.value)?o.birthDay.value:"0"+o.birthDay.value,"/").concat(o.birthYear.value,"&\n                    gender[").concat(a,"]=").concat(o.selectGender.value,"&\n                    nationality[").concat(a,"]=").concat(o.nationality.value,"&\n                    passport_number[").concat(a,"]=").concat(o.idNumber.value,"&\n                    passport_date[").concat(a,"]=").concat(/\d{2}/.test(o.idExpMonth.value)?o.idExpMonth.value:"0"+o.idExpMonth.value,"/").concat(/\d{2}/.test(o.idExpDay.value)?o.idExpDay.value:"0"+o.idExpDay.value,"/").concat(o.idExpYear.value,"&\n                    cancel_types[").concat(a,"]=").concat(o.cancel.value.split("_")[1].toLowerCase(),"& \n                    cancel_types2[").concat(a,"]=").concat("protection"===o.protection.value?"missed":"none","&\n                    emissions[").concat(a,"]=").concat(e.services.emissions,"&\n                    airhelp[").concat(a,"]=").concat(0==e.services.airhelp?"false":1,"&\n                    meal[").concat(a,"]=0&\n                    seat[").concat(a,"]=0&\n                    flyer_program[").concat(a,"]=").concat(o.flyerProgram.value,"&\n                    flyer_number[").concat(a,"]=").concat(o.flyerNumber.value,"&\n                    brb_type[").concat(a,"]=").concat(o.baggage.value.split("_")[1].toUpperCase(),"&\n                    "),a+=1}),o+=r}(a,Object.keys(a).filter(function(e){return/^f_/.test(e)})),o=o.replace(/\n+/g,""),Object.assign(a,{usersData:o}),{type:$,payload:a}}var Yt=n(37),qt=n(56);function Wt(e){return{type:he,hotels:e}}function Bt(){return function(e){We.a.get("/data/BCN.json").then(function(t){e(Wt(t.data))})}}function Kt(e){return function(t){t({type:ge,showAllHotels:e})}}function Vt(e){return function(t){t({type:me,showOneHotel:e})}}function zt(e){return{type:_e,hotelInfo:e}}function Zt(){return function(e){e({type:be})}}function Jt(e){var t=[];return t="undefined"===typeof e||null===e||e.length<=0?[]:e,function(e){e({type:ve,filteredHotels:t})}}function Xt(e){return function(t){t({type:Oe,hotelSelected:e})}}function $t(e){return function(t){t({type:Se,packSelected:e})}}function Qt(e,t,n,r,a,o,i,c,l){l||Yt.animateScroll.scrollToTop();var u=d.r+"/hotels.php?method=info&a=hotelshop&_q="+r+"|"+n+"&curr="+o+"&lang="+i;return console.log(u),function(t){e&&null!==e&&t(Xt(e)),null==e||c||We.a.get(u).then(function(e){if("undefined"!==typeof e&&null!==e&&200===e.status){var n=Object(qt.e)([e.data.response],"yes")[0];t(Xt(n)),t(zt(n)),e.data.response.hasOwnProperty("packs")||setTimeout(Yt.scroller.scrollTo("NoAvailability",{duration:1e3,delay:100,smooth:!0}),500)}}).catch(function(e){})}}function en(e){var t=ze.a.parse(e),n=t.key,r=t.trip,a="",o="",i="",c=0,l=0;return"round"===r&&(a=n.slice(3,6),o=n.slice(6,16),i=n.slice(26,36),c=parseInt(n.slice(41,42))+parseInt(n.slice(42,43))+parseInt(n.slice(43,44)),l=parseInt(n.slice(44,45))+parseInt(n.slice(45,46))),console.log(a,o,i,c,l),function(t){t(tn("city",o,i,"USD",0,0,"en",1,[],"1:0",5,e))}}function tn(e,t,n,r,a,o,i,c,l,u,s,f){var p=h()(t).format("YYYYMMDD"),g=h()(n).format("YYYYMMDD"),m=r,b=i,v=c,y=u,_=s;if(void 0!==p&&void 0!==g&&void 0!==v&&h()(p).format("YYYYMMDD")>=h()().format("YYYYMMDD")){var E=d.r+"hotels.php?method=search&a=hotelshop&_q=41.3818;2.1685|"+p+"|"+g+"|"+v+"|"+y+"|"+_+"&curr="+m+"&lang="+b;return console.log(E),function(e){We.a.get(E).catch(function(e){}).then(function(t){if("undefined"!==typeof t&&null!==t&&200===t.status)if("ERR"===t.data.status);else{console.log("RESPONSE",t.data.response);var n=Object(qt.e)(t.data.response);e(Wt(n)),e($t(null))}})}}}n(271),n(297),n(298),n(299),n(300),n(301),n(302),n(303);var nn=n(86),rn=n(25),an=n(81),on=n.n(an),cn=n(83),ln=n.n(cn),un=function(e){function t(e){var n;return Object(xe.a)(this,t),(n=Object(Ue.a)(this,Object(Ge.a)(t).call(this,e))).r=0,n}return Object(Ye.a)(t,e),Object(Ce.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.loading!==e.loading&&(this.r=Math.ceil(4*Math.random()))}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",null,"main"===this.props.loading&&i.a.createElement("div",{className:"loading-holder fade-in"},i.a.createElement("div",{className:"loading fade-in"},i.a.createElement("div",{className:"loader1"},"...loading"),i.a.createElement(on.a,{className:"padding-lr15 padding-tb15"},i.a.createElement(ln.a,{src:"/images/icons/icon"+this.r+".png"}),i.a.createElement("br",null),i.a.createElement("div",{className:"font14 text-light-gray maxw200 margin-lr-auto"},e("WHY_SKY_TOURS_"+this.r))))))}}]),t}(o.Component),sn=n(75),fn=n.n(sn),dn=n(136);function pn(e){return function(t){function n(e){var t;return Object(xe.a)(this,n),(t=Object(Ue.a)(this,Object(Ge.a)(n).call(this,e))).state={component:null},t}return Object(Ye.a)(n,t),Object(Ce.a)(n,[{key:"componentDidMount",value:function(){var t=Object(dn.a)(fn.a.mark(function t(){var n,r;return fn.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?i.a.createElement(e,this.props):null}}]),n}(o.Component)}var hn=pn(function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,759))}),gn=pn(function(){return Promise.all([n.e(0),n.e(2),n.e(6),n.e(1),n.e(9)]).then(n.bind(null,765))}),mn=pn(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(8)]).then(n.bind(null,764))}),bn=pn(function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,760))}),vn=pn(function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,761))}),yn=pn(function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,762))}),_n=pn(function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,763))}),En=function(e){function t(){return Object(xe.a)(this,t),Object(Ue.a)(this,Object(Ge.a)(t).apply(this,arguments))}return Object(Ye.a)(t,e),Object(Ce.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(un,Object.assign({loading:this.props.loading},this.props)),i.a.createElement(nn.a,null,i.a.createElement(rn.d,null,i.a.createElement(rn.b,{exact:!0,path:"/([A-Za-z]{2})-([A-Za-z]{3})-([A-Za-z]{3})-([^\\.]{0,50}).html",render:function(){return i.a.createElement(vn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/search",render:function(){return i.a.createElement(gn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/book",render:function(){return i.a.createElement(mn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/confirmation",render:function(){return i.a.createElement(_n,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/confirmation/:lang([A-Za-z]{2})*/:orderid(\\d+)/:tname*",render:function(){return i.a.createElement(_n,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/info/:type",render:function(){return i.a.createElement(bn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/([A-Za-z]{3})-([\\w-]{0,50}).html",render:function(){return i.a.createElement(vn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/([A-Za-z]{2})-([\\w-]{0,50}).html",render:function(){return i.a.createElement(vn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/([A-Za-z_]{2,22}\\.htm)",render:function(){return i.a.createElement(bn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang",render:function(){return i.a.createElement(hn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/",render:function(){return i.a.createElement(hn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/(myreservation|viewtrip)",render:function(){return i.a.createElement(hn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/(myreservation|viewtrip)",render:function(){return i.a.createElement(hn,e.props)}}),i.a.createElement(rn.b,{exact:!0,path:"/:lang/404/",render:function(){return i.a.createElement(yn,e.props)}}),i.a.createElement(rn.b,{render:function(){return i.a.createElement(rn.a,{to:"/"+e.props.lang.value+"/404"})}}))))}}]),t}(o.Component),Sn=n(51),On=Object(Sn.b)(["lang","countries"])(En),In=function(e){function t(e){var n;return Object(xe.a)(this,t),(n=Object(Ue.a)(this,Object(Ge.a)(t).call(this,e))).loadDeskPro=function(){window.DESKPRO_WIDGET_OPTIONS={helpdeskUrl:"https://support.sky-tours.com/"},n.scriptDeskPro.src="https://support.sky-tours.com/dyn-assets/pub/build/widget_loader.min.js",n.scriptDeskPro.id="dp-widget-loader",document.body.appendChild(n.scriptDeskPro)},n.scriptDeskPro=document.createElement("script"),n}return Object(Ye.a)(t,e),Object(Ce.a)(t,[{key:"componentWillMount",value:function(){(h.a.duration(h()().diff(h()(this.props.timeStamp))).asHours()>24||h()(this.props.selDates[0])<h()())&&this.props.appActions.Reset(),this.props.userInfo&&this.props.userInfo.publicIp||this.props.appActions.setUserInfo(d.z),this.props.numPeople||this.props.appActions.setNumPeople(d.n),"none"!==this.props.loading&&this.props.appActions.loading("none"),"none"!==this.props.routes&&this.props.appActions.setRouteInfo("none"),"none"!==this.props.alert&&this.props.appActions.setAlert("none")}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.loadDeskPro()},1e4),console.log(this.props)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(o.Suspense,{fallback:" "},i.a.createElement(On,this.props)))}}]),t}(o.Component);var Tn=Object(u.d)(Object(l.b)(function(e){return{flights:e.resRed.flights,filteredFlights:e.resRed.filteredFlights,selectedFlight:e.resRed.selectedFlight,acList:e.resRed.acList,flightsSearchInfo:e.resRed.flightsSearchInfo,filters:e.resRed.filters,mobFilters:e.resRed.mobFilters,absMaxPrice:e.resRed.absMaxPrice,absMinPrice:e.resRed.absMinPrice,page:e.resRed.page,airlines:e.resRed.airlines,lang:e.locRed.lang,curr:e.locRed.curr,rightToLeft:e.locRed.rightToLeft,userInfo:e.locRed.userInfo,gMapLoaded:e.appRed.gMapLoaded,routes:e.appRed.routes,loading:e.appRed.loading,selDest:e.appRed.selDest,selDates:e.appRed.selDates,numPeople:e.appRed.numPeople,valueDest:e.appRed.valueDest,tripType:e.appRed.tripType,returnType:e.appRed.returnType,alert:e.appRed.alert,timeStamp:e.appRed.timeStamp,confirmationInfo:e.confirmRed.confirmationInfo,sbFocus:e.barRed.sbFocus,sbWhere:e.barRed.sbWhere,sbIndex:e.barRed.sbIndex,sbModify:e.barRed.sbModify,peopleInfo:e.formRed.peopleInfo,validation:e.formRed.validation,additionalServices:e.formRed.additionalServices,bookForm:e.bookFormRed,flightKey:e.flightAddRed.flightKey,bagInfo:e.flightAddRed.bagInfo,infoMsg:e.infoRed.infoMsg,hotels:e.hotelsRed.hotels,showAllHotels:e.hotelsRed.showAllHotels,showOneHotel:e.hotelsRed.showOneHotel,filtersHotels:e.hotelsRed.filtersHotels,filteredHotels:e.hotelsRed.filteredHotels,hotelInfo:e.hotelsRed.hotelInfo,hotelSelected:e.hotelsRed.hotelSelected,packSelected:e.hotelsRed.packSelected,fn:e.fn}},function(e){return{appActions:Object(u.b)(Object.assign({},r,a),e)}}))(In),Rn=n(77),jn=n(142),An=n(141),Dn=n.n(An);Rn.a.use(jn.a).use(Dn.a).use(Sn.a).init({fallbackLng:"en",returnEmptyString:!0,load:"languageOnly",ns:["lang","countries"],defaultNS:"lang",debug:!1,backend:{loadPath:"/locales/{{ns}}/{{lng}}.json"},interpolation:{escapeValue:!1},react:{wait:!0}});Rn.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ln=function(){var e=Object(u.e)(Object(Le.a)(Pe,je),He);return{store:e,persistor:Object(Le.b)(e)}}(),Mn=Ln.store,Fn=Ln.persistor,wn=document.querySelector("#root");Object(c.render)(i.a.createElement(l.a,{store:Mn},i.a.createElement(Ne.a,{loading:null,persistor:Fn},i.a.createElement("div",null,i.a.createElement(Tn,null)))),wn),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"b",function(){return l});n(15),n(3);function r(e,t,n){return--n,e.slice(n*t,(n+1)*t)}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\u2026";if("undefined"!==typeof e&&null!==e){if(e.length<=t)return e;var r=e.substr(0,t-1);return(r=r.substr(0,Math.min(r.length,r.lastIndexOf(" "))))+n}return n}function o(e){for(var t=[],n=0;n<parseInt(e);n++)t[n]=n;return t}function i(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[],a=0;a<t;a++)r[a]=n?e-a:e+a;return r}function c(e,t){for(var n=e.slice(),r=[],o=[["wifi",0],["wi-fi",0],["wireles",0],["tv",1],["restaurant",2],["breakfast",3],["accessib",4],["swimming pool",5],["Outdoor pool",5],["fitness",6],["gym",6],["front desk",7],["no smoking",8],["no-smoking",8],["parking",9],["airport shuttle",10],["shuttle to airport",10],["Airport/Hotel/Airport",10],["heating",11],["air condition",12],["air-condition",12],["A/C & Heat",12],["pets allowed",13]],i=0;i<e.length;i++){for(var c in r=[],e[i].facilities)for(var l=0;l<o.length;l++)e[i].facilities[c].toLowerCase().includes(o[l][0].toLowerCase())&&r.push(o[l][1]);r=r.filter(function(e,t,n){return n.indexOf(e)==t}),n[i].facilities_show=r.sort(function(e,t){return e-t}),delete n[i].facilities,"yes"!==t&&(n[i].desc=a(n[i].desc,200),delete n[i].ld.c_key,delete n[i].ld.sd.dest,delete n[i].ld.sd.in,delete n[i].ld.sd.out,delete n[i].ld.sd.star_rating,delete n[i].ld.sd.radius,delete n[i].ld.sd.db,delete n[i].ld.rid)}return n}function l(e){if(!e)return function(){return!1};var t=e.querySelectorAll(" * ");return 0===t.length?function(){return!1}:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"rtl"===e?e={textAlign:"right",direction:"rtl"}:"ltr"===e&&(e={textAlign:"left",direction:"ltr"});var r=Object.entries(e);t.forEach(function(e){Array.from(n).includes(e)?console.log(e):r.forEach(function(t){return n=t,e.style[n[0]]=n[1],!0;var n})})}}}},[[162,4,5]]]);