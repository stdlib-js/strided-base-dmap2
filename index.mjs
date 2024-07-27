// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";function t(r,e,t,n,s,d,i,o,a,f,m){var l,u,p,j;if(r<=0)return o;for(l=n,u=i,p=f,j=0;j<r;j++)o[p]=m(e[l],s[u]),l+=t,u+=d,p+=a;return o}function n(r,n,s,d,i,o,a,f){return t(r,n,s,e(r,s),d,i,e(r,i),o,a,e(r,a),f)}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
