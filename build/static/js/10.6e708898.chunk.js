(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{396:function(e,t,a){"use strict";var n=a(4),l=a(5),r=a(12),o=a(13),s=a(14),c=a(0),i=a.n(c),m=a(361),u=a.n(m),p=a(352),d=a.n(p),E=a(61),f=a.n(E),g=a(60),h=a.n(g),O=a(337),N=a.n(O),b=a(339),_=a(28),v=a(400),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).closeModal=function(e){a.props.appActions.setInfoMsg("none")},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.t;return i.a.createElement("div",null,i.a.createElement(u.a,{show:"MAX_CONN_ERROR"===this.props.infoMsg,onHide:function(){return e.closeModal()}},i.a.createElement("div",null,i.a.createElement(f.a,{src:"/images/puzzle.jpg",alt:"not found",title:"flight not found",fluid:!0})),i.a.createElement(u.a.Body,{className:"text-left"},i.a.createElement("div",{className:"padding-tb15",dangerouslySetInnerHTML:{__html:t("MAX_CONN_ERROR")}})),i.a.createElement(u.a.Footer,null,i.a.createElement(d.a,{variant:"outline-primary",className:"margin-lr-auto",onClick:function(){return e.closeModal(e.props.infoMsg)}},i.a.createElement("div",{className:"padding-lr15"},t("BUTTON_CLOSE"))))),i.a.createElement(u.a,{show:"BOOKING_EXPIRIES"===this.props.infoMsg,onHide:function(){return e.closeModal()}},i.a.createElement("div",null,i.a.createElement(f.a,{src:"/images/puzzle.jpg",alt:"not found",title:"flight not found",fluid:!0})),i.a.createElement(u.a.Body,{className:"text-left"},i.a.createElement("div",{className:"padding-tb15",dangerouslySetInnerHTML:{__html:t("BOOKING_EXPIRIES_TEXT")}})),i.a.createElement(u.a.Footer,null,i.a.createElement(d.a,{variant:"outline-primary",className:"margin-lr-auto",onClick:function(){return e.closeModal(e.props.infoMsg)}},i.a.createElement("div",{className:"padding-lr15"},t("BUTTON_CLOSE"))))),i.a.createElement(u.a,{show:"no-results"===this.props.infoMsg,onHide:function(){return e.closeModal()}},i.a.createElement(u.a.Body,{className:""},i.a.createElement("div",{className:"padding-tb15 text-center"},i.a.createElement(b.a,{icon:_.C,className:"text-blue fa-5x margin-b20"}),i.a.createElement("div",{className:"font-weight-bold"},t("ERROR_NOT_FOUND")))),i.a.createElement(u.a.Footer,null,i.a.createElement(d.a,{variant:"outline-primary",className:"margin-lr-auto",onClick:function(){return e.closeModal(e.props.infoMsg)}},i.a.createElement("div",{className:"padding-lr15"},t("BUTTON_CLOSE"))))),"no-results-url"===this.props.infoMsg&&i.a.createElement(N.a,null,i.a.createElement(h.a,{xs:!0,xl:{span:10,offset:1}},i.a.createElement(b.a,{icon:_.C,className:"text-blue fa-5x margin-b20"}),i.a.createElement("div",{className:"padding-tb15 padding-lr15 text-blue",dangerouslySetInnerHTML:{__html:t("ERROR_NOT_FOUND")}}),i.a.createElement("br",null),i.a.createElement(v.a,Object.assign({},this.props,{fromHome:!1,fromSearch:!1,fromError:"no-results-url"})))),"no-flight-ext"===this.props.infoMsg&&i.a.createElement(N.a,null,i.a.createElement(h.a,{xs:!0,xl:{span:10,offset:1}},i.a.createElement("div",{className:"padding-lr15 font28 text-blue",dangerouslySetInnerHTML:{__html:t("BOOKING_EXPIRIES_HEAD")}}),i.a.createElement("div",{className:"padding-tb25 padding-lr15 font18 text-blue",dangerouslySetInnerHTML:{__html:t("BOOKING_EXPIRIES_TEXT")}}),i.a.createElement("br",null),i.a.createElement(v.a,Object.assign({},this.props,{fromHome:!1,fromSearch:!1,fromError:"no-flight-ext"})))))}}]),t}(c.Component);t.a=y},758:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(12),o=a(13),s=a(14),c=a(0),i=a.n(c),m=a(366),u=a(373),p=a(40),d=a(396),E=a(27),f=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){p.animateScroll.scrollToTop(),document.querySelector("#content-ssr").style.display="block","none"!==this.props.loading&&this.props.appActions.loading("none")}},{key:"compoenentWillUnmount",value:function(){document.querySelector("#content-ssr").style.display="none"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,this.props),i.a.createElement(u.a,Object.assign({},this.props,{page:"home"})),i.a.createElement(d.a,this.props))}}]),t}(c.Component);t.default=Object(E.f)(f)}}]);