import{P as r}from"./bootstrap-ffaf6d09.js";import{b as n}from"./ns-pos-shipping-popup-dffc98ef.js";import{_ as p}from"./currency-feccde3d.js";import{_ as a}from"./_plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,a as t,t as d}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";import"./ns-prompt-popup-24cc8d6f.js";import"./ns-orders-preview-popup-3c654295.js";import"./index.es-25aa42ee.js";const _={name:"ns-pos-delivery-button",methods:{__:p,openOrderTypeSelection(){r.show(n)}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_order_type")},mounted(){for(let e in nsShortcuts)["ns_pos_keyboard_order_type"].includes(e)&&nsHotPress.create("ns_pos_keyboard_order_type").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[e]!==null?nsShortcuts[e].join("+"):null,o=>{o.preventDefault(),this.openOrderTypeSelection()})}},c={class:"ns-button default"},u=t("i",{class:"mr-1 text-xl las la-truck"},null,-1);function m(e,o,f,y,h,s){return i(),l("div",c,[t("button",{onClick:o[0]||(o[0]=b=>s.openOrderTypeSelection()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[u,t("span",null,d(s.__("Order Type")),1)])])}const D=a(_,[["render",m]]);export{D as default};