import{_ as r}from"./preload-helper-BQ24v_F8.js";import{P as n}from"./bootstrap-Bpe5LRJd.js";import{_ as a}from"./currency-lOMYG1Wf.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as p,o as _,c,a as t,t as l}from"./runtime-core.esm-bundler-RT2b-_3S.js";const m={name:"ns-pos-customers-button",methods:{__:a,openCustomerPopup(){n.show(p({loader:()=>r(()=>import("./ns-pos-order-type-popup-dHaiHxmR.js").then(e=>e.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let e in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(e)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[e]!==null?nsShortcuts[e].join("+"):null,s=>{s.preventDefault(),this.openCustomerPopup()})}},i={class:"ns-button default"},d=t("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1);function f(e,s,h,P,x,o){return _(),c("div",i,[t("button",{onClick:s[0]||(s[0]=b=>o.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,t("span",null,l(o.__("Customers")),1)])])}const B=u(m,[["render",f]]);export{B as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ns-pos-order-type-popup-dHaiHxmR.js","./bootstrap-Bpe5LRJd.js","./currency-lOMYG1Wf.js","./runtime-core.esm-bundler-RT2b-_3S.js","./ns-prompt-popup-C2dK5WQb.js","./_plugin-vue_export-helper-DlAUqK2U.js","./ns-prompt-popup-CVxzoclS.css","./ns-orders-preview-popup-CjtIUcZ8.js","./index.es-Br67aBEV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
