"use strict";var d=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=d(function(m,v){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/blas-base-sdsdot/dist').ndarray;function l(a){var r=c(a[2]),e=a[0],i=a[1];return o(q(e,0),r,s(e),t(e,0),u(e),s(i),t(i,0),u(i))}v.exports=l
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
