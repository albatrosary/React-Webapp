var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className="jumbotron">
          <h1>'Allo, 'Allo!</h1>
          <p className="lead">Always a pleasure scaffolding your apps.</p>
          <p><a className="btn btn-lg btn-success" href="#">Splendid! <span className="glyphicon glyphicon-ok"></span></a></p>
        </div>
        <div className="row marketing">
          <div className="col-lg-6">
            <h4>HTML5 Boilerplate</h4>
            <p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>
            <h4>Sass</h4>
            <p>Sass is a mature, stable, and powerful professional grade CSS extension language.</p>
            <h4>Bootstrap</h4>
            <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>
          </div>
        </div>
      </div>
    );
  }
});