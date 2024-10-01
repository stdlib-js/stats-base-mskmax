"use strict";var x=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var p=x(function(B,q){
var c=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-positive-zero/dist');function g(i,u,t,m,o){var n,f,r,a,e;if(i<=0)return NaN;for(t<0?f=(1-i)*t:f=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&m[r]!==0;e++)f+=t,r+=o;if(e===i)return NaN;if(n=u[f],c(n))return n;for(e+=1,e;e<i;e++)if(f+=t,r+=o,!m[r]){if(a=u[f],c(a))return a;(a>n||a===n&&R(a))&&(n=a)}return n}q.exports=g
});var b=x(function(C,y){
var l=require('@stdlib/math-base-assert-is-nan/dist'),h=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(i,u,t,m,o,n,f){var r,a,e,s,v;if(i<=0)return NaN;for(a=m,e=f,v=0;v<i&&o[e]!==0;v++)a+=t,e+=n;if(v===i)return NaN;if(r=u[a],l(r))return r;for(v+=1,v;v<i;v++)if(a+=t,e+=n,!o[e]){if(s=u[a],l(s))return s;(s>r||s===r&&h(s))&&(r=s)}return r}y.exports=j
});var O=x(function(D,Z){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=p(),w=b();k(P,"ndarray",w);Z.exports=P
});var z=O();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
