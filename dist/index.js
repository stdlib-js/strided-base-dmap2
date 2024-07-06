"use strict";var y=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=y(function(B,d){
function g(r,e,i,n,t,s,u,a,O,R,b){var v,o,f,c;if(r<=0)return a;for(v=n,o=u,f=R,c=0;c<r;c++)a[f]=b(e[v],t[o]),v+=i,o+=s,f+=O;return a}d.exports=g
});var m=y(function(C,x){
var q=require('@stdlib/strided-base-stride2offset/dist'),h=p();function j(r,e,i,n,t,s,u,a){return h(r,e,i,q(r,i),n,t,q(r,t),s,u,q(r,u),a)}x.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=m(),w=p();k(l,"ndarray",w);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
