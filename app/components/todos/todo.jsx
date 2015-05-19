var Todo = React.createClass({
  propTypes: {
    // 削除するための処理をI/Fとして定義
    onDelete: React.PropTypes.func.isRequired
  },
  removeTodo: function (todo) {
    this.props.onDelete(todo);
  },
  render: function() {
    var _this = this;
    var rows = this.props.todos.map(function(todo) {
      return (
        <p key={todo} className="input-group">
          <input type="text" className="form-control" value={todo} />
          <span className="input-group-btn">
            <button className="btn btn-danger" onClick={ _this.removeTodo.bind(this, todo) } aria-label="Remove">X</button>
          </span>
        </p>
      );
    });
    return (
      <div>{rows}</div>
    );
  }
});
