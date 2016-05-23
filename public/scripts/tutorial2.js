/**
 * Created by liujianqiang on 16/5/23.
 */
var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

/**
 *
 // tutorial2.js
 *var CommentList = React.createClass({
 *   render: function() {
 *       return (
 *           <div className="commentList">
 *               Hello, world! I am a CommentList.
 *          </div>
 *       );
 *   }
 *});


 //tutorial3.js
 *var CommentBox = React.createClass({
 *   render: function() {
 *       return (
 *           <div className="commentBox">
 *               <h1>Comments</h1>
 *               <CommentList />
 *               <CommentForm />
 *           </div>
 *       );
 *   }
 *});

 //tutorial4.js
 *var Comment = React.createClass({
 *   render: function() {
 *       return (
 *           <div className="comment">
 *               <h2 className="commentAuthor">
 *                   {this.props.author}
 *               </h2>
 *               {this.props.children}
 *           </div>
 *       );
 *   }
 *});

 //tutorial6.js
 *var Comment = React.createClass({
 *   render: function() {
 *       return (
 *           <div className="comment">
 *               <h2 className="commentAuthor">
 *                   {this.props.author}
 *               </h2>
 *               {marked(this.props.children.toString())}
 *           </div>
 *       );
 *   }
 *});

 //tutorial5.js
 //我们从父CommentList组件传递给子Comment组件一些数据
 *var CommentList = React.createClass({
 *   render: function() {
 *       return (
 *           <div className="commentList">
 *               <Comment author="Pete Hunt">This is one comment</Comment>
 *               <Comment author="Jordan Walke">This is *another* comment</Comment>
 *           </div>
 *       );
 *   }
 *});
 */

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

// tutorial7.js
var Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

// tutorial10.js
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

// tutorial9.js
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);

