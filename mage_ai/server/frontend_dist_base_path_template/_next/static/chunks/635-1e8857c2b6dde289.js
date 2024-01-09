"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{4006:function(t,e,n){n.d(e,{Z:function(){return dt}});var r=n(75582),i=n(82394),o=n(92083),a=n.n(o),l=n(26304),c=n(26226),s=n(84969),d=n(90948),u=n(65743),h=n(39048),f=n(79487),p=n(29989),x=n(61655),y=n(16853),m=n(65376),g=n(55485),v=n(30160),j=n(94035),b=n(95363),k=n(70515),Z=n(21831),O=n(82684),w=n(25976),S=n(48072),L=n(24903),P=n(98677),T=n(84181),A=n(44897),I=n(79633),M=n(61896),E=n(81728);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var F={bottom:k.iI*(3+k.cd),left:k.iI*k.cd,right:k.iI*k.cd,top:k.iI*k.cd};function N(t,e){return Math.max.apply(Math,(0,Z.Z)(t.map(e)))}function _(t){var e=t.data,n=t.height,r=t.keyForYData,i=t.large,o=t.margin,a=void 0===o?{}:o,l=t.orientationVertical,c=void 0!==l&&l,s=t.showTooltip,d=t.width,u=t.yLabelFormat,h=(0,O.useContext)(w.ThemeContext),f=(0,O.useCallback)((function(t){return t[r]}),[r]),p=u;p||(p=function(t){return t.length>20?"".concat(t.substring(0,20),"..."):t});var x=i?M.iD:M.J5,y=D(D({},F),a),m=e.slice(Math.max(0,e.length-50)),g=(0,O.useMemo)((function(){return Object.keys((null===m||void 0===m?void 0:m[0])||{}).filter((function(t){return t!==r}))}),[m,r]),v=(0,L.Z)({domain:g,range:[I.a$,I.Ej,I.hM,I.ZA,I.$R,I.X_,I.er,I.hl,I.nQ]}),j=(0,O.useMemo)((function(){return m.map(f)}),[m,f]),b=(0,P.Z)({domain:j,padding:.1}),k=(0,P.Z)({domain:g,padding:.1}),C=(0,T.Z)({domain:[0,N(m,(function(t){return N(g,(function(e){return Number(t[e])}))}))]}),_={active:(null===h||void 0===h?void 0:h.content.default)||A.Z.content.default,backgroundPrimary:(null===h||void 0===h?void 0:h.chart.backgroundPrimary)||A.Z.chart.backgroundPrimary,backgroundSecondary:(null===h||void 0===h?void 0:h.chart.backgroundSecondary)||A.Z.chart.backgroundSecondary,muted:(null===h||void 0===h?void 0:h.content.muted)||A.Z.content.muted,primary:(null===h||void 0===h?void 0:h.chart.primary)||A.Z.chart.primary,tooltipBackground:(null===h||void 0===h?void 0:h.background.navigation)||A.Z.background.navigation},R=j;c&&(R=m.reduce((function(t,e){return t.concat(g.map((function(t){var n=e[t];return(0,E.HW)(n)?parseInt(String(n)):n})))}),[]));var B=Math.min(Math.max.apply(Math,(0,Z.Z)(R.map((function(t){return String(t).length})))),20);y.left+=7*B;var V=d-(y.left+y.right),H=n-(y.top+y.bottom);c?(b.rangeRound([0,V]),C.rangeRound([H,0])):(b.rangeRound([H,0]),C.rangeRound([0,V])),k.rangeRound([0,b.bandwidth()]);var Y=m.map(f).length,z=0;c||(z=b(R[Y-1]));var J=(0,O.useCallback)((function(t){var e=(0,S.Z)(t)||{x:0,y:0},n=e.x,r=e.y,i=n-y.left,o=r-y.top,a=0;a=c?(i-z/2)/(V-z):1-(o-z/2)/(H-z);var l=Math.floor(a*Y),d=m[l];"undefined"===typeof d&&(d=m[l-1]),c?i>z&&i<V+y.left-z&&s({tooltipData:d,tooltipLeft:n,tooltipTop:r}):o>z&&o<H-z&&s({tooltipData:d,tooltipLeft:n,tooltipTop:r})}),[m,Y,y.left,y.top,c,s,z,V,H]);return{colorScale:v,colors:_,data:m,fontSize:x,handleTooltip:J,margin:y,tempScale:C,tickValues:R,xKeys:g,xMax:V,y1Scale:k,yLabelFormat:p,yMax:H,yScale:b,ySerialize:f}}var R=n(28598),B=["height","width","xAxisLabel","yAxisLabel"];function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Y=3*k.iI,z=(k.iI,k.iI,k.iI,(0,x.Z)((function(t){var e=t.data,n=t.height,i=t.hideTooltip,o=t.keyForYData,a=void 0===o?"__y":o,l=t.large,c=t.margin,x=void 0===c?{}:c,g=t.renderNoDataText,j=t.renderTooltipContent,k=t.showTooltip,Z=t.tooltipData,O=t.tooltipLeft,w=t.tooltipOpen,S=t.tooltipTop,L=t.width,P=t.xAxisLabel,T=t.xNumTicks,A=t.yLabelFormat,I=_({data:e,height:n,keyForYData:a,large:l,margin:x,showTooltip:k,width:L,yLabelFormat:A}),M=I.colorScale,C=I.colors,D=I.data,F=I.fontSize,N=I.handleTooltip,B=I.margin,V=I.tempScale,z=I.tickValues,J=I.xKeys,W=I.xMax,X=I.y1Scale,G=I.yLabelFormat,K=I.yMax,q=I.yScale,Q=I.ySerialize,U=[];Math.min((null===z||void 0===z?void 0:z.length)||0,Math.floor(n/Y));return null===z||void 0===z||z.forEach((function(t){U.push(t)})),L<10?null:(0,R.jsxs)("div",{children:[(0,R.jsxs)("svg",{height:n,width:L,children:[g&&!(null!==D&&void 0!==D&&D.length)&&(0,R.jsx)("text",{fill:C.active,dominantBaseline:"middle",textAnchor:"middle",fontFamily:b.ry,fontSize:F,x:"50%",y:"50%",children:g()}),(0,R.jsx)(u.Z,{fill:"transparent",height:n-(B.top+B.bottom),onMouseLeave:function(){return i()},onMouseMove:N,onTouchMove:N,onTouchStart:N,rx:14,width:L-(B.left+B.right),x:B.left,y:B.top}),(null===D||void 0===D?void 0:D.length)&&(0,R.jsxs)(p.Z,{left:B.left,top:B.top,children:[(0,R.jsx)(h.Z,{color:M,data:D,keys:J,width:W,xScale:V,y0:Q,y0Scale:q,y1Scale:X,children:function(t){return t.map((function(t){return(0,R.jsx)(p.Z,{top:t.y0,children:t.bars.map((function(e){return(0,R.jsx)("g",{children:(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("rect",{fill:e.color,height:e.height,pointerEvents:"none",rx:4,width:e.width,x:e.x,y:e.y})})},"".concat(t.index,"-").concat(e.index,"-").concat(e.key))}))},"bar-group-horizontal-".concat(t.index,"-").concat(t.y0))}))}}),(0,R.jsx)(s.Z,{hideTicks:!0,scale:q,stroke:C.muted,tickFormat:function(t){return G(t)},tickLabelProps:function(){return{fill:C.active,fontFamily:b.ry,fontSize:F,style:{width:"10px"},textAnchor:"end"}},tickStroke:C.muted,tickValues:U,top:2}),(0,R.jsx)(d.Z,{label:P,labelProps:{fill:C.muted,fontFamily:b.ry,fontSize:F,textAnchor:"middle"},numTicks:T,scale:V,stroke:C.muted,tickLabelProps:function(){return{fill:C.active,fontFamily:b.ry,fontSize:F,textAnchor:"middle"}},tickStroke:C.muted,top:K})]}),Z&&(0,R.jsx)("g",{children:(0,R.jsx)(f.Z,{from:{x:B.left,y:S},pointerEvents:"none",stroke:C.active,strokeDasharray:"5,2",strokeWidth:1,to:{x:W+B.left,y:S}})})]}),w&&Z&&(0,R.jsxs)(y.Z,{left:O,style:H(H({},m.j),{},{backgroundColor:C.tooltipBackground}),top:S,children:[j&&j(Z),!j&&Object.entries(Z).map((function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];if(a!==n){var o=i;return(0,E.HW)(o)&&String(o).split(".").length>=2&&(o=o.toFixed(4)),(0,R.jsxs)(v.ZP,{inverted:!0,small:!0,children:[n,": ",o]},n)}}))]})]})})));var J=function(t){var e,n=t.height,r=t.width,i=t.xAxisLabel,o=t.yAxisLabel,a=(0,l.Z)(t,B);return e="undefined"===typeof r?"100%":o?0===r?r:r-28:r,(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{style:{display:"flex",height:n,marginBottom:i?k.iI:null,width:"100%"},children:[o&&(0,R.jsx)(g.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,R.jsx)(j.Z,{children:(0,R.jsx)(v.ZP,{center:!0,muted:!0,small:!0,children:o})})}),(0,R.jsx)("div",{style:{height:n,width:e},children:(0,R.jsx)(c.Z,{children:function(t){var e=t.width,n=t.height;return(0,R.jsx)(z,H(H({},a),{},{height:n,width:e}))}})})]}),i&&(0,R.jsx)("div",{style:{paddingLeft:o?36:0,paddingTop:4},children:(0,R.jsx)(v.ZP,{center:!0,muted:!0,small:!0,children:i})})]})},W=n(95422),X=["keyForYData"],G=["height","width","xAxisLabel","yAxisLabel"];function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q=6*k.iI,U=(0,x.Z)((function(t){var e=t.keyForYData,n=void 0===e?"__y":e,i=(0,l.Z)(t,X),o=i.height,a=i.hideTooltip,c=i.renderNoDataText,h=i.renderTooltipContent,x=i.tooltipData,g=i.tooltipLeft,j=i.tooltipOpen,k=i.tooltipTop,Z=i.width,O=i.xLabelFormat,w=i.xNumTicks,S=i.yNumTicks,L=_(q(q({},i),{},{keyForYData:n,orientationVertical:!0})),P=L.colorScale,T=L.colors,A=L.data,I=L.fontSize,M=L.handleTooltip,C=L.margin,D=L.tempScale,F=(L.tickValues,L.xKeys),N=(L.xMax,L.y1Scale),B=L.yLabelFormat,V=L.yMax,H=L.yScale,Y=L.ySerialize,z=Math.min(w,Z/Q);return Z<10?null:(0,R.jsxs)("div",{children:[(0,R.jsxs)("svg",{height:o,width:Z,children:[c&&!(null!==A&&void 0!==A&&A.length)&&(0,R.jsx)("text",{fill:T.active,dominantBaseline:"middle",textAnchor:"middle",fontFamily:b.ry,fontSize:I,x:"50%",y:"50%",children:c()}),(null===A||void 0===A?void 0:A.length)&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u.Z,{fill:"transparent",height:o-(C.top+C.bottom),onMouseLeave:function(){return a()},onMouseMove:M,onTouchMove:M,onTouchStart:M,rx:14,width:Z-(C.left+C.right),x:C.left,y:2*C.top}),(0,R.jsxs)(p.Z,{top:C.top,children:[(0,R.jsx)(W.Z,{color:P,data:A,height:V,keys:F,x0:Y,x0Scale:H,x1Scale:N,yScale:D,children:function(t){return t.map((function(t){return(0,R.jsx)(p.Z,{left:t.x0+C.left,top:C.top,children:t.bars.map((function(e){return(0,R.jsx)("g",{children:(0,R.jsx)("rect",{fill:e.color,height:e.height,pointerEvents:"none",rx:4,width:e.width,x:e.x,y:e.y})},"".concat(t.index,"-").concat(e.index,"-").concat(e.key))}))},"bar-group-horizontal-".concat(t.index,"-").concat(t.x0))}))}}),(0,R.jsx)(s.Z,{left:C.left,numTicks:S,scale:D,stroke:T.muted,tickFormat:function(t){return B(t)},tickLabelProps:function(){return{fill:T.active,fontFamily:b.ry,fontSize:I,textAnchor:"end",transform:"translate(-2,2.5)"}},tickStroke:T.muted,top:C.top}),(0,R.jsx)(d.Z,{hideTicks:!0,left:C.left,numTicks:z,scale:H,stroke:T.muted,tickFormat:O,tickLabelProps:function(){return{fill:T.active,fontFamily:b.ry,fontSize:I,textAnchor:"middle"}},tickStroke:T.muted,top:V+C.top})]})]}),x&&(0,R.jsx)("g",{children:(0,R.jsx)(f.Z,{from:{x:g,y:2*C.top},pointerEvents:"none",stroke:T.active,strokeDasharray:"5,2",strokeWidth:1,to:{x:g,y:V+2*C.top}})})]}),j&&x&&(0,R.jsxs)(y.Z,{left:g,style:q(q({},m.j),{},{backgroundColor:T.tooltipBackground}),top:k,children:[h&&h(x),!h&&Object.entries(x).map((function(t){var e=(0,r.Z)(t,2),i=e[0],o=e[1];if(n!==i){var a=o;return(0,E.HW)(a)&&String(a).split(".").length>=2&&(a=a.toFixed(4)),(0,R.jsxs)(v.ZP,{inverted:!0,small:!0,children:[i,": ",a]},i)}})),(0,R.jsx)("br",{}),(0,R.jsxs)(v.ZP,{inverted:!0,small:!0,children:[O&&O(Y(x)),!O&&Y(x)]})]})]})}));var $=function(t){var e=t.height,n=t.width,r=t.xAxisLabel,i=t.yAxisLabel,o=(0,l.Z)(t,G);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{style:{display:"flex",height:e,marginBottom:r?k.iI:null,width:"100%"},children:[i&&(0,R.jsx)(g.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,R.jsx)(j.Z,{children:(0,R.jsx)(v.ZP,{center:!0,muted:!0,small:!0,children:i})})}),(0,R.jsx)("div",{style:{height:e,width:i?0===n?n:n-28:n},children:(0,R.jsx)(c.Z,{children:function(t){var e=t.height,n=t.width;return(0,R.jsx)(U,q(q({},o),{},{height:e,width:n}))}})})]}),r&&(0,R.jsx)("div",{style:{paddingLeft:i?36:0,paddingTop:4},children:(0,R.jsx)(v.ZP,{center:!0,muted:!0,small:!0,children:r})})]})},tt=n(93859),et=n(52729),nt=n(74168),rt=n(87862),it=n(97301),ot=n(35058),at=n(3917),lt=n(86735);function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var dt=function(t){var e,n=t.block,o=t.data,l=t.width,c=t.xAxisLabel,s=n.configuration,d=void 0===s?{}:s,u=d||{},h=u.chart_style,f=u.chart_type,p=u.y_sort_order,x=d[ot.JJ]||it.lA,y=(null===d||void 0===d||null===(e=d[ot.bE])||void 0===e?void 0:e.map((function(t){return(0,ot.c0)(t)})))||[],m=at.n1,g=d[ot.Yg];if([ot.aE.HOUR,ot.aE.MINUTE,ot.aE.SECOND].includes(g)&&(m=at.OC),ot.oV.BAR_CHART===f||ot.oV.TIME_SERIES_BAR_CHART===f){var j=o.x,b=o.y,Z=ot.oV.TIME_SERIES_BAR_CHART===f;if(j&&b&&Array.isArray(j)&&Array.isArray(b)){var O,w=null===(O=d[ot.eN])||void 0===O?void 0:O.join(", "),S=null===y||void 0===y?void 0:y.join(", ");y.length||y.push(ot.rj);var L=y[0],P=j.map((function(t,e){return st({__y:t},y.reduce((function(t,n,r){var o,a=null===b||void 0===b||null===(o=b[r])||void 0===o?void 0:o[e];return"undefined"===typeof a?t:st(st({},t),{},(0,i.Z)({},n,a))}),{}))}));ot.JT.HORIZONTAL===h?ot.MP.ASCENDING===p?P=(0,lt.YC)(P,(function(t){return t[L]}),{ascending:!1}):ot.MP.DESCENDING===p&&(P=(0,lt.YC)(P,(function(t){return t[L]}),{ascending:!0})):ot.JT.VERTICAL===h&&(ot.MP.ASCENDING===p?P=(0,lt.YC)(P,(function(t){return t[L]}),{ascending:!0}):ot.MP.DESCENDING===p&&(P=(0,lt.YC)(P,(function(t){return t[L]}),{ascending:!1})));var T={data:P,height:x,renderNoDataText:function(){return"No data matching query"},width:l,xNumTicks:3};return ot.JT.HORIZONTAL===h?(0,R.jsx)(J,st(st({},T),{},{xAxisLabel:S||d[ot.rj],yAxisLabel:c||w||d[ot.a3]})):(0,R.jsx)($,st(st({},T),{},{xAxisLabel:c||w,xLabelFormat:function(t){return Z?a()(1e3*t).format(at.n1):t},xNumTicks:P.length,yAxisLabel:S,yNumTicks:5}))}}else if(ot.oV.HISTOGRAM===f){var A,I=o.x,M=o.y,C=null===(A=d[ot.eN])||void 0===A?void 0:A.join(", ");if(I&&M&&Array.isArray(I))return(0,R.jsx)(et.Z,{data:I.map((function(t,e){var n,r=t.max,i=t.min;return[r,null===M||void 0===M||null===(n=M[e])||void 0===n?void 0:n.value,i]})),height:x,width:l,large:!0,margin:{left:5*k.iI,right:1*k.iI,top:3*k.iI},noPadding:!0,renderTooltipContent:function(t){var e=(0,r.Z)(t,3),n=e[0],i=e[1],o=e[2];return(0,R.jsxs)(v.ZP,{inverted:!0,monospace:!0,small:!0,children:["Count : ",i,(0,R.jsx)("br",{}),"Bucket: ",o,"-",n]})},showAxisLabels:!0,showYAxisLabels:!0,showZeroes:!0,sortData:function(t){return(0,lt.YC)(t,"[0]")},xAxisLabel:c||C||d[ot.a3],yAxisLabel:C?"count(".concat(C,")"):d[ot.rj]})}else if(ot.oV.LINE_CHART===f||ot.oV.TIME_SERIES_LINE_CHART===f){var D=o.x,F=o.y,N=ot.oV.TIME_SERIES_LINE_CHART===f;if(D&&F&&Array.isArray(D)&&Array.isArray(F)&&Array.isArray(null===F||void 0===F?void 0:F[0])){var _,B=y;d[ot.e]&&(B=d[ot.e].split(",").map((function(t){return t.trim()})));var V=D.map((function(t,e){return{x:t,y:(0,lt.w6)(F.length).map((function(t,n){var r=F[n][e];return"undefined"===typeof r||null===r?0:r}))}})),H=null===(_=d[ot.eN])||void 0===_?void 0:_.join(", "),Y=y.join(", ");return(0,R.jsx)(nt.Z,{data:V,height:x,lineLegendNames:B,margin:{bottom:8*k.iI,left:5*k.iI},noCurve:!0,renderXTooltipContent:function(t){t.index;var e=t.x,n=d[ot.a3],r=e;return d[ot.eN]&&(n=d[ot.eN].map(String).join(", ")),N&&(r=a()(1e3*e).format(m)),(0,R.jsxs)(v.ZP,{inverted:!0,small:!0,children:[n,": ",r]})},renderYTooltipContent:function(t,e){var n=t.y;return(0,R.jsxs)(v.ZP,{inverted:!0,small:!0,children:[B&&B[e]&&"".concat(B[e],": "),n&&(0,E.x6)((0,E.QV)(n[e],4))]})},width:l?l-(3*k.iI+3):l,xAxisLabel:c||H||String(d[ot.a3]||""),xLabelFormat:function(t){return N?a()(1e3*t).format(at.n1):t},yAxisLabel:Y||String(d[ot.rj]),yLabelFormat:function(t){return t}})}}else if(ot.oV.PIE_CHART===f){var z,W=o[String(d[ot.a3]||ot.a3)],X=null===(z=d[ot.eN])||void 0===z?void 0:z.join(", ");if(W)return(0,R.jsx)(rt.Z,{data:Object.entries(W),getX:function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];return"".concat(n," (").concat((0,E.x6)(i),")")},getY:function(t){return(0,r.Z)(t,2)[1]},height:x,width:l,xAxisLabel:c||X||String(d[ot.a3]||"")})}else if(ot.oV.TABLE===f){var G=o.index,K=o.x,q=o.y;return Array.isArray(K)&&Array.isArray(q)&&Array.isArray(q[0])&&(0,R.jsx)(tt.Z,{columns:K,height:d[ot.JJ]?null:x,index:G,maxHeight:d[ot.JJ]?x:null,noBorderBottom:!0,noBorderLeft:!0,noBorderRight:!0,noBorderTop:!0,rows:q,width:l})}return(0,R.jsx)("div",{})}},97301:function(t,e,n){n.d(e,{T7:function(){return d},Tb:function(){return s},lA:function(){return l},pM:function(){return c},y9:function(){return u}});var r=n(25976),i=n(44897),o=n(42631),a=n(70515),l=40*a.iI,c=r.default.div.withConfig({displayName:"indexstyle__ChartBlockStyle",componentId:"sc-1c3ufnj-0"})(["border-radius:","px;margin-left:","px;margin-right:","px;margin-top:","px;",""],o.n_,.5*a.iI,.5*a.iI,1*a.iI,(function(t){return"\n    background-color: ".concat((t.theme.background||i.Z.background).codeArea,";\n  ")})),s=r.default.div.withConfig({displayName:"indexstyle__ConfigurationOptionsStyle",componentId:"sc-1c3ufnj-1"})(["flex:4;padding-left:","px;padding-right:","px;"],1*a.iI,1*a.iI),d=r.default.div.withConfig({displayName:"indexstyle__CodeStyle",componentId:"sc-1c3ufnj-2"})(["padding-top:","px;",""],a.iI/2,(function(t){return"\n    background-color: ".concat((t.theme.background||i.Z.background).codeTextarea,";\n  ")})),u=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-1c3ufnj-3"})(["margin-bottom:","px;padding-bottom:","px;padding-left:","px;",""],a.cd*a.iI,a.iI,a.iI,(function(t){return"\n    border-bottom: 1px solid ".concat((t.theme.borders||i.Z.borders).medium,";\n  ")}))},74168:function(t,e,n){var r=n(26304),i=n(21831),o=n(82394),a=n(82684),l=n(26226),c=n(25976),s=n(90948),d=n(84969),u=n(65743),h=n(85587),f=n(79487),p=n(52136),x=n(67778),y=n(29989),m=n(17066),g=n(84482),v=n(76771),j=n(98889),b=n(65376),k=n(61655),Z=n(97745),O=n(48072),w=n(10103),S=n(84181),L=n(24903),P=n(55485),T=n(30160),A=n(94035),I=n(44897),M=n(8454),E=n(79633),C=n(95363),D=n(61896),F=n(70515),N=n(86735),_=n(79221),R=n(98684),B=n(28598),V=["areaBetweenLines","data","events","height","lineLegendNames","margin","width","xAxisLabel","xLabelFormat","yAxisLabel","yLabelFormat"];function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z=Y(Y({},b.j),{},{backgroundColor:I.Z.background.muted,border:"none"}),J=(0,k.Z)((function(t){var e=t.areaBetweenLines,n=t.data,r=t.events,o=void 0!==r&&r,l=t.getX,k=t.getY,P=t.getYScaleValues,A=t.gridProps,V=void 0===A?{}:A,H=t.height,J=t.hideGridX,W=t.hideTooltip,X=t.increasedXTicks,G=t.lineLegendNames,K=t.margin,q=t.noCurve,Q=t.numYTicks,U=t.renderXTooltipContent,$=t.renderYTooltipContent,tt=t.showTooltip,et=t.thickStroke,nt=t.tooltipData,rt=t.tooltipLeft,it=void 0===rt?0:rt,ot=t.tooltipTop,at=void 0===ot?[]:ot,lt=t.width,ct=t.xLabelFormat,st=t.xLabelRotate,dt=void 0===st||st,ut=t.yLabelFormat,ht=(0,a.useContext)(c.ThemeContext),ft=l||function(t){return null===t||void 0===t?void 0:t.x},pt=k||function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null===t||void 0===t||null===(e=t.y)||void 0===e?void 0:e[n]},xt=I.Z.monotone.gray,yt=I.Z.brand.wind200,mt=I.Z.content.muted,gt=I.Z.monotone.gray,vt=n.map((function(t){return Number(ft(t))}));if(lt<10)return null;var jt=lt-K.left-K.right,bt=H-K.top-K.bottom,kt=jt/2,Zt=0===n.length?0:Math.max.apply(Math,(0,i.Z)(n.map((function(t){var e=t.y;return(null===e||void 0===e?void 0:e.length)||0})))),Ot=(0,a.useMemo)((function(){return(0,S.Z)({domain:[Math.min.apply(Math,(0,i.Z)(vt)),Math.max.apply(Math,(0,i.Z)(vt))],range:[0,jt]})}),[jt,vt]),wt=Math.min.apply(Math,(0,i.Z)(n.map((function(t){var e=t.y;return Math.min.apply(Math,(0,i.Z)(P?P(e):e||[]))})))),St=Math.max.apply(Math,(0,i.Z)(n.map((function(t){var e=t.y;return Math.max.apply(Math,(0,i.Z)(P?P(e):e||[]))})))),Lt=(0,a.useMemo)((function(){return(0,S.Z)({domain:[wt,St],nice:!0,range:[bt,0]})}),[bt,St,wt]),Pt=lt>520?X?20:10:X?10:5,Tt=(0,R.K)(ht),At=mt,It=Tt.map((function(t){return{stroke:t}})),Mt=(0,L.Z)({domain:G||[],range:It.map((function(t){return t.stroke}))}),Et=(0,a.useCallback)((function(t){var e=((0,O.Z)(t)||{x:0}).x,r=Ot.invert(e-K.left),i=(0,N.ry)(vt,(function(t){return r>=t})),o=n[i-1],a=n[i],l=o;a&&(r-ft(o)>ft(a)-r?l=a:(l=o,i-=1));var c=(0,w.range)(0,Zt).map((function(t){return Lt(pt(l,t))})),s=c.some((function(t){return"undefined"===typeof t}));(pt(l)||P&&!s)&&tt({tooltipData:Y(Y({},l),{},{index:i}),tooltipLeft:e,tooltipTop:c})}),[n,ft,pt,P,K,tt,Ot,vt,Lt]),Ct={};return q||(Ct.curve=Z.ZP),(0,B.jsxs)(B.Fragment,{children:[G&&(0,B.jsx)("div",{style:{marginLeft:null===K||void 0===K?void 0:K.left},children:(0,B.jsx)(m.Z,{labelFormat:function(t){return t},scale:Mt,children:function(t){return(0,B.jsx)("div",{style:{display:"flex",flexDirection:M.qs.ROW},children:t.map((function(t,e){return(0,B.jsxs)(g.Z,{margin:"0 5px",onClick:function(){o&&alert("clicked: ".concat(JSON.stringify(t)))},children:[(0,B.jsx)("svg",{height:15,width:15,children:(0,B.jsx)("rect",{fill:t.value,height:15,width:15})}),(0,B.jsx)(v.Z,{align:"left",margin:"0 0 0 4px",children:(0,B.jsx)(T.ZP,{small:!0,children:t.text})})]},"legend-quantile-".concat(e))}))})}})}),(0,B.jsxs)("svg",{height:H,width:lt,children:[!e&&(0,B.jsx)(u.Z,{fill:"transparent",height:H,onMouseLeave:function(){return W()},onMouseMove:Et,onTouchMove:Et,onTouchStart:Et,rx:14,width:lt-(K.left+K.right),x:K.left,y:0}),(0,B.jsxs)(y.Z,{left:K.left,top:K.top,children:[!J&&(0,B.jsx)(p.Z,Y({height:bt,pointerEvents:"none",scale:Ot,stroke:xt,strokeDasharray:"3,3",strokeOpacity:.4,width:jt},V)),(0,B.jsx)(x.Z,Y({height:bt,pointerEvents:"none",scale:Lt,stroke:xt,strokeDasharray:"3,3",strokeOpacity:.4,width:jt},V)),(0,B.jsx)("line",{stroke:xt,x1:jt,x2:jt,y1:0,y2:bt}),(0,B.jsx)(s.Z,{numTicks:Pt,scale:Ot,stroke:At,tickFormat:function(t){return ct?ct(t):t},tickLabelProps:function(t){return{fill:mt,fontFamily:C.ry,fontSize:D.J5,textAnchor:"middle",transform:dt&&"rotate(-45, ".concat(Ot(t),", 0) translate(-32, 4)")}},tickStroke:At,top:bt}),(0,B.jsx)(d.Z,{hideTicks:!0,numTicks:Q,scale:Lt,stroke:At,tickFormat:function(t){return ut?ut(t):(0,_.P5)(t)},tickLabelProps:function(t){return{dx:String(t).length>4?3:0,fill:mt,fontFamily:C.ry,fontSize:D.J5,textAnchor:"end",transform:"translate(0,2.5)"}},tickStroke:At}),e&&e.map((function(t){var e=t[0],r=t[1];return(0,a.createElement)(j.Z,Y(Y({},Ct),{},{aboveAreaProps:{fill:I.Z.brand.earth400,fillOpacity:.3},belowAreaProps:{fill:yt,fillOpacity:.2},clipAboveTo:0,clipBelowTo:bt,data:n,id:"".concat(Math.random()),key:"".concat(e,"-").concat(r),x:function(t){return Ot(ft(t))},y0:function(t){return Lt("undefined"===typeof r?wt:pt(t,r))},y1:function(t){return Lt(pt(t,e))}}))})),(0,w.range)(0,Zt).map((function(t){return(0,a.createElement)(h.Z,Y(Y({},Ct),{},{data:n.filter((function(t){return void 0!=t.y})),key:t,pointerEvents:"none",strokeWidth:et?2:1,x:function(t){return Ot(ft(t))},y:function(e){return Lt(e.y&&(t>=e.y.length?wt:pt(e,t)))}},It[t]))}))]}),nt&&(0,B.jsxs)("g",{children:[(0,B.jsx)(f.Z,{from:{x:it,y:K.top},pointerEvents:"none",stroke:E.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:it,y:bt+K.top}}),at.map((function(t,e){return(0,B.jsx)("circle",{cx:it,cy:t+1+K.top,fill:It[e].stroke,fillOpacity:.1,pointerEvents:"none",r:4,stroke:gt,strokeOpacity:.1,strokeWidth:1},e)})),at.map((function(t,e){return(0,B.jsx)("circle",{cx:it,cy:t+K.top,fill:It[e].stroke,pointerEvents:"none",r:4,stroke:It[e].stroke,strokeWidth:2},e)}))]})]}),nt&&(0,B.jsxs)("div",{children:[at.map((function(t,e){var n=pt(nt,e);return e>=1&&Math.abs(at[e-1]-t)<5*F.iI&&(t+=3*F.iI),(0,B.jsxs)(b.Z,{left:it>kt?it-(0,_.Vs)($,nt,e)*F.iI:it+F.iI,style:z,top:t-2*F.iI,children:[$&&$(nt,e),!$&&(0,B.jsxs)(T.ZP,{center:!0,small:!0,children:[n.toFixed?n.toFixed(3):n," ",null===G||void 0===G?void 0:G[e]]})]},e)})),(0,B.jsxs)(b.Z,{left:it>kt?it-4*(0,_.Vs)(U,nt):it,style:Y(Y({},z),{},{transform:"translateX(-65%)"}),top:bt+K.top,children:[U&&U(nt),!U&&(0,B.jsx)(T.ZP,{center:!0,small:!0,children:ft(nt).toFixed(3)})]})]})]})}));e.Z=function(t){var e=t.areaBetweenLines,n=t.data,i=(t.events,t.height),o=t.lineLegendNames,a=t.margin,c=void 0===a?{}:a,s=t.width,d=t.xAxisLabel,u=t.xLabelFormat,h=t.yAxisLabel,f=t.yLabelFormat,p=(0,r.Z)(t,V),x=Y(Y({},{bottom:3*F.iI,left:5*F.iI,right:3*F.iI,top:3*F.iI}),c);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{style:{display:"flex",height:i,marginBottom:F.iI,width:"100%"},children:[h&&(0,B.jsx)(P.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,B.jsx)(A.Z,{children:(0,B.jsx)(T.ZP,{center:!0,muted:!0,small:!0,children:h})})}),(0,B.jsx)("div",{style:{height:i,width:"undefined"===typeof s?"100%":s},children:(0,B.jsx)(l.Z,{children:function(t){var r=t.width,i=t.height;return(0,B.jsx)(J,Y(Y({},p),{},{areaBetweenLines:e,data:n,height:i,lineLegendNames:o,margin:x,width:r,xLabelFormat:u,yLabelFormat:f}))}})})]}),d&&(0,B.jsx)("div",{style:{paddingLeft:h?36:0,paddingTop:4},children:(0,B.jsx)(T.ZP,{center:!0,muted:!0,small:!0,children:d})})]})}},10305:function(t,e,n){var r=n(82684),i=n(55485),o=n(38276),a=n(28598);e.Z=function(t){var e=t.children,n=t.onChange,l=(0,r.useState)(r.Children.map(e,(function(){return null}))),c=l[0],s=l[1],d=(0,r.useState)(0),u=d[0],h=d[1];return(0,a.jsx)(i.ZP,{children:r.Children.map(e,(function(t,e){return(0,a.jsx)(o.Z,{ml:e>=1?1:0,style:{display:"flex",flex:1},children:r.cloneElement(t,{onChange:function(t){s((function(r){return r[e]=t.target.value,n(r,{resetValues:function(){return h((function(t){return t+1}))},setValues:s}),r}))},value:c[e]})},"multi-select-child-".concat(e,"-").concat(u))}))})}}}]);