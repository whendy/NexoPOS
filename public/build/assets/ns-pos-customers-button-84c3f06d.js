import{_ as s}from"./preload-helper-41c905a7.js";import{P as p}from"./bootstrap-0380d638.js";import{_ as m}from"./currency-dc6217f5.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{N as n,af as a,G as u,H as r}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as _}from"./npm~@vue~shared_-951a29c4.js";import"./npm~lodash-3db1c062.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";const c={name:"ns-pos-customers-button",methods:{__:m,openCustomerPopup(){p.show(n({loader:()=>s(()=>import("./ns-pos-order-type-popup-b72a8187.js").then(o=>o.d),["./ns-pos-order-type-popup-b72a8187.js","./bootstrap-0380d638.js","./npm~lodash-3db1c062.js","./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js","./npm~laravel-echo-0c2ba8ed.js","./npm~pusher-js-bbfae226.js","./npm~axios-c24e582b.js","./npm~chart.js-3fed1729.js","./npm~rxjs-eeb06f17.js","./npm~tslib-8dbab242.js","./npm~moment-a9aaa855.js","./npm~vue-3512c1bf.js","./npm~@vue~runtime-dom_-9455b728.js","./npm~@vue~runtime-core_-29a19feb.js","./npm~@vue~reactivity_-beabd60a.js","./npm~@vue~shared_-951a29c4.js","./npm~@vue~compiler-dom_-614ecb28.js","./npm~@vue~compiler-core_-eb33010d.js","./npm~rx-f450d610.js","./currency-dc6217f5.js","./npm~numeral-304d6dd9.js","./npm~currency.js-57f74176.js","./npm~@wordpress~hooks_-bd0b7221.js","./npm~mathjs-b10bd4cd.js","./npm~@babel~runtime_-9313f80d.js","./npm~decimal.js-d133ee8e.js","./npm~complex.js-dc0d19c5.js","./npm~fraction.js-cb0643cb.js","./npm~typed-function-de33f2d8.js","./npm~seedrandom-37239647.js","./npm~javascript-natural-sort-11e7fc54.js","./npm~escape-latex-404addb9.js","./ns-prompt-popup-1fe5a6aa.js","./npm~@ckeditor~ckeditor5-vue_-f12da425.js","./_plugin-vue_export-helper-c27b6911.js","./ns-orders-preview-popup-3cc5389c.js","./npm~@dicebear~avatars_-24df7cd3.js","./npm~pure-color-28f75675.js","./npm~svgson-59868252.js","./npm~deep-rename-keys-9802c842.js","./npm~kind-of-f578382b.js","./npm~is-buffer-793dba8c.js","./npm~rename-keys-8dab041c.js","./npm~xml-reader-1f1b3f66.js","./npm~eventemitter3-e2795b41.js","./npm~xml-lexer-a4e87e97.js","./npm~@dicebear~avatars-avataaars-sprites_-796ded10.js","./npm~vue2-daterange-picker-c3e32574.js","./npm~vue2-daterange-picker-b4959dd3.css","./npm~vuedraggable-b77cc769.js","./npm~sortablejs-1952ed83.js","./npm~vue-upload-component-5c82cdcf.js"],import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let o in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(o)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[o]!==null?nsShortcuts[o].join("+"):null,t=>{t.preventDefault(),this.openCustomerPopup()})}},l={class:"ns-button default"},d=r("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1);function f(o,t,h,P,x,e){return a(),u("div",l,[r("button",{onClick:t[0]||(t[0]=b=>e.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,r("span",null,_(e.__("Customers")),1)])])}const Z=i(c,[["render",f]]);export{Z as default};
