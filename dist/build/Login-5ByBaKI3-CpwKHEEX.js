import{u as l,at as p,j as s,au as r,B as a,F as t,T as u,d as x,av as c}from"./strapi-DppGt0XV.js";import{S as g}from"./SSOProviders-Dw_eYbX--C0A7Eody.js";const d=x(c)`
  flex: 1;
`,h=i=>{const{formatMessage:n}=l(),{isLoading:o,data:e=[]}=p(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!o&&e.length===0?s.jsx(r,{...i}):s.jsx(r,{...i,children:s.jsx(a,{paddingTop:7,children:s.jsxs(t,{direction:"column",alignItems:"stretch",gap:7,children:[s.jsxs(t,{children:[s.jsx(d,{}),s.jsx(a,{paddingLeft:3,paddingRight:3,children:s.jsx(u,{variant:"sigma",textColor:"neutral600",children:n({id:"Auth.login.sso.divider"})})}),s.jsx(d,{})]}),s.jsx(g,{providers:e,displayAllProviders:!1})]})})})};export{h as LoginEE};
