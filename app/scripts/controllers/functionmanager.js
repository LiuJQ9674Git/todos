/**
 * Created by liujianqiang on 16/5/26.
 */

var app = angular.module( 'todosApp'
  /**, ['react']**/
);

function FunctionManagerController() {
  this.person = { fname: 'Clark', lname: 'Kent' };
}

app.controller( 'functionManagerController', FunctionManagerController );

var Hello = React.createClass( {
  propTypes: {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.DOM.span( null,
      'Hello ' + this.props.fname + ' ' + this.props.lname
    );
  }
} );

app.value( 'Hello', Hello );

app.directive( 'hello', function( reactDirective ) {
  return reactDirective( Hello );
} );
