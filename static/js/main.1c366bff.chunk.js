(this.webpackJsonpbasics=this.webpackJsonpbasics||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(18),i=n.n(a),s=(n(77),n(50),n(33)),r=n(5),l=n(126),d=n(133),u=n(127),j=n(2);var p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(l.a,{variant:"h6",style:{color:"black"},children:"Basics 2"}),Object(j.jsx)(d.a,{m:2}),Object(j.jsx)(u.a,{component:s.b,to:"/home",color:"primary",variant:"outlined",style:{border:"2px solid"},children:"Start"})]})]})},b=n(19),h=n(128),O=n(135),m=n(129),x=n(24),g=(n(84),n(85),n.p+"static/media/Location.0d61f06d.png"),f=n.p+"static/media/Drinking_water.c3a77327.png",y=n(63),v=n.n(y),S=n(130),w=n(45),C=n.n(w),k=function(){var t=c.a.useState([]),e=Object(b.a)(t,2),n=e[0],a=e[1],i=c.a.useState(null),s=Object(b.a)(i,2),r=s[0],l=s[1],u=c.a.useState(null),p=Object(b.a)(u,2),y=p[0],w=p[1],k=c.a.useState(null),z=Object(b.a)(k,2),I=(z[0],z[1],48.864716),L=2.349;Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){l(t.coords.latitude),w(t.coords.longitude),I=t.coords.latitude,L=t.coords.longitude,console.log("Latitude is :",I),console.log("Longitude is :",L);var e="data=[out:json];node[amenity = drinking_water](around: 2000,"+t.coords.latitude+","+t.coords.longitude+");out;";v()({method:"post",url:"https://overpass-api.de/api/interpreter",data:e}).then((function(t){a(t.data.elements)})).catch((function(t){console.log(t)}))}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{style:{height:"100vh"},children:[null!=r&&null!=y&&Object(j.jsxs)(h.a,{center:[r,y],zoom:13,scrollWheelZoom:!1,style:{zIndex:"1"},children:[Object(j.jsx)(O.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(m.a,{position:[r,y],icon:new x.Icon({iconUrl:g,iconSize:[25,25]})}),n.map((function(t,e){return Object(j.jsx)(m.a,{position:[t.lat,t.lon],icon:new x.Icon({iconUrl:f,iconSize:[30,30],iconAnchor:[20,20]})},e)}))]}),Object(j.jsx)(S.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",zIndex:"9"},onClick:function(){return window.location.reload(!1)},children:Object(j.jsx)(C.a,{})})]})})},z=n(131),I=n(65),L=Object(I.a)({palette:{primary:{main:"#bd55b3"}}}),F=n(64),A=n(43),B=Object(A.b)({name:"europeCapitals",initialState:{countries:null},reducers:{setCountries:function(t,e){t.countries=e.payload}}}),M=(B.actions.setCountries,B.reducer),P=Object(A.a)({reducer:{europeCapitals:M}});var D=function(){return Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(F.a,{store:P,children:Object(j.jsx)(z.a,{theme:L,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/index.html",component:p}),Object(j.jsx)(r.a,{exact:!0,path:"/",component:p}),Object(j.jsx)(r.a,{exact:!0,path:"/home",component:k})]})]})})})})})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),E()},50:function(t,e,n){},77:function(t,e,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.1c366bff.chunk.js.map