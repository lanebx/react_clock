(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),s=c(5),l=c(4),r=c(1),m=c.n(r),h=(c(12),c(0)),u=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).timerId=void 0,t.state={time:(new Date).toLocaleTimeString()},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){console.log(t.state.time),t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name;e!==this.props.name&&console.log("The Clock was renamed from ".concat(e," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){console.log("the time was hidden at ".concat(this.state.time)),this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:this.state.time})}}]),c}(m.a.Component),b=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:1},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){t.setState({clockName:Math.floor(100*Math.random())})},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"clock-container",children:Object(h.jsxs)("div",{className:"clock",children:[Object(h.jsx)("h1",{className:"clock__title",children:"React clock"}),Object(h.jsx)("h3",{className:"clock__subtitle",children:"Current time:"}),Object(h.jsx)("div",{className:"time",children:this.state.isClockVisible&&Object(h.jsx)(u,{name:this.state.clockName})}),Object(h.jsx)("button",{className:"button",type:"button",onClick:this.showClock,children:"show clock"}),Object(h.jsx)("button",{className:"button",type:"button",onClick:this.hideClock,children:"hide clock"}),Object(h.jsx)("button",{className:"button",type:"button",onClick:this.setRandomName,children:"set random name"})]})})}}]),c}(m.a.Component),d=b;o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e887895c.chunk.js.map