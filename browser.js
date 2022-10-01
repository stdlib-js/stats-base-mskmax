// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r;function _(e){return e!=e}var p=Number.POSITIVE_INFINITY;function d(e){return 0===e&&1/e===p}function b(e,r,t,n,o){var i,a,u,f,l;if(e<=0)return NaN;for(a=t<0?(1-e)*t:0,u=o<0?(1-e)*o:0,l=0;l<e&&0!==n[u];l++)a+=t,u+=o;if(l===e)return NaN;if(_(i=r[a]))return i;for(l+=1;l<e;l++)if(a+=t,!n[u+=o]){if(_(f=r[a]))return f;(f>i||f===i&&d(f))&&(i=f)}return i}function s(e,r,t,n,o,i,a){var u,f,l,c,p;if(e<=0)return NaN;for(f=n,l=a,p=0;p<e&&0!==o[l];p++)f+=t,l+=i;if(p===e)return NaN;if(_(u=r[f]))return u;for(p+=1;p<e;p++)if(f+=t,!o[l+=i]){if(_(c=r[f]))return c;(c>u||c===u&&d(c))&&(u=c)}return u}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:s}),e.default=b,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).mskmax={});
//# sourceMappingURL=browser.js.map
