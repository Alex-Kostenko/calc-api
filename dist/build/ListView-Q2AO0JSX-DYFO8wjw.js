import{u as M,i as C,a8 as S,n as D,a5 as N,h as V,bs as F,l as R,r as o,aZ as _,j as e,P as d,L as T,e as A,ax as h,aG as y,bq as x,br as L}from"./strapi-DppGt0XV.js";import{u as v}from"./useOnce-EHSWW7FY-YxbILON3.js";import{u as U,a as B}from"./apiTokens-Bl4j4xFt-Cj41b8vk.js";import{A as r}from"./constants-B8oOcJBB-Q2dfXdfa.js";import{T as G}from"./Table-Ra6bYcx7-8xl-sAQK.js";import"./RelativeTime-r7oMqUVy-DUk_cCBQ.js";const H=[{name:"name",label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0},{name:"description",label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1},{name:"createdAt",label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1},{name:"lastUsedAt",label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}],O=()=>{const{formatMessage:s}=M(),{toggleNotification:a}=C(),b=S(t=>t.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canRead:u,canCreate:c,canDelete:w,canUpdate:j}}=D(b),p=N(),{trackUsage:i}=V(),m=F("ListView",t=>t.startSection),{_unstableFormatAPIError:l}=R();o.useEffect(()=>{m("apiTokens")},[m]),o.useEffect(()=>{p({search:_.stringify({sort:"name:ASC"},{encode:!1})})},[p]);const P=H.map(t=>({...t,label:s(t.label)}));v(()=>{i("willAccessTokenList",{tokenType:r})});const{data:n=[],isLoading:f,error:g}=U();o.useEffect(()=>{g&&a({type:"danger",message:l(g)})},[g,l,a]),o.useEffect(()=>{i("didAccessTokenList",{number:n.length,tokenType:r})},[n,i]);const[E]=B(),I=async t=>{try{const k=await E(t);if("error"in k){a({type:"danger",message:l(k.error)});return}i("didDeleteToken")}catch{a({type:"danger",message:s({id:"notification.error",defaultMessage:"Something went wrong"})})}};return e.jsxs(e.Fragment,{children:[e.jsx(d.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"API Tokens"})}),e.jsx(T.Header,{title:s({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:s({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c&&e.jsx(A,{tag:h,"data-testid":"create-api-token-button",startIcon:e.jsx(y,{}),size:"S",onClick:()=>i("willAddTokenFromList",{tokenType:r}),to:"/settings/api-tokens/create",children:s({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),u?e.jsx(d.Main,{"aria-busy":f,children:e.jsxs(T.Content,{children:[n.length>0&&e.jsx(G,{permissions:{canRead:u,canDelete:w,canUpdate:j},headers:P,isLoading:f,onConfirmDelete:I,tokens:n,tokenType:r}),c&&n.length===0?e.jsx(x,{icon:e.jsx(L,{width:"16rem"}),content:s({id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"}),action:e.jsx(A,{tag:h,variant:"secondary",startIcon:e.jsx(y,{}),to:"/settings/api-tokens/create",children:s({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}):null,!c&&n.length===0?e.jsx(x,{icon:e.jsx(L,{width:"16rem"}),content:s({id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don’t have any content yet..."})}):null]})}):e.jsx(d.NoPermissions,{})]})},Q=()=>{const s=S(a=>a.admin_app.permissions.settings?.["api-tokens"].main);return e.jsx(d.Protect,{permissions:s,children:e.jsx(O,{})})};export{O as ListView,Q as ProtectedListView};
