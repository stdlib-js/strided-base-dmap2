// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a,i,o,d){var f,s,u,l;if(r<=0)return i;for(f=e<0?(1-r)*e:0,s=a<0?(1-r)*a:0,u=o<0?(1-r)*o:0,l=0;l<r;l++)i[u]=d(n[f],t[s]),f+=e,s+=a,u+=o;return i}function e(r,n,e,t,a,i,o,d,f,s,u){var l,m,p,y;if(r<=0)return d;for(l=t,m=o,p=s,y=0;y<r;y++)d[p]=u(n[l],a[m]),l+=e,m+=i,p+=f;return d}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
