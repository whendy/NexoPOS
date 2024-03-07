var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function K(a){if(a.__esModule)return a;var r=a.default;if(typeof r=="function"){var l=function u(){return this instanceof u?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};l.prototype=r.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(a).forEach(function(u){var p=Object.getOwnPropertyDescriptor(a,u);Object.defineProperty(l,u,p.get?p:{enumerable:!0,get:function(){return a[u]}})}),l}const Y=function(a,r="NexoPOS"){return nsLanguage.getEntries(r)&&nsLanguage.getEntries(r)[a]||a},U=function(a,r){return nsLanguage.getEntries(r)&&nsLanguage.getEntries(r)[a]||a};var L={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(a){(function(r,l){a.exports?a.exports=l():r.numeral=l()})(j,function(){var r,l,u="2.0.6",p={},h={},_={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},d={currentLocale:_.currentLocale,zeroFormat:_.zeroFormat,nullFormat:_.nullFormat,defaultFormat:_.defaultFormat,scalePercentBy100:_.scalePercentBy100};function w(e,t){this._input=e,this._value=t}return r=function(e){var t,s,i,n;if(r.isNumeral(e))t=e.value();else if(e===0||typeof e>"u")t=0;else if(e===null||l.isNaN(e))t=null;else if(typeof e=="string")if(d.zeroFormat&&e===d.zeroFormat)t=0;else if(d.nullFormat&&e===d.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(s in p)if(n=typeof p[s].regexps.unformat=="function"?p[s].regexps.unformat():p[s].regexps.unformat,n&&e.match(n)){i=p[s].unformat;break}i=i||r._.stringToNumber,t=i(e)}else t=Number(e)||null;return new w(e,t)},r.version=u,r.isNumeral=function(e){return e instanceof w},r._=l={numberToFormat:function(e,t,s){var i=h[r.options.currentLocale],n=!1,o=!1,c=0,f="",b=1e12,m=1e9,y=1e6,O=1e3,v="",E=!1,F,B,g,x,P,V,M;if(e=e||0,B=Math.abs(e),r._.includes(t,"(")?(n=!0,t=t.replace(/[\(|\)]/g,"")):(r._.includes(t,"+")||r._.includes(t,"-"))&&(P=r._.includes(t,"+")?t.indexOf("+"):e<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),r._.includes(t,"a")&&(F=t.match(/a(k|m|b|t)?/),F=F?F[1]:!1,r._.includes(t," a")&&(f=" "),t=t.replace(new RegExp(f+"a[kmbt]?"),""),B>=b&&!F||F==="t"?(f+=i.abbreviations.trillion,e=e/b):B<b&&B>=m&&!F||F==="b"?(f+=i.abbreviations.billion,e=e/m):B<m&&B>=y&&!F||F==="m"?(f+=i.abbreviations.million,e=e/y):(B<y&&B>=O&&!F||F==="k")&&(f+=i.abbreviations.thousand,e=e/O)),r._.includes(t,"[.]")&&(o=!0,t=t.replace("[.]",".")),g=e.toString().split(".")[0],x=t.split(".")[1],V=t.indexOf(","),c=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,x?(r._.includes(x,"[")?(x=x.replace("]",""),x=x.split("["),v=r._.toFixed(e,x[0].length+x[1].length,s,x[1].length)):v=r._.toFixed(e,x.length,s),g=v.split(".")[0],r._.includes(v,".")?v=i.delimiters.decimal+v.split(".")[1]:v="",o&&Number(v.slice(1))===0&&(v="")):g=r._.toFixed(e,0,s),f&&!F&&Number(g)>=1e3&&f!==i.abbreviations.trillion)switch(g=String(Number(g)/1e3),f){case i.abbreviations.thousand:f=i.abbreviations.million;break;case i.abbreviations.million:f=i.abbreviations.billion;break;case i.abbreviations.billion:f=i.abbreviations.trillion;break}if(r._.includes(g,"-")&&(g=g.slice(1),E=!0),g.length<c)for(var k=c-g.length;k>0;k--)g="0"+g;return V>-1&&(g=g.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+i.delimiters.thousands)),t.indexOf(".")===0&&(g=""),M=g+v+(f||""),n?M=(n&&E?"(":"")+M+(n&&E?")":""):P>=0?M=P===0?(E?"-":"+")+M:M+(E?"-":"+"):E&&(M="-"+M),M},stringToNumber:function(e){var t=h[d.currentLocale],s=e,i={thousand:3,million:6,billion:9,trillion:12},n,o,c;if(d.zeroFormat&&e===d.zeroFormat)o=0;else if(d.nullFormat&&e===d.nullFormat||!e.replace(/[^0-9]+/g,"").length)o=null;else{o=1,t.delimiters.decimal!=="."&&(e=e.replace(/\./g,"").replace(t.delimiters.decimal,"."));for(n in i)if(c=new RegExp("[^a-zA-Z]"+t.abbreviations[n]+"(?:\\)|(\\"+t.currency.symbol+")?(?:\\))?)?$"),s.match(c)){o*=Math.pow(10,i[n]);break}o*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),o*=Number(e)}return o},isNaN:function(e){return typeof e=="number"&&isNaN(e)},includes:function(e,t){return e.indexOf(t)!==-1},insert:function(e,t,s){return e.slice(0,s)+t+e.slice(s)},reduce:function(e,t){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof t!="function")throw new TypeError(t+" is not a function");var s=Object(e),i=s.length>>>0,n=0,o;if(arguments.length===3)o=arguments[2];else{for(;n<i&&!(n in s);)n++;if(n>=i)throw new TypeError("Reduce of empty array with no initial value");o=s[n++]}for(;n<i;n++)n in s&&(o=t(o,s[n],n,s));return o},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(t,s){var i=l.multiplier(s);return t>i?t:i},1)},toFixed:function(e,t,s,i){var n=e.toString().split("."),o=t-(i||0),c,f,b,m;return n.length===2?c=Math.min(Math.max(n[1].length,o),t):c=o,b=Math.pow(10,c),m=(s(e+"e+"+c)/b).toFixed(c),i>t-c&&(f=new RegExp("\\.?0{1,"+(i-(t-c))+"}$"),m=m.replace(f,"")),m}},r.options=d,r.formats=p,r.locales=h,r.locale=function(e){return e&&(d.currentLocale=e.toLowerCase()),d.currentLocale},r.localeData=function(e){if(!e)return h[d.currentLocale];if(e=e.toLowerCase(),!h[e])throw new Error("Unknown locale : "+e);return h[e]},r.reset=function(){for(var e in _)d[e]=_[e]},r.zeroFormat=function(e){d.zeroFormat=typeof e=="string"?e:null},r.nullFormat=function(e){d.nullFormat=typeof e=="string"?e:null},r.defaultFormat=function(e){d.defaultFormat=typeof e=="string"?e:"0.0"},r.register=function(e,t,s){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=s,s},r.validate=function(e,t){var s,i,n,o,c,f,b,m;if(typeof e!="string"&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(e==="")return!1;try{b=r.localeData(t)}catch{b=r.localeData(r.locale())}return n=b.currency.symbol,c=b.abbreviations,s=b.delimiters.decimal,b.delimiters.thousands==="."?i="\\.":i=b.delimiters.thousands,m=e.match(/^[^\d]+/),m!==null&&(e=e.substr(1),m[0]!==n)||(m=e.match(/[^\d]+$/),m!==null&&(e=e.slice(0,-1),m[0]!==c.thousand&&m[0]!==c.million&&m[0]!==c.billion&&m[0]!==c.trillion))?!1:(f=new RegExp(i+"{2}"),e.match(/[^\d.,]/g)?!1:(o=e.split(s),o.length>2?!1:o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(f):o[0].length===1?!!o[0].match(/^\d+$/)&&!o[0].match(f)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(f)&&!!o[1].match(/^\d+$/)))},r.fn=w.prototype={clone:function(){return r(this)},format:function(e,t){var s=this._value,i=e||d.defaultFormat,n,o,c;if(t=t||Math.round,s===0&&d.zeroFormat!==null)o=d.zeroFormat;else if(s===null&&d.nullFormat!==null)o=d.nullFormat;else{for(n in p)if(i.match(p[n].regexps.format)){c=p[n].format;break}c=c||r._.numberToFormat,o=c(s,i,t)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=l.correctionFactor.call(null,this._value,e);function s(i,n,o,c){return i+Math.round(t*n)}return this._value=l.reduce([this._value,e],s,0)/t,this},subtract:function(e){var t=l.correctionFactor.call(null,this._value,e);function s(i,n,o,c){return i-Math.round(t*n)}return this._value=l.reduce([e],s,Math.round(this._value*t))/t,this},multiply:function(e){function t(s,i,n,o){var c=l.correctionFactor(s,i);return Math.round(s*c)*Math.round(i*c)/Math.round(c*c)}return this._value=l.reduce([this._value,e],t,1),this},divide:function(e){function t(s,i,n,o){var c=l.correctionFactor(s,i);return Math.round(s*c)/Math.round(i*c)}return this._value=l.reduce([this._value,e],t),this},difference:function(e){return Math.abs(r(this._value).subtract(e).value())}},r.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"},currency:{symbol:"$"}}),function(){r.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,t,s){var i=r._.includes(t," BPS")?" ":"",n;return e=e*1e4,t=t.replace(/\s?BPS/,""),n=r._.numberToFormat(e,t,s),r._.includes(n,")")?(n=n.split(""),n.splice(-1,0,i+"BPS"),n=n.join("")):n=n+i+"BPS",n},unformat:function(e){return+(r._.stringToNumber(e)*1e-4).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},s=e.suffixes.concat(t.suffixes.filter(function(n){return e.suffixes.indexOf(n)<0})),i=s.join("|");i="("+i.replace("B","B(?!PS)")+")",r.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(n,o,c){var f,b=r._.includes(o,"ib")?t:e,m=r._.includes(o," b")||r._.includes(o," ib")?" ":"",y,O,v;for(o=o.replace(/\s?i?b/,""),y=0;y<=b.suffixes.length;y++)if(O=Math.pow(b.base,y),v=Math.pow(b.base,y+1),n===null||n===0||n>=O&&n<v){m+=b.suffixes[y],O>0&&(n=n/O);break}return f=r._.numberToFormat(n,o,c),f+m},unformat:function(n){var o=r._.stringToNumber(n),c,f;if(o){for(c=e.suffixes.length-1;c>=0;c--){if(r._.includes(n,e.suffixes[c])){f=Math.pow(e.base,c);break}if(r._.includes(n,t.suffixes[c])){f=Math.pow(t.base,c);break}}o*=f||1}return o}})}(),function(){r.register("format","currency",{regexps:{format:/(\$)/},format:function(e,t,s){var i=r.locales[r.options.currentLocale],n={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]},o,c,f;for(t=t.replace(/\s?\$\s?/,""),o=r._.numberToFormat(e,t,s),e>=0?(n.before=n.before.replace(/[\-\(]/,""),n.after=n.after.replace(/[\-\)]/,"")):e<0&&!r._.includes(n.before,"-")&&!r._.includes(n.before,"(")&&(n.before="-"+n.before),f=0;f<n.before.length;f++)switch(c=n.before[f],c){case"$":o=r._.insert(o,i.currency.symbol,f);break;case" ":o=r._.insert(o," ",f+i.currency.symbol.length-1);break}for(f=n.after.length-1;f>=0;f--)switch(c=n.after[f],c){case"$":o=f===n.after.length-1?o+i.currency.symbol:r._.insert(o,i.currency.symbol,-(n.after.length-(1+f)));break;case" ":o=f===n.after.length-1?o+" ":r._.insert(o," ",-(n.after.length-(1+f)+i.currency.symbol.length-1));break}return o}})}(),function(){r.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,t,s){var i,n=typeof e=="number"&&!r._.isNaN(e)?e.toExponential():"0e+0",o=n.split("e");return t=t.replace(/e[\+|\-]{1}0/,""),i=r._.numberToFormat(Number(o[0]),t,s),i+"e"+o[1]},unformat:function(e){var t=r._.includes(e,"e+")?e.split("e+"):e.split("e-"),s=Number(t[0]),i=Number(t[1]);i=r._.includes(e,"e-")?i*=-1:i;function n(o,c,f,b){var m=r._.correctionFactor(o,c),y=o*m*(c*m)/(m*m);return y}return r._.reduce([s,Math.pow(10,i)],n,1)}})}(),function(){r.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,t,s){var i=r.locales[r.options.currentLocale],n,o=r._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),o+=i.ordinal(e),n=r._.numberToFormat(e,t,s),n+o}})}(),function(){r.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,t,s){var i=r._.includes(t," %")?" ":"",n;return r.options.scalePercentBy100&&(e=e*100),t=t.replace(/\s?\%/,""),n=r._.numberToFormat(e,t,s),r._.includes(n,")")?(n=n.split(""),n.splice(-1,0,i+"%"),n=n.join("")):n=n+i+"%",n},unformat:function(e){var t=r._.stringToNumber(e);return r.options.scalePercentBy100?t*.01:t}})}(),function(){r.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,s){var i=Math.floor(e/60/60),n=Math.floor((e-i*60*60)/60),o=Math.round(e-i*60*60-n*60);return i+":"+(n<10?"0"+n:n)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),s=0;return t.length===3?(s=s+Number(t[0])*60*60,s=s+Number(t[1])*60,s=s+Number(t[2])):t.length===2&&(s=s+Number(t[0])*60,s=s+Number(t[1])),Number(s)}})}(),r})})(L);var I=L.exports;const S=C(I);/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */var z={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:J,fromCents:!1},R=function(r){return Math.round(r)},T=function(r){return Math.pow(10,r)},A=function(r,l){return R(r/l)*l},D=/(\d)(?=(\d{3})+\b)/g,G=/(\d)(?=(\d\d)+\d\b)/g;function N(a,r){var l=this;if(!(l instanceof N))return new N(a,r);var u=Object.assign({},z,r),p=T(u.precision),h=$(a,u);l.intValue=h,l.value=h/p,u.increment=u.increment||1/p,u.useVedic?u.groups=G:u.groups=D,this.s=u,this.p=p}function $(a,r){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=0,p=r.decimal,h=r.errorOnInvalid,_=r.precision,d=r.fromCents,w=T(_),e=typeof a=="number",t=a instanceof N;if(t&&d)return a.intValue;if(e||t)u=t?a.value:a;else if(typeof a=="string"){var s=new RegExp("[^-\\d"+p+"]","g"),i=new RegExp("\\"+p,"g");u=a.replace(/\((.*)\)/,"-$1").replace(s,"").replace(i,"."),u=u||0}else{if(h)throw Error("Invalid Input");u=0}return d||(u*=w,u=u.toFixed(4)),l?R(u):u}function J(a,r){var l=r.pattern,u=r.negativePattern,p=r.symbol,h=r.separator,_=r.decimal,d=r.groups,w=(""+a).replace(/^-/,"").split("."),e=w[0],t=w[1];return(a.value>=0?l:u).replace("!",p).replace("#",e.replace(d,"$1"+h)+(t?_+t:""))}N.prototype={add:function(r){var l=this.intValue,u=this.s,p=this.p;return N((l+=$(r,u))/(u.fromCents?1:p),u)},subtract:function(r){var l=this.intValue,u=this.s,p=this.p;return N((l-=$(r,u))/(u.fromCents?1:p),u)},multiply:function(r){var l=this.intValue,u=this.s;return N((l*=r)/(u.fromCents?1:T(u.precision)),u)},divide:function(r){var l=this.intValue,u=this.s;return N(l/=$(r,u,!1),u)},distribute:function(r){for(var l=this.intValue,u=this.p,p=this.s,h=[],_=Math[l>=0?"floor":"ceil"](l/r),d=Math.abs(l-_*r),w=p.fromCents?1:u;r!==0;r--){var e=N(_/w,p);d-- >0&&(e=e[l>=0?"add":"subtract"](1/w)),h.push(e)}return h},dollars:function(){return~~this.value},cents:function(){var r=this.intValue,l=this.p;return~~(r%l)},format:function(r){var l=this.s;return typeof r=="function"?r(this,l):l.format(this,Object.assign({},l,r))},toString:function(){var r=this.intValue,l=this.p,u=this.s;return A(r/l,u.increment).toFixed(u.precision)},toJSON:function(){return this.value}};const Z=new Array(parseInt(ns.currency.ns_currency_precision)).fill("").map(a=>0).join(""),q=(a,r="full",l="en")=>{let u;switch(ns.currency.ns_currency_prefered){case"iso":u=ns.currency.ns_currency_iso;break;case"symbol":u=ns.currency.ns_currency_symbol;break}let p;if(r==="full"){const h={decimal:ns.currency.ns_currency_decimal_separator,separator:ns.currency.ns_currency_thousand_separator,precision:parseInt(ns.currency.ns_currency_precision),symbol:""};p=N(a,h).format()}else p=S(a).format("0.0a");return`${ns.currency.ns_currency_position==="before"?u:""}${p}${ns.currency.ns_currency_position==="after"?u:""}`},H=a=>{const r=`0.${Z}`;return parseFloat(S(a).format(r))},Q=a=>S(a).format("0a");export{Y as _,H as a,C as b,j as c,Q as d,U as e,K as g,q as n};
