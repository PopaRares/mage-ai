(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1911],{94629:function(e,r,t){"use strict";t.d(r,{Z:function(){return E}});var n=t(82394),i=t(21831),o=t(82684),u=t(50724),s=t(82555),c=t(97618),a=t(70613),d=t(79626),f=t(68899),l=t(28598);function p(e,r){var t=e.children,n=e.noPadding;return(0,l.jsx)(f.HS,{noPadding:n,ref:r,children:t})}var b=o.forwardRef(p),h=t(62547),v=t(82571),O=t(98464),m=t(77417),j=t(46684),w=t(70515),g=t(53808),P=t(19183);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e,r){e.addProjectBreadcrumbToCustomBreadcrumbs;var t=e.after,n=e.afterHeader,p=e.afterHidden,_=e.afterWidth,S=e.afterWidthOverride,E=e.appendBreadcrumbs,Z=e.before,x=e.beforeWidth,R=e.breadcrumbs,k=e.children,C=e.errors,I=e.headerMenuItems,W=e.headerOffset,H=e.hideAfterCompletely,A=e.mainContainerHeader,N=e.navigationItems,B=e.setAfterHidden,M=e.setErrors,T=e.subheaderChildren,D=e.subheaderNoPadding,F=e.title,U=e.uuid,L=(0,P.i)().width,z="dashboard_after_width_".concat(U),G="dashboard_before_width_".concat(U),K=(0,o.useRef)(null),X=(0,o.useState)(S?_:(0,g.U2)(z,_)),V=X[0],$=X[1],q=(0,o.useState)(!1),J=q[0],Q=q[1],Y=(0,o.useState)(Z?Math.max((0,g.U2)(G,x),13*w.iI):null),ee=Y[0],re=Y[1],te=(0,o.useState)(!1),ne=te[0],ie=te[1],oe=(0,o.useState)(null)[1],ue=(0,m.Z)().project,se=[];R&&se.push.apply(se,(0,i.Z)(R)),null!==R&&void 0!==R&&R.length&&!E||!ue||null!==R&&void 0!==R&&R.length||se.unshift({bold:!E,label:function(){return F}}),(0,o.useEffect)((function(){null===K||void 0===K||!K.current||J||ne||null===oe||void 0===oe||oe(K.current.getBoundingClientRect().width)}),[J,V,ne,ee,K,oe,L]),(0,o.useEffect)((function(){J||(0,g.t8)(z,V)}),[p,J,V,z]),(0,o.useEffect)((function(){ne||(0,g.t8)(G,ee)}),[ne,ee,G]);var ce=(0,O.Z)(_);return(0,o.useEffect)((function(){S&&ce!==_&&$(_)}),[S,_,ce]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{title:F}),(0,l.jsx)(d.Z,{breadcrumbs:se,menuItems:I}),(0,l.jsxs)(f.Nk,{ref:r,children:[0!==(null===N||void 0===N?void 0:N.length)&&(0,l.jsx)(f.lm,{showMore:!0,children:(0,l.jsx)(v.Z,{navigationItems:N,showMore:!0})}),(0,l.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,l.jsxs)(h.Z,{after:t,afterHeader:n,afterHeightOffset:j.Mz,afterHidden:p,afterMousedownActive:J,afterWidth:V,before:Z,beforeHeightOffset:j.Mz,beforeMousedownActive:ne,beforeWidth:f.k1+(Z?ee:0),headerOffset:W,hideAfterCompletely:!B||H,leftOffset:Z?f.k1:null,mainContainerHeader:A,mainContainerRef:K,setAfterHidden:B,setAfterMousedownActive:Q,setAfterWidth:$,setBeforeMousedownActive:ie,setBeforeWidth:re,children:[T&&(0,l.jsx)(b,{noPadding:D,children:T}),k]})})]}),C&&(0,l.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===M||void 0===M?void 0:M(null)},children:(0,l.jsx)(s.Z,y(y({},C),{},{onClose:function(){return null===M||void 0===M?void 0:M(null)}}))})]})}var E=o.forwardRef(S)},75083:function(e,r,t){"use strict";t.d(r,{HF:function(){return o},L6:function(){return n}});var n,i=t(72473);function o(e,r,t){var o=e.owner,u=(e.roles,[{Icon:i.Vz,id:n.WORKSPACES,isSelected:function(){return n.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return o&&u.push({Icon:i.NO,id:n.USERS,isSelected:function(){return n.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),u.push.apply(u,[{Icon:i.Zr,id:n.SETTINGS,isSelected:function(){return n.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}},{Icon:i.$B,id:n.FILE_BROWSER,isSelected:function(){return n.FILE_BROWSER===t},label:function(){return"File browser"},linkProps:{href:"/manage/files"}}]),u}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings",e.FILE_BROWSER="file_browser"}(n||(n={}))},59533:function(e,r,t){"use strict";var n=t(82684),i=t(94629),o=t(35686),u=t(70515),s=t(75083),c=t(50178),a=t(28598);r.Z=function(e){var r=e.before,t=e.breadcrumbs,d=void 0===t?[]:t,f=e.children,l=e.errors,p=e.headerOffset,b=e.mainContainerHeader,h=e.pageName,v=e.setErrors,O=e.subheaderChildren,m=o.ZP.statuses.list().data,j=(0,n.useMemo)((function(){var e,r;return null===m||void 0===m||null===(e=m.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.project_type}),[m]),w=(0,c.PR)()||{};return(0,a.jsx)(i.Z,{before:r,beforeWidth:r?50*u.iI:0,breadcrumbs:d,errors:l,headerOffset:p,mainContainerHeader:b,navigationItems:(0,s.HF)(w,j,h),setErrors:v,subheaderChildren:O,title:"Workspaces",uuid:"workspaces/index",children:f})}},12222:function(e,r,t){"use strict";t.r(r);var n=t(77837),i=t(82394),o=t(38860),u=t.n(o),s=t(82684),c=t(34376),a=t(71180),d=t(85854),f=t(93808),l=t(38276),p=t(75499),b=t(30160),h=t(59533),v=t(35686),O=t(98464),m=t(72473),j=t(70515),w=t(75083),g=t(72619),P=t(50178),_=t(42122),y=t(69419),S=t(28598);function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function x(){var e=(0,c.useRouter)(),r=(0,s.useState)(null),t=r[0],n=r[1],i=((0,P.PR)()||{}).owner,o=(0,s.useState)(null),u=o[0],f=o[1],E=v.ZP.users.list({},{revalidateOnFocus:!1}),x=E.data;E.mutate;(0,s.useEffect)((function(){(0,g.bB)(x,n)}),[x]);var R=(0,s.useMemo)((function(){return(null===x||void 0===x?void 0:x.users)||[]}),[null===x||void 0===x?void 0:x.users]),k=v.ZP.users.detail(null===u||void 0===u?void 0:u.user_id,{},{revalidateOnFocus:!1}),C=k.data;k.mutate;(0,s.useEffect)((function(){(0,g.bB)(C,n)}),[C]);var I=null===C||void 0===C?void 0:C.user,W=(0,y.iV)(),H=(0,O.Z)(W);return(0,s.useEffect)((function(){var e=W.add_new_user,r=W.user_id;if(!(0,_.Xy)(W,H)){var t=Z(Z({},H),W);r?t.user_id=r:delete t.user_id,e?t.add_new_user=e:delete t.add_new_user,f(t)}}),[W,H]),(0,S.jsxs)(h.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Users"}}],errors:t,pageName:w.L6.USERS,children:[i&&(0,S.jsx)(l.Z,{p:j.cd,children:(0,S.jsx)(a.ZP,{beforeIcon:(0,S.jsx)(m.mm,{}),onClick:function(){return e.push("/manage/users/new")},primary:!0,children:"Add new user"})}),(0,S.jsx)(l.Z,{p:j.cd,children:(0,S.jsx)(d.Z,{children:"Users"})}),(0,S.jsx)(p.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"Email"},{uuid:"Role"}],isSelectedRow:function(e){var r;return(null===(r=R[e])||void 0===r?void 0:r.id)===(null===I||void 0===I?void 0:I.id)},onClickRow:function(r){var t,n=null===(t=R[r])||void 0===t?void 0:t.id;e.push("/manage/users/[user]","/manage/users/".concat(n))},rows:R.map((function(e){var r=e.email,t=e.roles_display,n=e.roles_new,i=e.username;return[(0,S.jsx)(b.ZP,{bold:!0,children:i},"username"),(0,S.jsx)(b.ZP,{default:!0,children:r},"email"),(0,S.jsx)(b.ZP,{default:!0,children:n&&n[0]?n[0].name:t},"roles")]})),uuid:"pipeline-runs"})]})}x.getInitialProps=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),r.default=(0,f.Z)(x)},72695:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users",function(){return t(12222)}])},80022:function(e,r,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(r,{Z:function(){return n}})},15544:function(e,r,t){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.d(r,{Z:function(){return n}})},13692:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(61049);function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&(0,n.Z)(e,r)}},93189:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(12539),i=t(80022);function o(e,r){if(r&&("object"===n(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}},61049:function(e,r,t){"use strict";function n(e,r){return n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},n(e,r)}t.d(r,{Z:function(){return n}})}},function(e){e.O(0,[2678,1154,844,874,9626,8264,7858,5499,9774,2888,179],(function(){return r=72695,e(e.s=r);var r}));var r=e.O();_N_E=r}]);