(this.webpackJsonpamaxon=this.webpackJsonpamaxon||[]).push([[0],{94:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),a=c(19),o=c.n(a),i=c(49),s=c(50),j=c(57),l=c(56),u=c(23),d=c.n(u),b=c(31),p=c(110),O=c(112),x=c(113),h=c(114),f=c(115),m=c(35),v=c(16),g=c(25),y=c(2),w=Object(p.a)((function(t){return{root:{width:345,margin:" 40px auto ",cursor:"pointer"},media:{height:0,paddingTop:"56.25%"}}})),E=function(){var t=w(),e=Object(v.c)((function(t){return t.allProducts.products})).map((function(e){var c=e.id,n=e.title,r=e.image,a=e.price;e.category;return Object(y.jsx)(O.a,{id:c,className:t.root,children:Object(y.jsxs)(g.b,{to:"/product/".concat(c),children:[Object(y.jsx)(x.a,{className:t.media,image:r,title:n}),Object(y.jsx)(h.a,{title:n,subheader:a}),Object(y.jsx)(f.a,{children:Object(y.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p"})})]})})}));return Object(y.jsx)(y.Fragment,{children:e})},k=c(33),N=c.n(k),S="[SET_PRODUCTS]",T="[SELECTED_PRODUCT]",C="[REMOVE_SELECTED_PRODUCT]",D=function(t){return{type:S,payload:t}},F=c(116),P=function(){var t=Object(v.c)((function(t){return t})),e=Object(v.b)(),c=function(){var t=Object(b.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://fakestoreapi.com/products").catch((function(t){return console.log(t)}));case 2:c=t.sent,e(D(c.data));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),console.log("Products: ",t),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(F.a,{container:!0,children:Object(y.jsx)(F.a,{container:!0,item:!0,xs:12,children:Object(y.jsx)(E,{})})})})},L=c(117),R=c(59),B=c(118),I=c(7),_=Object(p.a)((function(t){return{root:{display:"flex",margin:" 50px auto",height:"550px",width:"80%"},details:{display:"flex",flexDirection:"column",width:"70%"},content:{flex:"1 0 auto"},cover:{width:"30%"},image:{width:"10px"}}})),U=function(){var t=Object(v.c)((function(t){return t.product})),e=Object(I.f)().productId,c=Object(v.b)(),r=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://fakestoreapi.com/products/".concat(e)).catch((function(t){return console.log(t)}));case 2:n=t.sent,c((r=n.data,{type:T,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}(),a=t.image,o=t.title,i=t.price,s=t.category,j=t.description;Object(n.useEffect)((function(){return e&&""!==e&&r(),function(){c({type:C})}}),[e]);var l=_();Object(L.a)();return Object(y.jsxs)(R.a,{elevation:3,className:l.root,children:[0===Object.keys(t).length?Object(y.jsx)("div",{class:"text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},children:Object(y.jsx)("div",{class:"spinner-border",role:"status",children:Object(y.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}):Object(y.jsx)("div",{className:l.details,children:Object(y.jsxs)(f.a,{className:l.content,children:[Object(y.jsx)(m.a,{component:"h4",variant:"h4",children:o}),Object(y.jsx)(m.a,{variant:"subtitle1",color:"textSecondary",children:s}),Object(y.jsx)("br",{}),Object(y.jsxs)(B.a,{variant:"outlined",color:"primary",children:["$",i]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(m.a,{variant:"p",color:"textSecondary",children:j}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(B.a,{variant:"contained",color:"secondary",children:"Add to cart"})]})}),Object(y.jsx)(x.a,{className:l.cover,image:a,title:"Live from space album cover"})]})},A=c(34),G=c(119),J=c(120),M=c(121),W=Object(p.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(A.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"})}}));function K(){var t=W();return Object(y.jsx)("div",{className:t.root,children:Object(y.jsx)(G.a,{position:"static",children:Object(y.jsxs)(J.a,{children:[Object(y.jsx)(M.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"}),Object(y.jsx)(m.a,{className:t.title,variant:"h5",noWrap:!0,children:"Amaxon Kro"})]})})})}var V=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(g.a,{children:[Object(y.jsx)(K,{}),Object(y.jsxs)(I.c,{children:[Object(y.jsx)(I.a,{path:"/",exact:!0,component:P}),Object(y.jsx)(I.a,{path:"/product/:productId",exact:!0,component:U}),Object(y.jsx)(I.a,{children:"404 Not Found"})]})]})})}}]),c}(n.Component),$=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,122)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;c(t),n(t),r(t),a(t),o(t)}))},q=c(26),z=c(55),H=c(29),Q={products:[]},X=Object(q.combineReducers)({allProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case S:return Object(H.a)(Object(H.a)({},t),{},{products:n});default:return t}},product:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case T:return Object(H.a)(Object(H.a)({},t),n);case C:return{};default:return t}}}),Y=Object(q.createStore)(X,Object(z.composeWithDevTools)());o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(v.a,{store:Y,children:Object(y.jsx)(V,{})})}),document.getElementById("root")),$()}},[[94,1,2]]]);
//# sourceMappingURL=main.90e1c227.chunk.js.map