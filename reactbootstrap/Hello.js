//一个简单的React组件，使用ES6语法：
var React = require('react');
class Hello extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}


module.exports=Hello;
