(this.webpackJsonpbitcoin=this.webpackJsonpbitcoin||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),c=n(5),a=n.n(c),s=(n(34),n(35),n(9)),o=n.n(s),d=n(22),h=n(23),j=n(24),l=n(28),u=n(27),p=n(6),b=n.n(p),g=n(25),x=n.n(g),m=n.p+"static/media/bitcoinLogo.443a278f.png",O=n.p+"static/media/monero.a8820da2.png",k=n.p+"static/media/Dogecoin_logo.a33c493c.png",f=n(82),v=n(1),_=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(h.a)(this,n),(i=e.call(this,t)).state={circulation:1e8,price:0,marketCap:0,rank:1,reward:3,moneroInflation:3,dogeInflation:3},i}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(o.a.mark((function t(){var e,n,i,r,c,a,s,d,h,j,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true");case 2:return e=t.sent,t.next=5,b.a.get("https://blockchain.info/q/bcperblock");case 5:return n=t.sent,i=n.data,i=(i*=52560).toFixed(2),r=e.data.market_data,t.next=12,b.a.get("https://api.coingecko.com/api/v3/coins/monero?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true");case 12:return c=t.sent,t.next=15,b.a.get("https://localmonero.co/blocks/api/get_stats");case 15:return a=t.sent,s="0."+(s=(s=a.data.last_reward).toString()),s=Number(s),s=(s*=262800).toFixed(3),d=c.data.market_data,h=s/d.circulating_supply,h*=100,t.next=27,b.a.get("https://api.coingecko.com/api/v3/coins/dogecoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true");case 27:j=t.sent,l=j.data.market_data,u=100/(u=l.circulating_supply/5e9),this.setState({circulation:r.circulating_supply,price:r.current_price.usd,marketCap:r.market_cap.usd,rank:r.market_cap_rank,reward:i,moneroInflation:h,dogeInflation:u});case 32:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.reward/this.state.circulation;return t*=100,Object(v.jsxs)("div",{align:"center",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:m,height:"30%",width:"30%"})}),Object(v.jsxs)("div",{id:"textInfo",children:[Object(v.jsxs)("h2",{children:["Price : $",this.state.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(v.jsxs)("h2",{children:["Inflation Rate: ",t.toFixed(2),"%"]}),Object(v.jsxs)("h3",{children:["Market Cap: $",this.state.marketCap.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(v.jsxs)("h2",{children:["market Cap Rank: ",this.state.rank]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{align:"center",children:[Object(v.jsx)("h2",{children:"Tips Appreciated :)"}),Object(v.jsx)("h2",{children:"All Through Lightning!"}),Object(v.jsx)("h3",{children:"Lightning Adress: VeryScience@zbd.gg"}),Object(v.jsx)(x.a,{value:"VeryScience@zbd.gg",size:"128"}),Object(v.jsx)("br",{}),Object(v.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){return navigator.clipboard.writeText("VeryScience@zbd.gg")},children:"Copy"}),Object(v.jsx)("h6",{children:"Just copy Lightning Adress into Invoice or Lightning Adress tab"}),Object(v.jsx)("h6",{children:"on any Lightning Wallet App"})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Other Coins"}),Object(v.jsx)("div",{id:"monero",children:Object(v.jsxs)("a",{href:"https://veryscience.github.io/moneroinflation/",children:[Object(v.jsx)("img",{src:O,height:"9%",width:"9%"}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:["Inflation: ",this.state.moneroInflation.toFixed(2),"%"]})]})}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{id:"doge",children:Object(v.jsxs)("a",{href:"https://veryscience.github.io/dogeinflation/",children:[Object(v.jsx)("img",{src:k,height:"14%",width:"14%"}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:["Inflation: ",this.state.dogeInflation.toFixed(2),"%"]})]})})]})}}]),n}(i.Component);var y=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(_,{})})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),c(t),a(t)}))};a.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root")),I()}},[[68,1,2]]]);
//# sourceMappingURL=main.c234c271.chunk.js.map