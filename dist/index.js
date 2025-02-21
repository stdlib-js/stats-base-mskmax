"use strict";var p=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var g=p(function(Q,P){
var l=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-positive-zero/dist');function C(r,a,v,x,o,q,b){var u,n,s,f,t,i,e,m,c;if(u=a.data,n=o.data,s=a.accessors[0],f=o.accessors[0],r<=0)return NaN;for(i=x,e=b,c=0;c<r&&f(n,e)!==0;c++)i+=v,e+=q;if(c===r)return NaN;if(t=s(u,i),l(t))return t;for(c+=1,c;c<r;c++)if(i+=v,e+=q,!f(n,e)){if(m=s(u,i),l(m))return m;(m>t||m===t&&B(m))&&(t=m)}return t}P.exports=C
});var y=p(function(S,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),E=g();function F(r,a,v,x,o,q,b){var u,n,s,f,t,i,e;if(r<=0)return NaN;if(f=j(a),t=j(o),f.accessorProtocol||t.accessorProtocol)return E(r,f,v,x,t,q,b);for(n=x,s=b,e=0;e<r&&o[s]!==0;e++)n+=v,s+=q;if(e===r)return NaN;if(u=a[n],Z(u))return u;for(e+=1,e;e<r;e++)if(n+=v,s+=q,!o[s]){if(i=a[n],Z(i))return i;(i>u||i===u&&D(i))&&(u=i)}return u}O.exports=F
});var k=p(function(T,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),G=y();function H(r,a,v,x,o){return G(r,a,v,R(r,v),x,o,R(r,o))}h.exports=H
});var A=p(function(U,z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=k(),J=y();I(w,"ndarray",J);z.exports=w
});var K=A();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
