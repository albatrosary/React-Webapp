var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="header">
          <ul className="nav nav-pills pull-right">
            <li className="active"><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="todos">Todos</Link></li>
          </ul>
          <h3 className="text-muted">React</h3>
  		</div>
        {/* this is the important part */}
        <RouteHandler />
      </div>
    );
  }
});
