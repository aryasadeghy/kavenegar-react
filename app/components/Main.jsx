var React = require('react');
var NavBar  = require('NavBar');
var Footer = require('Footer')
require('style!css!bootstrap')
require('style!css!maincss');
var Main = React.createClass({

  render: function(){
    return(
      <div>
         <NavBar />

         {this.props.children}
         <div className="fixedfooter"> </div>
          <Footer />
    </div>

    )
  }
});
module.exports = Main;
