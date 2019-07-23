module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1563889674283, function(require, module, exports) {
module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r){function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw u}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],o=["元","万","亿"],u=["","拾","佰","仟"];e.exports=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"人民币";if("number"!=typeof e)return{errCode:1,msg:"类型错误: ".concat(e,"不是合理的金额！"),value:""};var i=!e.toString().includes("."),c=t(e.toFixed(2).replace(/\B(?=(\d{4})+\b)/g,",").split("."),2),a=c[0],l=c[1],f=a.split(",");if(f.length>3)return{errCode:2,msg:"错误: ".concat(e,"超过了合理的数据范围！"),value:e.toString()};var d,p="";return 1===f.length&&"0"===f[0]||(p=f.map(function(e,r){return function(e,r){return e.split("").reverse().reduce(function(e,r,t){var o=t>0&&"0"!==r?u[t]:"";return[n[r],o,e].join("")},o[r])}(e,f.length-r-1)}).reduce(function(e,r){return e+r.replace(/[零]+/g,"零").replace(/零(?=[元万亿])/g,"")},"")),{errCode:0,msg:"",value:[r,p,i?"整":"",(d=l,"00"===d?"":"0"===d[0]?"零".concat(n[d[1]],"分"):"0"===d[1]?"".concat(n[d[0]],"角"):"".concat(n[d[0]],"角").concat(n[d[1]],"分"))].join("")}}}]);
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1563889674283);
})()
//# sourceMappingURL=index.js.map