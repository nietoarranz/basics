(this.webpackJsonpbasics=this.webpackJsonpbasics||[]).push([[0],{120:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o.n(n),i=o(18),a=o.n(i),s=(o(91),o(62),o(16)),r=o(9),l=o(53),d=o(148),u=o(137),j=o(2);var p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(l.a,{variant:"h6",style:{color:"black"},children:"Basics"}),Object(j.jsx)(d.a,{m:2}),Object(j.jsx)(u.a,{component:s.b,to:"/Options",color:"primary",variant:"outlined",style:{border:"2px solid"},children:"Start"})]})]})},b=o(75),h=o(76),O=o(81),x=o(80),g=o(139),m=o(140),f=o(141),y=o(142),v=o(150),S=o(138),w=o.p+"static/media/Drinking_water.c3a77327.png",z=o.p+"static/media/Toilet.6141a9a8.png",k=o.p+"static/media/Bin.349b0c8b.png",I=o.p+"static/media/Bench.ef98ec95.png",C=function(t){Object(O.a)(o,t);var e=Object(x.a)(o);function o(){return Object(b.a)(this,o),e.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v.a,{position:"static",style:{backgroundColor:"white"},children:Object(j.jsx)(S.a,{children:Object(j.jsx)(l.a,{variant:"h6",style:{color:"black"},children:"Which basic do you need?"})})}),Object(j.jsx)(l.a,{variant:"h4"}),Object(j.jsx)(d.a,{m:1}),Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(m.a,{component:s.b,to:"/DrinkingWater",children:[Object(j.jsx)(f.a,{children:Object(j.jsx)("img",{src:w,style:{height:"50px",width:"50px"}})}),Object(j.jsx)(y.a,{primary:"Drinking fountains"})]}),Object(j.jsxs)(m.a,{component:s.b,to:"/Toilet",children:[Object(j.jsx)(f.a,{children:Object(j.jsx)("img",{src:z,style:{height:"50px",width:"50px"}})}),Object(j.jsx)(y.a,{primary:"Toilets"})]}),Object(j.jsxs)(m.a,{component:s.b,to:"/Bin",children:[Object(j.jsx)(f.a,{children:Object(j.jsx)("img",{src:k,style:{height:"50px",width:"50px"}})}),Object(j.jsx)(y.a,{primary:"Bins"})]}),Object(j.jsxs)(m.a,{component:s.b,to:"/Bench",children:[Object(j.jsx)(f.a,{children:Object(j.jsx)("img",{src:I,style:{height:"50px",width:"50px"}})}),Object(j.jsx)(y.a,{primary:"Benches"})]})]})]})}}]),o}(n.Component),B=o(8),L=o(143),U=o(151),W=o(144),A=o(12),M=(o(42),o(43),o.p+"static/media/Location.0d61f06d.png"),P=o(30),T=o.n(P),D=o(145),E=o(25),F=o.n(E),Z=function(){var t=c.a.useState([]),e=Object(B.a)(t,2),o=e[0],i=e[1],a=c.a.useState(null),s=Object(B.a)(a,2),r=s[0],l=s[1],u=c.a.useState(null),p=Object(B.a)(u,2),b=p[0],h=p[1],O=c.a.useState(null),x=Object(B.a)(O,2),g=(x[0],x[1],48.864716),m=2.349;Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){l(t.coords.latitude),h(t.coords.longitude),g=t.coords.latitude,m=t.coords.longitude,console.log("Latitude is :",g),console.log("Longitude is :",m);var e="data=[out:json];node[amenity = drinking_water](around: 2000,"+t.coords.latitude+","+t.coords.longitude+");out;";T()({method:"post",url:"https://overpass-api.de/api/interpreter",data:e}).then((function(t){i(t.data.elements)})).catch((function(t){console.log(t)}))}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{style:{height:"100vh"},children:[null!=r&&null!=b&&Object(j.jsxs)(L.a,{center:[r,b],zoom:13,scrollWheelZoom:!1,style:{zIndex:"1"},children:[Object(j.jsx)(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(W.a,{position:[r,b],icon:new A.Icon({iconUrl:M,iconSize:[25,25]})}),o.map((function(t,e){return Object(j.jsx)(W.a,{position:[t.lat,t.lon],icon:new A.Icon({iconUrl:w,iconSize:[30,30],iconAnchor:[20,20]})},e)}))]}),Object(j.jsx)(D.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",zIndex:"9"},onClick:function(){return window.location.reload(!1)},children:Object(j.jsx)(F.a,{})})]})})},_=function(){var t=c.a.useState([]),e=Object(B.a)(t,2),o=e[0],i=e[1],a=c.a.useState(null),s=Object(B.a)(a,2),r=s[0],l=s[1],u=c.a.useState(null),p=Object(B.a)(u,2),b=p[0],h=p[1],O=c.a.useState(null),x=Object(B.a)(O,2),g=(x[0],x[1],48.864716),m=2.349;Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){l(t.coords.latitude),h(t.coords.longitude),g=t.coords.latitude,m=t.coords.longitude,console.log("Latitude is :",g),console.log("Longitude is :",m);var e="data=[out:json];node[amenity = toilets](around: 2000,"+t.coords.latitude+","+t.coords.longitude+");out;";T()({method:"post",url:"https://overpass-api.de/api/interpreter",data:e}).then((function(t){i(t.data.elements)})).catch((function(t){console.log(t)}))}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{style:{height:"100vh"},children:[null!=r&&null!=b&&Object(j.jsxs)(L.a,{center:[r,b],zoom:13,scrollWheelZoom:!1,style:{zIndex:"1"},children:[Object(j.jsx)(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(W.a,{position:[r,b],icon:new A.Icon({iconUrl:M,iconSize:[25,25]})}),o.map((function(t,e){return Object(j.jsx)(W.a,{position:[t.lat,t.lon],icon:new A.Icon({iconUrl:z,iconSize:[30,30],iconAnchor:[20,20]})},e)}))]}),Object(j.jsx)(D.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",zIndex:"9"},onClick:function(){return window.location.reload(!1)},children:Object(j.jsx)(F.a,{})})]})})},J=function(){var t=c.a.useState([]),e=Object(B.a)(t,2),o=e[0],i=e[1],a=c.a.useState(null),s=Object(B.a)(a,2),r=s[0],l=s[1],u=c.a.useState(null),p=Object(B.a)(u,2),b=p[0],h=p[1],O=c.a.useState(null),x=Object(B.a)(O,2),g=(x[0],x[1],48.864716),m=2.349;Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){l(t.coords.latitude),h(t.coords.longitude),g=t.coords.latitude,m=t.coords.longitude,console.log("Latitude is :",g),console.log("Longitude is :",m);var e="data=[out:json];node[amenity = waste_basket](around: 2000,"+t.coords.latitude+","+t.coords.longitude+");out;";T()({method:"post",url:"https://overpass-api.de/api/interpreter",data:e}).then((function(t){i(t.data.elements)})).catch((function(t){console.log(t)}))}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{style:{height:"100vh"},children:[null!=r&&null!=b&&Object(j.jsxs)(L.a,{center:[r,b],zoom:13,scrollWheelZoom:!1,style:{zIndex:"1"},children:[Object(j.jsx)(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(W.a,{position:[r,b],icon:new A.Icon({iconUrl:M,iconSize:[25,25]})}),o.map((function(t,e){return Object(j.jsx)(W.a,{position:[t.lat,t.lon],icon:new A.Icon({iconUrl:k,iconSize:[30,30],iconAnchor:[20,20]})},e)}))]}),Object(j.jsx)(D.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",zIndex:"9"},onClick:function(){return window.location.reload(!1)},children:Object(j.jsx)(F.a,{})})]})})},N=function(){var t=c.a.useState([]),e=Object(B.a)(t,2),o=e[0],i=e[1],a=c.a.useState(null),s=Object(B.a)(a,2),r=s[0],l=s[1],u=c.a.useState(null),p=Object(B.a)(u,2),b=p[0],h=p[1],O=c.a.useState(null),x=Object(B.a)(O,2),g=(x[0],x[1],48.864716),m=2.349;Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){l(t.coords.latitude),h(t.coords.longitude),g=t.coords.latitude,m=t.coords.longitude,console.log("Latitude is :",g),console.log("Longitude is :",m);var e="data=[out:json];node[amenity = bench](around: 2000,"+t.coords.latitude+","+t.coords.longitude+");out;";T()({method:"post",url:"https://overpass-api.de/api/interpreter",data:e}).then((function(t){i(t.data.elements)})).catch((function(t){console.log(t)}))}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{style:{height:"100vh"},children:[null!=r&&null!=b&&Object(j.jsxs)(L.a,{center:[r,b],zoom:13,scrollWheelZoom:!1,style:{zIndex:"1"},children:[Object(j.jsx)(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(W.a,{position:[r,b],icon:new A.Icon({iconUrl:M,iconSize:[25,25]})}),o.map((function(t,e){return Object(j.jsx)(W.a,{position:[t.lat,t.lon],icon:new A.Icon({iconUrl:I,iconSize:[30,30],iconAnchor:[20,20]})},e)}))]}),Object(j.jsx)(D.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",zIndex:"9"},onClick:function(){return window.location.reload(!1)},children:Object(j.jsx)(F.a,{})})]})})},R=o(146),q=o(79),G=Object(q.a)({palette:{primary:{main:"#bd55b3"}}}),H=o(78),K=o(52),Q=Object(K.b)({name:"europeCapitals",initialState:{countries:null},reducers:{setCountries:function(t,e){t.countries=e.payload}}}),V=(Q.actions.setCountries,Q.reducer),X=Object(K.a)({reducer:{europeCapitals:V}});var Y=function(){return Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(H.a,{store:X,children:Object(j.jsx)(R.a,{theme:G,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/index.html",component:p}),Object(j.jsx)(r.a,{exact:!0,path:"/",component:p}),Object(j.jsx)(r.a,{exact:!0,path:"/Options",component:C}),Object(j.jsx)(r.a,{exact:!0,path:"/DrinkingWater",component:Z}),Object(j.jsx)(r.a,{exact:!0,path:"/Toilet",component:_}),Object(j.jsx)(r.a,{exact:!0,path:"/Bin",component:J}),Object(j.jsx)(r.a,{exact:!0,path:"/Bench",component:N})]})]})})})})})},$=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,152)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;o(t),n(t),c(t),i(t),a(t)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),$()},62:function(t,e,o){},91:function(t,e,o){}},[[120,1,2]]]);
//# sourceMappingURL=main.edcaf018.chunk.js.map