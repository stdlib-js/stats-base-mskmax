// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";var n=e,i=t;var s=e,a=t;var f=function(r,e,t,s,a){var f,o,d,m,u;if(r<=0)return NaN;for(o=t<0?(1-r)*t:0,d=a<0?(1-r)*a:0,u=0;u<r&&0!==s[d];u++)o+=t,d+=a;if(u===r)return NaN;if(f=e[o],n(f))return f;for(u+=1;u<r;u++)if(o+=t,!s[d+=a]){if(m=e[o],n(m))return m;(m>f||m===f&&i(m))&&(f=m)}return f};r(f,"ndarray",(function(r,e,t,n,i,f,o){var d,m,u,l,p;if(r<=0)return NaN;for(m=n,u=o,p=0;p<r&&0!==i[u];p++)m+=t,u+=f;if(p===r)return NaN;if(d=e[m],s(d))return d;for(p+=1;p<r;p++)if(m+=t,!i[u+=f]){if(l=e[m],s(l))return l;(l>d||l===d&&a(l))&&(d=l)}return d}));var o=f;export{o as default};
//# sourceMappingURL=index.mjs.map
