import{j as e}from"./strapi-DppGt0XV.js";import{a as s}from"./EditPage-BNZ90ISm-ChXZIGM4.js";import"./selectors-PQdhPmzv-CgOufC8i.js";import"./useWebhooks-DzJ3X-hd-BHxjJjIM.js";const t={"review-workflows":{"review-workflows":["review-workflows.updateEntryStage"]},releases:{releases:["releases.publish"]}},a=r=>{switch(r){case"review-workflows":return()=>[{id:"review-workflows.updateEntryStage",defaultMessage:"Stage Change"}];case"releases":return()=>[{id:"releases.publish",defaultMessage:"Publish"}]}},n=()=>e.jsxs(s.Root,{children:[e.jsx(s.Headers,{}),e.jsx(s.Body,{}),Object.keys(t).map(r=>e.jsxs(e.Fragment,{children:[e.jsx(s.Headers,{getHeaders:a(r)}),e.jsx(s.Body,{providedEvents:t[r]})]}))]});export{n as EventsTableEE};
