"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2474],{81066:function(e,n,t){t.d(n,{B:function(){return f}});var o=t(82394),r=t(46732),i=t(93369),l=t(72473),c=t(8059),u=t(70515),a=t(28598);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,o=e.isLoading,d=e.label,p=e.menuItems,b=e.onClick,h=e.onClickCallback;return(0,a.jsx)(r.Z,{disableKeyboardShortcuts:!0,items:p,onClickCallback:h,onClickOutside:h,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,a.jsx)(i.ZP,s(s({},f),{},{background:c.eW,beforeElement:(0,a.jsx)(l.Add,{size:2.5*u.iI}),loading:o,onClick:function(e){e.preventDefault(),null===b||void 0===b||b()},uuid:"shared/AddButton/index",children:d}))})}},55072:function(e,n,t){t.d(n,{Et:function(){return f},Q:function(){return s}});t(82684);var o=t(71180),r=t(55485),i=t(38276),l=t(31748),c=t(72473),u=t(79633),a=t(70515),d=t(28598),s=30,f=9;n.ZP=function(e){var n=e.page,t=e.maxPages,s=e.onUpdate,f=e.totalPages,p=[],b=t;if(b>f)p=Array.from({length:f},(function(e,n){return n}));else{var h=Math.floor(b/2),g=n-h;n+h>=f?(g=f-b+2,b-=2):n-h<=0?(g=0,b-=2):(b-=4,g=n-Math.floor(b/2)),p=Array.from({length:b},(function(e,n){return n+g}))}return(0,d.jsx)(d.Fragment,{children:f>0&&(0,d.jsxs)(r.ZP,{alignItems:"center",children:[(0,d.jsx)(o.ZP,{disabled:0===n,onClick:function(){return s(n-1)},children:(0,d.jsx)(c.PaginateArrowLeft,{size:1.5*a.iI,stroke:l.Av})}),!p.includes(0)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(o.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return s(0)},children:1})},0),!p.includes(1)&&(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(o.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(o.ZP,{backgroundColor:e===n&&u.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&s(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,d.jsxs)(d.Fragment,{children:[!p.includes(f-2)&&(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(o.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(o.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return s(f-1)},children:f})},f-1)]}),(0,d.jsx)(i.Z,{ml:1}),(0,d.jsx)(o.ZP,{disabled:n===f-1,onClick:function(){return s(n+1)},children:(0,d.jsx)(c.PaginateArrowRight,{size:1.5*a.iI,stroke:l.Av})})]})})}},35526:function(e,n,t){t.d(n,{Au:function(){return d},I6:function(){return u},Nb:function(){return o},OK:function(){return a},hZ:function(){return f},k2:function(){return s}});var o,r=t(42631),i=t(72473),l=t(70515),c=t(28598),u="".concat(1.5*l.iI,"px"),a=40*l.iI,d=58;!function(e){e[e.FIRST=1]="FIRST",e[e.SECOND=2]="SECOND"}(o||(o={}));var s={autoHide:!0,size:null,widthFitContent:!0},f={afterIconSize:1.5*l.iI,beforeIcon:(0,c.jsx)(i.Search,{}),borderRadius:r.n_,defaultColor:!0,fullWidth:!0,greyBorder:!0,maxWidth:40*l.iI}},85544:function(e,n,t){t.d(n,{Z:function(){return $}});var o=t(82394),r=t(75582),i=t(82684),l=t(81066),c=t(79757),u=t(50724),a=t(97618),d=t(55485),s=t(46732),f=t(93369),p=t(89515),b=t(38276),h=t(30160),g=t(17488),j=t(71180),m=t(69650),x=t(25976),y=t(44897),v=t(42631),k=t(47041),O=t(70515),C=74*O.iI,Z=48*O.iI,P=x.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-18n432u-0"})(["position:absolute;border-radius:","px;overflow:hidden;width:","px;display:none;"," "," "," "," ",""],v.n_,C,(function(e){return"\n    background-color: ".concat((e.theme||y.Z).background.panel,";\n    border: ").concat(v.mP,"px ").concat(v.M8," ").concat((e.theme||y.Z).interactive.defaultBackground,";\n    box-shadow: ").concat((e.theme.shadow||y.Z.shadow).window,";\n  ")}),(function(e){return e.display&&"\n    display: block;\n  "}),(function(e){return e.compact&&"\n    width: ".concat(.75*C,"px;\n  ")}),(function(e){return"undefined"!==typeof e.left&&"\n    left: ".concat(e.left,"px;\n  ")}),(function(e){return"undefined"!==typeof e.top&&"\n    top: ".concat(e.top,"px;\n  ")})),I=x.default.div.withConfig({displayName:"indexstyle__MainStyle",componentId:"sc-18n432u-1"})(["display:flex;border-radius:","px;overflow:hidden;height:","px;"," ",""],v.n_,Z,(function(e){return"\n    background-color: ".concat((e.theme||y.Z).background.content,";\n    border: ").concat(v.YF,"px ").concat(v.M8," ").concat((e.theme||y.Z).interactive.defaultBackground,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(Z/2,"px;\n  ")})),w=x.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-18n432u-2"})(["width:100%;overflow:auto;"," ",""],k.w5,(function(e){return"\n    border-right: ".concat(v.YF,"px ").concat(v.M8," ").concat((e.theme||y.Z).background.panel,";\n  ")})),S=x.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-18n432u-3"})(["width:100%;overflow:auto;",""],k.w5),B=(0,x.css)(["display:flex;align-items:center;justify-content:space-between;padding:","px ","px;"],O.iI,2*O.iI),M=x.default.div.withConfig({displayName:"indexstyle__OptionStyle",componentId:"sc-18n432u-4"})([""," padding-top:","px;padding-bottom:","px;&:hover{cursor:pointer;","}",""],B,1.5*O.iI,1.5*O.iI,(function(e){return"\n      background-color: ".concat((e.theme||y.Z).monotone.black,";\n    ")}),(function(e){return e.highlighted&&"\n    background-color: ".concat((e.theme||y.Z).monotone.black,";\n  ")})),T=x.default.div.withConfig({displayName:"indexstyle__ToggleValueStyle",componentId:"sc-18n432u-5"})([""," ",""],B,(function(e){return"\n    border-bottom: ".concat(v.YF,"px ").concat(v.M8," ").concat((e.theme||y.Z).borders.medium2,";\n  ")})),D=t(72473),A=t(15610),E=t(11498),R=t(81728),F=t(28598);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function(e){var n,t,l,c=e.children,s=e.compact,f=e.onClickCallback,p=e.onClickOutside,g=e.onSecondaryClick,x=e.open,y=e.options,v=void 0===y?{}:y,k=e.parentRef,O=e.query,C=e.resetLimitOnApply,Z=e.resetPageOnApply,B=e.setOpen,_=e.toggleValueMapping,N=(0,i.useState)(null),z=N[0],V=N[1],K=(0,i.useState)(v),G=K[0],q=K[1];(0,i.useEffect)((function(){q(v)}),[v]);var W=((null===k||void 0===k||null===(n=k.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).top,Y=void 0===W?0:W,$=Object.keys(v);return(0,F.jsxs)(u.Z,{onClickOutside:p,open:!0,children:[(0,F.jsx)("div",{ref:k,children:c}),(0,F.jsxs)(P,{compact:s,display:x,top:Y-5,children:[(0,F.jsxs)(I,{compact:s,children:[(0,F.jsx)(a.Z,{flex:"1",children:(0,F.jsx)(w,{children:$.map((function(e){return(0,F.jsxs)(M,{highlighted:z===e,onMouseEnter:function(){return V(e)},children:[(0,F.jsx)(h.ZP,{children:(0,R.J3)((0,R.kC)(e))}),(0,F.jsx)(D.ChevronRight,{})]},e)}))})}),(0,F.jsx)(a.Z,{flex:"2",children:(0,F.jsx)(S,{children:z&&Object.entries((null===(l=G||v)||void 0===l?void 0:l[z])||{}).map((function(e){var n,t=(0,r.Z)(e,2),i=t[0],l=t[1],c=null===_||void 0===_?void 0:_[z],u=("function"===typeof(null===c||void 0===c?void 0:c[i])?(0,R.kC)(null===c||void 0===c||null===(n=c[i])||void 0===n?void 0:n.call(c)):null===c||void 0===c?void 0:c[i])||i;return(0,F.jsxs)(T,{children:[(0,F.jsx)(h.ZP,{title:c?null:u,width:200,children:u}),(0,F.jsx)(m.Z,{checked:l,onCheck:function(){return q((function(e){return L(L({},e),{},(0,o.Z)({},z,L(L({},null===e||void 0===e?void 0:e[z]),{},(0,o.Z)({},i,!l))))}))}})]},i)}))})})]}),(0,F.jsx)(b.Z,{m:1,children:(0,F.jsxs)(d.ZP,{children:[(0,F.jsx)(j.ZP,{onClick:function(){var e=Object.entries(G).reduce((function(e,n){var t=(0,r.Z)(n,2),o=t[0],i=t[1],l=[];return Object.entries(i).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0];return n[1]&&l.push(t)})),e[o]=l,e}),{});null===f||void 0===f||f(O,e);var n={addingMultipleValues:!0,pushHistory:!0,resetLimitParams:C,resetPage:Z};null!==O&&void 0!==O&&O[E.$D.LIMIT]&&(n.itemsPerPage=+(null===O||void 0===O?void 0:O[E.$D.LIMIT])),(0,A.g)(O,e,n)},secondary:!0,children:"Apply"}),(0,F.jsx)(b.Z,{mr:1}),(0,F.jsx)(j.ZP,{noBackground:!0,onClick:function(){B(!1),null===g||void 0===g||g()},children:"Defaults"})]})})]})]})},z=t(12468),V=t(35526),K=t(24944),G=t(42122),q=t(50178);function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(e){var n=e.addButtonProps,t=e.children,o=e.deleteRowProps,j=e.extraActionButtonProps,m=e.filterOptions,x=void 0===m?{}:m,y=e.filterValueLabelMapping,v=e.groupButtonProps,k=e.moreActionsMenuItems,C=e.onClickFilterDefaults,Z=e.onFilterApply,P=e.query,I=void 0===P?{}:P,w=e.resetLimitOnFilterApply,S=e.resetPageOnFilterApply,B=e.secondaryButtonProps,M=e.searchProps,T=e.selectedRowId,A=e.setSelectedRow,E=e.showDivider,R=(0,q.Ct)(),_=(0,i.useRef)(null),L=(0,i.useRef)(null),W=(0,i.useRef)(null),$=(0,i.useRef)(null),H=(0,i.useRef)(null),J=(0,i.useState)(!1),Q=J[0],U=J[1],X=(0,i.useState)(!1),ee=X[0],ne=X[1],te=(0,i.useState)(!1),oe=te[0],re=te[1],ie=(0,i.useState)(!1),le=ie[0],ce=ie[1],ue=(0,i.useState)(null),ae=ue[0],de=ue[1],se=!T,fe=(0,i.useCallback)((function(){return U(!1)}),[]),pe=(0,i.useCallback)((function(){return ne(!1)}),[]),be=(0,i.useCallback)((function(){return re(!1)}),[]),he=(0,i.useCallback)((function(){return ce(null)}),[]),ge=(0,i.useCallback)((function(){return de(null)}),[]),je=j||{},me=je.Icon,xe=je.confirmationDescription,ye=je.confirmationMessage,ve=je.isLoading,ke=je.label,Oe=je.onClick,Ce=je.openConfirmationDialogue,Ze=je.tooltip,Pe=o||{},Ie=Pe.confirmationMessage,we=Pe.isLoading,Se=Pe.item,Be=Pe.onDelete,Me=M||{},Te=Me.placeholder,De=Me.onChange,Ae=Me.value,Ee=(0,i.useMemo)((function(){return Object.entries(x).reduce((function(e,n){var t=(0,r.Z)(n,2),o=t[0],i=t[1];return e[o]={},i.forEach((function(n){var t,r=(null===(t=I["".concat(o,"[]")])||void 0===t?void 0:t.includes(n))||!1;e[o][n]=r})),e}),{})}),[x,I]),Re=n||{},Fe=Re.label,_e=Re.menuItems,Le=Re.onClick,Ne=Re.isLoading,ze=(0,i.useMemo)((function(){return(0,F.jsx)(l.Z,{addButtonMenuOpen:Q,addButtonMenuRef:_,isLoading:Ne,label:Fe,menuItems:_e,onClick:Le||function(){return U((function(e){return!e}))},onClickCallback:fe})}),[Fe,_e,Q,fe,Ne,Le]),Ve=B||{},Ke=Ve.beforeIcon,Ge=Ve.disabled,qe=Ve.label,We=Ve.onClick,Ye=Ve.isLoading,$e=Ve.tooltip,He=(0,i.useMemo)((function(){return(0,F.jsx)(f.ZP,{beforeElement:Ke,bold:!0,disabled:Ge,greyBorder:!0,loading:Ye,onClick:We,outline:!0,paddingBottom:9,paddingTop:9,title:$e,uuid:"Table/Toolbar/SecondaryButton",children:qe})}),[Ye,We,Ke,Ge,qe,$e]),Je=(0,i.useMemo)((function(){return(0,G.dw)(Ee)}),[Ee]),Qe=(0,i.useMemo)((function(){return(0,F.jsx)(N,{compact:!0,onClickCallback:function(e,n){Z&&(null===Z||void 0===Z||Z(e,n)),pe&&(null===pe||void 0===pe||pe())},onClickOutside:pe,onSecondaryClick:C,open:ee,options:Ee,parentRef:L,query:I,resetLimitOnApply:w,resetPageOnApply:S,setOpen:ne,toggleValueMapping:y,children:(0,F.jsx)(f.ZP,Y(Y({},l.B),{},{afterElement:Je>0?(0,F.jsx)(c.Z,{cyan:!0,noVerticalPadding:!0,children:(0,F.jsx)(h.ZP,{bold:!0,inverted:!0,children:Je})}):null,beforeElement:(0,F.jsx)(D.Filter,{size:2*O.iI}),onClick:function(){return ne((function(e){return!e}))},uuid:"Table/Toolbar/FilterButton",children:"Filter"}))})}),[pe,ee,Ee,y,Je,C,Z,I,w,S]),Ue=v||{},Xe=Ue.groupByLabel,en=Ue.menuItems,nn=(0,i.useMemo)((function(){return(0,F.jsx)(s.Z,{disableKeyboardShortcuts:!0,items:en,onClickCallback:be,onClickOutside:be,open:oe,parentRef:W,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/GroupMenu",children:(0,F.jsx)(f.ZP,Y(Y({},l.B),{},{beforeElement:(0,F.jsx)(D.Group,{size:2.5*O.iI}),onClick:function(){re((function(e){return!e}))},uuid:"Table/Toolbar/GroupButton",children:Xe?"Grouped by ".concat(Xe):"Group"}))})}),[be,oe,Xe,en]),tn=(0,i.useMemo)((function(){return(0,F.jsx)(s.Z,{disableKeyboardShortcuts:!0,items:k,onClickCallback:he,onClickOutside:he,open:le,parentRef:$,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/MoreActionsMenu",children:(0,F.jsx)(z.Z,Y(Y({},V.k2),{},{label:"More actions",children:(0,F.jsx)(f.ZP,{Icon:D.Ellipsis,bold:!0,disabled:se,greyBorder:!0,onClick:function(){return ce((function(e){return!e}))},smallIcon:!0,uuid:"Table/Toolbar/MoreActionsButton"})}))})}),[he,se,le,k]);return(0,F.jsxs)(d.ZP,{alignItems:"center",children:[n&&ze,B&&(0,F.jsx)(b.Z,{ml:1,children:He}),t,E&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(b.Z,{ml:"12px"}),(0,F.jsx)(K.lZ,{})]}),(n||B||t)&&(0,F.jsx)(b.Z,{mr:V.I6}),Qe,(null===en||void 0===en?void 0:en.length)>0&&(0,F.jsx)(b.Z,{ml:V.I6,children:nn}),!R&&Oe&&(0,F.jsxs)(b.Z,{ml:V.I6,children:[(0,F.jsx)(z.Z,Y(Y({},V.k2),{},{label:Ze,children:(0,F.jsx)(f.ZP,{Icon:!ve&&me,bold:!0,disabled:se,greyBorder:!0,loading:ve,onClick:Ce?function(){return de(V.Nb.FIRST)}:Oe,smallIcon:!0,uuid:"Table/Toolbar/ExtraActionButton",children:ke})})),(0,F.jsx)(u.Z,{onClickOutside:ge,open:ae===V.Nb.FIRST,children:(0,F.jsx)(p.Z,{onCancel:ge,onClick:function(){null===Oe||void 0===Oe||Oe(),ge(),null===A||void 0===A||A(null)},subtitle:xe,title:ye,top:V.Au,width:V.OK})})]}),!R&&Be&&(0,F.jsxs)(b.Z,{ml:V.I6,children:[(0,F.jsx)(z.Z,Y(Y({},V.k2),{},{label:"Delete ".concat(Se),children:(0,F.jsx)(f.ZP,{Icon:!we&&D.Trash,bold:!0,disabled:se,greyBorder:!0,loading:we,onClick:function(){return de(V.Nb.SECOND)},smallIcon:!0,uuid:"Table/Toolbar/DeleteButton"})})),(0,F.jsx)(u.Z,{onClickOutside:ge,open:ae===V.Nb.SECOND,children:(0,F.jsx)(p.Z,{danger:!0,onCancel:ge,onClick:function(){null===Be||void 0===Be||Be(T),ge(),null===A||void 0===A||A(null)},subtitle:Ie,title:"Are you sure you want to delete the ".concat(Se," ").concat(T,"?"),top:V.Au,width:V.OK})})]}),!R&&(null===k||void 0===k?void 0:k.length)>0&&(0,F.jsx)(b.Z,{ml:V.I6,children:tn}),De&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(b.Z,{ml:V.I6}),(0,F.jsx)(a.Z,{flex:1,children:(0,F.jsx)(g.Z,Y(Y({},V.hZ),{},{afterIcon:Ae?(0,F.jsx)(D.Close,{}):null,afterIconClick:function(){var e;De(""),null===H||void 0===H||null===(e=H.current)||void 0===e||e.focus()},onChange:function(e){return De(e.target.value)},paddingVertical:9,placeholder:Te||null,ref:H,value:Ae}))})]})]})}}}]);