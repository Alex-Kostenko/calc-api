import{r as m,u as x,bt as T,bu as v,j as h}from"./strapi-DppGt0XV.js";const R=["years","months","days","hours","minutes","seconds"],y=m.forwardRef(({timestamp:t,customIntervals:o=[],...a},i)=>{const{formatRelativeTime:c,formatDate:u,formatTime:l}=x(),e=T({start:t,end:Date.now()}),s=R.find(r=>e[r]>0&&Object.keys(e).includes(r)),d=v(t)?-e[s]:e[s],n=o.find(r=>e[r.unit]<r.threshold),f=n?n.text:c(d,s,{numeric:"auto"});return h.jsx("time",{ref:i,dateTime:t.toISOString(),role:"time",title:`${u(t)} ${l(t)}`,...a,children:f})});export{y as R};
