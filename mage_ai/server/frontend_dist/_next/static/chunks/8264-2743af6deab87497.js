"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8264],{82571:function(e,n,t){var r=t(21831),o=t(82394),i=t(12691),c=t.n(i),l=t(82684),d=t(34376),a=t(58036),u=t(15338),s=t(97618),f=t(55485),h=t(64888),p=t(93369),g=t(38276),m=t(30160),v=t(12468),b=t(72473),x=t(68899),y=t(8059),w=t(70515),j=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=3*w.iI,I=[{id:"main",items:[{Icon:b.G6,id:"overview",label:function(){return"Overview"},linkProps:{href:"/overview"}},{Icon:b.vd,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}},{Icon:b.Bf,id:"triggers",label:function(){return"Triggers"},linkProps:{href:"/triggers"}},{Icon:b.Pf,id:"pipeline-runs",label:function(){return"Pipeline runs"},linkProps:{href:"/pipeline-runs"}},{Icon:b.ie,id:"global-data-products",label:function(){return"Global data products (beta)"},linkProps:{href:"/global-data-products"}}]},{id:"misc",items:[{Icon:b.$l,id:"files",label:function(){return"Files"},linkProps:{href:"/files"}},{Icon:b.zQ,id:"templates",label:function(){return"Templates"},linkProps:{href:"/templates"}},{Icon:b.Pt,id:"version-control",label:function(){return"Version control"},linkProps:{href:"/version-control"}},{Icon:b.oI,id:"terminal",label:function(){return"Terminal"},linkProps:{href:"/terminal"}},{Icon:b.Zr,id:"settings",label:function(){return"Settings"},linkProps:{href:"/settings"}}]}];n.Z=function(e){var n=e.aligned,t=e.navigationItems,o=e.showMore,i=e.visible,b=(0,d.useRouter)().pathname,k=(0,l.useCallback)((function(e,t){var r,l,d,a=e.Icon,u=e.IconSelected,k=e.disabled,I=e.id,P=e.isSelected,C=e.label,_=e.linkProps,S=e.onClick,M=P?P(b,e):!!b.match(new RegExp("^/".concat(I,"[/]*"))),N=M&&u?u:a,E=null===C||void 0===C?void 0:C(),B={primary:!N,selected:o&&M,showMore:o,withGradient:u};M&&u?(l=(0,j.jsx)("div",{style:{height:O,width:O},children:(0,j.jsx)(N,{muted:!0,size:O})}),(o||i)&&(l=(0,j.jsx)(x.E7,Z(Z({},B),{},{children:(0,j.jsx)(N,{muted:!0,size:O})}))),r=(0,j.jsx)(h.Z,{backgroundGradient:y.yr,backgroundPanel:!0,basic:!0,borderWidth:2,disabled:k,linkProps:_,onClick:S,paddingUnits:1,children:l}),o&&(r=l)):(!M||M&&!u)&&(l=(0,j.jsx)(x.E7,Z(Z({},B),{},{children:N?(0,j.jsx)(N,{muted:!M,size:O}):(0,j.jsx)(m.ZP,{children:"Edit"})})),r=(0,j.jsx)(p.ZP,{disabled:k,inline:!0,linkProps:_,noHoverUnderline:!0,noPadding:!0,onClick:S,primary:M,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(I),children:l}),o&&(r=l)),d="right"===n?(0,j.jsxs)(f.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,j.jsx)(s.Z,{flex:1,justifyContent:"flex-end",children:(0,j.jsx)(m.ZP,{noWrapping:!0,children:E})}),(0,j.jsx)(g.Z,{mr:2}),l]}):(0,j.jsxs)(f.ZP,{alignItems:"center",children:[l,(0,j.jsx)(g.Z,{mr:2}),(0,j.jsx)(s.Z,{flex:1,children:(0,j.jsx)(m.ZP,{noWrapping:!0,children:E})})]});var z,W=(0,j.jsx)(x.J8,{href:"#",onClick:S,selected:M,children:d});return _&&(W=(0,j.jsx)(c(),Z(Z({},_),{},{passHref:!0,children:W}))),"right"===n&&(r=(0,j.jsx)(f.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:r})),z=i?W:o?r:(0,j.jsx)(v.Z,{appearBefore:"right"===n,height:5*w.iI,label:E,size:null,widthFitContent:!0,children:r}),(0,j.jsx)(g.Z,{mt:o&&i?0:t>=1?w.cd:0,children:z},"button-".concat(I))}),[n,b,o,i]),P=(0,l.useMemo)((function(){var e=[];return(t||I).forEach((function(n,t){var o=n.id,c=n.items;(null===c||void 0===c?void 0:c.length)>=1?(t>=1&&e.push((0,j.jsx)(g.Z,{my:i?w.cd:w.cd+1,children:(0,j.jsx)(u.Z,{light:!0})},o)),e.push.apply(e,(0,r.Z)(c.map((function(e,n){return k(e,n)}))))):e.push(k(n,t))})),e}),[k,t,i]);return(0,j.jsx)(a.Z,{children:P})}},68899:function(e,n,t){t.d(n,{E7:function(){return b},HS:function(){return v},Hn:function(){return y},J8:function(){return x},Nk:function(){return p},k1:function(){return h},lm:function(){return m}});var r=t(82684),o=t(38626),i=t(38276),c=t(44897),l=t(42631),d=t(46684),a=t(70515),u=t(47041),s=t(91437),f=t(28598),h=a.cd*a.iI+5*a.iI+a.cd*a.iI+1,p=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],d.Mz,d.Mz,(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).page,";\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyleComponent",componentId:"sc-ecogjt-1"})(["height:100%;"," "," "," @keyframes animate-in{0%{width:","px;}100%{width:","px;}}"," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).panel,";\n  ")}),(function(e){return!e.borderless&&"right"!==e.aligned&&"\n    border-right: 1px solid ".concat((e.theme.borders||c.Z.borders).medium,";\n  ")}),(function(e){return!e.borderless&&"right"===e.aligned&&"\n    border-left: 1px solid ".concat((e.theme.borders||c.Z.borders).medium,";\n  ")}),21*a.iI,34*a.iI,(function(e){return e.showMore&&e.visible&&"\n    &:hover {\n      animation: animate-in 100ms linear forwards;\n      position: fixed;\n      z-index: 100;\n    }\n  "}),(function(e){return e.showMore&&e.visible&&"right"===e.aligned&&"\n    &:hover {\n      right: 0;\n      top: ".concat(d.Mz,"px;\n    }\n  ")}));function m(e){var n=e.aligned,t=e.borderless,o=e.children,c=e.showMore,l=(0,r.useRef)(null),d=(0,r.useState)(!1),u=d[0],s=d[1];return(0,f.jsx)(g,{aligned:n,borderless:t&&!u,onMouseEnter:c?function(){clearTimeout(l.current),l.current=setTimeout((function(){s(!0)}),300)}:null,onMouseLeave:c?function(){clearTimeout(l.current),s(!1)}:null,showMore:c,visible:u,children:(0,f.jsx)(i.Z,{px:c&&u?0:a.cd,py:c&&u?1:a.cd,children:r.cloneElement(o,{showMore:c,visible:u})})})}var v=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["position:sticky;top:0;width:100%;z-index:3;"," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||c.Z.borders).medium,";\n  ")}),(function(e){return!e.noPadding&&"\n    padding: ".concat(a.cd*a.iI,"px;\n  ")})),b=(o.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],u.w5,(function(e){return"\n    height: calc(100vh - ".concat(d.Mz+(e.heightOffset||0),"px);\n  ")})),o.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["align-items:center;border-radius:","px;display:flex;height:","px;justify-content:center;padding:","px;width:","px;"," "," "," ",""],l.n_,5*a.iI,a.iI,5*a.iI,(function(e){return e.primary&&"\n    ".concat((0,s.eR)(),"\n    background: ").concat((e.theme||c.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((e.theme||c.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((e.theme||c.Z).interactive.linkSecondary,";\n    }\n  ")}),(function(e){return e.selected&&!e.withGradient&&"\n    background-color: ".concat((e.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.selected&&e.withGradient&&"\n    background-color: ".concat((e.theme.background||c.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.selected&&e.showMore&&"\n    background-color: ".concat((e.theme.interactive||c.Z.interactive).defaultBackground,";\n  ")}))),x=o.default.a.withConfig({displayName:"indexstyle__NavigationLinkStyle",componentId:"sc-ecogjt-5"})([""," display:block;padding:","px ","px;"," ",""],(0,s.eR)(),1*a.iI,a.iI*a.cd,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.interactive||c.Z.interactive).hoverBackground,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||c.Z.interactive).linkPrimaryHover,";\n  ")})),y=o.default.div.withConfig({displayName:"indexstyle__ImageStyle",componentId:"sc-ecogjt-6"})(["background-position:0 0;background-repeat:no-repeat;background-size:contain;height:","px;width:","px;"," ",""],12*a.iI,12*a.iI,(function(e){return"\n    background-image: url(".concat(e.imageUrl,");\n  ")}),(function(e){return e.size&&"\n    height: ".concat(e.size,"px;\n    width: ").concat(e.size,"px;\n  ")}))},2842:function(e,n,t){t.d(n,{E$:function(){return _},MK:function(){return x},MP:function(){return I},Md:function(){return u},OM:function(){return m},On:function(){return H},PZ:function(){return b},Ru:function(){return P},S9:function(){return W},VW:function(){return h},W7:function(){return k},Wi:function(){return g},YJ:function(){return O},Zj:function(){return E},Zt:function(){return a},aH:function(){return N},bC:function(){return B},dN:function(){return s},ff:function(){return C},l8:function(){return p},lU:function(){return z},rS:function(){return M},uX:function(){return v},v7:function(){return S},ve:function(){return f},ym:function(){return Z}});var r=t(38626),o=t(44897),i=t(42631),c=t(46684),l=t(70515),d=t(47041),a=64*l.iI,u=30*l.iI,s=21.25*l.iI,f=35*l.iI,h=.5*l.iI,p=13*l.iI,g=3*l.cd*l.iI,m=6*l.iI,v=2*l.cd*3*l.iI,b=r.default.div.withConfig({displayName:"indexstyle__InlineContainerStyle",componentId:"sc-1lxpneo-0"})(["position:relative;",""],(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")})),x=(r.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-1lxpneo-1"})(["position:fixed;z-index:3;"," "," ",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.monotone||o.Z.monotone).grey200,";\n  ")}),(function(e){return!e.beforeVisible&&"\n    width: 100%;\n  "}),(function(e){return e.beforeVisible&&"\n    left: ".concat(f,"px;\n    width: calc(100% - ").concat(f,"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NewHeaderStyle",componentId:"sc-1lxpneo-2"})(["height:","px;position:fixed;top:0;width:100%;z-index:4;"],c.Mz)),y=(r.default.div.withConfig({displayName:"indexstyle__TabStyle",componentId:"sc-1lxpneo-3"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;position:relative;top:1px;"," "," ",""],i.n_,i.n_,1*l.iI,2*l.iI,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.monotone||o.Z.monotone).grey200,";\n    border-right: 1px solid ").concat((e.theme.monotone||o.Z.monotone).grey200,";\n    border-top: 1px solid ").concat((e.theme.monotone||o.Z.monotone).grey200,";\n  ")}),(function(e){return!e.first&&"\n    margin-left: ".concat(1*l.iI,"px;\n  ")}),(function(e){return e.selected&&"\n    border-bottom: 1px solid ".concat((e.theme.monotone||o.Z.monotone).white,";\n  ")})),(0,r.css)(["z-index:2;"," "," ",""],(function(e){return"\n    height: calc(100% - ".concat("undefined"===typeof e.heightOffset?v:e.heightOffset,"px);\n  ")}),(function(e){return e.inline&&"\n    position: absolute;\n  "}),(function(e){return!e.inline&&"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n    position: fixed;\n    top: ").concat("undefined"===typeof e.heightOffset?v:e.heightOffset,"px;\n  ")}))),w=(0,r.css)([""," height:100%;overflow:auto;position:relative;z-index:2;",""],d.w5,(function(e){return"undefined"!==typeof e.verticalOffset&&null!==e.verticalOffset&&"\n    height: calc(100% - ".concat(e.verticalOffset+(e.heightOffset||0),"px);\n    top: ").concat(e.verticalOffset,"px;\n  ")})),j=(0,r.css)(["position:absolute;width:","px;z-index:6;&:hover{","}"," "," ",""],h,(function(e){return!e.disabled&&"\n      border-color: ".concat((e.theme.text||o.Z.text).fileBrowser," !important;\n    ")}),(function(e){return"\n    height: calc(100% + ".concat((null===e||void 0===e?void 0:e.top)||0,"px);\n    top: -").concat((null===e||void 0===e?void 0:e.top)||0,"px;\n  ")}),(function(e){return!e.disabled&&"\n    cursor: col-resize;\n  "}),(function(e){return e.active&&!e.disabled&&"\n    border-color: ".concat((e.theme.text||o.Z.text).fileBrowser," !important;\n  ")})),k=r.default.div.withConfig({displayName:"indexstyle__AsideHeaderStyle",componentId:"sc-1lxpneo-4"})(["border-bottom:1px solid transparent;height:","px;z-index:4;"," "," "," "," ",""],m,(0,d.y$)(),(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n    top: ").concat((null===e||void 0===e?void 0:e.top)||0,"px;\n  ")}),(function(e){return!e.visible&&"\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-bottom-color: ".concat((e.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(e){return e.contained&&"\n    border-left-color: ".concat((e.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(e){return!e.inline&&"\n    position: fixed;\n  "})),Z=r.default.div.withConfig({displayName:"indexstyle__AsideHeaderInnerStyle",componentId:"sc-1lxpneo-5"})(["display:flex;flex:1;overflow:auto;padding:0 ","px;"," ",""],2*l.iI,(0,d.y$)(),(function(e){return e.noPadding&&"\n    padding: 0;\n  "})),O=r.default.div.withConfig({displayName:"indexstyle__AsideSubheaderStyle",componentId:"sc-1lxpneo-6"})(["border-bottom:1px solid transparent;height:","px;overflow-x:auto;position:absolute;top:","px;"," "," ",""],g,g,(0,d.y$)(),(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).table,";\n  ")}),(function(e){return!e.visible&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).medium," !important;\n  ")})),I=r.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-1lxpneo-7"})([""," left:0;"],y),P=r.default.div.withConfig({displayName:"indexstyle__BeforeInnerStyle",componentId:"sc-1lxpneo-8"})([""," overflow:hidden;&:hover{overflow:auto;}",""],w,(function(e){return e.contained&&"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium," !important;\n  ")})),C=r.default.aside.withConfig({displayName:"indexstyle__AfterStyle",componentId:"sc-1lxpneo-9"})([""," right:0;"],y),_=r.default.div.withConfig({displayName:"indexstyle__AfterInnerStyle",componentId:"sc-1lxpneo-10"})([""," "," ",""],w,(function(e){return e.overflow&&"\n    overflow: ".concat(e.overflow,";\n  ")}),(function(e){return e.heightMinus&&"\n    height: calc(100% - ".concat(e.heightMinus,"px);\n  ")})),S=r.default.div.withConfig({displayName:"indexstyle__DraggableStyle",componentId:"sc-1lxpneo-11"})([""," "," ",""],j,(function(e){return"undefined"!==typeof e.left&&"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    left: ").concat(e.left,"px;\n  ")}),(function(e){return"undefined"!==typeof e.right&&"\n    border-right: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    right: ").concat(e.right,"px;\n  ")})),M=r.default.div.withConfig({displayName:"indexstyle__MainWrapper",componentId:"sc-1lxpneo-12"})(["height:100%;z-index:1;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeArea,";\n    position: ").concat(e.inline?"absolute":"fixed",";\n  ")})),N=r.default.div.withConfig({displayName:"indexstyle__MainContentStyle",componentId:"sc-1lxpneo-13"})(["z-index:2;"," ",""],(function(e){return"\n    height: calc(100% - ".concat(e.headerOffset||0,"px);\n    position: ").concat(e.inline?"relative":"fixed",";\n  ")}),(function(e){return!e.inline&&"\n    top: ".concat(e.headerOffset||0,"px;\n  ")})),E=r.default.div.withConfig({displayName:"indexstyle__MainContentInnerStyle",componentId:"sc-1lxpneo-14"})([""," height:100%;overflow:auto;"],d.w5),B=r.default.div.withConfig({displayName:"indexstyle__NavigationStyle",componentId:"sc-1lxpneo-15"})(["position:relative;"]),z=r.default.div.withConfig({displayName:"indexstyle__NavigationInnerStyle",componentId:"sc-1lxpneo-16"})(["height:100%;position:fixed;z-index:6;"," ",""],(function(e){return"left"===e.aligned&&"\n    border-right: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    left: 0;\n  ")}),(function(e){return"right"===e.aligned&&"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    right: 0;\n  ")})),W=r.default.div.withConfig({displayName:"indexstyle__NavigationContainerStyle",componentId:"sc-1lxpneo-17"})([""," overflow:auto;position:absolute;width:fit-content;"," "," "," ",""],d.w5,(function(e){return"\n    height: calc(100vh - ".concat(e.heightOffset,"px);\n  ")}),(function(e){return e.fullWidth&&"\n    width: calc(100% - ".concat(e.widthOffset||0,"px);\n  ")}),(function(e){return e.widthOffset&&"left"===e.aligned&&"\n    left: ".concat(e.widthOffset,"px;\n  ")}),(function(e){return e.widthOffset&&"right"===e.aligned&&"\n    right: ".concat(e.widthOffset,"px;\n  ")})),H=r.default.div.withConfig({displayName:"indexstyle__AsideFooterStyle",componentId:"sc-1lxpneo-18"})(["border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;position:fixed;z-index:3;"," "," "," "," ",""],(function(e){return"\n    border-top-color: ".concat((e.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(e){return!e.inline&&"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n  ")}),(function(e){return e.contained&&"\n    border-left-color: ".concat((e.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(e){return("undefined"===typeof e.bottom||null===e.bottom)&&"\n    bottom: 0;\n  "}),(function(e){return"undefined"!==typeof e.bottom&&null!==e.bottom&&"\n    bottom: ".concat(e.bottom,"px;\n  ")}))},62547:function(e,n,t){var r=t(82684),o=t(1887),i=t.n(o),c=t(71180),l=t(58036),d=t(97618),a=t(55485),u=t(38276),s=t(12468),f=t(82571),h=t(2842),p=t(72473),g=t(53808),m=t(70515),v=t(68899),b=t(19183),x=t(28598);n.Z=function(e){var n=e.after,t=e.afterFooter,o=e.afterFooterBottomOffset,y=e.afterHeader,w=e.afterHeaderOffset,j=e.afterHeightOffset,k=e.afterHidden,Z=e.afterInnerHeightMinus,O=e.afterMousedownActive,I=e.afterNavigationItems,P=e.afterOverflow,C=e.afterSubheader,_=e.afterWidth,S=void 0===_?0:_,M=e.before,N=e.beforeFooter,E=e.beforeHeader,B=e.beforeHeaderOffset,z=e.beforeHeightOffset,W=e.beforeHidden,H=e.beforeMousedownActive,D=e.beforeNavigationItems,F=e.beforeWidth,R=void 0===F?0:F,A=e.children,L=e.contained,T=e.header,U=e.headerOffset,V=void 0===U?0:U,G=e.height,$=e.hideAfterCompletely,q=e.hideBeforeCompletely,X=e.inline,J=e.leftOffset,Y=void 0===J?0:J,Q=e.mainContainerHeader,K=e.mainContainerRef,ee=e.navigationShowMore,ne=e.setAfterHidden,te=e.setAfterMousedownActive,re=e.setAfterWidth,oe=e.setBeforeHidden,ie=e.setBeforeMousedownActive,ce=e.setBeforeWidth,le=e.uuid,de=(0,b.i)().width,ae=(0,r.useRef)(null),ue=(0,r.useRef)(null),se=(0,r.useRef)(null),fe=(0,r.useRef)(null),he=(0,r.useCallback)((function(){var e=!k;null===ne||void 0===ne||ne(e),(0,g.t8)(le||g.zg,e)}),[k,ne,le]),pe=(0,r.useCallback)((function(){var e=!W;null===oe||void 0===oe||oe(e),(0,g.t8)(le||g.Uu,e)}),[W,oe,le]);(0,r.useEffect)((function(){var e,n,t,r,o=function(e){var n,t;((null===se||void 0===se||null===(n=se.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).x;if(de){var r=e.x;r+h.l8>de-S&&(r=de-S-h.l8),r-=2*Y,ce(Math.max(r,h.dN))}},i=function(e){var n,t;e.offsetX>=e.target.offsetWidth-h.VW&&e.offsetX<=e.target.offsetWidth+h.VW&&(null===ie||void 0===ie||ie(!0),e.preventDefault(),null===(n=document)||void 0===n||null===(t=n.addEventListener)||void 0===t||t.call(n,"mousemove",o,!1))},c=function(){var e,n;null===ie||void 0===ie||ie(!1),null===(e=document)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousemove",o,!1)};return null===fe||void 0===fe||null===(e=fe.current)||void 0===e||null===(n=e.addEventListener)||void 0===n||n.call(e,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.addEventListener)||void 0===r||r.call(t,"mouseup",c,!1),function(){var e,n,t,r;null===fe||void 0===fe||null===(e=fe.current)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.removeEventListener)||void 0===r||r.call(t,"mouseup",c,!1),c()}}),[S,W,Y,se,fe,ie,ce,de]),(0,r.useEffect)((function(){var e,n,t,r,o=function(e){var n,t;((null===ae||void 0===ae||null===(n=ae.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).x;if(de){var r=de-e.x;r+h.l8>de-R&&(r=de-R-h.l8),re(Math.max(r,h.Md))}},i=function(e){var n,t;e.offsetX>=-1*h.VW&&e.offsetX<=h.VW&&(null===te||void 0===te||te(!0),e.preventDefault(),null===(n=document)||void 0===n||null===(t=n.addEventListener)||void 0===t||t.call(n,"mousemove",o,!1))},c=function(){var e,n;null===te||void 0===te||te(!1),null===(e=document)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousemove",o,!1)};return null===ue||void 0===ue||null===(e=ue.current)||void 0===e||null===(n=e.addEventListener)||void 0===n||n.call(e,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.addEventListener)||void 0===r||r.call(t,"mouseup",c,!1),function(){var e,n,t,r;null===ue||void 0===ue||null===(e=ue.current)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.removeEventListener)||void 0===r||r.call(t,"mouseup",c,!1),c()}}),[k,R,ae,ue,te,re,de]);var ge=$&&k,me=ge?0:k?4*m.iI:S,ve=q&&W?0:W?4*m.iI:R,be="calc(100% - ".concat(ve+me+Y,"px)"),xe=(0,r.useMemo)((function(){return(null===I||void 0===I?void 0:I.length)>=1}),[I]),ye=(0,r.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(ne||y)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.W7,{inline:X,style:{width:xe?me-(v.k1-1):me},top:L?V:h.Wi,visible:k,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:[(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(u.Z,{pl:k?1:2}),(0,x.jsxs)(c.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return he()},children:[k&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI}),!k&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI})]})]}),!k&&y]})}),!k&&C&&(0,x.jsx)(h.YJ,{style:{width:xe?me-(v.k1+1):me},visible:k,children:C})]}),(0,x.jsx)(h.E$,{heightMinus:Z,noScrollbarTrackBackground:!0,overflow:P,ref:ae,verticalOffset:y?C?h.Wi+j:w||j:null,children:!k&&n}),t&&!k&&(0,x.jsx)(h.On,{bottom:X?o:null,inline:X,style:{overflow:k?"visible":"hidden",width:me},children:t})]})}),[n,t,o,y,w,j,k,P,C,me,L,xe,V,X,ae,ne,he]),we=(0,r.useMemo)((function(){return(null===D||void 0===D?void 0:D.length)>=1}),[D]),je=(0,r.useRef)(null),ke=(0,r.useMemo)((function(){var e,n;return(0,x.jsxs)(x.Fragment,{children:[(oe||E)&&(0,x.jsx)(h.W7,{contained:L,inline:X,style:{overflow:W?"visible":"hidden",width:we?ve-(v.k1+2):ve},top:L?V:h.Wi,visible:W,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,justifyContent:"space-between",children:[(0,x.jsxs)(h.ym,{noPadding:!0,children:[(0,x.jsx)(u.Z,{pl:W?1:0}),!W&&E]}),(0,x.jsxs)(d.Z,{children:[oe&&(0,x.jsx)(s.Z,{appearAbove:!W,appearBefore:!W,block:!0,label:W?"Show sidebar":"Hide sidebar",size:null,widthFitContent:!0,children:(0,x.jsxs)(c.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return pe()},children:[W&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI}),!W&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI})]})},W?"before-is-hidden":"before-is-visible"),(0,x.jsx)(u.Z,{pr:W?1:2})]})]})}),(0,x.jsx)(h.Ru,{contained:L&&!X,heightOffset:N?null===je||void 0===je||null===(e=je.current)||void 0===e||null===(n=e.getBoundingClientRect())||void 0===n?void 0:n.height:null,noScrollbarTrackBackground:!0,ref:se,verticalOffset:E?B||z:null,children:!W&&M}),N&&(0,x.jsx)(h.On,{contained:L,ref:je,style:{overflow:W?"visible":"hidden",width:ve},children:N})]})}),[M,N,je,E,B,z,W,ve,L,V,we,X,se,oe,pe]),Ze=(0,r.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(O&&!k||H&&!W)&&(0,x.jsx)(i(),{children:(0,x.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                body {\n                  cursor: col-resize;\n                }\n              "}})}),T&&(0,x.jsx)(h.MK,{children:T}),M&&(0,x.jsxs)(h.MP,{heightOffset:z,inline:X,style:{left:Y,width:ve},children:[(0,x.jsx)(h.v7,{active:H,disabled:W,ref:fe,right:0,top:L?0:h.Wi}),we&&(0,x.jsxs)(h.bC,{children:[!W&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"left",children:(0,x.jsx)(v.lm,{aligned:"left",borderless:!0,showMore:ee,children:(0,x.jsx)(f.Z,{aligned:"left",navigationItems:D})})}),(0,x.jsx)(h.S9,{aligned:"left",fullWidth:!0,heightOffset:z,widthOffset:v.k1+1,children:ke})]}),W&&ke]}),!we&&ke]}),(0,x.jsxs)(h.rS,{inline:X,style:{left:ve+Y,width:be},children:[Q,(0,x.jsx)(h.aH,{headerOffset:L?V:(Q?h.uX:h.Wi)+V,inline:X,style:{width:X?null:be},children:(0,x.jsx)(h.Zj,{noScrollbarTrackBackground:!0,ref:K,children:A})})]}),n&&!ge&&(0,x.jsxs)(h.ff,{heightOffset:j,inline:X,style:{width:me},children:[(0,x.jsx)(h.v7,{active:O,disabled:k,left:0,ref:ue,top:L?0:h.Wi}),xe&&(0,x.jsxs)(h.bC,{children:[!k&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"right",children:(0,x.jsx)(v.lm,{aligned:"right",borderless:!0,showMore:ee,children:(0,x.jsx)(f.Z,{aligned:"right",navigationItems:I})})}),(0,x.jsx)(h.S9,{aligned:"right",fullWidth:!0,heightOffset:j,widthOffset:v.k1+1,children:ye})]}),k&&ye]}),!xe&&ye]})]})}),[n,ye,j,k,O,I,me,ke,z,W,H,D,ve,A,L,xe,we,T,V,X,Y,Q,K,be,ee,ue,fe,ge]);return(0,x.jsxs)(l.Z,{children:[X&&(0,x.jsx)(h.PZ,{height:G,children:Ze}),!X&&Ze]})}},93808:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(77837),o=t(26304),i=t(62243),c=t(29385),l=t(80022),d=t(99177),a=t(93189),u=t(15544),s=t(82394),f=t(38860),h=t.n(f),p=t(82684),g=t(56663),m=t.n(g),v=t(40761),b=t(34661),x=t(36105),y=t(50178),w=t(69419),j=t(28598),k=["auth"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var o=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function P(e){return function(n){(0,d.Z)(a,n);var t=I(a);function a(){var e;(0,i.Z)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),(0,s.Z)((0,l.Z)(e),"state",{auth:new v.Z(e.props.token)}),e}return(0,c.Z)(a,[{key:"componentDidMount",value:function(){this.setState({auth:new v.Z(this.props.token)})}},{key:"render",value:function(){var n=this.props,t=(n.auth,(0,o.Z)(n,k));return(0,j.jsx)(e,O({auth:this.state.auth},t))}}],[{key:"getInitialProps",value:function(){var n=(0,r.Z)(h().mark((function n(t){var r,o,i,c,l,d,a,u,s;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=m()(t),o=(0,y.ex)(t),i=o.id,c=r[b.Mv],l=r[x.qt],d=new v.Z(c),a=O(O({},t),{},{auth:d,currentGroupId:i,theme:l}),(0,y.YB)(t)&&d.isExpired&&(console.log("OAuth token has expired."),u=O(O({},t.query),{},{redirect_url:t.asPath}),(0,w.nL)("/sign-in?".concat((0,w.uM)(u)),t.res)),!e.getInitialProps){n.next=12;break}return n.next=10,e.getInitialProps(a);case 10:return s=n.sent,n.abrupt("return",O(O({},s),{},{auth:d,currentGroupId:i,theme:l}));case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),a}(p.Component)}},64888:function(e,n,t){var r=t(82394),o=t(26304),i=t(38626),c=t(71180),l=t(44897),d=t(42631),a=t(8059),u=t(70515),s=t(28598),f=["backgroundGradient","backgroundPanel","borderWidth","children","compact","paddingUnits","paddingUnitsHorizontal","paddingUnitsVertical"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=i.default.div.withConfig({displayName:"GradientButton__ButtonContentStyle",componentId:"sc-1gzx4r1-0"})(["border-radius:","px;height:fit-content;"," ",""],d.n_,(function(e){return!e.backgroundPanel&&"\n    background-color: ".concat((e.theme.background||l.Z.background).page,";\n  ")}),(function(e){return e.backgroundPanel&&"\n    background-color: ".concat((e.theme.background||l.Z.background).panel,";\n  ")}));n.Z=function(e){var n=e.backgroundGradient,t=void 0===n?a.TD:n,r=e.backgroundPanel,i=e.borderWidth,l=void 0===i?1:i,d=e.children,h=e.compact,m=e.paddingUnits,v=e.paddingUnitsHorizontal,b=void 0===v?1.5:v,x=e.paddingUnitsVertical,y=void 0===x?1.25:x,w=(0,o.Z)(e,f),j=b,k=y;return m&&(j=m,k=m),h&&(j*=.75,k*=.75),(0,s.jsx)(c.Z,p(p({},w),{},{backgroundGradient:t,noPadding:!0,padding:"".concat(l,"px"),pointerEventsEnabled:!0,children:(0,s.jsx)(g,{backgroundPanel:r,children:(0,s.jsx)("div",{style:{paddingBottom:k*u.iI-l,paddingLeft:j*u.iI-l,paddingRight:j*u.iI-l,paddingTop:k*u.iI-l},children:d})})}))}},24944:function(e,n,t){t.d(n,{HL:function(){return d},lZ:function(){return a},qZ:function(){return l}});var r=t(38626),o=t(44897),i=t(42631),c=t(70515),l=r.default.div.withConfig({displayName:"indexstyle__DividerContainerStyle",componentId:"sc-uiq3r3-0"})([""," ",""],(function(e){return e.short&&"\n    width: ".concat(21*c.iI,"px;\n  ")}),(function(e){return!e.short&&"\n    width: 100%;\n  "})),d=r.default.div.withConfig({displayName:"indexstyle__DividerStyle",componentId:"sc-uiq3r3-1"})(["height:1px;"," "," "," "," "," ",""],(function(e){return!(e.light||e.medium)&&"\n    background-color: ".concat((e.theme.monotone||o.Z.monotone).grey200,";\n  ")}),(function(e){return e.muted&&"\n    background-color: ".concat((e.theme.monotone||o.Z.monotone).grey500,";\n  ")}),(function(e){return e.light&&"\n    background-color: ".concat((e.theme.borders||o.Z.borders).light,";\n  ")}),(function(e){return e.medium&&"\n    background-color: ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")}),(function(e){return e.prominent&&"\n    background-color: ".concat((e.theme.monotone||o.Z.monotone).grey300,";\n  ")}),(function(e){return e.black&&"\n    background-color: ".concat((e.theme.monotone||o.Z.monotone).black,";\n  ")})),a=r.default.div.withConfig({displayName:"indexstyle__VerticalDividerStyle",componentId:"sc-uiq3r3-2"})(["width:1px;align-self:stretch;"," ",""],(function(e){return"\n    border-left: ".concat(i.YF,"px ").concat(i.M8," ").concat((e.theme||o.Z).interactive.defaultBorder,";\n  ")}),(function(e){var n=e.right;return"number"===typeof n&&"\n    position: relative;\n    right: ".concat(n,"px;\n  ")}))},15338:function(e,n,t){var r=t(82394),o=t(26304),i=(t(82684),t(38276)),c=t(24944),l=t(28598),d=["short"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.short,t=void 0!==n&&n,r=(0,o.Z)(e,d);return(0,l.jsx)(c.qZ,{short:t,children:(0,l.jsx)(i.Z,u(u({},r),{},{children:(0,l.jsx)(c.HL,u({},r))}))})}},8059:function(e,n,t){t.d(n,{eW:function(){return a},TD:function(){return l},yr:function(){return d}});var r=t(79633),o="#FF144D",i="#DEBB92",c="#2A60FE",l=("linear-gradient(90deg, ".concat(i,", ").concat("#CBFE00",")"),"linear-gradient(90deg, ".concat(o,", #C86DD7)")),d=("linear-gradient(90deg, ".concat("#95ECE2",", ").concat(c,")"),"linear-gradient(90deg, ".concat("#9B6CA7",", ").concat(i,")"),"linear-gradient(90deg, ".concat("#C72400",", ").concat(i,")"),"linear-gradient(100.38deg, ".concat(o," 41.11%, #FF9559 86.99%)"),"linear-gradient(100.38deg, ".concat("#6B50D7"," 41.11%, #677FFF 86.99%)"),"linear-gradient(100.38deg, ".concat(c," 41.11%, #B880FF 86.99%)"),"linear-gradient(90deg, ".concat(r.t4," 20.13%, #2AB2FE)")),a="linear-gradient(90deg, ".concat(r.Ck," 0%, ").concat(r.t4," 53.13%, ").concat(r.X_," 100%)")},98464:function(e,n,t){var r=t(82684);n.Z=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e}),[e]),n.current}}}]);