/**
 * Created by liujianqiang on 16/5/23.
 */
// tutorial1-raw.js
/**
 * JSX语法
 */
var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
