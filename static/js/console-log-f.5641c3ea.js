(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./console/logF.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),a=o.n(t),r=o("./node_modules/@mdx-js/tag/dist/index.js");function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}n.default=function(e){var n=e.components;l(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"consolelog"}},"console/log"),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"logF :: Function -> a -> a")),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"logF")," transforms the value and sends it to ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"console.log")," and then returns the pre-transformed value value."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import logF from 'mojiscript/console/logF'\nimport pipe from 'mojiscript/core/pipe'\n\nconst main = pipe ([\n  logF (x => x.toUpperCase ()), //=> \"HELLO WORLD!\"\n  value => console.log (value) //=> \"Hello World!\"\n])\n\nmain ('Hello World!')\n")))}}}]);