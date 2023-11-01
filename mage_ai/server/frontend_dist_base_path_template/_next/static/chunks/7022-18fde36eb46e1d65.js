"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7022],{17022:function(e,n,i){var t=i(75582),r=i(82394),o=i(21764),s=i(82684),l=i(69864),c=i(34376),d=i(71180),u=i(70652),a=i(15338),E=i(97618),f=i(55485),m=i(85854),h=i(65956),I=i(28274),p=i(38276),x=i(75499),A=i(30160),v=i(17488),L=i(35686),g=i(8193),Z=i(72473),_=i(70515),j=i(24755),D=i(3917),b=i(76417),S=i(36717),P=i(86735),T=i(42122),R=i(72619),O=i(3314),k=i(28598);function y(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function C(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?y(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var N,B=2*_.iI;!function(e){e.PERMISSIONS="Permissions",e.USERS="Users"}(N||(N={})),n.Z=function(e){var n,i=e.contained,r=e.onCancel,y=e.slug,w=(0,c.useRouter)(),W=(0,s.useState)(!0),M=W[0],U=W[1],H=(0,s.useState)(null),Y=H[0],Q=H[1],V=(0,s.useState)({}),F=V[0],K=V[1],G=(0,s.useState)(null),q=G[0],z=G[1],$=(0,s.useCallback)((function(e,n,i){z(C(C({},e),{},{permissionsMapping:(0,P.HK)(n||[],(function(e){return e.id})),usersMapping:(0,P.HK)(i||[],(function(e){return e.id}))}))}),[z]),J=(0,s.useCallback)((function(e){K((function(n){return C(C({},n),e)})),z((function(n){return C(C({},n),e)}))}),[K,z]),X=L.ZP.roles.detail(y,{},{revalidateOnFocus:!1}).data,ee=(0,s.useMemo)((function(){return null===X||void 0===X?void 0:X.role}),[X]);(0,s.useEffect)((function(){ee&&$(ee,null===ee||void 0===ee?void 0:ee.role_permissions,null===ee||void 0===ee?void 0:ee.users)}),[$,ee]);var ne=(0,l.Db)(ee?L.ZP.roles.useUpdate(null===ee||void 0===ee?void 0:ee.id):L.ZP.roles.useCreate(),{onSuccess:function(e){return(0,R.wD)(e,{callback:function(e){var n=e.role;K({}),$(n,null===n||void 0===n?void 0:n.role_permissions,null===n||void 0===n?void 0:n.users),ee||w.push("/settings/workspace/roles/".concat(null===n||void 0===n?void 0:n.id)),o.Am.success(ee?"Role successfully updated.":"New role created successfully.",{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:"role-mutate-success-".concat(n.id)})},onErrorCallback:function(e){var n=e.error,i=n.errors,t=n.exception,r=n.message,s=n.type;o.Am.error((null===i||void 0===i?void 0:i.error)||t||r,{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:s})}})}}),ie=(0,t.Z)(ne,2),te=ie[0],re=ie[1].isLoading,oe=(0,l.Db)(L.ZP.roles.useDelete(null===ee||void 0===ee?void 0:ee.id),{onSuccess:function(e){return(0,R.wD)(e,{callback:function(){w.push("/settings/workspace/roles"),o.Am.success("Role successfully delete.",{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:"role-delete-success-".concat(null===ee||void 0===ee?void 0:ee.id)})},onErrorCallback:function(e){var n=e.error,i=n.errors,t=n.exception,r=n.message,s=n.type;o.Am.error((null===i||void 0===i?void 0:i.error)||t||r,{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:s})}})}}),se=(0,t.Z)(oe,2),le=se[0],ce=se[1].isLoading,de=L.ZP.permissions.list({_limit:1e3},{},{pauseFetch:!ee}).data,ue=(0,s.useMemo)((function(){return(0,P.YC)((null===de||void 0===de?void 0:de.permissions)||[],"entity_name")}),[de]),ae=(0,s.useMemo)((function(){return(null===q||void 0===q?void 0:q.permissionsMapping)||{}}),[q]),Ee=(0,s.useMemo)((function(){return(0,P.YC)(Object.values(ae),"entity_name")}),[ae]),fe=L.ZP.users.list({},{},{pauseFetch:!ee}).data,me=(0,s.useMemo)((function(){return(0,P.YC)((null===fe||void 0===fe?void 0:fe.users)||[],(function(e){return(0,b.s)(e)}))}),[fe]),he=(0,s.useMemo)((function(){return(null===q||void 0===q?void 0:q.usersMapping)||{}}),[q]),Ie=(0,s.useMemo)((function(){return(0,P.YC)(Object.values(he),(function(e){return(0,b.s)(e)}))}),[he]),pe=(0,s.useMemo)((function(){return(null===Ee||void 0===Ee?void 0:Ee.length)>=1}),[Ee]),xe=(0,s.useMemo)((function(){return(0,k.jsx)(d.ZP,{beforeIcon:(0,k.jsx)(Z.mm,{}),compact:!0,onClick:function(){Q(N.PERMISSIONS),U(!1)},primary:!pe,secondary:pe,small:!0,children:"Add permission"})}),[pe,Q,U]),Ae=(0,s.useMemo)((function(){return(null===Ie||void 0===Ie?void 0:Ie.length)>=1}),[Ie]),ve=(0,s.useMemo)((function(){return(0,k.jsx)(d.ZP,{beforeIcon:(0,k.jsx)(Z.mm,{}),compact:!0,onClick:function(){Q(N.USERS),U(!1)},primary:!Ae,secondary:Ae,small:!0,children:"Add user"})}),[Ae]),Le=(0,s.useCallback)((function(e,n){return(0,k.jsx)(x.Z,{columnFlex:[null,null,2,1,1,6],columns:[{label:function(){var n=null===e||void 0===e?void 0:e.every((function(e){var n=e.id;return null===ae||void 0===ae?void 0:ae[n]}));return(0,k.jsx)(u.Z,{checked:n,onClick:function(i){(0,O.j)(i),J(n?{permissionsMapping:{}}:{permissionsMapping:(0,P.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"},{uuid:"ID"},{uuid:"Entity"},{uuid:"Subtype"},{uuid:"Entity ID"},{rightAligned:!0,uuid:"Access"}],onClickRow:n?function(n){var i=e[n];i&&window.open("/settings/workspace/permissions/".concat(null===i||void 0===i?void 0:i.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.access,i=e.entity,t=e.entity_id,r=e.entity_name,o=e.entity_type,s=e.id,l=n?(0,S.q)(n):[],c=(null===l||void 0===l?void 0:l.length)||0,d=!(null===ae||void 0===ae||!ae[s]);return[(0,k.jsx)(u.Z,{checked:d,onClick:function(n){(0,O.j)(n);var i=C({},ae);d?null===i||void 0===i||delete i[s]:i[s]=e,J({permissionsMapping:i})}},"checkbox"),(0,k.jsx)(A.ZP,{default:!0,monospace:!0,children:s},"id"),(0,k.jsx)(A.ZP,{monospace:!0,children:r||i},"entityName"),(0,k.jsx)(A.ZP,{default:!0,monospace:!!o,children:o||"-"},"entityType"),(0,k.jsx)(A.ZP,{default:!0,monospace:!!t,children:t||"-"},"entityID"),(0,k.jsx)("div",{children:c>=1&&(0,k.jsx)(f.ZP,{alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end",children:null===l||void 0===l?void 0:l.map((function(e,n){return(0,k.jsx)("div",{children:(0,k.jsxs)(A.ZP,{default:!0,monospace:!0,small:!0,children:[e,c>=2&&n<c-1&&(0,k.jsx)(A.ZP,{inline:!0,muted:!0,small:!0,children:",\xa0"})]})},e)}))})},"access")]})),uuid:"permissions"})}),[ae,J]),ge=(0,s.useCallback)((function(e,n){return(0,k.jsx)(x.Z,{columnFlex:[null,1,1,1],columns:[{label:function(){var n=null===e||void 0===e?void 0:e.every((function(e){var n=e.id;return null===he||void 0===he?void 0:he[n]}));return(0,k.jsx)(u.Z,{checked:n,onClick:function(i){(0,O.j)(i),J(n?{usersMapping:{}}:{usersMapping:(0,P.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"},{uuid:"Username"},{uuid:"First name"},{uuid:"Last name"}],onClickRow:n?function(n){var i=e[n];i&&window.open("/settings/workspace/users/".concat(null===i||void 0===i?void 0:i.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.first_name,i=e.id,t=e.last_name,r=e.username,o=!(null===he||void 0===he||!he[i]);return[(0,k.jsx)(u.Z,{checked:o,onClick:function(n){(0,O.j)(n);var t=C({},he);o?null===t||void 0===t||delete t[i]:t[i]=e,J({usersMapping:t})}},"checkbox"),(0,k.jsx)(A.ZP,{children:r},"username"),(0,k.jsx)(A.ZP,{default:!0,children:n},"firstName"),(0,k.jsx)(A.ZP,{default:!0,children:t},"lastName")]})),uuid:"users"})}),[he,J]),Ze=(0,s.useMemo)((function(){return Le(ue)}),[Le,ue]),_e=(0,s.useMemo)((function(){return ge(me)}),[ge,me]),je=(0,s.useMemo)((function(){return Le(Ee,!0)}),[Le,Ee]),De=(0,s.useMemo)((function(){return ge(Ie,!0)}),[ge,Ie]),be=(0,k.jsxs)(g.N,{children:[(0,k.jsxs)(h.Z,{noPadding:!0,children:[(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsx)(m.Z,{level:4,children:"Role"})}),(0,k.jsx)(a.Z,{light:!0}),(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsxs)(f.ZP,{alignItems:"center",children:[(0,k.jsxs)(A.ZP,{danger:"name"in F&&!(null!==q&&void 0!==q&&q.name),default:!0,large:!0,children:["Name ","name"in F&&!(null!==q&&void 0!==q&&q.name)&&(0,k.jsx)(A.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsx)(E.Z,{flex:1,children:(0,k.jsx)(v.Z,{afterIcon:(0,k.jsx)(Z.I8,{}),afterIconClick:function(e,n){var i;null===n||void 0===n||null===(i=n.current)||void 0===i||i.focus()},afterIconSize:B,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return J({name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Archmage",value:(null===q||void 0===q?void 0:q.name)||""})})]})})]}),(0,k.jsx)(p.Z,{mb:_.HN}),ee&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(h.Z,{noPadding:!0,children:[(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsxs)(f.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(m.Z,{level:4,children:"Permissions"}),(0,k.jsx)(p.Z,{mr:_.cd}),pe&&(0,k.jsx)(f.ZP,{alignItems:"center",children:xe})]})}),(0,k.jsx)(a.Z,{light:!0}),!pe&&(0,k.jsxs)(p.Z,{p:_.cd,children:[(0,k.jsx)(p.Z,{mb:_.cd,children:(0,k.jsx)(A.ZP,{default:!0,children:"This role currently has no permissions attached."})}),(0,k.jsx)(f.ZP,{alignItems:"center",children:xe})]}),pe&&(0,k.jsx)(p.Z,{pb:_.Mq,children:je})]}),(0,k.jsx)(p.Z,{mb:_.HN}),(0,k.jsxs)(h.Z,{noPadding:!0,children:[(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsxs)(f.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(m.Z,{level:4,children:"Users"}),(0,k.jsx)(p.Z,{mr:_.cd}),Ae&&(0,k.jsx)(f.ZP,{alignItems:"center",children:ve})]})}),(0,k.jsx)(a.Z,{light:!0}),!Ae&&(0,k.jsxs)(p.Z,{p:_.cd,children:[(0,k.jsx)(p.Z,{mb:_.cd,children:(0,k.jsx)(A.ZP,{default:!0,children:"There are currently no users with this role."})}),(0,k.jsx)(f.ZP,{alignItems:"center",children:ve})]}),Ae&&(0,k.jsx)(p.Z,{pb:_.Mq,children:De})]}),(0,k.jsx)(p.Z,{mb:_.HN}),(0,k.jsxs)(h.Z,{noPadding:!0,children:[(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsx)(m.Z,{level:4,children:"Metadata"})}),(0,k.jsx)(a.Z,{light:!0}),(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsxs)(f.ZP,{alignItems:"center",children:[(0,k.jsx)(A.ZP,{default:!0,large:!0,children:"Last updated"}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,k.jsx)(A.ZP,{large:!0,monospace:!0,muted:!0,children:(null===q||void 0===q?void 0:q.updated_at)&&(0,D.d$)(null===q||void 0===q?void 0:q.updated_at,{includeSeconds:!0})}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsx)(Z.Pf,{muted:!0,size:B}),(0,k.jsx)(p.Z,{mr:1})]})]})}),(0,k.jsx)(a.Z,{light:!0}),(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsxs)(f.ZP,{alignItems:"center",children:[(0,k.jsx)(A.ZP,{default:!0,large:!0,children:"Created at"}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,k.jsx)(A.ZP,{large:!0,monospace:!0,muted:!0,children:(null===q||void 0===q?void 0:q.created_at)&&(0,D.d$)(null===q||void 0===q?void 0:q.created_at,{includeSeconds:!0})}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsx)(Z.Pf,{muted:!0,size:B}),(0,k.jsx)(p.Z,{mr:1})]})]})}),(0,k.jsx)(a.Z,{light:!0}),(0,k.jsx)(p.Z,{p:_.cd,children:(0,k.jsxs)(f.ZP,{alignItems:"center",children:[(0,k.jsx)(A.ZP,{default:!0,large:!0,children:"Created by"}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,k.jsx)(A.ZP,{large:!0,monospace:!0,muted:!0,children:(0,b.s)(null===ee||void 0===ee?void 0:ee.user)}),(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsx)(Z.Pf,{muted:!0,size:B}),(0,k.jsx)(p.Z,{mr:1})]})]})})]}),(0,k.jsx)(p.Z,{mb:_.HN})]}),(0,k.jsxs)(f.ZP,{children:[(0,k.jsx)(d.ZP,{beforeIcon:(0,k.jsx)(Z.vc,{}),disabled:!F||!(null!==(n=Object.keys(F))&&void 0!==n&&n.length),loading:re,onClick:function(){return te({role:C(C({},(0,T.GL)(q,["name"],{include_blanks:!0})),{},{permission_ids:Object.keys((null===q||void 0===q?void 0:q.permissionsMapping)||{}).map((function(e){return Number(e)})),user_ids:Object.keys((null===q||void 0===q?void 0:q.usersMapping)||{}).map((function(e){return Number(e)}))})})},primary:!0,children:ee?"Save changes":"Create new role"}),r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsx)(d.ZP,{onClick:function(){return null===r||void 0===r?void 0:r()},secondary:!0,children:"Cancel and go back"})]}),ee&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p.Z,{mr:_.cd}),(0,k.jsx)(d.ZP,{beforeIcon:(0,k.jsx)(Z.rF,{}),danger:!0,loading:ce,onClick:function(){return le()},children:"Delete role"})]})]})]});return i?be:(0,k.jsx)(I.Z,{after:N.PERMISSIONS===Y?Ze:N.USERS===Y?_e:null,afterHeader:(0,k.jsx)(p.Z,{px:_.cd,children:(0,k.jsx)(A.ZP,{bold:!0,children:Y})}),afterHidden:M,afterWidth:60*_.iI,appendBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Roles"},linkProps:{href:"/settings/workspace/roles"}},{bold:!0,label:function(){return null===ee||void 0===ee?void 0:ee.name}}],hideAfterCompletely:!0,setAfterHidden:U,title:null!==ee&&void 0!==ee&&ee.name?"".concat(null===ee||void 0===ee?void 0:ee.name," role"):"New role",uuidItemSelected:j.B2.ROLES,uuidWorkspaceSelected:j.Pl.USER_MANAGEMENT,children:ee&&be})}},8193:function(e,n,i){i.d(n,{N:function(){return c},Z:function(){return l}});var t=i(38626),r=i(44897),o=i(42631),s=i(70515),l=2*s.iI,c=t.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ck7mzt-0"})(["border-radius:","px;padding:","px;",""],o.n_,s.cd*s.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).codeArea,";\n  ")}))},36288:function(e,n,i){i.d(n,{Fy:function(){return m},G9:function(){return u},H1:function(){return h},K4:function(){return c},ND:function(){return d},Pt:function(){return a},WG:function(){return o},hl:function(){return f},m_:function(){return s},oO:function(){return E}});var t,r,o,s,l=i(82394);!function(e){e[e.OWNER=1]="OWNER",e[e.ADMIN=2]="ADMIN",e[e.EDITOR=4]="EDITOR",e[e.VIEWER=8]="VIEWER",e[e.LIST=16]="LIST",e[e.DETAIL=32]="DETAIL",e[e.CREATE=64]="CREATE",e[e.UPDATE=128]="UPDATE",e[e.DELETE=512]="DELETE",e[e.OPERATION_ALL=1024]="OPERATION_ALL",e[e.QUERY=2048]="QUERY",e[e.QUERY_ALL=4096]="QUERY_ALL",e[e.READ=8192]="READ",e[e.READ_ALL=16384]="READ_ALL",e[e.WRITE=32768]="WRITE",e[e.WRITE_ALL=65536]="WRITE_ALL",e[e.ALL=131072]="ALL",e[e.DISABLE_LIST=262144]="DISABLE_LIST",e[e.DISABLE_DETAIL=524288]="DISABLE_DETAIL",e[e.DISABLE_CREATE=1048576]="DISABLE_CREATE",e[e.DISABLE_UPDATE=2097152]="DISABLE_UPDATE",e[e.DISABLE_DELETE=4194304]="DISABLE_DELETE",e[e.DISABLE_OPERATION_ALL=8388608]="DISABLE_OPERATION_ALL",e[e.DISABLE_QUERY=16777216]="DISABLE_QUERY",e[e.DISABLE_QUERY_ALL=33554432]="DISABLE_QUERY_ALL",e[e.DISABLE_READ=67108864]="DISABLE_READ",e[e.DISABLE_READ_ALL=134217728]="DISABLE_READ_ALL",e[e.DISABLE_WRITE=268435456]="DISABLE_WRITE",e[e.DISABLE_WRITE_ALL=536870912]="DISABLE_WRITE_ALL",e[e.DISABLE_UNLESS_CONDITIONS=1073741824]="DISABLE_UNLESS_CONDITIONS"}(o||(o={})),function(e){e.HAS_NOTEBOOK_EDIT_ACCESS="HAS_NOTEBOOK_EDIT_ACCESS",e.HAS_PIPELINE_EDIT_ACCESS="HAS_PIPELINE_EDIT_ACCESS",e.USER_OWNS_ENTITY="USER_OWNS_ENTITY"}(s||(s={}));var c=(t={},(0,l.Z)(t,o.OWNER,"Owner"),(0,l.Z)(t,o.ADMIN,"Admin"),(0,l.Z)(t,o.EDITOR,"Editor"),(0,l.Z)(t,o.VIEWER,"Viewer"),(0,l.Z)(t,o.LIST,"List"),(0,l.Z)(t,o.DETAIL,"Detail"),(0,l.Z)(t,o.CREATE,"Create"),(0,l.Z)(t,o.UPDATE,"Update"),(0,l.Z)(t,o.DELETE,"Delete"),(0,l.Z)(t,o.OPERATION_ALL,"All operations"),(0,l.Z)(t,o.QUERY,"Query"),(0,l.Z)(t,o.QUERY_ALL,"Query all attributes"),(0,l.Z)(t,o.READ,"Read"),(0,l.Z)(t,o.READ_ALL,"Read all attributes"),(0,l.Z)(t,o.WRITE,"Write"),(0,l.Z)(t,o.WRITE_ALL,"Write all attributes"),(0,l.Z)(t,o.ALL,"All"),(0,l.Z)(t,o.DISABLE_LIST,"Disable list"),(0,l.Z)(t,o.DISABLE_DETAIL,"Disable detail"),(0,l.Z)(t,o.DISABLE_CREATE,"Disable create"),(0,l.Z)(t,o.DISABLE_UPDATE,"Disable update"),(0,l.Z)(t,o.DISABLE_DELETE,"Disable delete"),(0,l.Z)(t,o.DISABLE_OPERATION_ALL,"Disable all operations"),(0,l.Z)(t,o.DISABLE_QUERY,"Disable query"),(0,l.Z)(t,o.DISABLE_QUERY_ALL,"Disable all query parameters"),(0,l.Z)(t,o.DISABLE_READ,"Disable read"),(0,l.Z)(t,o.DISABLE_READ_ALL,"Disable all read attributes"),(0,l.Z)(t,o.DISABLE_WRITE,"Disable write"),(0,l.Z)(t,o.DISABLE_WRITE_ALL,"Disable all write attributes"),t),d=(r={},(0,l.Z)(r,s.HAS_NOTEBOOK_EDIT_ACCESS,"Disable unless user has notebook edit access"),(0,l.Z)(r,s.HAS_PIPELINE_EDIT_ACCESS,"Disable unless user has pipeline edit access"),(0,l.Z)(r,s.USER_OWNS_ENTITY,"Disable unless user owns the current entity"),r),u=[o.OWNER,o.ADMIN,o.EDITOR,o.VIEWER,o.ALL],a=[o.LIST,o.DETAIL,o.CREATE,o.UPDATE,o.DELETE,o.OPERATION_ALL],E=[o.DISABLE_LIST,o.DISABLE_DETAIL,o.DISABLE_CREATE,o.DISABLE_UPDATE,o.DISABLE_DELETE,o.DISABLE_OPERATION_ALL],f=[o.QUERY,o.QUERY_ALL,o.DISABLE_QUERY,o.DISABLE_QUERY_ALL],m=[o.READ,o.READ_ALL,o.DISABLE_READ,o.DISABLE_READ_ALL],h=[o.WRITE,o.WRITE_ALL,o.DISABLE_WRITE,o.DISABLE_WRITE_ALL]},65956:function(e,n,i){var t=i(38626),r=i(55485),o=i(38276),s=i(30160),l=i(44897),c=i(42631),d=i(47041),u=i(70515),a=i(28598),E=(0,t.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*u.iI,1.5*u.iI,1.5*u.iI),f=t.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],c.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||l.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||l.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||l.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||l.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||l.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),m=t.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],c.n_,c.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||l.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||l.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),E,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),h=t.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*u.iI,d.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*u.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),I=t.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],c.M8,c.YF,1.75*u.iI);n.Z=function(e){var n=e.borderless,i=e.children,t=e.containerRef,l=e.contentContainerRef,c=e.dark,d=e.footer,u=e.fullHeight,E=void 0===u||u,p=e.fullWidth,x=void 0===p||p,A=e.header,v=e.headerHeight,L=e.headerIcon,g=e.headerPaddingVertical,Z=e.headerTitle,_=e.maxHeight,j=e.maxWidth,D=e.minWidth,b=e.noPadding,S=e.overflowVisible,P=e.subtitle,T=e.success;return(0,a.jsxs)(f,{borderless:n,dark:c,fullHeight:E,fullWidth:x,maxHeight:_,maxWidth:j,minWidth:D,overflowVisible:S,ref:t,success:T,children:[(A||Z)&&(0,a.jsxs)(m,{headerPaddingVertical:g,height:v,children:[A&&A,Z&&(0,a.jsx)(r.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,a.jsxs)(r.ZP,{alignItems:"center",children:[L&&L,(0,a.jsx)(o.Z,{ml:L?1:0,children:(0,a.jsx)(s.ZP,{bold:!0,default:!0,children:Z})})]})})]}),(0,a.jsxs)(h,{maxHeight:_,noPadding:b,overflowVisible:S,ref:l,children:[P&&(0,a.jsx)(o.Z,{mb:2,children:(0,a.jsx)(s.ZP,{default:!0,children:P})}),i]}),d&&(0,a.jsx)(I,{children:d})]})}},36717:function(e,n,i){i.d(n,{q:function(){return o}});var t=i(75582),r=i(36288);function o(e){return Object.entries(r.K4).reduce((function(n,i){var r=(0,t.Z)(i,2),o=r[0],s=r[1];return e&Number(o)?n.concat(s):n}),[])}},76417:function(e,n,i){function t(e){return null!==e&&void 0!==e&&e.first_name?[null===e||void 0===e?void 0:e.first_name,null===e||void 0===e?void 0:e.last_name].filter((function(e){return e})).join(" "):null===e||void 0===e?void 0:e.username}i.d(n,{s:function(){return t}})}}]);