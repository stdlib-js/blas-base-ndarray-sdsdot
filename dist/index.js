"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=d(function(m,v){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/blas-base-sdsdot/dist').ndarray;function l(e){var r=c(e[2]),a=e[0],i=e[1];return o(q(a,0),r,s(a),t(a,0),u(a),s(i),t(i,0),u(i))}v.exports=l
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
