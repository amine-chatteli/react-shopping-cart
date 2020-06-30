(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),c=a.n(i),s=(a(22),a(11)),o=a(19);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.default,null)),document.getElementById("root")),o.unregister()},function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(3),i=a(4),c=a(2),s=a(6),o=a(5),l=a(0),u=a.n(l),d=a(12),m=(a(24),a(13)),p=a(14),f=a(16),h=a(18),v=a(1),g=a.n(v),b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={cartVisibility:!1,items:[],cart:[],totalItems:0,totalPrice:0},n.handleShowCart=n.handleShowCart.bind(Object(c.a)(n)),n.handleCloseCart=n.handleCloseCart.bind(Object(c.a)(n)),n.handleAddToCart=n.handleAddToCart.bind(Object(c.a)(n)),n.handleIncreaseQuantity=n.handleIncreaseQuantity.bind(Object(c.a)(n)),n.handleDecreaseQuantity=n.handleDecreaseQuantity.bind(Object(c.a)(n)),n.handleRemoveItem=n.handleRemoveItem.bind(Object(c.a)(n)),n.handleClearCart=n.handleClearCart.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=g.a.get("items"),t=g.a.get("cart"),a=g.a.get("totalItems"),n=g.a.get("totalPrice");e&&t&&a&&n?this.setState({cart:t,items:e,totalItems:a,totalPrice:n}):(e=h.items.map((function(e){return{id:e.sys.id,title:e.fields.title,price:e.fields.price,image:e.fields.image.fields.file.url,quantity:0}})),this.setState({items:e}))}},{key:"handleShowCart",value:function(){this.setState({cartVisibility:!0})}},{key:"handleCloseCart",value:function(){this.setState({cartVisibility:!1})}},{key:"handleAddToCart",value:function(e){var t=Object(n.a)(this.state.cart),a=this.state.items[e];a.quantity++,t.push(a),this.setState({cart:t,cartVisibility:!0}),g.a.set("cart",t),g.a.set("items",this.state.items),this.totalItems(t)}},{key:"handleIncreaseQuantity",value:function(e){var t=Object(n.a)(this.state.cart);t.find((function(t){return t.id===e})).quantity++,this.totalItems(t)}},{key:"handleDecreaseQuantity",value:function(e){var t=Object(n.a)(this.state.cart);t.find((function(t){return t.id===e})).quantity>1?(t.find((function(t){return t.id===e})).quantity--,this.totalItems(t)):this.handleRemoveItem(e)}},{key:"handleRemoveItem",value:function(e){var t=this.state.cart.filter((function(t){return t.id!==e})),a=Object(n.a)(this.state.items);this.state.items[e].quantity=0,this.setState({cart:t,items:a}),g.a.set("items",a),g.a.set("cart",t),this.totalItems(t)}},{key:"totalItems",value:function(e){var t=0,a=0;e.forEach((function(e){t+=e.quantity,a+=e.price*e.quantity})),this.setState({totalItems:t,totalPrice:a}),g.a.set("totalItems",t),g.a.set("totalPrice",a),g.a.set("cart",e)}},{key:"handleClearCart",value:function(){var e=Object(n.a)(this.state.items);e.forEach((function(e){e.quantity=0})),this.setState({items:e,cart:[],totalItems:0,totalPrice:0}),g.a.set("totalItems",0),g.a.set("totalPrice",0),g.a.set("cart",[]),g.a.set("items",e)}},{key:"render",value:function(){var e=this.state.totalItems,t=this.state.cart,a=this.state.items,n=this.state.cartVisibility,r=this.state.totalPrice;return u.a.createElement("div",{className:"App"},u.a.createElement(d.default,{onShowCart:this.handleShowCart,totalItems:e}),u.a.createElement(m.default,null),u.a.createElement(p.default,{items:a,onAddToCart:this.handleAddToCart}),u.a.createElement(f.default,{cartVisibility:n,onCloseCart:this.handleCloseCart,cart:t,onIncreaseQuantity:this.handleIncreaseQuantity,onDecreaseQuantity:this.handleDecreaseQuantity,onRemoveItem:this.handleRemoveItem,onClearCart:this.handleClearCart,totalPrice:r}))}}]),a}(l.Component);t.default=b},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(23),a(20)),c=a.n(i);a(8),a(9);t.default=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("span",{className:"nav-icon"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("img",{src:c.a,alt:"store logo"}),r.a.createElement("div",{className:"cart-btn",onClick:e.onShowCart},r.a.createElement("span",{className:"nav-icon"},r.a.createElement("i",{className:"fas fa-cart-plus"})),r.a.createElement("div",{className:"cart-items"},e.totalItems))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(25),a(8),a(9);t.default=function(){return r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"banner-title"},"furniture collection"),r.a.createElement("button",{className:"banner-btn"},"shop now")))}},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),c=a(5),s=a(0),o=a.n(s),l=a(15),u=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return o.a.createElement(l.default,{key:t.id,id:t.id,title:t.title,price:t.price,image:t.image,onAddToCart:e.props.onAddToCart,quantity:t.quantity})}));return o.a.createElement("section",{className:"products"},o.a.createElement("div",{className:"section-title"},o.a.createElement("h2",null,"our products")),o.a.createElement("div",{className:"products-center"},t))}}]),a}(s.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(8),a(9),a(26);t.default=function(e){var t=e.id,n=e.title,i=e.price,c=e.image,s=e.quantity;return console.log(c),r.a.createElement("article",{className:"product"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:a(27)("./".concat(c)),alt:"product",className:"product-img"}),r.a.createElement("button",{disabled:s>0,className:"bag-btn","data-id":t,onClick:function(){e.onAddToCart(t)}},r.a.createElement("i",{className:"fas fa-shopping-cart"}),"add to bag")),r.a.createElement("h3",null,n),r.a.createElement("h4",null,i,"$"))}},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),c=a(5),s=a(0),o=a.n(s),l=(a(8),a(9),a(28),a(17)),u=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cartVisibility,a=this.props.cart.map((function(t){return o.a.createElement(l.default,{key:t.id,id:t.id,title:t.title,price:t.price,image:t.image,quantity:t.quantity,onIncreaseQuantity:e.props.onIncreaseQuantity,onDecreaseQuantity:e.props.onDecreaseQuantity,onRemoveItem:e.props.onRemoveItem})}));return o.a.createElement("div",{className:t?"cart-overlay transparentBcg":"cart-overlay"},o.a.createElement("div",{className:t?"cart showCart":"cart"},o.a.createElement("span",{className:"close-cart",onClick:this.props.onCloseCart},o.a.createElement("i",{className:"far fa-window-close"})),o.a.createElement("h2",null,"your cart"),o.a.createElement("div",{className:"cart-content"},a),o.a.createElement("div",{className:"cart-footer"},o.a.createElement("h3",null,"your total : $",o.a.createElement("span",{className:"cart-total"},this.props.totalPrice)),o.a.createElement("button",{className:"clear-cart banner-btn",onClick:this.props.onClearCart},"clear cart"))))}}]),a}(s.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(8),a(9),a(29);t.default=function(e){return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a(27)("./".concat(e.image)),alt:"product"}),r.a.createElement("div",null,r.a.createElement("h4",null,e.title),r.a.createElement("h5",null,"$",e.price),r.a.createElement("span",{className:"remove-item",onClick:function(){return e.onRemoveItem(e.id)}},"remove")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-chevron-up",onClick:function(){return e.onIncreaseQuantity(e.id)}}),r.a.createElement("p",{className:"item-amount"},e.quantity),r.a.createElement("i",{className:"fas fa-chevron-down",onClick:function(){return e.onDecreaseQuantity(e.id)}})))}},function(e){e.exports=JSON.parse('{"items":[{"sys":{"id":"0"},"fields":{"title":"queen panel bed","price":10.99,"image":{"fields":{"file":{"url":"product-1.jpeg"}}}}},{"sys":{"id":"1"},"fields":{"title":"king panel bed","price":12.99,"image":{"fields":{"file":{"url":"product-2.jpeg"}}}}},{"sys":{"id":"2"},"fields":{"title":"single panel bed","price":12.99,"image":{"fields":{"file":{"url":"product-3.jpeg"}}}}},{"sys":{"id":"3"},"fields":{"title":"twin panel bed","price":22.99,"image":{"fields":{"file":{"url":"product-4.jpeg"}}}}},{"sys":{"id":"4"},"fields":{"title":"fridge","price":88.99,"image":{"fields":{"file":{"url":"product-5.jpeg"}}}}}]}')},function(e,t,a){"use strict";a.r(t),a.d(t,"register",(function(){return r})),a.d(t,"unregister",(function(){return c}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("/react-shopping-cart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-shopping-cart","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},function(e,t,a){e.exports=a.p+"static/media/logo.6ba322fd.svg"},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./":10,"./App":11,"./App.css":24,"./App.js":11,"./Banner":13,"./Banner.css":25,"./Banner.js":13,"./Cart":16,"./Cart.css":28,"./Cart.js":16,"./CartItem":17,"./CartItem.css":29,"./CartItem.js":17,"./Navbar":12,"./Navbar.css":23,"./Navbar.js":12,"./Product":15,"./Product.css":26,"./Product.js":15,"./ProductList":14,"./ProductList.js":14,"./hero-bcg.jpeg":38,"./index":10,"./index.css":22,"./index.js":10,"./logo.svg":20,"./product-1.jpeg":39,"./product-2.jpeg":40,"./product-3.jpeg":41,"./product-4.jpeg":42,"./product-5.jpeg":43,"./product-6.jpeg":44,"./product-7.jpeg":45,"./product-8.jpeg":46,"./products":18,"./products.json":18,"./serviceWorker":19,"./serviceWorker.js":19};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=27},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a(10)},,,,,function(e,t,a){e.exports=a.p+"static/media/hero-bcg.bb83d2d7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-1.23d0ef2f.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-2.03e5f8d5.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-3.ca5d8437.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-4.6a3db9a7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-5.feebeceb.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-6.2bba37fd.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-7.39e5f207.jpeg"},function(e,t,a){e.exports=a.p+"static/media/product-8.ae2168b8.jpeg"}],[[33,1,2]]]);
//# sourceMappingURL=main.9eb802bd.chunk.js.map