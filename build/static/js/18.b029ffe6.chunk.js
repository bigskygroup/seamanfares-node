(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{395:function(e,t,o){"use strict";var n=o(9),s=o(10),a=o(15),r=o(17),i=o(18),c=o(0),l=o.n(c),p=o(49),u=o(4),h=function(e){function t(){var e,o;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(o=Object(a.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).collectClientActions=function(){var e={url:window.location.pathname+window.location.search,ip:o.props.userInfo.ip};"noId"!==o.props.clientId&&(e.id=o.props.clientId),Object(u.v)(e).then(function(e){e&&o.props.clientId!==e&&o.props.appActions.setClientId(e)})},o.setRoute=function(e){"book"!==o.props.routes||!o.props.selectedFlight||o.props.selectedFlight.hasOwnProperty("from_search")&&o.props.selectedFlight.from_search?o.props.history.push(e):o.props.history.replace(e),o.props.appActions.setRouteInfo("none"),setTimeout(function(){return p.animateScroll.scrollToTop()},300)},o}return Object(i.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.routes!==this.props.routes&&"none"!==e.routes}},{key:"componentDidMount",value:function(){this.collectClientActions()}},{key:"componentDidUpdate",value:function(){if("undefined"!==typeof this.props.routes&&null!==this.props.routes&&this.props.history)switch(this.props.routes){case"home":this.setRoute("/"+this.props.lang.value+"/");break;case"search":this.setRoute("/"+this.props.lang.value+"/search?"+this.props.flightsSearchInfo.url);break;case"flightrequest":this.setRoute("/"+this.props.lang.value+"/flightrequest");break;case"book":this.setRoute("/book?"+this.props.selectedFlight.book_query);break;case"404":this.props.history.replace("/"+("elumbus"===window.appenv?"":this.props.lang.value+"/")+"404");break;default:this.setRoute("/")}}},{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(c.Component);t.a=h},780:function(e,t,o){"use strict";o.r(t);var n=o(1),s=o(35),a=o(0),r=o.n(a),i=o(395),c=o(32),l=o(37),p=o(102),u=o(103),h=o.n(u);!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("devel")&&p.a.pageview(window.location.pathname+window.location.search);t.default=Object(c.f)(function(e){var t=r.a.useState(""),o=Object(s.a)(t,2),a=o[0],c=o[1];return r.a.useEffect(function(){var t={curr:e.curr.cc,lang:e.lang.value,affiliate:sessionStorage.getItem("affiliate")?sessionStorage.getItem("affiliate"):"sky-tours"};Object(l.a)("TRADEDOUBLER")&&(t=Object(n.a)({},t,{TRADEDOUBLER:Object(l.a)("TRADEDOUBLER")}));var o={dataLayer:{dataL:t},dataLayerName:"dLayer_1"};return window.location.hostname.includes("localhost")||window.location.hostname.includes("devel")||h.a.dataLayer(o),c("d-block"),function(){return c("d-none")}}),r.a.createElement("div",{className:a},r.a.createElement(i.a,e))})}}]);