(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{55729:function(e,n,t){"use strict";t.d(n,{Z:function(){return B}});var i=t(82394),r=t(75582),o=t(82684),c=t(69864),l=t(71180),a=t(15338),d=t(97618),s=t(55485),u=t(85854),p=t(48670),f=t(65956),h=t(82359),g=t(88543),m=t(38276),j=t(30160),x=t(17488),v=t(69650),b=t(12468),y=t(35686),Z=t(77417),w=t(38626),O=t(44897),P=t(42631),_=t(70515),k=w.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],P.n_,_.cd*_.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||O.Z.background).codeArea,";\n  ")})),I=t(72473),C=t(72191),S=t(70320),H=t(81728),N=t(42122),z=t(72619),D=t(23780),E=t(28598);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=function(e){var n,t,w,O=e.cancelButtonText,P=e.contained,L=e.header,B=e.onCancel,V=e.onSaveSuccess,M=(0,D.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),A=(0,r.Z)(M,1)[0],F=(0,o.useState)(null),R=F[0],T=F[1],X=(0,o.useState)(!1),Y=X[0],Q=X[1],U=(0,Z.Z)(),q=U.project,G=U.fetchProjects,J=q||{},K=J.name,$=J.openai_api_key,ee=J.project_uuid,ne=(0,o.useMemo)((function(){return"demo.mage.ai"===window.location.hostname}),[]);(0,o.useEffect)((function(){R||T(q)}),[q,R]);var te=(0,c.Db)(y.ZP.projects.useUpdate(K),{onSuccess:function(e){return(0,z.wD)(e,{callback:function(e){var n,t=e.project;G(),T(t),Q(!1),(0,S.hY)(null===t||void 0===t||null===(n=t.features)||void 0===n?void 0:n[h.d.LOCAL_TIMEZONE]),V&&(null===V||void 0===V||V(t))},onErrorCallback:function(e,n){return A({errors:n,response:e})}})}}),ie=(0,r.Z)(te,2),re=ie[0],oe=ie[1].isLoading,ce=(0,o.useCallback)((function(e){return re({project:e})}),[re]),le=(0,E.jsxs)(E.Fragment,{children:[L,(0,E.jsxs)(f.Z,{noPadding:!0,children:[(0,E.jsxs)(m.Z,{p:_.cd,children:[(0,E.jsx)(m.Z,{mb:1,children:(0,E.jsx)(u.Z,{level:5,children:"Project name"})}),(0,E.jsx)(j.ZP,{default:!0,monospace:!0,children:K})]}),(0,E.jsx)(a.Z,{light:!0}),(0,E.jsxs)(m.Z,{p:_.cd,children:[(0,E.jsx)(m.Z,{mb:1,children:(0,E.jsx)(u.Z,{level:5,children:"Project UUID"})}),(0,E.jsx)(j.ZP,{default:!!ee,monospace:!0,muted:!ee,children:ee||"Not required"})]}),(0,E.jsx)(a.Z,{light:!0}),(0,E.jsx)(m.Z,{p:_.cd,children:(0,E.jsxs)(s.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,E.jsxs)(d.Z,{flexDirection:"column",children:[(0,E.jsx)(m.Z,{mb:1,children:(0,E.jsx)(u.Z,{level:5,children:"Help improve Mage"})}),(0,E.jsxs)(j.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,E.jsx)(p.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,E.jsx)(m.Z,{mr:_.cd}),(0,E.jsx)(v.Z,{compact:!0,checked:null===R||void 0===R?void 0:R.help_improve_mage,onCheck:function(){return T((function(e){return W(W({},e),{},{help_improve_mage:!(null!==R&&void 0!==R&&R.help_improve_mage)})}))}})]})})]}),(0,E.jsx)(m.Z,{mt:_.HN}),(0,E.jsx)(g.Z,{description:"Global settings that are applied to all pipelines in this project.",title:"Pipeline settings",children:(0,E.jsx)(g.S,{description:"Every time a trigger is created or updated in this pipeline, automatically persist it in code.",title:"Save triggers in code automatically",toggleSwitch:{checked:!(null===R||void 0===R||null===(n=R.pipelines)||void 0===n||null===(t=n.settings)||void 0===t||null===(w=t.triggers)||void 0===w||!w.save_in_code_automatically),onCheck:function(e){return T((function(n){var t,i,r,o,c,l;return W(W({},n),{},{pipelines:W(W({},null===n||void 0===n?void 0:n.pipelines),{},{settings:W(W({},null===n||void 0===n||null===(t=n.pipelines)||void 0===t?void 0:t.settings),{},{triggers:W(W({},null===n||void 0===n||null===(i=n.pipelines)||void 0===i||null===(r=i.settings)||void 0===r?void 0:r.triggers),{},{save_in_code_automatically:e(null===n||void 0===n||null===(o=n.pipelines)||void 0===o||null===(c=o.settings)||void 0===c||null===(l=c.triggers)||void 0===l?void 0:l.save_in_code_automatically)})})})})}))}}})}),(0,E.jsx)(m.Z,{mt:_.HN}),(0,E.jsx)(f.Z,{noPadding:!0,overflowVisible:!0,children:(0,E.jsxs)(m.Z,{p:_.cd,children:[(0,E.jsx)(m.Z,{mb:1,children:(0,E.jsx)(u.Z,{level:5,children:"Features"})}),Object.entries((0,N.gR)(null===R||void 0===R?void 0:R.features,[h.d.GLOBAL_HOOKS])||{}).map((function(e,n){var t=(0,r.Z)(e,2),o=t[0],c=t[1];return(0,E.jsx)(m.Z,{mt:0===n?0:1,children:(0,E.jsxs)(s.ZP,{alignItems:"center",children:[(0,E.jsx)(v.Z,{checked:!!c,compact:!0,onCheck:function(){return T((function(e){return W(W({},e),{},{features:W(W({},null===R||void 0===R?void 0:R.features),{},(0,i.Z)({},o,!c))})}))}}),(0,E.jsx)(m.Z,{mr:_.cd}),(0,E.jsxs)(d.Z,{children:[(0,E.jsx)(j.ZP,{default:!c,monospace:!0,children:(0,H.vg)(o)}),o===h.d.LOCAL_TIMEZONE&&(0,E.jsx)(m.Z,{ml:1,children:(0,E.jsx)(b.Z,W({},S.EB))})]})]})},o)}))]})}),(0,E.jsx)(m.Z,{mt:_.HN}),(0,E.jsx)(f.Z,{noPadding:!0,children:(0,E.jsxs)(m.Z,{p:_.cd,children:[(0,E.jsx)(m.Z,{mb:1,children:(0,E.jsx)(u.Z,{level:5,children:"OpenAI"})}),$&&!Y?(0,E.jsxs)(s.ZP,W(W({},s.A0),{},{children:[(0,E.jsx)(j.ZP,{default:!0,monospace:!0,children:"API key: ********"}),(0,E.jsx)(l.ZP,{iconOnly:!0,onClick:function(){return Q(!0)},secondary:!0,title:"Edit",children:(0,E.jsx)(I.I8,{size:C.bL})})]})):(0,E.jsx)(x.Z,{disabled:ne,label:ne?"Entering API key is disabled on demo":"API key",monospace:!0,onChange:function(e){return T((function(n){return W(W({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===R||void 0===R?void 0:R.openai_api_key)||""})]})}),(0,E.jsx)(m.Z,{mt:_.HN}),(0,E.jsxs)(s.ZP,{alignItems:"center",children:[(0,E.jsx)(l.ZP,{loading:oe,onClick:function(){ce({features:null===R||void 0===R?void 0:R.features,help_improve_mage:null===R||void 0===R?void 0:R.help_improve_mage,openai_api_key:null===R||void 0===R?void 0:R.openai_api_key,pipelines:null===R||void 0===R?void 0:R.pipelines})},primary:!0,children:"Save project settings"}),B&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m.Z,{mr:_.cd}),(0,E.jsx)(l.ZP,{onClick:B,secondary:!0,children:O||"Cancel"})]})]})]});return P?(0,E.jsx)(k,{children:le}):le}},46568:function(e,n,t){"use strict";var i=t(82394),r=t(26304),o=(t(82684),t(33591)),c=t(28598),l=["children","fullHeight","gutter","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,i=e.gutter,a=e.style,s=void 0===a?{}:a,u=(0,r.Z)(e,l),p=d({},s);return i&&(p.paddingLeft=i,p.paddingRight=p.paddingLeft),t&&(p.height="100%"),(0,c.jsx)(o.Col,d(d({},u),{},{style:p,children:n}))}},82682:function(e,n,t){"use strict";var i=t(82394),r=t(26304),o=t(82684),c=t(33591),l=t(28598),a=["children","fullHeight","gutter","justifyContent","style"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,i=e.gutter,d=e.justifyContent,u=e.style,p=void 0===u?{}:u,f=(0,r.Z)(e,a),h=s({},p);return i&&(h.marginLeft=-1*i,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,l.jsx)(c.Row,s(s({},f),{},{justifyContent:d,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:i,key:n})}))}))}},88543:function(e,n,t){"use strict";t.d(n,{S:function(){return y},Z:function(){return Z}});var i=t(82684),r=t(15338),o=t(97618),c=t(55485),l=t(85854),a=t(65956),d=t(82394),s=t(44085),u=t(38276),p=t(30160),f=t(17488),h=t(69650),g=t(72473),m=t(8193),j=t(70515),x=t(28598);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n,t=e.children,i=e.description,r=e.invalid,l=e.large,a=void 0===l||l,d=e.selectInput,v=e.textInput,y=e.title,Z=e.toggleSwitch,w=e.warning;return(0,x.jsx)(u.Z,{p:j.cd,children:(0,x.jsxs)(c.ZP,{alignItems:"center",children:[(0,x.jsxs)(c.ZP,{flexDirection:"column",children:[(0,x.jsxs)(p.ZP,{danger:r,default:!0,large:a,warning:w,children:[y," ",r&&(0,x.jsx)(p.ZP,{danger:!0,inline:!0,large:a,children:"is required"})]}),i&&"string"===typeof i&&(0,x.jsx)(p.ZP,{muted:!0,small:!0,children:i}),i&&"string"!==typeof i&&i]}),(0,x.jsx)(u.Z,{mr:j.cd}),(0,x.jsxs)(o.Z,{flex:1,justifyContent:"flex-end",children:[t,v&&(0,x.jsx)(f.Z,b({afterIcon:(0,x.jsx)(g.I8,{}),afterIconClick:function(e,n){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.focus()},afterIconSize:m.Z,alignRight:!0,autoComplete:"off",large:a,noBackground:!0,noBorder:!0,fullWidth:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0},v)),d&&(0,x.jsx)(s.Z,b(b({},d),{},{afterIcon:(0,x.jsx)(g._M,{}),afterIconSize:m.Z,alignRight:!0,autoComplete:"off",large:a,noBackground:!0,noBorder:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0,children:null===d||void 0===d||null===(n=d.options)||void 0===n?void 0:n.map((function(e){var n=e.label,t=e.value;return(0,x.jsx)("option",{value:t,children:n||t},t)}))})),Z&&(0,x.jsx)(h.Z,{checked:!(null===Z||void 0===Z||!Z.checked),compact:!0,onCheck:null===Z||void 0===Z?void 0:Z.onCheck})]})]})})},Z=function(e){var n=e.children,t=e.description,d=e.headerChildren,s=e.title;return(0,x.jsxs)(a.Z,{noPadding:!0,children:[(0,x.jsx)(u.Z,{p:j.cd,children:(0,x.jsxs)(c.ZP,{alignItems:"center",children:[(0,x.jsxs)(o.Z,{flex:1,flexDirection:"column",children:[(0,x.jsx)(l.Z,{level:4,children:s}),t&&"string"===typeof t&&(0,x.jsx)(u.Z,{mt:1,children:(0,x.jsx)(p.ZP,{muted:!0,children:t})}),t&&"string"!==typeof t&&t]}),d]})}),i.Children.map(n,(function(e,n){return(0,x.jsxs)("div",{children:[(0,x.jsx)(r.Z,{light:!0}),e]},"".concat(s,"-").concat(n))}))]})}},8193:function(e,n,t){"use strict";t.d(n,{N:function(){return a},Z:function(){return l}});var i=t(38626),r=t(44897),o=t(42631),c=t(70515),l=2*c.iI,a=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ck7mzt-0"})(["border-radius:","px;padding:","px;",""],o.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).codeArea,";\n  ")}))},65956:function(e,n,t){"use strict";var i=t(38626),r=t(55485),o=t(38276),c=t(30160),l=t(44897),a=t(42631),d=t(47041),s=t(70515),u=t(28598),p=(0,i.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),f=i.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],a.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||l.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||l.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||l.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||l.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||l.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=i.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],a.n_,a.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||l.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||l.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),p,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=i.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,d.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),m=i.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],a.M8,a.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,i=e.containerRef,l=e.contentContainerRef,a=e.dark,d=e.footer,s=e.fullHeight,p=void 0===s||s,j=e.fullWidth,x=void 0===j||j,v=e.header,b=e.headerHeight,y=e.headerIcon,Z=e.headerPaddingVertical,w=e.headerTitle,O=e.maxHeight,P=e.maxWidth,_=e.minWidth,k=e.noPadding,I=e.overflowVisible,C=e.subtitle,S=e.success;return(0,u.jsxs)(f,{borderless:n,dark:a,fullHeight:p,fullWidth:x,maxHeight:O,maxWidth:P,minWidth:_,overflowVisible:I,ref:i,success:S,children:[(v||w)&&(0,u.jsxs)(h,{headerPaddingVertical:Z,height:b,children:[v&&v,w&&(0,u.jsx)(r.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,u.jsxs)(r.ZP,{alignItems:"center",children:[y&&y,(0,u.jsx)(o.Z,{ml:y?1:0,children:(0,u.jsx)(c.ZP,{bold:!0,default:!0,children:w})})]})})]}),(0,u.jsxs)(g,{maxHeight:O,noPadding:k,overflowVisible:I,ref:l,children:[C&&"string"===typeof C&&(0,u.jsx)(o.Z,{mb:2,children:(0,u.jsx)(c.ZP,{default:!0,children:C})}),C&&"string"!==typeof C&&C,t]}),d&&(0,u.jsx)(m,{children:d})]})}},85854:function(e,n,t){"use strict";var i,r,o,c,l,a,d,s,u=t(82394),p=t(26304),f=t(26653),h=t(38626),g=t(33591),m=t(44897),j=t(95363),x=t(61896),v=t(30160),b=t(70515),y=t(38276),Z=t(28598),w=["children","condensed","inline","level","marketing","spacingBelow"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||m.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(j.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(j.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(j.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(j.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(j.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),k=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||m.Z.content).active,";\n  ")})),I=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],_,g.media.md(i||(i=(0,f.Z)(["\n    ","\n  "])),x.aQ),g.media.lg(r||(r=(0,f.Z)(["\n    ","\n  "])),x.aQ),g.media.xl(o||(o=(0,f.Z)(["\n    ","\n  "])),x.aQ)),C=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],_,x.MJ),S=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],_,g.media.xs(c||(c=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),g.media.sm(l||(l=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),g.media.md(a||(a=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),g.media.lg(d||(d=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),g.media.xl(s||(s=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI)),H=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],_,x.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],_),z=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],_),D=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],_),E=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],_,(function(e){return 1===e.level&&"\n    ".concat(x.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(x.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),L=function(e){var n,t=e.children,i=e.condensed,r=e.inline,o=e.level,c=e.marketing,l=e.spacingBelow,a=(0,p.Z)(e,w);r?n=E:0===Number(o)?n=I:1===Number(o)?n=c?S:C:2===Number(o)?n=H:3===Number(o)?n=N:4===Number(o)?n=z:5===Number(o)&&(n=D);var d=(0,Z.jsxs)(n,P(P({},a),{},{level:o,children:[l&&(0,Z.jsx)(y.Z,{mb:i?2:3,children:t}),!l&&t]}));return r?d:(0,Z.jsx)(k,{children:d})};L.defaultProps={level:3,weightStyle:6},n.Z=L},61316:function(e,n,t){"use strict";t.r(n);var i=t(77837),r=t(38860),o=t.n(r),c=t(46568),l=t(55729),a=t(93808),d=t(82682),s=t(28274),u=t(38276),p=t(70515),f=t(24755),h=t(28598);function g(){return(0,h.jsx)(s.Z,{uuidItemSelected:f.HY,uuidWorkspaceSelected:f.WH,children:(0,h.jsx)(u.Z,{p:p.cd,children:(0,h.jsx)(d.Z,{justifyContent:"center",children:(0,h.jsx)(c.Z,{xl:8,xxl:6,children:(0,h.jsx)(l.Z,{})})})})})}g.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,a.Z)(g)},33323:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/preferences",function(){return t(61316)}])}},function(e){e.O(0,[2678,1154,844,874,9626,8264,8432,9774,2888,179],(function(){return n=33323,e(e.s=n);var n}));var n=e.O();_N_E=n}]);