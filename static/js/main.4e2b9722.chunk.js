(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(4),i=r.n(c),s=(r(10),r(2));r(11);function l(e){var t=e;return{shipLength:e,hit:function(){t--},isSunk:function(){return t<1}}}function o(e){var t=e,r=function(){var e=[],t=[];e.length<1&&function(){for(var t=0;t<100;t++)e.push({ship:!1,hit:!1})}();var r={hit:null,idx:null};return{boardArray:e,shipArray:t,placeShip:function(r,a,n){var c=!1;if(n&&r+a%10<=10){for(var i=[],s=a;s<r+a;s++)i.push(e[s]);if(i.every((function(e){return!1===e.ship}))){c=!0;var o=l(r);t.push(o);for(var h=a;h<r+a;h++)e.splice(h,1,{currentShip:o,ship:!0,hit:!1})}}if(!n&&a+10*(r-1)<100){for(var u=[],d=a;d<=a+10*(r-1);d+=10)u.push(e[d]);if(u.every((function(e){return!1===e.ship}))){c=!0;var j=l(r);t.push(j);for(var b=a;b<=a+10*(r-1);b+=10)e.splice(b,1,{currentShip:j,ship:!0,hit:!1})}}return c},receiveAttack:function(t){!0===e[t].ship&&!1===e[t].hit?(e[t].currentShip.hit(),e[t].hit=!0,r.hit=!0,r.idx=t):!1===e[t].ship&&!1===e[t].hit&&(e[t].hit=!0,r.hit=!1,r.idx=null)},shipsSunk:function(){if(t.length>0)return t.every((function(e){return!0===e.isSunk()}))},prevAttack:r}}();function a(e){var t=Math.floor(100*Math.random()),n=Math.floor(2*Math.random());if(!r.placeShip(e,t,[!0,!1][n]))return a(e)}var n=[5,4,3,3,2];return{playerName:t,board:r,randomMove:function(){var e=function e(){var t=Math.floor(100*Math.random());return!1===r.boardArray[t].hit?t:!0===r.boardArray[t].hit?e():void 0}();r.receiveAttack(e)},shipLengths:n,randomPlacement:function(){n.forEach((function(e){a(e)}))}}}var h=r(5),u=r(0);var d=function(e){var t=e.player2,r=e.setPlayer2,n=e.playRound;return Object(a.useEffect)((function(){var e=Object(h.a)({},t);e.randomPlacement(),r(e)}),[]),Object(u.jsx)("div",{className:"board-wrapper",children:Object(u.jsx)("div",{className:"gameboard",children:t.board.boardArray.map((function(e,t){return Object(u.jsx)("div",{onClick:function(e){return n(e)},"data-index":t,"data-hit":e.hit,className:"cell ".concat(e.hit&&e.ship?"cell-ship-hit":null," \n            ").concat(e.hit?null:"cell-water"," \n\n            ").concat(e.hit&&!e.ship?"cell-water-hit":null)})}))})})};var j=function(e){var t=e.setHorizontal,r=e.horizontal,a=e.index,n=e.player1;return Object(u.jsx)("div",{className:"ship-placer",children:Object(u.jsxs)("table",{className:"table",children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Orientation"})," ",Object(u.jsx)("td",{children:Object(u.jsxs)("button",{type:"button",onClick:function(){return t(!r)},children:[r?"Horizontal":"Vertical"," "]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Ship Length: "})," ",Object(u.jsxs)("td",{children:[" ",n.shipLengths[a]]})]})]})})};var b=function(e){var t=e.player1,r=(e.setPlayer1,e.shipsPlaced),a=e.playerPlacement,n=e.horizontal,c=e.setHorizontal,i=e.index;return Object(u.jsxs)("div",{className:"player-board",children:[!r&&Object(u.jsx)(j,{setHorizontal:c,horizontal:n,index:i,player1:t}),Object(u.jsx)("div",{className:"board-wrapper",children:Object(u.jsx)("div",{className:"gameboard",children:t.board.boardArray.map((function(e,t){return Object(u.jsx)("div",{onClick:function(e){return a(e)},"data-index":t,className:"cell ".concat(e.hit&&e.ship?"cell-ship-hit":null,"\n              ").concat(e.hit&&!e.ship?"cell-water-hit":null,"\n              ").concat(e.ship?"cell-ship":"cell-water")})}))})})]})};var p=function(e){var t=e.winner,r=e.gameOver,a=e.shipsPlaced;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t?"Winner: ".concat(t):null}),Object(u.jsx)("h2",{children:r&&!a?"Place your ships":!r&&a?"Attack your opponent":r&&a?"GAME OVER":null})]})};var f=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"header",children:"Battleships"})})};var v=function(){var e=Object(a.useState)(o("Player 1")),t=Object(s.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(o("Computer")),i=Object(s.a)(c,2),l=i[0],h=i[1],j=Object(a.useState)(!0),v=Object(s.a)(j,2),O=v[0],m=v[1],x=Object(a.useState)(0),y=Object(s.a)(x,2),S=y[0],g=y[1],N=Object(a.useState)(null),k=Object(s.a)(N,2),P=k[0],A=k[1],w=Object(a.useState)(!0),M=Object(s.a)(w,2),z=M[0],C=M[1],E=Object(a.useState)(!1),H=Object(s.a)(E,2),L=H[0],B=H[1];return Object(a.useEffect)((function(){r.board.shipsSunk()?(A(l.playerName),C(!0)):l.board.shipsSunk()?(A(r.playerName),C(!0)):l.board.shipsSunk()||r.board.shipsSunk()||A(null)}),[r,l]),Object(a.useEffect)((function(){S>4&&z&&(B(!0),C(!1))}),[S]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)(p,{winner:P,gameOver:z,shipsPlaced:L}),Object(u.jsxs)("div",{className:"gameboard-container",children:[Object(u.jsxs)("div",{className:"player-board",children:[Object(u.jsx)("h3",{children:"Player Board"}),Object(u.jsx)(b,{player1:r,setPlayer1:n,playerPlacement:function(e){if(!L&&z){var t=Object.assign({},r);t.board.placeShip(t.shipLengths[S],parseInt(e.target.dataset.index),O)&&(n(t),g(S+1))}},shipsPlaced:L,horizontal:O,setHorizontal:m,index:S})]}),Object(u.jsxs)("div",{className:"computer-board",children:[Object(u.jsx)("h3",{children:"Computer Board"}),Object(u.jsx)(d,{className:"gameboard-container",player2:l,setPlayer2:h,playRound:function(e){if(!z&&"false"===e.target.dataset.hit){var t=Object.assign({},l),a=e.target.dataset.index;t.board.receiveAttack(a),h(t);var c=Object.assign({},r);c.randomMove(),n(c)}}})]})]}),Object(u.jsx)("button",{type:"button",className:"reset-button",onClick:function(){n(o("Player 1"));var e=o("Computer");e.randomPlacement(),h(e),B(!1),C(!0),g(0),A(null)},children:"New Game"})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4e2b9722.chunk.js.map