"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3932],{55283:function(n,t,e){e.d(t,{HC:function(){return y},HS:function(){return g},IN:function(){return f},Kf:function(){return R},Nk:function(){return h},PB:function(){return b},PY:function(){return O},WC:function(){return A},fk:function(){return D},gE:function(){return S},j1:function(){return _},jv:function(){return m},nz:function(){return E},oh:function(){return s},qn:function(){return T},t1:function(){return N},u2:function(){return p},y9:function(){return C}});var o=e(38626),r=e(44897),i=e(44425),c=e(42631),d=e(8059),a=e(70515),u=e(47041),l=e(91437),s=68,f=1.5*a.iI,A=3*a.iI;function p(n){var t=d.eW;return i.tf.CALLBACK===n?t=d.J:i.tf.CHART===n||i.tf.CONDITIONAL===n?t=d.Hv:i.tf.CUSTOM===n?t=d.AK:i.tf.DATA_EXPORTER===n?t=d.Sr:i.tf.DATA_LOADER===n?t=d.R2:i.tf.DBT===n?t=d.J:i.tf.EXTENSION===n?t=d.FI:i.tf.GLOBAL_DATA_PRODUCT===n?t=d.yr:i.tf.SCRATCHPAD===n?t=d.Hv:i.tf.SENSOR===n?t=d.rK:i.tf.MARKDOWN===n?t=d.RK:i.tf.TRANSFORMER===n&&(t=d.eW),t}function T(n,t){var e,o,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||r.Z.borders).light,d=((null===t||void 0===t||null===(o=t.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,a=t||{},u=a.blockColor,l=a.isSelected,s=a.theme;return l?c=(s||r.Z).content.active:i.tf.TRANSFORMER===n||u===i.Lq.PURPLE?(c=(s||r.Z).accent.purple,d=(s||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||u===i.Lq.YELLOW?(c=(s||r.Z).accent.yellow,d=(s||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||u===i.Lq.BLUE?(c=(s||r.Z).accent.blue,d=(s||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||r.Z).accent.sky,d=(s||r.Z).accent.skyLight):i.tf.SENSOR===n||u===i.Lq.PINK?(c=(s||r.Z).accent.pink,d=(s||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||r.Z).accent.dbt,d=(s||r.Z).accent.dbtLight):i.tf.EXTENSION===n||u===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).teal,d=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).rose,d=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||u===i.Lq.GREY||i.tf.CUSTOM===n&&!u?(c=(s||r.Z).content.default,d=(s||r.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||u||(c=(s||r.Z).monotone.white,d=(s||r.Z).monotone.whiteTransparent),{accent:c,accentLight:d}}var R=(0,o.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(T(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(T(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),h=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),O=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],R,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(T(n.blockType,n).accent,";\n    }\n  ")})),b=o.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme||r.Z).borders.darkLight,";\n  ")})),E=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;"," "," "," ",""],R,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,1*a.iI,1*a.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")}),(function(n){return"undefined"!==typeof n.zIndex&&null!==n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")}),(function(n){return!n.noSticky&&"\n    // This is to hide the horizontal scrollbar in the block header when sideBySide is enabled,\n    // and the screen width is too small.\n    position: sticky;\n    top: -5px;\n  "}),(function(n){return n.noSticky&&"\n    ".concat((0,u.y$)(),"\n\n    overflow-x: auto;\n    overflow-y: visible;\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(n){return!n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).darkLight,";\n  ")}),(function(n){return n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return!n.noBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")})),m=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],R,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(a.iI,"px;\n    padding-top: ").concat(a.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hideBorderBottom&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n    overflow: hidden;\n  ")})),S=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;&:hover{"," .block-divider-inner{","}}"," "," "," ",""],2*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")}),(function(n){return!n.height&&"\n    height: ".concat(2*a.iI,"px;\n  ")}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")}),(function(n){return!n.bottom&&"\n    bottom: ".concat(.5*a.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.bottom&&"\n    bottom: ".concat(n.bottom,"px;\n  ")})),N=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;"," ",""],(function(n){return!n.top&&"\n    top: ".concat(1.5*a.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.top&&"\n    top: ".concat(n.top,"px;\n  ")})),C=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:s,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*a.iI,"px;\n    padding-bottom: ").concat(1*a.iI,"px;\n  ")})),y=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,s),D=o.default.div.withConfig({displayName:"indexstyle__ScrollColunnsContainerStyle",componentId:"sc-s5rj34-10"})(["position:relative;",""],(function(n){return"\n    z-index: ".concat((null===n||void 0===n?void 0:n.zIndex)||1,";\n  ")})),_=o.default.div.attrs((function(n){var t=n.height,e=n.left,o=n.right,r=n.top;return{style:{position:"fixed",height:t,width:n.width,left:e,right:o,top:r,zIndex:(n.zIndex||0)+2}}})).withConfig({displayName:"indexstyle__ScrollColunnStyle",componentId:"sc-s5rj34-11"})([""])},44425:function(n,t,e){e.d(t,{$W:function(){return h},DA:function(){return T},HX:function(){return g},J8:function(){return E},L8:function(){return d},LE:function(){return f},Lk:function(){return N},Lq:function(){return A},M5:function(){return p},Q3:function(){return O},Qj:function(){return m},Ut:function(){return D},V4:function(){return y},VZ:function(){return b},dO:function(){return s},f2:function(){return C},iZ:function(){return S},t6:function(){return a},tf:function(){return l}});var o,r,i,c,d,a,u=e(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(d||(d={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var l,s=(o={},(0,u.Z)(o,a.MARKDOWN,"MD"),(0,u.Z)(o,a.PYTHON,"PY"),(0,u.Z)(o,a.R,"R"),(0,u.Z)(o,a.SQL,"SQL"),(0,u.Z)(o,a.YAML,"YAML"),o),f=(r={},(0,u.Z)(r,a.MARKDOWN,"Markdown"),(0,u.Z)(r,a.PYTHON,"Python"),(0,u.Z)(r,a.R,"R"),(0,u.Z)(r,a.SQL,"SQL"),(0,u.Z)(r,a.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(l||(l={}));var A,p=[l.CALLBACK,l.CONDITIONAL,l.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(A||(A={}));var T,R,h=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],O=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],b=[l.DATA_EXPORTER,l.DATA_LOADER],E=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],g=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],m=[l.CHART,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN],S=[l.CALLBACK,l.CHART,l.EXTENSION,l.SCRATCHPAD,l.MARKDOWN],N=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SENSOR,l.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(T||(T={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(R||(R={}));var C=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],y=(i={},(0,u.Z)(i,l.CALLBACK,"Callback"),(0,u.Z)(i,l.CHART,"Chart"),(0,u.Z)(i,l.CONDITIONAL,"Conditional"),(0,u.Z)(i,l.CUSTOM,"Custom"),(0,u.Z)(i,l.DATA_EXPORTER,"Data exporter"),(0,u.Z)(i,l.DATA_LOADER,"Data loader"),(0,u.Z)(i,l.DBT,"DBT"),(0,u.Z)(i,l.EXTENSION,"Extension"),(0,u.Z)(i,l.GLOBAL_DATA_PRODUCT,"Global data product"),(0,u.Z)(i,l.MARKDOWN,"Markdown"),(0,u.Z)(i,l.SCRATCHPAD,"Scratchpad"),(0,u.Z)(i,l.SENSOR,"Sensor"),(0,u.Z)(i,l.TRANSFORMER,"Transformer"),i),D=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER,l.SENSOR];c={},(0,u.Z)(c,l.DATA_EXPORTER,"DE"),(0,u.Z)(c,l.DATA_LOADER,"DL"),(0,u.Z)(c,l.SCRATCHPAD,"SP"),(0,u.Z)(c,l.SENSOR,"SR"),(0,u.Z)(c,l.MARKDOWN,"MD"),(0,u.Z)(c,l.TRANSFORMER,"TF")},72098:function(n,t,e){var o;e.d(t,{U:function(){return o}}),function(n){n.PYSPARK="pysparkkernel",n.PYTHON3="python3"}(o||(o={}))},57653:function(n,t,e){e.d(t,{$1:function(){return T},G7:function(){return O},LM:function(){return b},Mj:function(){return E},QK:function(){return p},RH:function(){return h},a_:function(){return m},fj:function(){return S},kA:function(){return g},qL:function(){return d},r0:function(){return R}});var o,r,i,c,d,a=e(75582),u=e(82394),l=e(72473),s=e(72098);function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function A(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){(0,u.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(d||(d={}));var p,T,R,h=(o={},(0,u.Z)(o,d.INTEGRATION,"Integration"),(0,u.Z)(o,d.PYTHON,"Python"),(0,u.Z)(o,d.PYSPARK,"PySpark"),(0,u.Z)(o,d.STREAMING,"Streaming"),o),O=(r={},(0,u.Z)(r,d.INTEGRATION,"Integration"),(0,u.Z)(r,d.PYTHON,"Standard"),(0,u.Z)(r,d.PYSPARK,"PySpark"),(0,u.Z)(r,d.STREAMING,"Streaming"),r),b="all",E=(d.PYTHON,d.INTEGRATION,d.STREAMING,i={},(0,u.Z)(i,b,l.ie),(0,u.Z)(i,d.INTEGRATION,l.YC),(0,u.Z)(i,d.PYTHON,l.El),(0,u.Z)(i,d.STREAMING,l.dB),i);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry",n.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(p||(p={})),function(n){n.GROUP="group_by",n.HISTORY_DAYS="from_history_days",n.NO_TAGS="no_tags",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(T||(T={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(R||(R={}));var g=[p.ACTIVE,p.INACTIVE,p.NO_SCHEDULES],m=(c={},(0,u.Z)(c,d.PYTHON,s.U.PYTHON3),(0,u.Z)(c,d.PYSPARK,s.U.PYSPARK),c),S=Object.entries(m).reduce((function(n,t){var e=(0,a.Z)(t,2),o=e[0],r=e[1];return A(A({},n),{},(0,u.Z)({},r,o))}),{})},90299:function(n,t,e){e.d(t,{Z:function(){return b}});var o=e(82684),r=e(71180),i=e(55485),c=e(64888),d=e(38276),a=e(30160),u=e(8059),l=e(38626),s=e(44897),f=e(70515),A=e(47041),p=l.default.div.withConfig({displayName:"indexstyle__TabsContainerStyle",componentId:"sc-segf7l-0"})(["padding-left:","px;padding-right:","px;"," "," ",""],f.cd*f.iI,f.cd*f.iI,(function(n){return n.noPadding&&"\n    padding: 0;\n  "}),(function(n){return n.allowScroll&&"\n    overflow: auto;\n  "}),A.w5),T=l.default.div.withConfig({displayName:"indexstyle__SelectedUnderlineStyle",componentId:"sc-segf7l-1"})(["border-radius:6px;height:","px;"," "," ",""],2,(function(n){return!n.selected&&"\n    background-color: transparent;\n  "}),(function(n){return n.selected&&!n.backgroundColor&&"\n    background-color: ".concat((n.theme||s.Z).borders.darkLight,";\n  ")}),(function(n){return n.selected&&n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")})),R=e(3314),h=e(28598);function O(n,t){var e=n.allowScroll,l=n.compact,s=n.contained,A=n.noPadding,O=n.onClickTab,b=n.regularSizeText,E=n.selectedTabUUID,g=n.small,m=n.tabs,S=n.underlineColor,N=n.underlineStyle,C=(0,o.useMemo)((function(){var n=m.length,t=[];return m.forEach((function(e,o){var s=e.Icon,A=e.IconSelected,p=e.label,m=e.uuid,C=m===E,y=C&&A||s,D=p?p():m,_=(0,h.jsxs)(i.ZP,{alignItems:"center",children:[y&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y,{default:!C,size:2*f.iI}),(0,h.jsx)(d.Z,{mr:1})]}),(0,h.jsx)(a.ZP,{bold:!0,default:!C,noWrapping:!0,small:!b,children:D})]});o>=1&&n>=2&&t.push((0,h.jsx)("div",{style:{marginLeft:(b?2:1.5)*f.iI}},"spacing-".concat(m))),C&&!N?t.push((0,h.jsx)(c.Z,{backgroundGradient:u.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,compact:l||g,onClick:function(n){(0,R.j)(n),O(e)},paddingUnitsHorizontal:1.75,paddingUnitsVertical:1.25,small:g,children:_},m)):t.push((0,h.jsxs)(i.ZP,{flexDirection:"column",style:{paddingLeft:2,paddingRight:2,paddingBottom:N?0:2,paddingTop:N?0:2},children:[(0,h.jsxs)(r.ZP,{borderLess:!0,compact:l||g,default:!0,noBackground:N,noPadding:N,onClick:function(n){(0,R.j)(n),O(e)},outline:!N,small:g,children:[!N&&_,N&&(0,h.jsx)("div",{style:{paddingBottom:(l||g?f.iI/2:f.iI)+2,paddingTop:(l||g?f.iI/2:f.iI)+2+2},children:_})]}),N&&(0,h.jsx)(T,{backgroundColor:S,selected:C})]},"button-tab-".concat(m)))})),t}),[l,O,E,g,m,N]),y=(0,h.jsx)(i.ZP,{alignItems:"center",children:C});return s?y:(0,h.jsx)(p,{allowScroll:e,noPadding:A,ref:t,children:y})}var b=o.forwardRef(O)}}]);