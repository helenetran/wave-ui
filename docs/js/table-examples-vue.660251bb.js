(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["table-examples-vue"],{c9fb:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items}})],1),t("title-link",{attrs:{h2:""}},[e._v("When there is no data")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="[]")\nbr\nw-table(:headers="table.headers" :items="[]")\n  template(#no-data) 👌 There is no data! 👌')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:[]}}),t("br"),t("w-table",{attrs:{headers:e.table1.headers,items:[]},scopedSlots:e._u([{key:"no-data",fn:function(){return[e._v("👌 There is no data! 👌")]},proxy:!0}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Alignments")]),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName', align: 'center' },\n      { label: 'Last name', key: 'lastName', align: 'right' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table2.headers,items:e.table2.items}})],1),t("title-link",{attrs:{h2:""}},[e._v("No headers")]),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table.items" :headers="table.headers" no-headers)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"no-headers":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Fixed headers")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(\n  :headers="table.headers"\n  :items="table.items"\n  fixed-headers\n  style="height: 250px")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n      { id: '6', firstName: 'Baldwin', lastName: 'Morison' },\n      { id: '7', firstName: 'Beckah', lastName: 'Mann' },\n      { id: '8', firstName: 'Davie', lastName: 'Forester' },\n      { id: '9', firstName: 'Andi', lastName: 'Montgomery' },\n      { id: '10', firstName: 'Magnolia', lastName: 'Kirk' },\n      { id: '11', firstName: 'Hamilton', lastName: 'Mallory' },\n      { id: '12', firstName: 'Sheree', lastName: 'Castle' },\n      { id: '13', firstName: 'Rebekah', lastName: 'Eason' },\n      { id: '14', firstName: 'Maude', lastName: 'Hayley' },\n      { id: '15', firstName: 'Josie', lastName: 'Richard' }\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{staticStyle:{height:"250px"},attrs:{headers:e.table3.headers,items:e.table3.items,"fixed-headers":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Initial Sorting")]),e._m(3),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items" :sort.sync="table.sort")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' }\n    ],\n    sort: '+firstName'\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,sort:e.table1.sort},on:{"update:sort":function(a){return e.$set(e.table1,"sort",a)}}})],1),t("title-link",{attrs:{h2:""}},[e._v("Filters")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[e._v("Coming soon.")]),t("title-link",{attrs:{h2:""}},[e._v("Pagination")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})")]},proxy:!0}])},[e._v("Coming soon.")])],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("When there is no data, a default text will be diplayed. You can override it via the "),t("code",[e._v("no-data")]),e._v(" slot.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can align the columns contents separately by adding an "),t("code",[e._v("align")]),e._v(" key in each header\ndefinition ("),t("code",[e._v("left")]),e._v(", "),t("code",[e._v("center")]),e._v(" or "),t("code",[e._v("right")]),e._v(")."),t("br"),e._v("\nIf you don't define any, "),t("code",[e._v("left")]),e._v(" will be implicit.\n")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Even with the "),t("code",[e._v("no-headers")]),e._v(" option, the "),t("code",[e._v("headers")]),e._v(" are still required for various\nreasons, like getting the number of columns and sorting/filtering keys.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("To make the sorting API very easy to use and remember (and avoid complex array or object structures),\nthe "),t("strong",{staticClass:"code"},[e._v("w-table")]),e._v("'s sorting is defined with a header key string preceded with a "),t("code",[e._v("+")]),e._v(" for ASC,\nor a "),t("code",[e._v("-")]),e._v(" for DESC. For instance, in this example: "),t("code",[e._v("'+firstName'")]),e._v(".")])}],i=(t("fb6a"),[{id:"1",firstName:"Floretta",lastName:"Sampson"},{id:"2",firstName:"Nellie",lastName:"Lynn"},{id:"3",firstName:"Rory",lastName:"Bristol"},{id:"4",firstName:"Daley",lastName:"Elliott"},{id:"5",firstName:"Virgil",lastName:"Carman"},{id:"6",firstName:"Baldwin",lastName:"Morison"},{id:"7",firstName:"Beckah",lastName:"Mann"},{id:"8",firstName:"Davie",lastName:"Forester"},{id:"9",firstName:"Andi",lastName:"Montgomery"},{id:"10",firstName:"Magnolia",lastName:"Kirk"},{id:"11",firstName:"Hamilton",lastName:"Mallory"},{id:"12",firstName:"Sheree",lastName:"Castle"},{id:"13",firstName:"Rebekah",lastName:"Eason"},{id:"14",firstName:"Maude",lastName:"Hayley"},{id:"15",firstName:"Josie",lastName:"Richard"}]),l={data:function(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:i.slice(0,5),sort:"+firstName"},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:i.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:i}}}},r=l,m=t("2877"),o=Object(m["a"])(r,n,s,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=table-examples-vue.660251bb.js.map