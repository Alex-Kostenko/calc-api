const __vite__fileDeps=["MagicLinkEE-CiQG7NL3-D-hn9sV6.js","strapi-DppGt0XV.js","strapi-COJtagOC.css","SelectRoles-CG3Czm0u-DtPnpzEL.js","useAdminRoles-BEmkB0uj-sTwhy1yV.js","CreateActionEE-DZ6ApqOF-jwxXO9vV.js","isNil-BLNs_O6G.js","ListPage-r9rW__R8-DcSamylL.js","useLicenseLimitNotification-CGkazzao-CPcROV6L.js","users-B3iOAYG--MOwOr-tf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aX as M,j as e,l as K,r as g,a8 as Q,n as re,a5 as ie,i as W,u as H,aY as ne,ae as le,aZ as oe,a_ as de,P as R,L as q,aH as ce,aa as I,ab as n,T as S,F as v,I as $,aE as ue,D as me,aJ as ge,ad as B,aL as pe,aM as he,a$ as xe,b0 as E,b1 as fe,M as f,K as be,N as je,a0 as Me,v as Ee,B as T,S as b,a1 as Y,U as P,b2 as Se,ao as Ae,G as N,J as j,ap as _e}from"./strapi-DppGt0XV.js";import{g as G}from"./users-B3iOAYG--MOwOr-tf.js";import{M as ye,S as Ce}from"./SelectRoles-CG3Czm0u-DtPnpzEL.js";import"./useAdminRoles-BEmkB0uj-sTwhy1yV.js";const Le=g.forwardRef((a,l)=>{const{formatMessage:p}=H();return e.jsx(P,{ref:l,startIcon:e.jsx(Se,{}),size:"S",...a,children:p({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})}),Ie=({onToggle:a})=>{const[l,p]=g.useState("create"),[k,F]=g.useState(""),{formatMessage:t}=H(),{toggleNotification:m}=W(),{_unstableFormatAPIError:D,_unstableFormatValidationErrors:A}=K(),c=M(Te,async()=>(await E(()=>import("./ModalForm-CZ98aSC9-CamjQBT3.js"),[])).ROLE_LAYOUT,{combine(o,d){return[...o,...d]},defaultValue:[]}),w=M(J,async()=>(await E(()=>import("./ModalForm-CZ98aSC9-CamjQBT3.js"),[])).FORM_INITIAL_VALUES,{combine(o,d){return{...o,...d}},defaultValue:J}),_=M(ye,async()=>(await E(()=>import("./MagicLinkEE-CiQG7NL3-D-hn9sV6.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),[h]=fe(),y=t({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),U=async(o,{setErrors:d})=>{const r=await h({...o,roles:o.roles??[]});"data"in r?(r.data.registrationToken&&F(r.data.registrationToken),O()):(m({type:"danger",message:D(r.error)}),_e(r.error)&&r.error.name==="ValidationError"&&d(A(r.error)))},O=()=>{L?p(L):a()},{buttonSubmitLabel:C,isDisabled:x,next:L}=ve[l];return _?e.jsx(f.Root,{defaultOpen:!0,onOpenChange:a,children:e.jsxs(f.Content,{children:[e.jsx(f.Header,{children:e.jsx(be,{label:y,children:e.jsx(je,{isCurrent:!0,children:y})})}),e.jsx(Me,{method:l==="create"?"POST":"PUT",initialValues:w??{},onSubmit:U,validationSchema:Pe,children:({isSubmitting:o})=>e.jsxs(e.Fragment,{children:[e.jsx(f.Body,{children:e.jsxs(v,{direction:"column",alignItems:"stretch",gap:6,children:[l!=="create"&&e.jsx(_,{registrationToken:k}),e.jsxs(T,{children:[e.jsx(S,{variant:"beta",tag:"h2",children:t({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),e.jsx(T,{paddingTop:4,children:e.jsx(v,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(b.Root,{gap:5,children:Re.map(d=>d.map(({size:r,...i})=>e.jsx(b.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Y,{...i,disabled:x,label:t(i.label),placeholder:t(i.placeholder)})},i.name)))})})})]}),e.jsxs(T,{children:[e.jsx(S,{variant:"beta",tag:"h2",children:t({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(T,{paddingTop:4,children:e.jsxs(b.Root,{gap:5,children:[e.jsx(b.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Ce,{disabled:x})}),c.map(d=>d.map(({size:r,...i})=>e.jsx(b.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Y,{...i,disabled:x,label:t(i.label),placeholder:i.placeholder?t(i.placeholder):void 0,hint:i.hint?t(i.hint):void 0})},i.name)))]})})]})]})}),e.jsxs(f.Footer,{children:[e.jsx(P,{variant:"tertiary",onClick:a,type:"button",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),l==="create"?e.jsx(P,{type:"submit",loading:o,children:t(C)}):e.jsx(P,{type:"button",loading:o,onClick:a,children:t(C)})]})]})})]})}):null},J={firstname:"",lastname:"",email:"",roles:[]},Te=[],Re=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0}]],Pe=Ee().shape({firstname:N().trim().required({id:j.required.id,defaultMessage:"This field is required"}).nullable(),lastname:N(),email:N().email(j.email).required({id:j.required.id,defaultMessage:"This field is required"}).nullable(),roles:Ae().min(1,{id:j.required.id,defaultMessage:"This field is required"}).required({id:j.required.id,defaultMessage:"This field is required"})}),ve={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},ke=()=>{const{_unstableFormatAPIError:a}=K(),[l,p]=g.useState(!1),k=Q(s=>s.admin_app.permissions),{allowedActions:{canCreate:F,canDelete:t,canRead:m}}=re(k.settings?.users),D=ie(),{toggleNotification:A}=W(),{formatMessage:c}=H(),{search:w}=ne(),[_,h]=g.useState(!1),[y,U]=g.useState([]),{data:O,isError:C,isLoading:x}=le(oe.parse(w,{ignoreQueryPrefix:!0})),{pagination:L,users:o=[]}=O??{},d=M(Le,async()=>(await E(()=>import("./CreateActionEE-DZ6ApqOF-jwxXO9vV.js"),__vite__mapDeps([5,1,2,6]))).CreateActionEE),r=Fe.map(s=>({...s,label:c(s.label)})),i=c({id:"global.users",defaultMessage:"Users"}),z=()=>{p(s=>!s)},[X]=de(),Z=async s=>{try{const u=await X({ids:s});"error"in u&&A({type:"danger",message:a(u.error)})}catch{A({type:"danger",message:c({id:"global.error",defaultMessage:"An error occurred"})})}},ee=s=>()=>{m&&D(s.toString())},se=s=>async()=>{U([s]),h(!0)},ae=async()=>{await Z(y),h(!1)};return d?C?e.jsx(R.Error,{}):e.jsxs(R.Main,{"aria-busy":x,children:[e.jsx(R.Title,{children:c({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(q.Header,{primaryAction:F&&e.jsx(d,{onClick:z}),title:i,subtitle:c({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),e.jsx(q.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(ce,{label:c({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:i})}),e.jsxs(I.Root,{options:De,children:[e.jsx(I.Trigger,{}),e.jsx(I.Popover,{}),e.jsx(I.List,{})]})]})}),e.jsxs(q.Content,{children:[e.jsxs(n.Root,{rows:o,headers:r,children:[e.jsx(n.ActionBar,{}),e.jsxs(n.Content,{children:[e.jsxs(n.Head,{children:[t?e.jsx(n.HeaderCheckboxCell,{}):null,r.map(s=>e.jsx(n.HeaderCell,{...s},s.name))]}),e.jsx(n.Empty,{}),e.jsx(n.Loading,{}),e.jsx(n.Body,{children:o.map(s=>e.jsxs(n.Row,{onClick:ee(s.id),cursor:m?"pointer":"default",children:[t?e.jsx(n.CheckboxCell,{id:s.id}):null,r.map(({cellFormatter:u,name:V,...te})=>e.jsx(n.Cell,{children:typeof u=="function"?u(s,{name:V,...te}):e.jsx(S,{textColor:"neutral800",children:s[V]||"-"})},V)),m||t?e.jsx(n.Cell,{onClick:u=>u.stopPropagation(),children:e.jsxs(v,{justifyContent:"end",children:[m?e.jsx($,{tag:ue,to:s.id.toString(),label:c({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:G(s)}),variant:"ghost",children:e.jsx(me,{})}):null,t?e.jsx($,{onClick:se(s.id),label:c({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:G(s)}),variant:"ghost",children:e.jsx(ge,{})}):null]})}):null]},s.id))})]})]}),e.jsxs(B.Root,{...L,children:[e.jsx(B.PageSize,{}),e.jsx(B.Links,{})]})]}),l&&e.jsx(Ie,{onToggle:z}),e.jsx(pe.Root,{open:_,onOpenChange:h,children:e.jsx(he,{onConfirm:ae})})]}):null},Fe=[{name:"firstname",label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0},{name:"lastname",label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0},{name:"email",label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0},{name:"roles",label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1,cellFormatter({roles:a}){return e.jsx(S,{textColor:"neutral800",children:a.map(l=>l.name).join(`,
`)})}},{name:"username",label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0},{name:"isActive",label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1,cellFormatter({isActive:a}){return e.jsx(v,{children:e.jsx(xe,{size:"S",borderWidth:0,background:"transparent",color:"neutral800",variant:a?"success":"danger",children:e.jsx(S,{children:a?"Active":"Inactive"})})})}}],De=[{name:"firstname",label:"Firstname",type:"string"},{name:"lastname",label:"Lastname",type:"string"},{name:"email",label:"Email",type:"email"},{name:"username",label:"Username",type:"string"},{name:"isActive",label:"Active user",type:"boolean"}],we=()=>{const a=M(ke,async()=>(await E(()=>import("./ListPage-r9rW__R8-DcSamylL.js"),__vite__mapDeps([7,1,2,8,6,3,4,9]))).UserListPageEE);return a?e.jsx(a,{}):null},Be=()=>{const a=Q(l=>l.admin_app.permissions.settings?.users.read);return e.jsx(R.Protect,{permissions:a,children:e.jsx(we,{})})};export{we as ListPage,ke as ListPageCE,Be as ProtectedListPage};
