(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3301],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45122:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={id:"whatsApp-integration",title:"WhatsApp Integration"},p={unversionedId:"developer/integrations-overview/whatsApp-integration",id:"developer/integrations-overview/whatsApp-integration",isDocsHomePage:!1,title:"WhatsApp Integration",description:"1. Create the Chat-API account go to website",source:"@site/docs/developer/integrations-overview/WhatsApp.md",sourceDirName:"developer/integrations-overview",slug:"/developer/integrations-overview/whatsApp-integration",permalink:"/developer/integrations-overview/whatsApp-integration",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/developer/integrations-overview/WhatsApp.md",version:"current",lastUpdatedBy:"M. Munkhsaihan",lastUpdatedAt:1621341581,formattedLastUpdatedAt:"5/18/2021",frontMatter:{id:"whatsApp-integration",title:"WhatsApp Integration"}},l=[],s={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the Chat-API account go to ",(0,o.kt)("a",{parentName:"li",href:"https://app.chat-api.com/registration"},"website")),(0,o.kt)("li",{parentName:"ol"},"Copy ",(0,o.kt)("strong",{parentName:"li"},"API key")," from ",(0,o.kt)("a",{parentName:"li",href:"https://app.chat-api.com/user/settings"},"here"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on your profile, then select settings.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://erxes-docs.s3.us-west-2.amazonaws.com/integration/chat-api-whatsapp-3.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy API key value")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://erxes-docs.s3.us-west-2.amazonaws.com/integration/chat-api-whatsapp-4.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to Erxes Settings => System config => Integrations config => WhatsApp Chat-API.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://erxes-docs.s3.us-west-2.amazonaws.com/integration/chat-api-whatsapp-1.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Paste API key to corresponding field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Put your webhook url into CHAT-API WEBHOOK CALLBACK URL field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For example 'https://erxes-integrations/whatsapp/webhook'"))),(0,o.kt)("p",null,"When you start erxes-integration repo webhook will automatically created according to your configuration"))}c.isMDXComponent=!0}}]);