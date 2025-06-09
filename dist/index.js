"use strict";var y=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var g=y(function(K,P){
var p=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-assert-is-positive-zero/dist');function B(r,a,t,q,v,x,b){var u,o,c,s,n,i,e,m,f;if(u=a.data,o=v.data,c=a.accessors[0],s=v.accessors[0],r<=0)return NaN;for(i=q,e=b,f=0;f<r&&s(o,e)!==0;f++)i+=t,e+=x;if(f===r)return NaN;if(n=c(u,i),p(n))return n;for(f+=1,f;f<r;f++)if(i+=t,e+=x,!s(o,e)){if(m=c(u,i),p(m))return m;(m>n||m===n&&A(m))&&(n=m)}return n}P.exports=B
});var l=y(function(L,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=g();function E(r,a,t,q,v,x,b){var u,o,c,s,n,i,e;if(r<=0)return NaN;if(s=j(a),n=j(v),s.accessorProtocol||n.accessorProtocol)return D(r,s,t,q,n,x,b);for(o=q,c=b,e=0;e<r&&v[c]!==0;e++)o+=t,c+=x;if(e===r)return NaN;if(u=a[o],Z(u))return u;for(e+=1,e;e<r;e++)if(o+=t,c+=x,!v[c]){if(i=a[o],Z(i))return i;(i>u||i===u&&C(i))&&(u=i)}return u}O.exports=E
});var w=y(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(r,a,t,q,v){return F(r,a,t,R(r,t),q,v,R(r,v))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=l();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
