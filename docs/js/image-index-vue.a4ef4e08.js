(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["image-index-vue","image-api-vue","image-examples-vue"],{1978:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("ui-component-title",{attrs:{slug:"w-image","in-progress":""}},[e._v("w-image")]),a("examples"),a("api")],1)},n=[],s=a("b254"),r=a("3ba4"),l={components:{Examples:s["default"],Api:r["default"]}},o=l,u=a("2877"),c=Object(u["a"])(o,i,n,!1,null,null,null);t["default"]=c.exports},"3ba4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),a("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The missing props descriptions will be added shortly (all the props are already listed).")]),a("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),a("api",{attrs:{items:e.slots,title:"Slots"}}),a("api",{attrs:{items:e.events,title:"Events"}})],1)},n=[],s=(a("13d5"),a("db80")),r={},l={},o={},u={data:function(){return{propsDescs:r,slots:l}},computed:{props:function(){return s["a"].props},events:function(){return s["a"].emits.reduce((function(e,t){return(e[t]={description:o[t]||""})&&e}),{})}}},c=u,p=a("2877"),d=Object(p["a"])(c,i,n,!1,null,null,null);t["default"]=d.exports},b254:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Why using w-image and not a simple <img>")]),a("div",{staticClass:"title3"},[e._v("A simple <img>")]),e._m(0),a("div",{staticClass:"title3"},[e._v("The w-image")]),e._m(1),a("title-link",{attrs:{h2:""}},[e._v("Default")]),a("p",[e._v("The image is loaded full-size.")]),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/favicon.png`")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue Cli, You can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/favicon.png"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Given dimensions")]),a("example",{attrs:{"content-class":"text-center w-flex justify-space-around"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue Cli, You can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{staticClass:"mr5",attrs:{src:e.baseUrl+"images/japanese-wave.png",width:150,height:150}}),a("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",width:500,height:150}})],1),a("title-link",{attrs:{h2:""}},[e._v("Loading spinner")]),a("p",[e._v("This image is quite big, so that you have time to see the spinner while loading.\nRefresh the page if you haven't seen it!")]),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :width="500" :height="250")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue Cli, You can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png",width:500,height:250}})],1),a("title-link",{attrs:{h2:""}},[e._v("Fallback")]),e._m(2),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/broken.png`" :fallback="`${baseUrl}images/not-found.jpg`")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue Cli, You can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/broken.png",fallback:e.baseUrl+"images/not-found.jpg"}})],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("will display when loaded, and will take the dimensions of the actual image."),a("br"),e._v("\nWhen the image has a large file size, it will be loaded in chunks, and the image will be displayed\ntruncated until completely loaded."),a("br"),a("br"),e._v("\nIf ever it fails to load a broken image icon will display instead (different on every browser)."),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("let you put a spinner while the image is loading, and display the image all at once with an\nanimation (like fade-in) when ready."),a("br"),e._v("\nIt allows you to set a fallback image in case the provided image might be unfound (convenient with\ndynamic sources)."),a("br"),e._v("\nIf ever the no image is found in the end, w-image will handle the error gracefully and will emit a\n"),a("code",[e._v("@error")]),e._v(" event containing the error.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent\nbackground will be there instead preventing the browser's broken image logo."),a("br"),e._v("\nYou can also provide a custom fallback image to display if the image cannot load."),a("br"),e._v("\nFor instance, in a e-boutique you may try to load the image of an item without knowing if this item\nhas an available image or not.")])}],s={data:function(){return{baseUrl:"/wave-ui/"}}},r=s,l=a("2877"),o=Object(l["a"])(r,i,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=image-index-vue.a4ef4e08.js.map