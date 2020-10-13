(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tooltip-api-vue"],{"6d27":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),o("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),o("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),o("api",{attrs:{items:t.slots,title:"Slots"}}),o("api",{attrs:{items:t.events,title:"Events"}})],1)},a=[],i=(o("13d5"),o("9d84")),r={value:"This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.",showOnClick:"",color:'Applies a color to the tooltip\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the tooltip\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Applies a custom CSS class to the tooltip element.",detachTo:"",fixed:"",top:"",bottom:"",left:"",right:"",zIndex:"Applies a z-index (positive or negative integer) to the tooltip."},n={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},l={input:"Emitted each time the state of the component changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).","update:modelValue":"Emitted each time the state of the component changes (when an item is expanded or collapsed). It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).",focus:"Emitted on each item title focus. The focused item is returned as a parameter."},p={data:function(){return{propsDescs:r,slots:n}},computed:{props:function(){return i["a"].props},events:function(){return i["a"].emits.reduce((function(t,e){return(t[e]={description:l[e]||""})&&t}),{})}}},c=p,d=o("2877"),h=Object(d["a"])(c,s,a,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=tooltip-api-vue.3f485f7a.js.map