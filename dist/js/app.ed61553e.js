(function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"249a":function(e,t,n){},"2b14":function(e,t,n){"use strict";n("7cff")},"336c":function(e,t,n){e.exports=n.p+"img/back.ab239617.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",{attrs:{fluid:""}},[n("toolbar",{attrs:{settings:e.settings},on:{sort:e.updateSort,desc:e.updateDesc,search:e.updateSearch}}),n("iterator",{attrs:{settings:e.settings}})],1),n("ft")],1)},r=[],s=(n("ac1f"),n("841c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-data-iterator",{attrs:{items:e.items,"items-per-page":e.itemsPerPage,page:e.page,search:this.settings.search,"sort-by":this.settings.sortBy,"sort-desc":this.settings.sortDesc,"hide-default-footer":""},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t},"update:page":function(t){e.page=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("v-row",e._l(t.items,(function(o){return n("v-col",{key:o.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("iteratorcard",{key:o.name,attrs:{items:t.items,config:e.config,item:o,filteredKeys:e.filteredKeys}})],1)})),1)]}},{key:"footer",fn:function(){return[n("v-row",{staticClass:"mt-2 no-margin",attrs:{align:"center",justify:"center"}},[n("span",{staticClass:"white--text"},[e._v("Items per page")]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"ml-2 blue-background",attrs:{dark:"",text:"",color:"white"}},"v-btn",i,!1),o),[e._v(" "+e._s(e.itemsPerPage)+" "),n("v-icon",[e._v("mdi-chevron-down")])],1)]}}])},[n("v-list",e._l([8,12,16,20],(function(t,o){return n("v-list-item",{key:o,on:{click:function(n){return e.updateItemsPerPage(t)}}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1),n("v-spacer"),n("span",{staticClass:"mr-4 white--text"},[e._v(" Page "+e._s(e.page)+" of "+e._s(e.numberOfPages)+" ")]),n("v-btn",{staticClass:"mr-1",attrs:{dark:"",color:"blue darken-3"},on:{click:e.formerPage}},[n("v-icon",[e._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"ml-1",attrs:{dark:"",color:"blue darken-3"},on:{click:e.nextPage}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])})],1)}),a=[],c=(n("99af"),n("4de4"),n("c740"),n("caad"),n("baa5"),n("b680"),n("d3b7"),n("2532"),n("ddb0"),n("b85c")),l=(n("96cf"),n("1da1")),u=(n("fb6a"),u||{});u.epics2web=u.epics2web||{},u.contextPrefix=u.contextPrefix||"",function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),u.epics2web.ClientConnection=function(e){var t="ws:";"https:"===window.location.protocol&&(t="wss:");var n={url:t+"//"+window.location.host+u.contextPrefix+"/epics2web/monitor",autoOpen:!0,autoReconnect:!0,autoLivenessPingAndTimeout:!0,autoDisplayClasses:!0,pingIntervalMillis:3e3,livenessTimoutMillis:2e3,reconnectWaitMillis:1e3,chunkedRequestPvsCount:400,clientName:window.location.href};for(var o in e||(e={}),n)"undefined"!==typeof e[o]?this[o]=e[o]:this[o]=n[o];var i=null,r=document.createElement("div"),s=null,a=this,c=null,l=!1,d=function(){null!==i&&i.readyState===WebSocket.OPEN&&(a.ping(),null!==c||(c=setTimeout((function(){i.readyState===WebSocket.OPEN&&i.close(),c=null}),a.livenessTimoutMillis)))};r.addEventListener("open",(function(e){a.onopen(e)})),r.addEventListener("close",(function(e){a.onclose(e)})),r.addEventListener("connecting",(function(e){a.onconnecting(e)})),r.addEventListener("closing",(function(e){a.onclosing(e)})),r.addEventListener("error",(function(e){a.onerror(e)})),r.addEventListener("message",(function(e){a.onmessage(e)})),r.addEventListener("info",(function(e){a.oninfo(e)})),r.addEventListener("update",(function(e){a.onupdate(e)})),r.addEventListener("pong",(function(e){a.onpong(e)})),this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=r.dispatchEvent.bind(r),this.open=function(){if(null!==i&&i.readyState!==WebSocket.CLOSED)return console.log("already connected"),1;var e=new CustomEvent("connecting");r.dispatchEvent(e);var t=this.url;null!==this.clientName&&(t=t+"?clientName="+encodeURIComponent(this.clientName)),i=new WebSocket(t),i.onerror=function(e){console.log("server connection error"),console.log(e);var t=new CustomEvent("error");r.dispatchEvent(t)},i.onclose=function(e){console.log("server connection closed"),console.log(e.reason);var t=new CustomEvent("close");r.dispatchEvent(t),null!==c&&(clearTimeout(c),c=null);var n=null===i||i.readyState===WebSocket.CLOSED;a.autoReconnect&&!l&&n&&(l=!0,setTimeout((function(){a.open(),l=!1}),a.reconnectWaitMillis))},i.onmessage=function(e){null!==c&&(clearTimeout(c),c=null),s=new Date;var t=JSON.parse(e.data);if(t.date=s,"update"===t.type){var n=new CustomEvent("update",{detail:t});r.dispatchEvent(n)}else if("info"===t.type){var o=new CustomEvent("info",{detail:t});r.dispatchEvent(o)}else if("pong"===t.type){var i=new CustomEvent("pong");r.dispatchEvent(i)}var a=new CustomEvent("message");r.dispatchEvent(a,{detail:t})},i.onopen=function(){s=new Date;var e=new CustomEvent("open");r.dispatchEvent(e)}},this.close=function(e,t){console.log("close"),null!==i&&i.readyState!==WebSocket.CLOSED?("undefined"===typeof e&&(e=1e3),i.close(e,t)):console.log("already closed")},this.monitorPvs=function(e){var t,n,o;if(a.chunkedRequestPvsCount>0)for(t=0,n=e.length;t<n;t+=a.chunkedRequestPvsCount)o=e.slice(t,t+a.chunkedRequestPvsCount),this.monitorPvsChunk(o);else this.monitorPvsChunk(e)},this.monitorPvsChunk=function(e){var t={type:"monitor",pvs:e};i.send(JSON.stringify(t))},this.clearPvs=function(e){var t,n,o;if(a.chunkedRequestPvsCount>0)for(t=0,n=e.length;t<n;t+=a.chunkedRequestPvsCount)o=e.slice(t,t+a.chunkedRequestPvsCount),this.clearPvsChunk(o);else this.clearPvsChunk(e)},this.clearPvsChunk=function(e){var t={type:"clear",pvs:e};i.send(JSON.stringify(t))},this.ping=function(){var e={type:"ping"};i.send(JSON.stringify(e))},!0===this.autoOpen&&this.open(),!0===this.autoLivenessPingAndTimeout&&window.setInterval(d,this.pingIntervalMillis)},u.epics2web.ClientConnection.prototype.onopen=function(){},u.epics2web.ClientConnection.prototype.onclose=function(){},u.epics2web.ClientConnection.prototype.onconnecting=function(){},u.epics2web.ClientConnection.prototype.onclosing=function(){},u.epics2web.ClientConnection.prototype.onmessage=function(){},u.epics2web.ClientConnection.prototype.onerror=function(){},u.epics2web.ClientConnection.prototype.onupdate=function(){},u.epics2web.ClientConnection.prototype.oninfo=function(){},u.epics2web.ClientConnection.prototype.onpong=function(){},u.epics2web.isNumericEpicsType=function(e){var t;switch(e){case"DBR_DOUBLE":case"DBR_FLOAT":case"DBR_INT":case"DBR_SHORT":case"DBR_BYTE":t=!0;break;default:t=!1}return t};var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"subheading font-weight-bold"},[e._v(" "+e._s(e.item.name)+" ")]),n("v-divider"),n("v-list",{attrs:{dense:""}},e._l(e.filteredKeys,(function(t,o){return n("v-list-item",{key:o},[n("v-list-item-content",[e._v(" "+e._s(t)+": ")]),"Fan speed"===t?n("v-btn",{attrs:{text:"",rounded:""},on:{click:function(t){e.edit_fan=!e.edit_fan}}},[n("v-icon",[e._v("mdi-pencil")])],1):e._e(),"Fan speed"==t&&e.edit_fan?n("v-text-field",{attrs:{suffix:"RPM",label:"Speed",type:"number",outlined:"",dense:"","hide-details":"true"}}):e._e(),"Fan speed"==t&&e.edit_fan?e._e():n("v-chip",{staticClass:"align-end",attrs:{color:e.get_pv_color(e.item,t),"text-color":"white"}},[e._v(" "+e._s(e.item[t.toLowerCase()])+" ")])],1)})),1)],1)},f=[],p=(n("b0c0"),n("acd8"),{props:["items","item","filteredKeys","config"],data:function(){return{edit_fan:!1}},methods:{get_pv_color:function(e,t){if("?"===e[t.toLowerCase()])return"gray";var n=this.items.findIndex((function(t){return t.name===e.name})),o=parseFloat(e[t.toLowerCase()]),i=t.toLowerCase().substring(0,1);switch(t){case"Temperature":return o>this.config[n].t_hihi?"red":o>this.config[n].t_hi?"orange":"green";case"Rack open":return"No"===e["rack open"]?"green":"orange";default:return o>this.config[n][i+"_hihi"]||o<this.config[n][i+"_lolo"]?"red":o>this.config[n][i+"_hi"]||o<this.config[n][i+"_lo"]?"orange":"green"}}}}),v=p,h=(n("2b14"),n("2877")),m=n("6544"),g=n.n(m),b=n("8336"),w=n("b0af"),y=n("99d9"),_=n("cc20"),C=n("ce7e"),k=n("132d"),P=n("8860"),E=n("da13"),x=n("5d23"),O=n("8654"),S=Object(h["a"])(v,d,f,!1,null,null,null),V=S.exports;g()(S,{VBtn:b["a"],VCard:w["a"],VCardTitle:y["a"],VChip:_["a"],VDivider:C["a"],VIcon:k["a"],VList:P["a"],VListItem:E["a"],VListItemContent:x["a"],VTextField:O["a"]});var L=function(){var e="10.0.38.42";if("vpn.cnpem.br"===window.location.host){var t=/https?\/((?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])))\//,n=t.exec(window.location.href);n&&n.length>1&&(e=n[1])}else e=window.location.host;return(e.includes("0.0.0.0")||e.includes("localhost"))&&(e="10.0.38.42",console.log("DEBUG SERVER. Setting host to 10.0.38.42")),e},D=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){var n=[];fetch("config.json").then((function(e){return e.json()})).then((function(o){t.headers=o.headers,t.symbols=o.symbols;var i,r=Object(c["a"])(o.items);try{for(r.s();!(i=r.n()).done;){var s=i.value;t.config.push(s.config),t.items.push(s.fields),n=n.concat(s.config.pvs)}}catch(a){r.e(a)}finally{r.f()}e(n)}))}),100)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R={components:{iteratorcard:V},props:["settings"],data:function(){return{filter:{},page:1,itemsPerPage:8,headers:[],items:[],config:[],symbols:{},edit_fan:!1}},computed:{numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)},filteredKeys:function(){return this.settings.keys.filter((function(e){return"Name"!==e}))}},methods:{nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(e){this.itemsPerPage=e}},created:function(){var e=this,t=L(),n={url:"ws://"+t+"/epics2web/monitor"},o=new u.epics2web.ClientConnection(n);o.onopen=Object(l["a"])(regeneratorRuntime.mark((function n(){var i,r,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,D(e);case 2:i=n.sent,r=Object(c["a"])(e.config);try{for(a=function(){var e,n=s.value,o=Object(c["a"])(n.pvs);try{var i=function(){var o=e.value,i=o.lastIndexOf(":")+1,r=o.substring(i,i+1);fetch("http://"+t+"/retrieval/bpl/getMetadata?pv="+o).then((function(e){var t,o,i,s;void 0!==e&&(n[r+"_hihi"]=null!==(t=e.HIHI)&&void 0!==t?t:n[r+"_hihi"],n[r+"_hi"]=null!==(o=e.HIGH)&&void 0!==o?o:n[r+"_hi"],n[r+"_lolo"]=null!==(i=e.LOLO)&&void 0!==i?i:n[r+"_lolo"],n[r+"_lo"]=null!==(s=e.LO)&&void 0!==s?s:n[r+"_lo"])}))};for(o.s();!(e=o.n()).done;)i()}catch(r){o.e(r)}finally{o.f()}},r.s();!(s=r.n()).done;)a()}catch(l){r.e(l)}finally{r.f()}o.monitorPvs(i);case 6:case"end":return n.stop()}}),n)}))),o.onupdate=function(t){var n=t.detail.pv,o=n.substring(n.lastIndexOf(":")+1).toLowerCase(),i=e.config.findIndex((function(e){return e.pvs.includes(n)}));switch(o){case"pressure":e.items[i]["rack open"]=t.detail.value>e.config[i].hatch?"No":"Yes";break;default:break}e.items[i][o]=t.detail.value.toFixed(2)+e.symbols[o]}}},T=R,I=(n("91ca"),n("62ad")),j=n("a523"),N=n("c377"),B=n("e449"),M=n("0fd9"),$=n("2fa4"),F=Object(h["a"])(T,s,a,!1,null,"5f099cc6",null),A=F.exports;g()(F,{VBtn:b["a"],VCol:I["a"],VContainer:j["a"],VDataIterator:N["a"],VIcon:k["a"],VList:P["a"],VListItem:E["a"],VListItemTitle:x["b"],VMenu:B["a"],VRow:M["a"],VSpacer:$["a"]});var W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:""}},[o("v-toolbar",{staticClass:"mb-1",attrs:{src:n("336c"),dark:"",color:"blue darken-3"}},[o("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},on:{input:function(t){return e.$emit("search",t)}}}),e.$vuetify.breakpoint.mdAndUp?[o("v-spacer"),o("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:this.settings.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},on:{change:function(t){return e.$emit("sort",t)}}}),o("v-spacer"),o("v-btn-toggle",{attrs:{mandatory:""},on:{change:function(t){return e.$emit("desc",t)}}},[o("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!1,align:"start"}},[o("v-icon",[e._v("mdi-trending-up")])],1),o("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!0}},[o("v-icon",[e._v("mdi-trending-down")])],1)],1)]:e._e(),e.$vuetify.breakpoint.smAndDown?[o("v-btn",{attrs:{icon:""},on:{click:function(t){e.dropdown=!e.dropdown}}},[o("v-icon",[e._v("mdi-menu")])],1)]:e._e()],2),e.dropdown&&e.$vuetify.breakpoint.smAndDown?o("v-toolbar",{staticClass:"mb-1",attrs:{dark:"",color:"blue darken-3"}},[o("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:this.settings.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},on:{change:function(t){return e.$emit("sort",t)}}}),o("v-spacer"),o("v-btn",{directives:[{name:"show",rawName:"v-show",value:!this.settings.sortDesc,expression:"!this.settings.sortDesc"}],attrs:{large:"",depressed:"",color:"blue"},on:{click:function(t){return e.$emit("desc",!0)}}},[o("v-icon",[e._v("mdi-trending-down")])],1),o("v-btn",{directives:[{name:"show",rawName:"v-show",value:this.settings.sortDesc,expression:"this.settings.sortDesc"}],attrs:{large:"",depressed:"",color:"blue",align:"start"},on:{click:function(t){return e.$emit("desc",!1)}}},[o("v-icon",[e._v("mdi-trending-up")])],1)],1):e._e()],1)},q=[],H={props:["settings"],data:function(){return{filter:{},dropdown:!1}}},J=H,K=n("a609"),U=n("b974"),Y=n("71d9"),G=Object(h["a"])(J,W,q,!1,null,null,null),z=G.exports;g()(G,{VBtn:b["a"],VBtnToggle:K["a"],VContainer:j["a"],VIcon:k["a"],VSelect:U["a"],VSpacer:$["a"],VTextField:O["a"],VToolbar:Y["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"primary darken-2",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-btn",{staticClass:"my-2",attrs:{href:"https://wiki-sirius.lnls.br/mediawiki/index.php/CON:CON",color:"white",text:"",rounded:""}},[e._v(" wiki ")]),n("v-btn",{staticClass:"my-2",attrs:{href:"https://gitlab.cnpem.br/IoT/simar-vue",color:"white",text:"",rounded:""}},[e._v(" gitlab ")]),n("v-btn",{staticClass:"my-2",attrs:{href:"mailto:guilherme.freitas@cnpem.br",color:"white",text:"",rounded:""}},[e._v(" contact ")]),n("v-col",{staticClass:"primary darken-3 py-4 text-center white--text",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("CNPEM")])])],1)],1)},X=[],Z=n("553a"),ee={},te=Object(h["a"])(ee,Q,X,!1,null,null,null),ne=te.exports;g()(te,{VBtn:b["a"],VCol:I["a"],VFooter:Z["a"],VRow:M["a"]});var oe={name:"App",components:{toolbar:z,iterator:A,ft:ne},data:function(){return{settings:{sortDesc:!1,sortBy:"name",search:"",keys:["Name","Temperature","Pressure","Voltage","Rack open","Fan speed","Humidity"]}}},methods:{updateSearch:function(e){this.settings.search=e},updateDesc:function(e){this.settings.sortDesc=e},updateSort:function(e){this.settings.sortBy=e.toLowerCase()}}},ie=oe,re=(n("f731"),n("7496")),se=n("f6c4"),ae=Object(h["a"])(ie,i,r,!1,null,"30ecb660",null),ce=ae.exports;g()(ae,{VApp:re["a"],VMain:se["a"]});var le=n("f309");o["a"].use(le["a"]);var ue=new le["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:ue,render:function(e){return e(ce)}}).$mount("#app")},"674a":function(e,t,n){},"7cff":function(e,t,n){},"91ca":function(e,t,n){"use strict";n("249a")},f731:function(e,t,n){"use strict";n("674a")}});
//# sourceMappingURL=app.ed61553e.js.map