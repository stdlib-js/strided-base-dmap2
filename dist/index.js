"use strict";var y=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var p=y(function(B,d){
function g(r,e,a,n,t,s,u,i,O,R,b){var v,o,f,c;if(r<=0)return i;for(v=n,o=u,f=R,c=0;c<r;c++)i[f]=b(e[v],t[o]),v+=a,o+=s,f+=O;return i}d.exports=g
});var m=y(function(C,x){
var q=require('@stdlib/strided-base-stride2offset/dist'),h=p();function j(r,e,a,n,t,s,u,i){return h(r,e,a,q(r,a),n,t,q(r,t),s,u,q(r,u),i)}x.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=m(),w=p();k(l,"ndarray",w);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
