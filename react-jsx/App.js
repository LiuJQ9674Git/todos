

var React = require('react');
var Hello = require('./Hello');

//example-1
var myDivElement = <div className="foo">ggggg</div>;
React.render(myDivElement, document.getElementById("appdiv"));

//example-2
var Nav = React.createClass({
  render: function () {
    return <div>nav</div>
  }
});

React.render(
  <div>
    {2 > 1 ? <Nav/> : <div>div</div>}
  </div>,
  document.getElementById("app")
);

//example-3
React.render(<Hello name="Nate" />, document.getElementById("appdHello"));

