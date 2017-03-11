var React = require('react');
var {Link, IndexLink} =  require('react-router');
require('style!css!navbarcss')
 var NavBar = React.createClass({
   render:function(){
     return (

      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">

            <a className="navbar-brand" href="#">Kavenegar</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="navbar-collapse-3">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" activeclassname="active" activestyle={{fontWeight: 'bold'}}>Lookup </IndexLink>
              </li>
              <li>
                <Link to="/simple" activeclassname="active" activestyle={{fontWeight: 'bold'}} >Simple </Link>
              </li>
              <li>
                <Link to="/receive" activeclassname="active" activestyle={{fontWeight: 'bold'}}>receiveSMS </Link>
              </li>

              <li>
                <Link to="/about" activeclassname="active" activestyle={{fontWeight: 'bold'}} >About </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>





     )
   }
 })

module.exports = NavBar ;
