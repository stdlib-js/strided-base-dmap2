// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t,a,i,o,f){var u,d,s,l;if(r<=0)return i;for(u=n<0?(1-r)*n:0,d=a<0?(1-r)*a:0,s=o<0?(1-r)*o:0,l=0;l<r;l++)i[s]=f(e[u],t[d]),u+=n,d+=a,s+=o;return i},n=function(r,e,n,t,a,i,o,f,u,d,s){var l,m,p,v;if(r<=0)return f;for(l=t,m=o,p=d,v=0;v<r;v++)f[p]=s(e[l],a[m]),l+=n,m+=i,p+=u;return f};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
