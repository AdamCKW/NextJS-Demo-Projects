(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(8484)}])},5029:function(t,e,a){"use strict";a.d(e,{wI:function(){return i},bN:function(){return l}});var n=a(5893),r=a(7294);let o=(t,e)=>{let a;switch(e.type){case"CLEAR_CART":return{...t,cart:[]};case"REMOVE":return{...t,cart:t.cart.filter(t=>t.id!==e.payload)};case"INCREASE":return a=t.cart.map(t=>t.id===e.payload?{...t,amount:t.amount+1}:t),{...t,cart:a};case"DECREASE":return a=t.cart.map(t=>t.id===e.payload?{...t,amount:t.amount-1}:t).filter(t=>0!==t.amount),{...t,cart:a};case"TOGGLE_AMOUNT":return a=t.cart.map(t=>{if(t.id===e.payload.id){if("inc"===e.payload.type)return{...t,amount:t.amount+1};if("dec"===e.payload.type)return{...t,amount:t.amount-1}}return t}).filter(t=>0!==t.amount),{...t,cart:a};case"GET_TOTALS":var n;let{total:r,amount:o}=null==t?void 0:null===(n=t.cart)||void 0===n?void 0:n.reduce((t,e)=>{let{price:a,amount:n}=e;return t.total+=a*n,t.amount+=n,t},{total:0,amount:0});return r=parseFloat(r.toFixed(2)),{...t,total:r,amount:o};case"LOADING":return{...t,loading:!0};case"DISPLAY_ITEMS":return{...t,cart:e.payload,loading:!1}}throw Error("no matching action type")},c=r.createContext(),u={loading:!1,cart:[{id:1,title:"Samsung Galaxy S7",price:599.99,img:"https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",amount:1},{id:2,title:"google pixel ",price:499.99,img:"https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",amount:1},{id:3,title:"Xiaomi Redmi Note 2",price:699.99,img:"https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",amount:1}],total:0,amount:0},i=t=>{let{children:e}=t,[a,i]=(0,r.useReducer)(o,u),l=()=>{i({type:"CLEAR_CART"})},d=t=>{i({type:"REMOVE",payload:t})},p=t=>{i({type:"INCREASE",payload:t})},s=t=>{i({type:"DECREASE",payload:t})},m=(t,e)=>{i({type:"TOGGLE_AMOUNT",payload:{id:t,type:e}})},f=async()=>{i({type:"LOADING"});let t=await fetch("https://course-api.com/react-useReducer-cart-project"),e=await t.json();i({type:"DISPLAY_ITEMS",payload:e})};return(0,r.useEffect)(()=>{f()},[]),(0,r.useEffect)(()=>{i({type:"GET_TOTALS"})},[a.cart]),(0,n.jsx)(c.Provider,{value:{...a,clearCart:l,remove:d,increase:p,decrease:s,toggleAmount:m},children:e})},l=()=>(0,r.useContext)(c)},8484:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return o}});var n=a(5893);a(4744);var r=a(5029);function o(t){let{Component:e,pageProps:a}=t;return(0,n.jsx)(r.wI,{children:(0,n.jsx)(e,{...a})})}},4744:function(){}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(1118),e(880)}),_N_E=t.O()}]);