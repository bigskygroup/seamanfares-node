(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{418:function(e,t,o){"use strict";var n=o(11),s=o(12),a=o(22),r=o(25),i=o(26),c=o(0),l=o.n(c),p=o(57),u=o(4),h=function(e){function t(){var e,o;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(o=Object(a.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).collectClientActions=function(){var e={url:window.location.pathname+window.location.search,ip:o.props.userInfo.ip};"noId"!==o.props.clientId&&(e.id=o.props.clientId),Object(u.v)(e).then(function(e){e&&o.props.clientId!==e&&o.props.appActions.setClientId(e)})},o.setRoute=function(e){"book"!==o.props.routes||!o.props.selectedFlight||o.props.selectedFlight.hasOwnProperty("from_search")&&o.props.selectedFlight.from_search?o.props.history.push(e):o.props.history.replace(e),o.props.appActions.setRouteInfo("none"),setTimeout(function(){return p.animateScroll.scrollToTop()},300)},o}return Object(i.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.routes!==this.props.routes&&"none"!==e.routes}},{key:"componentDidMount",value:function(){this.collectClientActions()}},{key:"componentDidUpdate",value:function(){if("undefined"!==typeof this.props.routes&&null!==this.props.routes&&this.props.history)switch(this.props.routes){case"home":this.setRoute("/"+this.props.lang.value+"/");break;case"search":this.setRoute("/"+this.props.lang.value+"/search?"+this.props.flightsSearchInfo.url);break;case"flightrequest":this.setRoute("/"+this.props.lang.value+"/flightrequest");break;case"book":this.setRoute("/book?"+this.props.selectedFlight.book_query);break;case"404":this.props.history.replace("/"+("elumbus"===window.appenv?"":this.props.lang.value+"/")+"404");break;default:this.setRoute("/")}}},{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(c.Component);t.a=h},795:function(e,t,o){"use strict";o.r(t);var n=o(30),s=o(0),a=o.n(s),r=o(418),i=o(42),c=o(108),l=o(109),p=o.n(l);!window.location.hostname.indexOf("localhost")>=0&&!window.location.hostname.indexOf("devel")>=0&&c.a.pageview(window.location.pathname+window.location.search);t.default=Object(i.f)(function(e){var t=a.a.useState(""),o=Object(n.a)(t,2),s=o[0],i=o[1];return a.a.useEffect(function(){var t={dataLayer:{dataL:{curr:e.curr.cc,lang:e.lang.value,affiliate:sessionStorage.getItem("affiliate")?sessionStorage.getItem("affiliate"):"sky-tours"}},dataLayerName:"dLayer_1"};return e.config.tagaManager&&p.a.dataLayer(t),i("d-block"),document.querySelector("#content-ssr").style.display="block",function(){i("d-none"),document.querySelector("#content-ssr").style.display="none"}}),a.a.createElement("div",{className:s},a.a.createElement(r.a,e))})}}]);