(this.webpackJsonpgridmaker_r=this.webpackJsonpgridmaker_r||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),r=n(3),c=n.n(r),s=(n(12),n(4)),u=n(5),a=n(7),i=n(6),d=n(0);var h=function(e){return Object(d.jsx)("td",{onClick:e.handleApplyColor})};var j=function(e){for(var t=[],n=0;n<e.numCols;n++)t.push(Object(d.jsx)(h,{handleApplyColor:e.handleApplyColor}));return Object(d.jsx)("tr",{children:t})},C=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).addRow=function(){e.setState((function(e){return{numRows:e.numRows+1}}))},e.addColumn=function(){e.setState((function(e){return{numRows:e.numCols+1}}))},e.handleColorChange=function(t){e.setState({selectedColor:t.target.value})},e.handColorApply=function(t){t.target.style.backgroundColor=e.state.selectedColor},e.state={numRows:1,numCols:1,selectedColor:"red"},e}return Object(u.a)(n,[{key:"render",value:function(){for(var e=[],t=0;t<this.state.numRows;t++)e.push(Object(d.jsx)(j,{numCols:this.state.numCols,handleApplyColor:this.handleApplyColor}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.addRow,children:"Add Row"}),Object(d.jsx)("button",{onClick:this.addColumn,children:"Add Column"}),Object(d.jsxs)("select",{onChange:this.handleColorChange,children:[Object(d.jsx)("option",{value:"red",children:"Red"}),Object(d.jsx)("option",{value:"blue",children:"Blue"}),Object(d.jsx)("option",{value:"yellow",children:"Yellow"})]}),Object(d.jsx)("table",{children:e})]})}}]),n}(o.Component);n(14);var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(C,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,o=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),l(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.47d5dda2.chunk.js.map