(self.webpackChunkbiz_app=self.webpackChunkbiz_app||[]).push([[276],{10770:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(87462),a=n(42982),o=n(45987),c=n(67294),l=(n(59864),n(45697),n(86010)),i=n(14670),s=n(22318),u=n(59693);const m=(0,n(25209).Z)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var p=n(54720);const d=(0,i.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=(0,o.Z)(e,["classes"]);return c.createElement(p.Z,(0,r.Z)({component:"li",className:t.root,focusRipple:!0},n),c.createElement(m,{className:t.icon}))}));var g=c.forwardRef((function(e,t){var n=e.children,i=e.classes,u=e.className,m=e.component,p=void 0===m?"nav":m,g=e.expandText,f=void 0===g?"Show path":g,y=e.itemsAfterCollapse,h=void 0===y?1:y,v=e.itemsBeforeCollapse,E=void 0===v?1:v,b=e.maxItems,C=void 0===b?8:b,S=e.separator,w=void 0===S?"/":S,N=(0,o.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),_=c.useState(!1),k=_[0],Z=_[1],x=c.Children.toArray(n).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(s.Z,(0,r.Z)({ref:t,component:p,color:"textSecondary",className:(0,l.Z)(i.root,u)},N),c.createElement("ol",{className:i.ol},function(e,t,n){return e.reduce((function(r,a,o){return o<e.length-1?r=r.concat(a,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},n)):r.push(a),r}),[])}(k||C&&x.length<=C?x:function(e){return E+h>=e.length?e:[].concat((0,a.Z)(e.slice(0,E)),[c.createElement(d,{"aria-label":f,key:"ellipsis",onClick:function(e){Z(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,a.Z)(e.slice(e.length-h,e.length)))}(x),i.separator,w)))}));const f=(0,i.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},89659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(87462),a=n(45987),o=n(67294),c=(n(45697),n(86010)),l=n(93871),i=n(14670),s=n(24896),u=n(17294),m=n(22318),p=o.forwardRef((function(e,t){var n=e.classes,i=e.className,p=e.color,d=void 0===p?"primary":p,g=e.component,f=void 0===g?"a":g,y=e.onBlur,h=e.onFocus,v=e.TypographyClasses,E=e.underline,b=void 0===E?"hover":E,C=e.variant,S=void 0===C?"inherit":C,w=(0,a.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=(0,s.Z)(),_=N.isFocusVisible,k=N.onBlurVisible,Z=N.ref,x=o.useState(!1),P=x[0],A=x[1],j=(0,u.Z)(t,Z);return o.createElement(m.Z,(0,r.Z)({className:(0,c.Z)(n.root,n["underline".concat((0,l.Z)(b))],i,P&&n.focusVisible,"button"===f&&n.button),classes:v,color:d,component:f,onBlur:function(e){P&&(k(),A(!1)),y&&y(e)},onFocus:function(e){_(e)&&A(!0),h&&h(e)},ref:j,variant:S},w))}));const d=(0,i.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},5930:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(67294),a=n(32941),o=(n(30653),n(90482));function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t,n,a=e.category,l=e.index,i=e.deleteCategory,s=e.editCategory,u=e.canManage,m=(t=(0,r.useState)(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=m[0],d=m[1],g={anchorEl:p,popUpItems:[{icon:r.createElement("i",{className:"fas fa-edit btn_type"}),name:"Edit",value:"Edit"},{icon:r.createElement("i",{className:"fas fa-trash btn_type"}),name:"Delete",value:"Delete"}]};return r.createElement("tr",null,r.createElement("td",null,l+1),r.createElement("td",{className:"add_category_img"},a.category_pic?r.createElement("img",{src:"..".concat(a.category_pic),alt:"logo"}):r.createElement("img",{src:"../static/images/logo.svg",alt:"logo"})),r.createElement("td",null,a.name),r.createElement("td",null,r.createElement("div",{className:"custom_table_height"},a.brief_description)),r.createElement("td",null,u?r.createElement("i",{onClick:function(e){return d(e.currentTarget)},className:"fas fa-ellipsis-h btn_type"}):r.createElement("div",null)),r.createElement(o.Z,{popUpValues:g,handlePopUpClick:function(e){"Delete"==e?i(a.id):"Edit"==e&&s(a),d(null)},handlePopUp:function(e){return d(p?null:e.currentTarget)}}))}var i=n(2376);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){var t=e.changePage,n=e.categories,o=e.deleteCategory,c=e.editCategory,u=e.canManage,m=e.fetchCategories,p=e.pageDetails,d=s((0,r.useState)(""),2),g=d[0],f=d[1],y=s((0,r.useState)(25),2),h=y[0],v=y[1];return r.createElement("div",{className:"row justify-content-between"},r.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"},r.createElement("div",{className:"bg_themed container-fluid"},r.createElement("div",{className:"row justify-content-between align-items-center"},r.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 form-group p-1"},r.createElement("div",{className:"input-group"},r.createElement("input",{type:"text",className:"form-control border-right-0 ",value:g,onChange:function(e){return f(e.target.value)},onKeyUp:(0,a.Z)((function(){m(1,g||"",h)}),2e3),placeholder:"Search"}),r.createElement("span",{className:"input-group-text border-left-0"},r.createElement("i",{className:"ml-1 fas fa-search"})))),r.createElement("div",null,u?r.createElement("div",{onClick:function(){return t(2)},className:"btn btn-primary btn-lg table_menu_btn mr-3"},"Add Category"):r.createElement("div",null))),r.createElement("div",{className:"row"},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null),r.createElement("th",null,"Name"),r.createElement("th",null,"Brief Description"),r.createElement("th",null,"Actions"))),r.createElement("tbody",null,n.map((function(e,t){return r.createElement(l,{category:e,key:t,index:t,deleteCategory:o,editCategory:c,canManage:u})})))),p.last_page&&p.last_page>1?r.createElement(i.Z,{rows:h,changeRows:function(e){m(1,g,e),v(e)},pageDetails:p,changePage:function(e){m(e,g,h)}}):r.createElement("div",null)))))}n(23142);var p=n(15643),d=n(76523),g=n(73288),f=n(6849);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){var t=e.changePage,n=e.categories,a=e.addCategory,o=y((0,r.useState)(null),2),c=o[0],l=o[1],i=y((0,r.useState)("../static/images/add_image.png"),2),s=i[0],u=i[1],m=y((0,r.useState)(""),2),h=m[0],v=m[1],E=y((0,r.useState)(""),2),b=E[0],C=E[1],S=y((0,r.useState)(""),2),w=S[0],N=S[1],_=y((0,r.useState)(null),2),k=_[0],Z=_[1],x=y((0,r.useState)(0),2),P=x[0],A=x[1],j=y((0,r.useState)(null),2),R=j[0],O=j[1],B=y((0,r.useState)(""),2),M=B[0],D=B[1];return r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header"},r.createElement("div",{className:"row justify-content-between ml-2 mr-2"},r.createElement("center",null,r.createElement("h3",null,"Add Category")),r.createElement(g.Z,{prevPropsName:"Categories",propsName:"Add Category",changePage:t}))),r.createElement("div",{className:"card-content"},r.createElement(d.Z,{isError:R,responseMessage:M}),r.createElement("center",null,r.createElement("div",{className:"add_category_img",onClick:function(){return P.click()}},r.createElement("img",{src:s,alt:""}),r.createElement("input",{className:"image_input",type:"file",accept:"image/*",onChange:function(e){return function(e){var t=e.target.files[0];if(t){var n=URL.createObjectURL(t);u(n),function(e){(0,p.Z)(e).then((function(e){Z(e)})).catch((function(e){return console.log(e)}))}(t)}}(e)},ref:function(e){return A(e)}}))),r.createElement("div",{class:"form-group  mt-2"},r.createElement("label",{for:"exampleFormControlSelect2"},"Select Parent Category"),r.createElement("select",{class:"form-control",id:"exampleFormControlSelect2",value:c,onChange:function(e){return l(e.target.value)}},r.createElement("option",{value:""},"..."),n.map((function(e,t){return r.createElement("option",{key:t,value:e.id},e.name)})))),r.createElement("div",{class:"form-group"},r.createElement("label",null,"Category Name*"),r.createElement("input",{type:"text",className:"form-control",placeholder:"Please enter category name",value:h,name:"name",onChange:function(e){return v(e.target.value)},required:!0,autoFocus:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"control-label"},"Brief description(250)*"),r.createElement("div",{className:"form-group"},r.createElement("textarea",{type:"text",rows:4,className:"form-control",value:b,onChange:function(e){e.target.value.length<=250?C(e.target.value):setResponse({isError:!0,responseMessage:{message:"Description cannot be more than 250 words"}})},placeholder:"Please input category brief description",required:!0}))),r.createElement("div",null,r.createElement("div",{className:"card-header mt-2"},r.createElement("h5",null,"Category Description*")),r.createElement(f.Z,{description:"",setDescription:function(e){return N(e.target.getContent())}})),r.createElement("div",{className:"row justify-content-end"},r.createElement("div",{onClick:function(){return function(){if(O(null),D(""),h&&w){var e=new FormData;e.append("name",h),e.append("description",w),e.append("brief_description",b),c&&e.append("category_id",c),e.append("photo",k),a(e)}else h?w||(O(!0),D("Please input category description")):(O(!0),D("Please input a category name"))}()},className:"btn btn-primary btn-lg mt-5 mr-5 mb-2"},"Add Category"))))))}var E=n(37703),b=n(8719),C=n(8295),S=n(42905);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e){var t=e.changePage,n=e.categories,a=e.updateCategory,o=e.category,c=w((0,r.useState)(o.parent_category?o.parent_category:""),2),l=c[0],i=c[1],s=w((0,r.useState)(o.category_pic?"..".concat(o.category_pic):"../static/images/add_image.png"),2),u=s[0],m=s[1],y=w((0,r.useState)(o.name),2),h=y[0],v=y[1],E=w((0,r.useState)(o.brief_description),2),b=E[0],C=E[1],S=w((0,r.useState)(o.description),2),N=S[0],_=S[1],k=w((0,r.useState)(null),2),Z=k[0],x=k[1],P=w((0,r.useState)(0),2),A=P[0],j=P[1],R=w((0,r.useState)(null),2),O=R[0],B=R[1],M=w((0,r.useState)(""),2),D=M[0],I=M[1];return r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header"},r.createElement("div",{className:"row justify-content-between ml-2 mr-2"},r.createElement("center",null,r.createElement("h3",null,"Edit Category")),r.createElement(g.Z,{prevPropsName:"Categories",propsName:"Edit Category",changePage:t}))),r.createElement("div",{className:"card-content"},r.createElement(d.Z,{isError:O,responseMessage:D}),r.createElement("center",null,r.createElement("div",{className:"add_category_img",onClick:function(){return A.click()}},r.createElement("img",{src:u,alt:""}),r.createElement("input",{className:"image_input",type:"file",accept:"image/*",onChange:function(e){return function(e){var t=e.target.files[0];if(t){var n=URL.createObjectURL(t);m(n),function(e){(0,p.Z)(e).then((function(e){x(e)})).catch((function(e){return console.log(e)}))}(t)}}(e)},ref:function(e){return j(e)}}))),r.createElement("div",{class:"form-group  mt-2"},r.createElement("label",{for:"exampleFormControlSelect2"},"Select Parent Category"),r.createElement("select",{class:"form-control",id:"exampleFormControlSelect2",value:l,onChange:function(e){return i(e.target.value)}},r.createElement("option",{value:""},"..."),n.map((function(e,t){return r.createElement("option",{key:t,value:e.id},e.name)})))),r.createElement("div",{class:"form-group"},r.createElement("label",null,"Category Name*"),r.createElement("input",{type:"text",className:"form-control",placeholder:"Please enter category name",value:h,name:"name",onChange:function(e){return v(e.target.value)},required:!0,autoFocus:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"control-label"},"Brief description(250)*"),r.createElement("div",{className:"form-group"},r.createElement("textarea",{type:"text",rows:4,className:"form-control",value:b,onChange:function(e){e.target.value.length<=250?C(e.target.value):setResponse({isError:!0,responseMessage:{message:"Description cannot be more than 250 words"}})},placeholder:"Please input category brief description",required:!0}))),r.createElement("div",null,r.createElement("div",{className:"card-header mt-2"},r.createElement("h5",null,"Category Description")),r.createElement(f.Z,{description:o.description,setDescription:function(e){return _(e.target.getContent())}})),r.createElement("div",{className:"row justify-content-end"},r.createElement("div",{onClick:function(){return function(){if(B(null),I(""),h&&N){var e=new FormData;e.append("name",h),e.append("description",N),e.append("brief_description",b),e.append("p_category",l),e.append("photo",Z),e.append("id",o.id),a(e)}else h?N||(B(!0),I("Please input category description")):(B(!0),I("Please input a category name"))}()},className:"btn btn-primary btn-lg mt-5 mr-5 mb-2"},"Edit Category"))))))}function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function P(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(l,e);var t,n,a,o,c=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(a);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={openSnackBar:!1,isError:null,responseMessage:"",snackPosition:{vertical:"top",horizontal:"center"},currentPage:1,viewCategory:null},t.closeSnackBar=t.closeSnackBar.bind(A(t)),t.setResponse=t.setResponse.bind(A(t)),t.changePage=t.changePage.bind(A(t)),t.editCategory=t.editCategory.bind(A(t)),t}return t=l,(n=[{key:"changePage",value:function(e){this.setState({currentPage:e})}},{key:"editCategory",value:function(e){this.setState({currentPage:3,viewCategory:e})}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.error,r=t.message;n!==e.error?this.setResponse(n):r!==e.message&&(201==r.status&&this.setState({currentPage:1}),this.setResponse(r))}},{key:"componentDidMount",value:function(){this.props.fetchCategories(1)}},{key:"setResponse",value:function(e){var t=Object.keys(e.responseMessage)[0],n=e.responseMessage[t];n instanceof Array?this.setState({responseMessage:n[0],isError:e.isError,openSnackBar:!0}):this.setState({responseMessage:n,isError:e.isError,openSnackBar:!0})}},{key:"closeSnackBar",value:function(){this.setState({openSnackBar:!1})}},{key:"render",value:function(){var e=this.props,t=e.productsReducer,n=e.addCategory,a=e.updateCategories,o=e.deleteCategory,c=e.auth,l=e.fetchCategories,i=t.isLoading,s=t.categories,u=t.category_current_page,p=t.category_last_page,d=this.state,g=d.openSnackBar,f=d.isError,y=d.responseMessage,h=d.snackPosition,E=d.currentPage,b=d.viewCategory,w={isError:f,responseMessage:y,openSnackBar:g,snackPosition:h};if(!c.group.permission.can_view_products)return PermissionHandler(this.props.auth.group.permission);var N={current_page:u,last_page:p};switch(E){case 1:return r.createElement("div",null,r.createElement(S.Z,{open:i}),r.createElement(m,{changePage:this.changePage,categories:s,editCategory:this.editCategory,deleteCategory:o,canManage:c.group.permission.can_manage_product,fetchCategories:l,pageDetails:N}),r.createElement(C.Z,{values:w,closeSnackBar:this.closeSnackBar}));case 2:return r.createElement("div",null,r.createElement(S.Z,{open:i}),r.createElement(v,{changePage:this.changePage,categories:s,addCategory:n}),r.createElement(C.Z,{values:w,closeSnackBar:this.closeSnackBar}));case 3:return r.createElement("div",null,r.createElement(S.Z,{open:i}),r.createElement(_,{changePage:this.changePage,categories:s,updateCategory:a,category:b}),r.createElement(C.Z,{values:w,closeSnackBar:this.closeSnackBar}));default:return r.createElement("div",null,r.createElement(S.Z,{open:i}),r.createElement(m,{changePage:this.changePage,categories:s}),r.createElement(C.Z,{values:w,closeSnackBar:this.closeSnackBar}))}}}])&&Z(t.prototype,n),l}(r.Component);const O=(0,E.$j)((function(e){return{auth:e.authReducer,productsReducer:e.productsReducer,error:e.errorsReducer,message:e.messagesReducer}}),{fetchCategories:b.pE,addCategory:b.i8,updateCategories:b.XV,deleteCategory:b.uu})(R)},32941:(e,t,n)=>{"use strict";function r(e,t){var n=0;return function(){var r=this,a=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,a)}),t||0)}}n.d(t,{Z:()=>r})},15643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o}),n(76770);var r=n(98005),a=n.n(r);function o(e){return new Promise((function(t,n){new(a())(e,{quality:1,success:function(e){var n=function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",r=0;r<10;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}(),r=new File([e],"".concat(n,".png"),{type:"image/png",lastModified:(new Date).getTime()});t(r)},error:function(e){n(e)}})}))}},73288:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),a=n(41120),o=n(22318),c=n(10770),l=n(89659),i=n(73727),s=(0,a.Z)((function(e){return{link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20}}}));function u(e){var t=s(),n=e.propsName,a=e.changePage,u=e.prevPropsName;return r.createElement(c.Z,{"aria-label":"breadcrumb"},r.createElement(i.rU,{to:"/",style:{color:"grey"},className:t.link},"Home"),r.createElement(l.Z,{color:"initial",href:"/product",onClick:function(e){e.preventDefault(),a(1)},className:"side_nav_item"},r.createElement("span",null,u)),r.createElement(o.Z,{color:"initial",className:"side_nav_item"},n))}},2376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(67294),a=n(90482);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){var t,n,c=e.rows,l=e.changeRows,i=e.pageDetails,s=e.changePage,u=e.customViewRows,m=i.current_page,p=i.last_page,d=(t=(0,r.useState)(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=d[0],f=d[1];function y(e){f(null!=g?null:e.currentTarget)}var h={popUpItems:u||[{name:25,value:25},{name:50,value:50},{name:100,value:100}],anchorEl:g};return r.createElement("div",{className:"container-fluid mt-3 mr-3"},r.createElement("div",{className:"row justify-content-end align-items-center bg_themed"},r.createElement("div",{className:"mr-4"},"Rows per page:"),r.createElement("div",{onClick:function(e){return y(e)},className:"bg_themed btn"},c),r.createElement("div",{onClick:function(e){return y(e)},className:"ml-1 btn"},r.createElement("i",{className:"fas fa-caret-down bg_themed"})),r.createElement("div",{className:"ml-4"},m),r.createElement("div",{className:" ml-1"},"of"),r.createElement("div",{className:" ml-1"},p),m>1?r.createElement("div",{onClick:function(){return s(m-1)},className:" ml-4 btn"},r.createElement("i",{className:"fas fa-chevron-left bg_themed"})):r.createElement("div",null),m<p?r.createElement("div",{onClick:function(){return s(m+1)},className:" ml-4 btn"},r.createElement("i",{className:"fas fa-chevron-right bg_themed"})):r.createElement("div",null)),r.createElement(a.Z,{popUpValues:h,handlePopUp:y,handlePopUpClick:function(e){l(e),y(e)}}))}},90482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(67294),a=n(14670),o=n(69584),c=n(71581),l=n(46869),i=n(95757);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=(0,a.Z)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.createElement(o.Z,s({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),m=(0,a.Z)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(c.Z);function p(e){var t=e.popUpValues,n=e.handlePopUp,a=e.handlePopUpClick,o=t.anchorEl,c=t.popUpItems;return r.createElement(u,{id:"customized-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(e){return n(e)}},c.map((function(e,t){return r.createElement(m,{key:t,onClick:function(){return a(e.value)}},e.image?r.createElement(l.Z,null,r.createElement("div",{className:"drop_down_image"},r.createElement("img",{src:"../".concat(e.image),alt:""}))):e.icon?r.createElement(l.Z,null,e.icon):r.createElement("div",null),r.createElement(i.Z,{primary:e.name}))})))}},6849:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(15074);function o(e){var t=e.description,n=e.setDescription,o="light",c=document.getElementsByTagName("body")[0];return r.createElement(a.M,{initialValue:t,init:{plugins:"autolink link image lists print preview",toolbar:"undo redo | bold italic | alignleft aligncenter alignright | fontsizeselect  fontselect sizeselect ",fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",width:"100%",height:"500px",skin:c.classList.contains(o)?"":"oxide-dark",content_css:c.classList.contains(o)?"":"dark"},onChange:function(e){return n(e)}})}},64988:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".add_category_img {\n    height: 150px;\n    width: 150px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n\n.add_category_img img {\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: contain;\n}\n\n.view_category_img {\n    height: 80px;\n    width: 80px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n\n.view_category_img img {\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: contain;\n}",""]);const o=a},23142:(e,t,n)=>{"use strict";var r=n(93379),a=n.n(r),o=n(64988);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals},50247:()=>{}}]);