/**
 * Created by liujianqiang on 16/6/1.
 */
import React from 'react';
import NavMain from './NavMain';
global.React = React;

//Module define start
var Rocker = require('./rocker.js');

var r = new Rocker('Ozzy', 62);
r.about();

var circle = require('./circle');
console.log(circle.area(4));

var area = require('./area');
console.log(area(4));


//Module define over
//LikeButton Start
var LikeButton =React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

React.render(
  <LikeButton />,
  document.getElementById('appLikeButton')
);
//LikeButton Over

//HelloMessage start
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="Beijing" />,
             document.getElementById('appHelloMessage'));

//HelloMessage over

//Timer start
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

React.render(<Timer />, document.getElementById('appTimer'));
//Timer  over
//TodoList  start
var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});
React.render(<TodoApp />,document.getElementById('appTodoList'));

//TodoList over

//appAppChildren start
var AppChildren = React.createClass({
  componentDidMount: function() {
    // This doesn't refer to the `span`s! It refers to the children between
    // last line's `<App></App>`, which are undefined.
    console.log(this.props.children);
  },
  render: function() {
    return <div><span/><span/></div>;
  }
});

React.render(<AppChildren></AppChildren>,document.getElementById('appAppChildren'));
//appAppChildren over

//controlled component start
React.render(<input value="hi" />,document.getElementById('appAppControlledComponent'));

setTimeout(function() {
  React.render(<input value={null} />, document.getElementById('appAppControlledComponent'));
}, 10000);

//controlled component over

require( ['./activeButton'], function( activeButton){

  console.log("test");
});

//
React.render(
  <div>
    <NavMain />
    <p>TTT</p>
  </div>
  , document.getElementById('appMainNav'));

//CommonJs
var MySalute = require("./worldCommonJs");
var body = document.getElementById("app");
body.innerHTML = 'Good point: ' +MySalute;

//
var ResultMultiplyBy2 = require('./moduleBCommonJS');
console.log("ResultMultiplyBy2 is",ResultMultiplyBy2);
var resultBody = document.getElementById("appdiv");
resultBody.textContent = '乘法是: ' +ResultMultiplyBy2;

require(['./myModuleJQuery'], function(myModuleJQuery) {
  console.log("myModuleJQuery ADM");

});
//Using require to load dependencies
define(function(require) {
  var $ = require('./exportsAMD');
  //$('body').text('hello world-adm');
});

//AMD
var  alpha=require("./alpha");
alpha.alpha("test");

//AMD
require(["./alpha"], function(a) {
  var test=alpha.alpha("require aplpha ");
  var appAlpha = document.getElementById("appAlpha");
  appAlpha.innerHTML = 'Good point: ' +test;
  // ...
});

//
var req=require("./defineModule");

req.method1();
//
require( ['./defineModule'], function( defineModule){
  defineModule.method2();
  defineModule.method1();
  console.log("test");
});

