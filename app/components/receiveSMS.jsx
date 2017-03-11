import React from 'react';
import 'whatwg-fetch';
import Alert from 'react-s-alert';
require('style!css!react-s-alert/dist/s-alert-default.css');
require('style!css!react-s-alert/dist/s-alert-css-effects/jelly.css');
var Highlight = require('react-highlight');
require('style!css!highlight.js/styles/dark.css')
var JSONPretty = require('react-json-pretty');
require('style!css!react-json-pretty/src/JSONPretty.monikai.css');


var receiveSMS = React.createClass({

    getInitialState : function(){
      return {
        return : {},
        entries : [],
        showComponent:false,
        kavenegarPhoto:true
      }
    },

  handleSubmit : function(e){
    e.preventDefault();
   var linenumber = this.refs.linenumber.value;
   var key = this.refs.key.value;
   var isread = this.refs.isread.value;
   var isread2 =  parseInt(isread)
   var url = `https://api.kavenegar.com/v1/${key}/sms/receive.json?linenumber=${linenumber}&isread=${isread2}`
   var self = this;
      self.refs.linenumber.value = '';
      self.refs.key.value = '';
     fetch(url).then(function (response){
          self.setState({
            return : {
              status : response.status,
              statusText : response.statusText,
              ok : response.ok,
              messageid: response.messageid
            }
          })
          var status = self.state.status

response.json().then(function(json) {
if(json.entries != null){
self.setState({

entries :{
  messageid: json.entries[0].messageid,
  message:json.entries[0].message,
  sender: json.entries[0].sender,
  receptor : json.entries[0].receptor,
  date : json.entries[0].date
}
})
}
self.setState({
return: {
status : json.return.status,
message: json.return.message
}
})


});

        }).catch(function(error) {
          self.setState({Message:error})
          console.log(error)
          })
          this.setState({
            showComponent : true,
            kavenegarPhoto: false
          })


 },
render : function(){
        return(
          <div className="container">
                  <div className="row" style={{marginTop: 60}}>
                    <div className="col-xs-6 col-sm-6 col-md-6 pull-right ">
                      <form onSubmit={this.handleSubmit} role="form">
                        <fieldset>
                          <h2>
                            recevie SMS
                          </h2>
                          <hr className="colorgraph" />
                          <div className="form-group">
                              <input
                                type="text"
                                ref = "key"
                                className="form-control input-lg"
                                  placeholder="Your KEY"
                                  />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  ref = "linenumber"
                                  className="form-control input-lg"
                                  placeholder="Your linenumber"
                                  />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  ref = "isread"
                                  className="form-control input-lg"
                                  placeholder="0 or 1 "
                                  />
                              </div>


                                  <hr className="colorgraph" />
                                  <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                      <input
                                        type="submit"
                                        className="btn btn-lg btn-success btn-block"
                                        defaultValue="receive"
                                        onClick ={this.handleClick}/>
                                    </div>

                                  </div>
                                  </fieldset>
                                </form>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 pull-left json-part-2 ">

                                      {this.state.showComponent ?
                                        <div>
                                            <JSONPretty id="json-pretty" json={this.state.return}></JSONPretty>
                                            <JSONPretty id="json-pretty" json={this.state.entries}></JSONPretty>
                                        </div>
                                     : null}
                                     {this.state.kavenegarPhoto ? <img src='http://panel.kavenegar.com/public/images/Kavenegar-Newface.png'></img> : null}
                                </div>
                      </div>

                    <Alert stack={{limit:1}} html={true} />
                      <p style={{marginTop: 106}}>  </p>

                </div>


    )
  }
});

module.exports = receiveSMS;
