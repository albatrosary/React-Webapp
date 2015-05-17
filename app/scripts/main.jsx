var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
