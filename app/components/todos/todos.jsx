var Todos = React.createClass({
  getInitialState: function () {
    return { todoData: ['aaaa', 'cccc'] };
  },
  addTodo: function(e) {
    e.preventDefault();
    var val = this.refs.todo.getDOMNode().value.trim();
    this.refs.todo.getDOMNode().value = '';
    var data = this.state.todoData;
    data.push(val);
    this.setState({ todoData: data });

  },
  deleteTodo: function (todo) {
    var data = this.state.todoData;
    var i = data.indexOf(todo);
    data.splice(i, 1);
    this.setState({ todoData: data });
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
        <Todo todos={ this.state.todoData } onDelete={ this.deleteTodo } />
      </div>
    );
  }
});