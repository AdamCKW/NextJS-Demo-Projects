(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{8097:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CartContainer",function(){return n(3004)}])},3004:function(s,e,n){"use strict";n.r(e);var c=n(5893);n(7294);var r=n(7223),t=n(5029);let l=()=>{let{cart:s,total:e,clearCart:n}=(0,t.bN)();return 0===s.length?(0,c.jsx)("section",{className:"cart",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h2",{children:"your bag"}),(0,c.jsx)("h4",{className:"empty-cart",children:"is currently empty"})]})}):(0,c.jsxs)("section",{className:"cart",children:[(0,c.jsx)("header",{children:(0,c.jsx)("h2",{children:"your bag"})}),(0,c.jsx)("div",{children:s.map(s=>(0,c.jsx)(r.default,{...s},s.id))}),(0,c.jsxs)("footer",{children:[(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"cart-total",children:(0,c.jsxs)("h4",{children:["total ",(0,c.jsxs)("span",{children:["$",e]})]})}),(0,c.jsx)("button",{className:"btn clear-btn",onClick:n,children:"clear cart"})]})]})};e.default=l},7223:function(s,e,n){"use strict";n.r(e);var c=n(5893);n(7294);var r=n(5029);let t=s=>{let{id:e,img:n,title:t,price:l,amount:i}=s,{remove:a,increase:h,decrease:d,toggleAmount:o}=(0,r.bN)();return(0,c.jsxs)("article",{className:"cart-item",children:[(0,c.jsx)("picture",{children:(0,c.jsx)("img",{src:n,alt:t})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{children:t}),(0,c.jsxs)("h4",{className:"item-price",children:["$",l]}),(0,c.jsx)("button",{className:"remove-btn",onClick:()=>a(e),children:"remove"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{className:"amount-btn",onClick:()=>o(e,"inc"),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"})})}),(0,c.jsx)("p",{className:"amount",children:i}),(0,c.jsx)("button",{className:"amount-btn",onClick:()=>o(e,"dec"),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})};e.default=t}},function(s){s.O(0,[774,888,179],function(){return s(s.s=8097)}),_N_E=s.O()}]);