(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9683],{82964:function(n,t,e){"use strict";e.d(t,{u:function(){return p},P:function(){return l}});var r=e(67294),o=e(60641),i=e(69713).Z,a=e(50210);function p(n,t){return r.createElement(r.Fragment,null,n&&r.createElement(a.Z,{className:"language-javascript"},"import "+n+' from "erxes-ui/lib/components/'+n+'";'),t&&r.createElement(r.Fragment,null,r.createElement("p",null,"required prop - ",r.createElement("span",{className:o.Z.required},"*")),r.createElement(i,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(n,t){return r.createElement("tr",{key:t},n.map((function(n,t){return r.createElement("td",{key:t},"*"===n[n.length-1]?r.createElement(r.Fragment,null,n.slice(0,-1),r.createElement("span",{className:o.Z.required},"*")):r.createElement(r.Fragment,null,n))})))}))))))}function l(n){var t=JSON.stringify(n);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},54314:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var r=e(74034),o=e(79973),i=e(67294),a=e(3905),p=e(16719),l=e(60641),c=e(50210),s=e(82964);function d(n){var t=n.type,e=n.values,o=void 0===e?[]:e,a=n.rights,d=void 0===a?[]:a,u=n.table,m=void 0===u?[]:u,f=function(n,t,e){var r;return(r={})[n]=t,r.right=d&&d[e],r.objective=!0,r},g=function(n){return i.createElement(i.Fragment,null,i.createElement("div",{className:l.Z.styleSpinner},o.map((function(t,e){return i.createElement("div",{className:l.Z.spinner},i.createElement(p.Z,(0,r.Z)({key:e},f(n,t,e))))}))),i.createElement(c.Z,{className:"language-jsx"},"<>"+o.map((function(t,e){return"\n\t<Spinner "+(r=f(n,t,e),(o=(o=(o=(o=(o=(o=(o=JSON.stringify(r)).replace(/40/g,"{40}")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/15/g,"{15}")).replace(/=true/g," ")).slice(0,o.length-1)+"/>");var r,o})).join(" ")+"\n</>"))};return"size"===t?g("size"):"position"===t||"objective"===t?g("left"):"APIspinner"===t?(0,s.u)("Spinner",m):null}var u={id:"spinner",title:"Spinner"},m={unversionedId:"components/Spinner/spinner",id:"components/Spinner/spinner",isDocsHomePage:!1,title:"Spinner",description:"Spinners can be used to show the loading state in your projects.",source:"@site/docs/components/Spinner/spinner.md",sourceDirName:"components/Spinner",slug:"/components/Spinner/spinner",permalink:"/components/Spinner/spinner",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/components/Spinner/spinner.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1640336674,formattedLastUpdatedAt:"12/24/2021",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"components",previous:{title:"Sort Handler",permalink:"/components/SortHandler/sorthandler"},next:{title:"SubMenu",permalink:"/components/SubMenu/submenu"}},f=[{value:"Examples",id:"examples",children:[{value:"Sizing",id:"sizing",children:[]}]},{value:"Position",id:"position",children:[]},{value:"Objective",id:"objective",children:[]},{value:"API",id:"api",children:[]}],g={toc:f};function b(n){var t=n.components,e=(0,o.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Spinners can be used to show the loading state in your projects."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"sizing"},"Sizing"),(0,a.kt)("p",null,"Change the sizing using ",(0,a.kt)("code",null,"size")," prop."),(0,a.kt)(d,{type:"size",values:[40,15],mdxType:"SpinnerComponent"}),(0,a.kt)("h2",{id:"position"},"Position"),(0,a.kt)("p",null,"Change the position with ",(0,a.kt)("code",null,"left"),", ",(0,a.kt)("code",null,"right"),", ",(0,a.kt)("code",null,"top"),", ",(0,a.kt)("code",null,"bottom")," props depending on your purpose."),(0,a.kt)(d,{type:"position",values:["10%","50%","auto"],rights:["auto","auto","10%"],mdxType:"SpinnerComponent"}),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"Make your spinner objective by ",(0,a.kt)("code",null,"objective")," prop."),(0,a.kt)(d,{type:"objective",values:["10%"],mdxType:"SpinnerComponent"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)(d,{type:"APIspinner",table:[["objective","boolean","false","Make your spinner objective"],["size","number","26","Change the spinning size"],["left","string","50%","Determine space from left side"],["right","string","auto","Determine space from right side"],["top","string","50%","Determine space from top side"],["bottom","string","auto","Determine space from bottom side"]],mdxType:"SpinnerComponent"}))}b.isMDXComponent=!0},16719:function(n,t,e){"use strict";var r,o,i=e(30783),a=e(67294),p=e(29163),l=e(131),c=e.n(l),s=e(89816),d=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},u=c()(p.ZP.div)(r||(r=d(["\n  height: ",";\n  position: ",";\n"],["\n  height: ",";\n  position: ",";\n"])),(function(n){return n.objective&&"100px"}),(function(n){return n.objective&&"relative"})),m=c()(p.ZP.div)(o||(o=d(["\n  position: absolute;\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  width: ","px;\n  height: ","px;\n  margin-left: -","px;\n  margin-top: -","px;\n  animation: "," 0.75s linear infinite;\n  border: 2px solid ",";\n  border-top-color: ",";\n  border-right-color: ",";\n  border-radius: 100%;\n"],["\n  position: absolute;\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  width: ","px;\n  height: ","px;\n  margin-left: -","px;\n  margin-top: -","px;\n  animation: "," 0.75s linear infinite;\n  border: 2px solid ",";\n  border-top-color: ",";\n  border-right-color: ",";\n  border-radius: 100%;\n"])),(function(n){return n.left}),(function(n){return n.right}),(function(n){return n.top}),(function(n){return n.bottom}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size&&n.size/2}),i.U1,s.O9.borderDarker,s.O9.colorSecondary,s.O9.colorSecondary);t.Z=function(n){var t=n.objective,e=void 0!==t&&t,r=n.size,o=void 0===r?26:r,i=n.top,p=void 0===i?"50%":i,l=n.bottom,c=void 0===l?"auto":l,s=n.left,d=void 0===s?"50%":s,f=n.right,g=void 0===f?"auto":f;return a.createElement(u,{objective:e},a.createElement(m,{size:o,top:p,bottom:c,right:g,left:d}))}},65634:function(n,t,e){"use strict";e.d(t,{II:function(){return j},bL:function(){return Z},Ph:function(){return E},Kx:function(){return D},Y8:function(){return M},XZ:function(){return F},lX:function(){return C},__:function(){return z},wX:function(){return _},A0:function(){return X},jj:function(){return Y},Ex:function(){return I}});var r,o,i,a,p,l,c,s,d,u,m,f,g,b,h=e(45949),x=e(29163),y=e(131),w=e.n(y),v=e(89816),k=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},S="15px",O="12px",P="34px",z=w()(x.ZP.label)(r||(r=k(["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"],["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"])),(function(n){return n.uppercase?"uppercase":"none"}),v.cp.fontWeightMedium,v.O9.textPrimary,v.cp.fontSizeUppercase,v.O9.colorCoreRed),_=w()(x.ZP.div)(i||(i=k(["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"],["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.horizontal&&(0,x.iv)(o||(o=k(["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "],["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "])))}),v.MB.unitSpacing,v.O9.colorCoreGray),j=w()(x.ZP.input)(a||(a=k(["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"],["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"])),P,v.MB.unitSpacing,v.O9.textPrimary,(function(n){return n.hasError?v.O9.colorCoreRed:v.O9.colorShadowGray}),(function(n){return n.round?"\n        font-size: 13px;\n        border: 1px solid "+v.O9.borderDarker+";\n        border-radius: 20px;\n        padding: 5px 20px;\n      ":""}),v.O9.colorLightGray,v.O9.colorSecondary),Z=w()(x.ZP.div)(p||(p=k(["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"],["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"])),(function(n){return n.hasError?v.O9.colorCoreRed:v.O9.colorShadowGray}),P,v.O9.colorCoreGray),E=(0,x.ZP)(j.withComponent("select"))(l||(l=k(["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"],["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"])),P,v.MB.coreSpacing),D=w()((0,x.ZP)(j.withComponent("textarea")))(c||(c=k(["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"],["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"])),(function(n){return n.maxHeight&&n.maxHeight+"px"})),C=x.ZP.label(s||(s=k(["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"]))),B=w()(x.ZP.input)(d||(d=k(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"],["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"])),(function(n){return n.disabled&&"not-allowed"}),(function(n){return n.color?n.color:v.O9.colorLightGray}),"0px",v.O9.colorWhite,"2px",(function(n){return n.color?(0,h.m4)(n.color,.7):v.O9.colorShadowGray}),v.O9.colorWhite,S,S,S,(function(n){return n.disabled&&"not-allowed"}),v.O9.colorWhite,"0px","2px",O,S,O,S,O,S,O),M=(0,x.ZP)(B)(u||(u=k(["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"],["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"])),v.O9.colorSecondary),F=w()((0,x.ZP)(B))(m||(m=k(["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"],["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"])),S,S,S,S,v.O9.colorWhite,(function(n){return n.color?n.color:v.O9.colorSecondary})),Y=x.ZP.label(f||(f=k(["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"],["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"])),v.O9.colorCoreRed,v.MB.unitSpacing-3),X=x.ZP.span(g||(g=k(["\n  flex: 1;\n"],["\n  flex: 1;\n"]))),I=x.ZP.div(b||(b=k(["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"],["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"])),v.MB.unitSpacing,v.MB.unitSpacing,v.MB.unitSpacing)},69713:function(n,t,e){"use strict";e.d(t,{Z:function(){return b}});var r,o,i,a=e(67294),p=e(29163),l=e(131),c=e.n(l),s=e(89816),d=e(65634),u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},m=c()(p.ZP.table)(o||(o=u(["\n  ",";\n"],["\n  ",";\n"])),(function(n){return(0,p.iv)(r||(r=u(["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "],["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "])),n.whiteSpace||"",s.O9.borderPrimary,s.O9.textPrimary,s.MB.unitSpacing-2,n.alignTop&&"top",d.lX,d.II,s.O9.colorCoreGray,s.cp.fontSizeUppercase,s.O9.bgLight,n.hover?"tr:hover td { background-color: #f5f5f5; }":null,n.bordered?"th, td { border-bottom: 1px solid "+s.O9.borderPrimary+"; }":null,n.striped?"tr:nth-of-type(odd) td { background-color: "+s.O9.bgLightPurple+"; }":null,s.O9.borderDarker,s.MB.unitSpacing-2,s.MB.coreSpacing-2,s.MB.coreSpacing,s.MB.coreSpacing)})),f=(i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),g=function(){return(g=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},b=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return f(t,n),t.prototype.render=function(){return a.createElement(m,g({},this.props))},t.defaultProps={required:!1,striped:!1,bordered:!1,condensed:!1,hover:!1,responsive:!1,alignTop:!1},t}(a.Component)},30783:function(n,t,e){"use strict";e.d(t,{U1:function(){return b},Ji:function(){return h},qw:function(){return x},lL:function(){return y},Ag:function(){return w}});var r,o,i,a,p,l,c,s,d,u,m,f=e(29163),g=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},b=(0,f.F4)(r||(r=g(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"],["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),h=((0,f.F4)(o||(o=g(["\n  0%{\n    transform:translateY(0px)\n  }\n  28%{\n    transform:translateY(-5px)\n  }\n  44%{\n    transform:translateY(0px)\n  }\n"],["\n  0%{\n    transform:translateY(0px)\n  }\n  28%{\n    transform:translateY(-5px)\n  }\n  44%{\n    transform:translateY(0px)\n  }\n"]))),(0,f.F4)(i||(i=g(["\n  0% {\n    opacity: 0;\n\t}\n\t\n  100% {\n    opacity: 1;\n  }\n"],["\n  0% {\n    opacity: 0;\n\t}\n\t\n  100% {\n    opacity: 1;\n  }\n"])))),x=(0,f.F4)(a||(a=g(["\n  0% {\n    transform: translateY(-20px);\n    opacity: 0.7;\n\t}\n\t\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateY(-20px);\n    opacity: 0.7;\n\t}\n\t\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),y=((0,f.F4)(p||(p=g(["\n  0% {\n    transform: translateX(20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateX(20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(l||(l=g(["\n  0% {\n    transform: translateX(-20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateX(-20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(c||(c=g(["\n  0%{transform:rotate(-10deg)}\n  28%{transform:rotate(10deg)}\n  10%{transform:rotate(20deg)}\n  18%{transform:rotate(-20deg)}\n  28%{transform:rotate(20deg)}\n  30%,100%{transform:rotate(0deg)}\n"],["\n  0%{transform:rotate(-10deg)}\n  28%{transform:rotate(10deg)}\n  10%{transform:rotate(20deg)}\n  18%{transform:rotate(-20deg)}\n  28%{transform:rotate(20deg)}\n  30%,100%{transform:rotate(0deg)}\n"])))),w=((0,f.F4)(s||(s=g(["\n  from {\n    background-position:0 0;\n  }\n\n  to {\n    background-position:-10000px 5000px;\n  }\n"],["\n  from {\n    background-position:0 0;\n  }\n\n  to {\n    background-position:-10000px 5000px;\n  }\n"]))),(0,f.F4)(d||(d=g(["\n  from {\n    background-position: 16px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n"],["\n  from {\n    background-position: 16px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n"]))));(0,f.F4)(u||(u=g(["\n  0% { box-shadow: 0 0 -5px 0 #63D2D6; }\n  40% { box-shadow: 0 0 10px 0 #63D2D6; }\n  60% { box-shadow: 0 0 10px 0 #63D2D6; }\n  100% { box-shadow: 0 0 -5px 0 #63D2D6; }\n"],["\n  0% { box-shadow: 0 0 -5px 0 #63D2D6; }\n  40% { box-shadow: 0 0 10px 0 #63D2D6; }\n  60% { box-shadow: 0 0 10px 0 #63D2D6; }\n  100% { box-shadow: 0 0 -5px 0 #63D2D6; }\n"]))),(0,f.F4)(m||(m=g(["\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"],["\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"])))},60641:function(n,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);