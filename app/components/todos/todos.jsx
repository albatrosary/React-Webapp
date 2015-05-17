var todoData = ['aaaa', 'cccc'];

var Todo = React.createClass({
  propTypes: {
    // 削除するための処理をI/Fとして定義
    onDelete: React.PropTypes.func.isRequired
  },
  removeTodo: function (todo) {
    this.props.onDelete(todo);
  },
  render: function() {
    var todo = this.props.todo;
    return (
      <p className="input-group">
        <input type="text" className="form-control" value={todo} />
        <span className="input-group-btn">
          <button className="btn btn-danger" onClick={ this.removeTodo.bind(this, todo) } aria-label="Remove">X</button>
        </span>
      </p>
    );
  }
});

var TodoList = React.createClass({
  propTypes: {
    // 削除するための処理をI/Fとして定義
    onDelete: React.PropTypes.func.isRequired
  },
  deleteTodo: function (todo) {
    this.props.onDelete(todo);
  },
  render: function() {
    var _this = this;
    var rows = this.props.todos.map(function(todo) {
      return (
        <Todo todo={todo} onDelete={ _this.deleteTodo }></Todo>
        // <Todo key={todo} todo={todo}></Todo>
      );
    });
    return (
      <div>{rows}</div>
    );
  }
});

var Todos = React.createClass({
  addTodo: function(e) {
    e.preventDefault();
    var val = this.refs.todo.getDOMNode().value.trim();
    this.refs.todo.getDOMNode().value = '';
    todoData.push(val);
    this.setState({ todoData: todoData});
  },
  deleteTodo: function (todo) {
    var i = todoData.indexOf(todo);
    todoData.splice(i, 1);
    this.setState({ todoData: todoData});
  },
  render: function () {
    return (
      <div>
        <h2>My todos</h2>
        {/* Todos input */}
        <form role="form" onSubmit={this.addTodo}>
          <div className="row">
            <div className="input-group">
              <input type="text" ref="todo" placeholder="What needs to be done?" className="form-control" />
              <span className="input-group-btn">
                <input type="submit" className="btn btn-primary" value="Add" name="add" />
              </span>
            </div>
          </div>
        </form>
        {/* Todos list */}
        <TodoList todos={todoData} onDelete={ this.deleteTodo } />
      </div>
    );
  }
});