(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{225:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"prefetching-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefetching-data"}},[t._v("#")]),t._v(" Prefetching data")]),t._v(" "),s("h1",{attrs:{id:"state-transfer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-transfer"}},[t._v("#")]),t._v(" State transfer")]),t._v(" "),s("p",[t._v("State transfer describes the process of providing data on the server-side to the client-side application.\nVue.js provides this functionality out-of-the-box: it puts the initial state object for VueX in a global window variable\ncalled "),s("code",[t._v("__INITIAL_STATE__")]),t._v(".")]),t._v(" "),s("p",[t._v("In the file "),s("code",[t._v("./src/app/store.ts")]),t._v(" we use this window object to initialize our VueX store:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__INITIAL_STATE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" DefaultState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("This enables us to transfer data that we already generated on the server to the client. With this we can prevent to do\nthe same work in the browser again.")]),t._v(" "),s("p",[t._v("This is really important if we fetch data from a remote API - "),s("strong",[t._v("we don't want to do this twice per page!")])]),t._v(" "),s("h1",{attrs:{id:"how-to-fetch-data-from-a-remote-api-on-the-server-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-fetch-data-from-a-remote-api-on-the-server-side"}},[t._v("#")]),t._v(" How to fetch data from a remote API on the server-side?")]),t._v(" "),s("p",[t._v("Usually we fetch data in the "),s("code",[t._v("created")]),t._v(" or "),s("code",[t._v("mounted")]),t._v(" function of a component this works well in the browser\nand provides the component as early as possible with data.")]),t._v(" "),s("p",[t._v("In the context of server-side-rendering, this works a little bit different.")]),t._v(" "),s("p",[t._v("To execute API calls on the server, we have to know about these calls.\nIn order to to know about them, we need to make them static and find out which components that match the current route\nhave this function.")]),t._v(" "),s("p",[t._v("If we have a look at the file "),s("code",[t._v("./src/server/isomorphic.ts")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n      Promise\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matchedComponents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prefetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" IPreLoad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("we see that the vuesion setup expects us to call this static function "),s("code",[t._v("prefetch")]),t._v(".")]),t._v(" "),s("p",[t._v("This part of the code is\nresponsible for getting all the "),s("code",[t._v("prefetch")]),t._v(" functions from all the components that match the current route.")]),t._v(" "),s("p",[t._v("If you want to see this concept in action, have a look at the file "),s("code",[t._v("./src/app/counter/Counter/Counter.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("prefetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IPreLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'counter/increment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("We always have to return a "),s("code",[t._v("Promise")]),t._v(" as result of this function, vuesion makes sure that every Promise resolves\nbefore it renders the page.")]),t._v(" "),s("p",[t._v("The function gets an "),s("code",[t._v("options")]),t._v(" object as the first parameter - you can find the available options in the file "),s("code",[t._v("./src/server/isomorphic.ts")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPreLoad")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Store"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VueRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);