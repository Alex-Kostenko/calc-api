import{u as b,i as N,a5 as _,aY as q,r as k,h as G,bs as K,a8 as v,n as O,a4 as U,l as Q,j as e,P as h,O as $,v as D,Q as H,L as Y,F as w,ap as F,G as S,bv as z,J as I,B as J,T as W,S as m}from"./strapi-DppGt0XV.js";import{u as X,a as Z,b as ee}from"./transferTokens-9pdM-Bum-bMVfQSrZ.js";import{T as f}from"./constants-B8oOcJBB-Q2dfXdfa.js";import{F as se,T as te,a as ne,b as ae,L as re,c as ie}from"./TokenTypeSelect-BIRgChNx-DAad18mg.js";import"./index-B_xz7CdZ.js";import"./index-BRVyLNfZ.js";const oe=D().shape({name:S().max(100).required(I.required.id),description:S().nullable(),lifespan:z().integer().min(0).nullable().defined(I.required.id),permissions:S().required(I.required.id)}),le=()=>{const{formatMessage:r}=b(),{toggleNotification:a}=N(),d=_(),{state:u}=q(),[t,l]=k.useState(u&&"accessKey"in u.transferToken?{...u.transferToken}:null),{trackUsage:o}=G();K("EditView",n=>n.setCurrentStep);const x=v(n=>n.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:E,canUpdate:L,canRegenerate:R}}=O(x),g=U("/settings/transfer-tokens/:id")?.params?.id,i=g==="create",{_unstableFormatAPIError:T,_unstableFormatValidationErrors:M}=Q();k.useEffect(()=>{o(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:f})},[i,o]);const{data:j,error:y}=X(g,{skip:i||t!==null||!g});k.useEffect(()=>{y&&a({type:"danger",message:T(y)})},[y,T,a]),k.useEffect(()=>{j&&l(j)},[j]);const[A]=Z(),[V]=ee(),B=async(n,c)=>{o(i?"willCreateToken":"willEditToken",{tokenType:f});const p=n.permissions.split("-");if((s=>s.length===1?s[0]==="push"||s[0]==="pull":s[0]==="push"&&s[1]==="pull")(p))try{if(i){const s=await A({...n,lifespan:n?.lifespan&&n.lifespan!=="0"?parseInt(n.lifespan.toString(),10):null,permissions:p});if("error"in s){F(s.error)&&s.error.name==="ValidationError"?c.setErrors(M(s.error)):a({type:"danger",message:T(s.error)});return}l(s.data),a({type:"success",message:r({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),o("didCreateToken",{type:t?.permissions,tokenType:f}),d(`../transfer-tokens/${s.data.id.toString()}`,{replace:!0,state:{transferToken:s.data}})}else{const s=await V({id:g,name:n.name,description:n.description,permissions:p});if("error"in s){F(s.error)&&s.error.name==="ValidationError"?c.setErrors(M(s.error)):a({type:"danger",message:T(s.error)});return}l(s.data),a({type:"success",message:r({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),o("didEditToken",{type:t?.permissions,tokenType:f})}}catch{a({type:"danger",message:r({id:"notification.error",defaultMessage:"Something went wrong"})})}},P=L&&!i||E&&i;return!i&&!t?e.jsx(h.Loading,{}):e.jsxs(h.Main,{children:[e.jsx(h.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Transfer Tokens"})}),e.jsx($,{validationSchema:oe,validateOnChange:!1,initialValues:{name:t?.name||"",description:t?.description||"",lifespan:t?.lifespan||null,permissions:t?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(n,c)=>B(n,c),children:({errors:n,handleChange:c,isSubmitting:p,values:C})=>e.jsxs(H,{children:[e.jsx(se,{title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:t,setToken:l,canEditInputs:P,canRegenerate:R,isSubmitting:p,regenerateUrl:"/admin/transfer/tokens/"}),e.jsx(Y.Content,{children:e.jsxs(w,{direction:"column",alignItems:"stretch",gap:6,children:[t&&!!t?.name&&"accessKey"in t&&e.jsx(te,{token:t.accessKey,tokenType:f}),e.jsx(ce,{errors:n,onChange:c,canEditInputs:P,isCreating:i,values:C,transferToken:t})]})})]})})]})},he=()=>{const r=v(a=>a.admin_app.permissions.settings?.["transfer-tokens"].read);return e.jsx(h.Protect,{permissions:r,children:e.jsx(le,{})})},ce=({errors:r={},onChange:a,canEditInputs:d,isCreating:u,values:t,transferToken:l={}})=>{const{formatMessage:o}=b(),x=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return e.jsx(J,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(w,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(W,{variant:"delta",tag:"h2",children:o({id:"global.details",defaultMessage:"Details"})}),e.jsxs(m.Root,{gap:5,children:[e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ne,{error:r.name,value:t.name,canEditInputs:d,onChange:a})},"name"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ae,{error:r.description,value:t.description,canEditInputs:d,onChange:a})},"description"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(re,{isCreating:u,error:r.lifespan,value:t.lifespan,onChange:a,token:l})},"lifespan"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ie,{name:"permissions",value:t.permissions,error:r.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:E=>{a({target:{name:"permissions",value:E}})},options:x,canEditInputs:d})},"permissions")]})]})})};export{le as EditView,he as ProtectedEditView};
