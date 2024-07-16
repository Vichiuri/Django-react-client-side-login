"use strict";(self.webpackChunkbiz_app=self.webpackChunkbiz_app||[]).push([[706],{19706:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(67294),o=n(37703),a=n(1415),r=n(8295),c=n(42905),s=(n(78461),n(73272));function l(e){var t=e.notification;return i.createElement("section",{className:"row"},i.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 col-xs-12"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body text-center justify-content-center"},i.createElement("h3",null,"Notification From"),i.createElement("center",null,i.createElement("div",{className:"notificationDetail_img pt-4 pb-4"},i.createElement("img",{src:t.action_by.pic?"..".concat(t.action_by.pic):"../static/images/user.png",alt:"user"}))),i.createElement("h6",{className:"mt-3"},"".concat(t.action_by.first_name," ").concat(t.action_by.last_name)),i.createElement("p",null,t.action_by.phone)))),i.createElement("div",{className:"col-lg-9 col-md-8 col-sm-12 col-xs-12"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-header"},i.createElement("h3",null,"Notification Details")),i.createElement("div",{className:"card-body"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},i.createElement("h4",{className:" ont-weight-bold"},t.display_text),i.createElement("p",null,t.details)),i.createElement("hr",{className:"text-secondary"}),i.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-end p-0 pr-3 m-0"},i.createElement("p",{className:"text-primary"},(0,s.Z)(t.when_created))))))))}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,o,a,s=(o=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(a){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).state={openSnackBar:!1,isError:null,responseMessage:"",snackPosition:{vertical:"top",horizontal:"center"},currentPage:1},t.closeSnackBar=t.closeSnackBar.bind(d(t)),t.setResponse=t.setResponse.bind(d(t)),t.changePage=t.changePage.bind(d(t)),t}return t=p,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.error,i=t.message;n!==e.error?this.setResponse(n):i!==e.message&&(201==i.status&&this.setState({currentPage:1}),this.setResponse(i))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;e&&this.props.fetchViewDistNotification(e)}},{key:"changePage",value:function(e){2==e&&(this.props.fetchCategories(),this.props.fetchProductUnits()),this.setState({currentPage:e})}},{key:"setResponse",value:function(e){var t=Object.keys(e.responseMessage)[0],n=e.responseMessage[t];n instanceof Array?this.setState({responseMessage:n[0],isError:e.isError,openSnackBar:!0}):this.setState({responseMessage:n,isError:e.isError,openSnackBar:!0})}},{key:"closeSnackBar",value:function(){this.setState({openSnackBar:!1})}},{key:"render",value:function(){var e=this.props.notificationsReducer,t=this.state,n=t.openSnackBar,o=t.isError,a=t.responseMessage,s=t.snackPosition,p=(t.currentPage,{isError:o,responseMessage:a,openSnackBar:n,snackPosition:s}),f=e.isLoading,u=e.view_notification;return i.createElement("div",null,i.createElement(c.Z,{open:f}),u?i.createElement(l,{notification:u}):i.createElement("div",null),i.createElement(r.Z,{values:p,closeSnackBar:this.closeSnackBar}))}}])&&f(t.prototype,n),p}(i.Component);const b=(0,o.$j)((function(e){return{notificationsReducer:e.notificationsReducer,error:e.errorsReducer,message:e.messagesReducer}}),{fetchViewDistNotification:a.t_})(g)},74762:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(23645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".notification_img {\n    height: 150px;\n    width: 150px;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n.notification_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.add_notification_img {\n    height: 150px;\n    width: 150px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n\n.add_notification_img img {\n    height: 100%;\n    width: 100%;\n    object-fit: contain;\n}\n\n.notification-ui_dd-content {\n    margin-bottom: 30px;\n}\n\n.notification-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    padding: 20px;\n    margin-bottom: 7px;\n    -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n}\n\n.notification-list--unread {\n    border-left: 2px solid #29b6f6;\n}\n\n.notification-list .notification-list_content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.notification-list .notification-list_content .notification-list_img img {\n    height: 50px;\n    width: 50px;\n    border-radius: 25px;\n    margin-right: 20px;\n}\n\n.notification-list .notification-list_content .notification-list_detail p {\n    margin-bottom: 5px;\n    line-height: 1.2;\n}\n\n.notification-list .notification-list_feature-img img {\n    height: 48px;\n    width: 48px;\n    border-radius: 5px;\n    margin-left: 20px;\n}\n\n.notificationDetail_img {\n    height: 100px;\n    width: 100px;\n    overflow: hidden;\n}\n\n.notificationDetail_img img {\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: contain;\n}",""]);const a=o},78461:(e,t,n)=>{var i=n(93379),o=n.n(i),a=n(74762);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals}}]);