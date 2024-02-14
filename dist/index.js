"use strict";var l=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var q=l(function(A,m){
function g(r,a,v,c,t,f,o,s){var i,n,u,e;if(r<=0)return f;for(v<0?i=(1-r)*v:i=0,t<0?n=(1-r)*t:n=0,o<0?u=(1-r)*o:u=0,e=0;e<r;e++)f[u]=s(a[i],c[n]),i+=v,n+=t,u+=o;return f}m.exports=g
});var R=l(function(B,O){
function h(r,a,v,c,t,f,o,s,i,n,u){var e,p,x,y;if(r<=0)return s;for(e=c,p=o,x=n,y=0;y<r;y++)s[x]=u(a[e],t[p]),e+=v,p+=f,x+=i;return s}O.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=q(),k=R();j(b,"ndarray",k);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
