(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2870:function(e,t,n){Promise.resolve().then(n.bind(n,8))},8:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(3827),l=n(6244);let o="img/family.jpg";function s(e){let t='\n<ImgBox\n  id="family" className="img-fluid" name="family"\n  src="'.concat(o,'"\n\n  x="47" y="288" w="380" h="523"\n  markStyle={{ \'border\': \'4px solid red\' }}\n/>\n');return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6 col-lg-6",children:[(0,r.jsx)("div",{className:"panel panel-default",children:(0,r.jsx)("div",{className:"panel-body",children:"Use x and y co-ordinates with width and height."})}),(0,r.jsx)("pre",{children:t})]}),(0,r.jsx)("div",{className:"col-sm-6 col-lg-6",children:(0,r.jsx)(l.Z,{id:"family",className:"img-fluid",name:"family",src:o,x:"47",y:"288",w:"380",h:"523",markStyle:{border:"4px solid red"}})})]})}let a="img/frightfest.jpg",i='\n<ImgBox\n  id="frightfest" className="img-fluid"\n  src="'.concat(a,'"\n\n  x="483" y="405" x2="932" y2="1038" markClass="frightfest_style"\n/>\n');function c(e){return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6 col-lg-6",children:[(0,r.jsx)("div",{className:"panel panel-default",children:(0,r.jsx)("div",{className:"panel-body",children:"Use coordinates x,y and x2,y2 with a css class to define the marker&aposs look."})}),(0,r.jsx)("pre",{children:i})]}),(0,r.jsx)("div",{className:"col-sm-6 col-lg-6",children:(0,r.jsx)(l.Z,{id:"frightfest",className:"img-fluid",src:a,x:"483",y:"405",x2:"932",y2:"1038",markClass:"frightfest_style"})})]})}let u="img/quantel.jpg",d='\n<a href="README.md" id="quantel_example">\n  <ImgBox\n    id="quantel" className="img-fluid"\n    src="'.concat(u,'"\n\n    x="1395" y="246" w="638" h="763" markStyle={markStyle}\n  />\n</a>\n'),f={backgroundColor:"white",opacity:"0.2",border:"4px dotted white"};function y(e){return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4 col-lg-4",children:[(0,r.jsx)("div",{className:"panel panel-default",children:(0,r.jsx)("div",{className:"panel-body",children:"Wrap your image in anything like an anchor link."})}),(0,r.jsx)("pre",{children:"\nconst markStyle = {\n  backgroundColor: 'white',\n  opacity: '0.2',\n  border: '4px dotted white'\n}\n"}),(0,r.jsx)("pre",{children:d})]}),(0,r.jsx)("div",{className:"col-sm-8 col-lg-8",children:(0,r.jsx)("a",{href:"README.md",id:"quantel_example",target:"_new",children:(0,r.jsx)(l.Z,{id:"quantel",className:"img-fluid",src:u,x:"1395",y:"246",w:"638",h:"763",markStyle:f})})})]})}let m="img/youth_hosteling.jpg",p='\n<ImgBox\n  id="youth_hosteling" className="img-fluid"\n  src="'.concat(m,'"\n\n  x="298" y="455" x2="682" y2="900" markStyle={markStyle}\n  onClick={doClick}\n/>\n'),h={border:"5px dashed cyan"},x=e=>{alert("David is Ace!")};function v(e){return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6 col-lg-6",children:[(0,r.jsx)("div",{className:"panel panel-default",children:(0,r.jsxs)("div",{className:"panel-body",children:["Use with clickables, like alerts, to your ",(0,r.jsx)("code",{children:"IMG"})," in the normal way."]})}),(0,r.jsx)("pre",{children:"\nconst markStyle = {\n  border: '5px dashed cyan'\n}\n"}),(0,r.jsx)("pre",{children:"\nconst doClick = (e) => {\n  alert('David is Ace!')\n}\n"}),(0,r.jsx)("pre",{children:p})]}),(0,r.jsx)("div",{className:"col-sm-6 col-lg-6",children:(0,r.jsx)(l.Z,{id:"youth_hosteling",className:"img-fluid",src:m,x:"298",y:"455",x2:"682",y2:"900",markStyle:h,onClick:x})})]})}var g=n(4090);function b(e){let{val:t}=e;return(0,r.jsx)("input",{type:"text",placeholder:"Redraw the box around the barman in both pictures",value:t,readOnly:!0,style:{width:"100%"}})}let j=e=>JSON.stringify(e).replaceAll(",",", ").replaceAll('"',""),w=e=>Object.keys(e).map(t=>{let n=e[t];return t+'="'+n+'"'}).join(" ");function k(e){let{myCoords:t}=e,n=JSON.stringify(t),l=j(t),o={};o={...t},delete o.x2,delete o.y2;let s=j(o),a=w(o);o={...t},delete o.w,delete o.h;let i=j(o),c=w(o);return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(b,{val:n}),(0,r.jsx)("br",{}),(0,r.jsx)(b,{val:l}),(0,r.jsx)("div",{children:"\xa0"}),(0,r.jsx)(b,{val:s}),(0,r.jsx)("br",{}),(0,r.jsx)(b,{val:a}),(0,r.jsx)("div",{children:"\xa0"}),(0,r.jsx)(b,{val:i}),(0,r.jsx)("br",{}),(0,r.jsx)(b,{val:c})]})}let O="img/jack_pub.jpg",S='\n<ImgBox\n  id="jack_pub_big" {...myCoords} className="img-fluid"\n  src="'.concat(O,"\"\n  defaultSettings={{\n    edit: true,\n    saveBox: saveMyCoords,\n    markClass: 'jack_pub_style'\n  }}\n/>\n"),N='\n<ImgBox\n  id="jack_pub_small" {...myCoords} className="img-fluid"\n  edit={true} saveBox={saveMyCoords}\n  markStyle={{ \'border\': \'2px solid blue\' }}\n  src="'.concat(O,'"\n/>\n');function C(){let[e,t]=(0,g.useState)({x:1050,y:688,x2:1732,y2:1563,w:682,h:875}),n=e=>{t(e)};return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6 col-lg-6",children:[(0,r.jsx)("div",{className:"panel panel-default",children:(0,r.jsxs)("div",{className:"panel-body",children:["Adjust either of the boxes. Click once to start drawing, click again to save.",(0,r.jsx)("br",{}),"If your initial point is wrong, you can move the pointer up and right to move the inital point."]})}),(0,r.jsx)("pre",{children:".jack_pub_style {\n  background-color: black;\n  opacity: 0.4;\n  border: 4px solid yellow;\n}\n"}),(0,r.jsx)("pre",{children:"\nconst [myCoords, setMyCoords] =\n  useState({x:1050, y:688, x2:1732, y2:1563, w:682, h:875})\nconst [myCoordString, setMyCoordString] =\n  useState('')\n\nconst saveMyCoords = (coords) => {\n  setMyCoords(coords)\n  setMyCoordString(JSON.stringify(myCoords))\n}\n"}),(0,r.jsx)("pre",{children:S}),(0,r.jsx)("pre",{children:N}),(0,r.jsx)("pre",{children:'\n<input\n  id="jack_pub_out" type="text" placeholder="Redraw the box around the barman in both pictures"\n  readOnly={true} style={{ width: \'100%\' }}\n  value={myCoordString}\n/>\n'})]}),(0,r.jsxs)("div",{className:"col-sm-6 col-lg-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-8 col-lg-8",children:(0,r.jsx)(l.Z,{id:"jack_pub_big",...e,className:"img-fluid",src:O,defaultSettings:{edit:!0,saveBox:n,markClass:"jack_pub_style"}})}),(0,r.jsx)("div",{className:"col-sm-4 col-lg-4",children:(0,r.jsx)(l.Z,{id:"jack_pub_small",...e,className:"img-fluid",edit:!0,saveBox:n,markStyle:{border:"2px solid blue"},src:O})})]}),(0,r.jsx)(k,{myCoords:e})]})]})}function _(e){return(0,r.jsxs)("div",{style:{width:"75%",margin:"auto"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"React-ImgBox"}),(0,r.jsxs)("small",{children:["React version of ",(0,r.jsx)("a",{href:"https://github.com/davidnewcomb/jquery-imgbox",children:"jQuery-Imgbox"})]})]}),(0,r.jsx)("a",{href:"https://github.com/davidnewcomb/react-imgbox",children:"Project page."}),(0,r.jsx)("hr",{}),(0,r.jsx)(s,{}),(0,r.jsx)("hr",{}),(0,r.jsx)(c,{}),(0,r.jsx)("hr",{}),(0,r.jsx)(y,{}),(0,r.jsx)("hr",{}),(0,r.jsx)(v,{}),(0,r.jsx)("hr",{}),(0,r.jsx)(C,{}),(0,r.jsx)("hr",{})]})}},8314:function(e,t,n){"use strict";var r=n(1811);function l(){}function o(){}o.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,o,s){if(s!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:l};return n.PropTypes=n,n}},4404:function(e,t,n){"use strict";e.exports=n(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6244:function(e,t,n){"use strict";t.Z=g;var r,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=u(e)&&"function"!=typeof e)return{default:e};if((t=s(t))&&t.has(e))return t.get(e);var n,r,l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((r=o?Object.getOwnPropertyDescriptor(e,n):null)&&(r.get||r.set)?Object.defineProperty(l,n,r):l[n]=e[n]);return l.default=e,t&&t.set(e,l),l}(n(4090)),o=(r=n(4404))&&r.__esModule?r:{default:r};function s(e){var t,n;return"function"!=typeof WeakMap?null:(t=new WeakMap,n=new WeakMap,(s=function(e){return e?n:t})(e))}function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,s,a=[],i=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw l}}return a}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?c(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){!function(e,t,n){var r;(r=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);if(n=n.call(e,t||"default"),"object"!=u(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}(r=t,"string"),(t="symbol"==u(r)?r:String(r))in e)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={id:o.default.string,className:o.default.string,src:o.default.string,alt:o.default.string,onClick:o.default.func,onMouseMove:o.default.func,x:o.default.oneOfType([o.default.string,o.default.number]),y:o.default.oneOfType([o.default.string,o.default.number]),x2:o.default.oneOfType([o.default.string,o.default.number]),y2:o.default.oneOfType([o.default.string,o.default.number]),w:o.default.oneOfType([o.default.string,o.default.number]),h:o.default.oneOfType([o.default.string,o.default.number]),defaultSettings:o.default.object,debug:o.default.bool,name:o.default.string,markStyle:o.default.object,markClass:o.default.string,edit:o.default.bool,saveBox:o.default.func},m={id:null,className:null,src:null,alt:"",onClick:null,onMouseMove:null,x:void 0,y:void 0,x2:void 0,y2:void 0,w:void 0,h:void 0,defaultSettings:null,debug:!1,name:"",markStyle:{},markClass:"",edit:!1,saveBox:function(e){console.log('Override "saveBox(coord)" to save coordinates',e)}},p={position:"absolute",pointerEvents:"none"},h={position:"relative"};function x(e,t,n,r){var l={};return l.x=Math.min(e,n),l.y=Math.min(t,r),l.x2=Math.max(e,n),l.y2=Math.max(t,r),l.w=Math.abs(e-n),l.h=Math.abs(t-r),l}var v={x:0,y:0,x2:0,y2:0,w:0,h:0};function g(e){var t=e.defaultSettings,n=(0,l.useRef)(null),r=(0,l.useRef)(-1),o=(0,l.useMemo)(function(){var n,r,l=f({},m),o=("object"===u(t)&&(l=f(f({},l),t)),null===(n=l=f(f({},l),e))?null:(r=f({},n),null!==m&&Object.keys(m).map(function(e){return delete r[e]}),r));return l.others=o,l},[e,t]),s=i((0,l.useState)(!1),2),c=s[0],d=s[1],s=i((0,l.useState)(null),2),y=s[0],g=s[1],s=i((0,l.useState)(null),2),b=s[0],j=s[1],w=(0,l.useCallback)(function(e,t){o.debug&&(e="imgbox: "+o.name+" "+e,null==t?console.log(e):console.log(e,t))},[o.debug,o.name]),k=(0,l.useCallback)(function(){w("Page resize"),j(f({},b))},[w,b]);(0,l.useEffect)(function(){return w("Add page window resize listener"),window.addEventListener("resize",k),function(){w("Add page window resize listener"),window.removeEventListener("resize",k)}},[w,k]),(0,l.useEffect)(function(){w("useEffect:settings",o);var e,t,l,s,a=null==(a=n.current)?void 0:a.width,i=null==(i=n.current)?void 0:i.naturalWidth,a=(0==i&&(w("Real image width is zero. Bad load?"),i=a),r.current=a/i,w("actualToLayoutRatio ".concat(a,"/").concat(i," = ").concat(r.current)),w("settings:",o),function(e){var t={};if(void 0!==e.x&&(t.x=+e.x),void 0!==e.y&&(t.y=+e.y),void 0!==e.x2&&(t.x2=+e.x2),void 0!==e.y2&&(t.y2=+e.y2),void 0!==e.w&&(t.w=+e.w),void 0!==e.h&&(t.h=+e.h),void 0===t.x||void 0===t.y)return"missing one of x,y";if(void 0===t.w||void 0===t.h){if(void 0===t.x2||void 0===t.y2)return"missing one of w,h|x2,y2";t.w=Math.abs(t.x2-t.x),t.h=Math.abs(t.y2-t.y)}else void 0!==t.x2&&void 0!==t.y2||(t.x2=t.x+t.w,t.y2=t.y+t.h);return t}(o)),i=(w("propCoords - should be a string:",a),"string"==typeof a&&w("newProps-coord",a=v),{});0===(i=!0===c&&null!==b?b:a).w&&0===i.h?(y&&(w("useEffect:setMarkerDivStyle:null"),g(null)),w("nothing to show",i)):(i=a=x(i.x,i.y,i.x2,i.y2),(a={}).x=Math.floor(i.x*r.current),a.y=Math.floor(i.y*r.current),a.x2=Math.floor(i.x2*r.current),a.y2=Math.floor(i.y2*r.current),a.w=Math.floor(i.w*r.current),a.h=Math.floor(i.h*r.current),i=a,a=""===(null==(a=n.current)?void 0:a.style.paddingLeft)?0:parseInt(null==(a=n.current)?void 0:a.style.paddingLeft),s=""===(null==(s=n.current)?void 0:s.style.paddingLeft)?0:parseInt(null==(s=n.current)?void 0:s.style.paddingTop),w("pos="+JSON.stringify(a={left:a+i.x+"px",top:s+i.y+"px",width:i.w+"px",height:i.h+"px"})),!1===((e=s=f(f(f({},o.markStyle),a),p))===y||null!==e&&null!==y&&(t=Object.keys(e),l=Object.keys(y),t.length===l.length)&&t.every(function(t){return e[t]===y[t]}))&&(w("useEffect:setMarkerDivStyle:css"),g(s)))},[c,b,y,w,o]),w("Version: 0.0.0-dev"),""===o.markClass&&"object"!==u(o.markStyle)&&w("must have markClass, markStyle or both");var s=!0===o.edit?function(e){if(function(e){var t,n=parseInt(e.nativeEvent.layerX/r.current),e=parseInt(e.nativeEvent.layerY/r.current);if(c){t=x(b.x,b.y,n,e),d(!c),j(t);var l=t;try{o.saveBox(l)}catch(e){console.error("Exception in savebox()",l,e)}}else j(t=x(n,e,n,e)),d(!c)}(e),"function"==typeof o.onClick)try{o.onClick(e)}catch(e){console.error("Error in user onClick()")}}:o.onClick,O=c?function(e){var t,n;if(t=parseInt((n=e).nativeEvent.layerX/r.current),n=parseInt(n.nativeEvent.layerY/r.current),c&&j(t=x(b.x,b.y,t,n)),"function"==typeof o.onMouseMove)try{o.onMouseMove(e)}catch(e){console.log("Error in user onMouseMove()")}}:o.onMouseMove,S=null;return null!==y?S=""!==o.markClass?l.default.createElement("div",{style:y,className:o.markClass}):l.default.createElement("div",{style:y}):w("no marker to display"),w("render"),l.default.createElement("div",{style:h},l.default.createElement("img",a({ref:n,id:o.id,className:o.className,src:o.src,alt:o.alt,onClick:s,onMouseMove:O},o.others)),S)}g.propTypes=y}},function(e){e.O(0,[971,69,744],function(){return e(e.s=2870)}),_N_E=e.O()}]);