var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home"       handler={Home}/>
    <Route name="about"      handler={About}/>
    <Route name="contact"    handler={Contact}/>
    <Route name="todos"      handler={Todos}/>
    <DefaultRoute            handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('main'));
});
