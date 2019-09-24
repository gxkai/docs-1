(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{214:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"run-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Run the application")]),e._v(" "),a("p",[e._v("Of course, you want to know if the application that you just downloaded works.\nIn order to test if everything works as expected run the following command: "),a("code",[e._v("npm run dev")]),e._v(".")]),e._v(" "),a("p",[e._v("You should see a message in your console that says:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" info: server started at http://localhost:3000\n")])])]),a("p",[e._v("That means that the dev-server successfully started.")]),e._v(" "),a("p",[e._v("You have to wait for a second message that indicates that the client and the isomorphic code is successfully compiled:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" ℹ ｢wdm｣: Compiled successfully.\n")])])]),a("p",[e._v("Now you know that everything works as expected, to see the "),a("code",[e._v("vuesion")]),e._v(" in action, go to "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"development-mode-and-hot-reloading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-mode-and-hot-reloading","aria-hidden":"true"}},[e._v("#")]),e._v(" Development mode and hot reloading")]),e._v(" "),a("p",[e._v("Your application currently runs in development mode, which means that webpack watches for changes.")]),e._v(" "),a("p",[e._v("Every file in the "),a("code",[e._v("./src")]),e._v(" directory will be hot reloaded, so you don't have to reload your browser or restart the dev server during development.")]),e._v(" "),a("p",[e._v("That guarantees a really good dev experience and will make you much more productive.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("i18n")]),e._v(" "),a("p",[e._v("the only files that are not hot-reloaded are the files in the "),a("code",[e._v("./i18n")]),e._v(" directory; you have to reload your browser to reflect the changes.")])]),e._v(" "),a("h2",{attrs:{id:"change-web-server-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-web-server-port","aria-hidden":"true"}},[e._v("#")]),e._v(" Change web-server port")]),e._v(" "),a("p",[e._v("Your app runs on port "),a("code",[e._v("3000")]),e._v(" by default, set the "),a("code",[e._v("PORT")]),e._v(" environment variable to configure a different port\ne.g. "),a("code",[e._v("npm run dev -- --port 8080")]),e._v(" in development mode or "),a("code",[e._v("PORT=8080 npm start")]),e._v(" for your production build.")]),e._v(" "),a("h2",{attrs:{id:"run-your-application-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-application-with-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Run your application with docker")]),e._v(" "),a("p",[e._v("The application can be served via Docker too.")]),e._v(" "),a("p",[e._v("In order to build the image run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install vuepress if you need the docs")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" docker build -t "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vue/starter:latest"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),a("p",[e._v("When building is complete, you can proceed with firing up the Docker container:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -it --name vuesion -p 3001:3000 vue/starter:latest\n")])])]),a("p",[e._v("You have to wait for the message:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("info: node server started at http://localhost:3000\n")])])]),a("p",[e._v("Docker is available at port: 3001 so a developer can have both Docker and local server running at the same time")]),e._v(" "),a("p",[e._v("Now that you know everything works as expected, see "),a("code",[e._v("vuesion")]),e._v(" in action at "),a("a",{attrs:{href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3001"),a("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=o.exports}}]);