(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r=t(82394),i=t(21831),o=t(82684),u=t(50724),s=t(82555),c=t(97618),l=t(70613),a=t(59696),d=t(68899),f=t(28598);function p(e,n){var t=e.children,r=e.noPadding;return(0,f.jsx)(d.HS,{noPadding:r,ref:n,children:t})}var h=o.forwardRef(p),v=t(62547),b=t(82571),j=t(35686),O=t(98464),g=t(46684),m=t(70515),_=t(53808),x=t(19183);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,P=e.afterHidden,y=e.afterWidth,w=e.afterWidthOverride,E=e.before,I=e.beforeWidth,C=e.breadcrumbs,k=e.children,A=e.errors,N=e.headerMenuItems,M=e.headerOffset,D=e.mainContainerHeader,T=e.navigationItems,S=e.setErrors,L=e.subheaderChildren,R=e.subheaderNoPadding,B=e.title,F=e.uuid,H=(0,x.i)().width,U="dashboard_after_width_".concat(F),W="dashboard_before_width_".concat(F),z=(0,o.useRef)(null),Q=(0,o.useState)(w?y:(0,_.U2)(U,y)),K=Q[0],V=Q[1],G=(0,o.useState)(!1),X=G[0],q=G[1],Y=(0,o.useState)(E?Math.max((0,_.U2)(W,I),13*m.iI):null),$=Y[0],J=Y[1],ee=(0,o.useState)(!1),ne=ee[0],te=ee[1],re=(0,o.useState)(null)[1],ie=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,oe=null===ie||void 0===ie?void 0:ie.projects,ue={label:function(){var e;return null===oe||void 0===oe||null===(e=oe[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},se=[];C?(r&&se.push(ue),se.push.apply(se,(0,i.Z)(C))):(null===oe||void 0===oe?void 0:oe.length)>=1&&se.push.apply(se,[ue,{bold:!0,label:function(){return B}}]),(0,o.useEffect)((function(){null===z||void 0===z||!z.current||X||ne||null===re||void 0===re||re(z.current.getBoundingClientRect().width)}),[X,K,ne,$,z,re,H]),(0,o.useEffect)((function(){X||(0,_.t8)(U,K)}),[P,X,K,U]),(0,o.useEffect)((function(){ne||(0,_.t8)(W,$)}),[ne,$,W]);var ce=(0,O.Z)(y);return(0,o.useEffect)((function(){w&&ce!==y&&V(y)}),[w,y,ce]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{title:B}),(0,f.jsx)(a.Z,{breadcrumbs:se,menuItems:N,project:null===oe||void 0===oe?void 0:oe[0],version:null===oe||void 0===oe||null===(t=oe[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(d.Nk,{ref:n,children:[0!==(null===T||void 0===T?void 0:T.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:T,showMore:!0})}),(0,f.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(v.Z,{after:p,afterHeightOffset:g.Mz,afterHidden:P,afterMousedownActive:X,afterWidth:K,before:E,beforeHeightOffset:g.Mz,beforeMousedownActive:ne,beforeWidth:d.k1+(E?$:0),headerOffset:M,hideAfterCompletely:!0,leftOffset:E?d.k1:null,mainContainerHeader:D,mainContainerRef:z,setAfterMousedownActive:q,setAfterWidth:V,setBeforeMousedownActive:te,setBeforeWidth:J,children:[L&&(0,f.jsx)(h,{noPadding:R,children:L}),k]})})]}),A&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===S||void 0===S?void 0:S(null)},children:(0,f.jsx)(s.Z,Z(Z({},A),{},{onClose:function(){return null===S||void 0===S?void 0:S(null)}}))})]})}var w=o.forwardRef(y)},70320:function(e,n,t){"use strict";t.d(n,{h:function(){return u},q:function(){return o}});var r=t(78419),i=t(53808);function o(){return(0,i.U2)(r.am,null)||!1}function u(e){return"undefined"!==typeof e&&(0,i.t8)(r.am,e),e}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return f},Q:function(){return d}});t(82684);var r=t(71180),i=t(55485),o=t(38276),u=t(31748),s=t(72473),c=t(79633),l=t(70515),a=t(28598),d=30,f=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,f=e.totalPages,p=[],h=t;if(h>f)p=Array.from({length:f},(function(e,n){return n}));else{var v=Math.floor(h/2),b=n-v;n+v>=f?(b=f-h+2,h-=2):n-v<=0?(b=0,h-=2):(h-=4,b=n-Math.floor(h/2)),p=Array.from({length:h},(function(e,n){return n+b}))}return(0,a.jsx)(a.Fragment,{children:f>0&&(0,a.jsxs)(i.ZP,{alignItems:"center",children:[(0,a.jsx)(r.Z,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,a.jsx)(s.Hd,{size:1.5*l.iI,stroke:u.Av})}),!p.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!p.includes(1)&&(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{backgroundColor:e===n&&c.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,a.jsxs)(a.Fragment,{children:[!p.includes(f-2)&&(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(f-1)},children:f})},f-1)]}),(0,a.jsx)(o.Z,{ml:1}),(0,a.jsx)(r.Z,{disabled:n===f-1,onClick:function(){return d(n+1)},children:(0,a.jsx)(s.Kw,{size:1.5*l.iI,stroke:u.Av})})]})})}},41143:function(e,n,t){"use strict";var r;t.d(n,{V:function(){return r}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(r||(r={}))},82359:function(e,n,t){"use strict";var r,i;t.d(n,{d:function(){return r},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2",e.DATA_INTEGRATION_IN_BATCH_PIPELINE="data_integration_in_batch_pipeline",e.INTERACTIONS="interactions",e.LOCAL_TIMEZONE="display_local_timezone",e.OPERATION_HISTORY="operation_history"}(r||(r={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},78234:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(82394),o=t(38860),u=t.n(o),s=t(82684),c=t(34376),l=t(94629),a=t(55485),d=t(55072),f=t(53943),p=t(93808),h=t(82359),v=t(44085),b=t(38276),j=t(30160),O=t(35686),g=t(44265),m=t(70515),_=t(15610),x=t(69419),P=t(70320),Z=t(28598);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=(0,c.useRouter)(),n=(0,s.useState)(null),t=n[0],r=n[1],i=(0,x.iV)(),o=null!==i&&void 0!==i&&i.page?i.page:0,u=O.ZP.projects.list().data,p=(0,s.useMemo)((function(){var e;return null===u||void 0===u||null===(e=u.projects)||void 0===e?void 0:e[0]}),[u]),y=((0,s.useMemo)((function(){var e;return(0,P.h)(null===p||void 0===p||null===(e=p.features)||void 0===e?void 0:e[h.d.LOCAL_TIMEZONE])}),[null===p||void 0===p?void 0:p.features]),{_limit:d.Q,_offset:o*d.Q,disable_retries_grouping:!0});null!==i&&void 0!==i&&i.status&&(y.status=i.status);var E=O.ZP.pipeline_runs.list(y,{refreshInterval:3e3,revalidateOnFocus:!0}),I=E.data,C=E.mutate,k=(0,s.useMemo)((function(){return(null===I||void 0===I?void 0:I.pipeline_runs)||[]}),[I]),A=(0,s.useMemo)((function(){var e;return(null===I||void 0===I||null===(e=I.metadata)||void 0===e?void 0:e.count)||[]}),[I]);return(0,Z.jsxs)(l.Z,{errors:t,setErrors:r,title:"Pipeline runs",uuid:"pipeline_runs/index",children:[(0,Z.jsx)(b.Z,{mx:2,my:1,children:(0,Z.jsxs)(a.ZP,{alignItems:"center",children:[(0,Z.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}),(0,Z.jsx)(b.Z,{mr:1}),(0,Z.jsxs)(v.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(n){n.preventDefault(),"all"===n.target.value?e.push("/pipeline-runs"):(0,_.u7)({page:0,status:n.target.value})},paddingRight:4*m.iI,placeholder:"Select run status",value:(null===i||void 0===i?void 0:i.status)||"all",children:[(0,Z.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),g.IK.map((function(e){return(0,Z.jsx)("option",{value:e,children:g.Do[e]},e)}))]})]})}),(0,Z.jsx)(f.Z,{fetchPipelineRuns:C,pipelineRuns:k,setErrors:r}),(0,Z.jsx)(b.Z,{p:2,children:(0,Z.jsx)(d.ZP,{maxPages:d.Et,onUpdate:function(n){var t=Number(n),r=w(w({},i),{},{page:t>=0?t:0});e.push("/pipeline-runs","/pipeline-runs?".concat((0,x.uM)(r)))},page:Number(o),totalPages:Math.ceil(A/d.Q)})})]})}E.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,p.Z)(E)},60710:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return t(78234)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,2083,8013,600,9696,8264,4666,5499,3943,9774,2888,179],(function(){return n=60710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);