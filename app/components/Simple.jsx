import React from 'react';
import 'whatwg-fetch';
import Alert from 'react-s-alert';
require('style!css!react-s-alert/dist/s-alert-default.css');
require('style!css!react-s-alert/dist/s-alert-css-effects/jelly.css');
var Highlight = require('react-highlight');
require('style!css!highlight.js/styles/dark.css')
var JSONPretty = require('react-json-pretty');
require('style!css!react-json-pretty/src/JSONPretty.monikai.css');


var Simple = React.createClass({

    getInitialState : function(){
      return {
        return : {},
        entries : {},
        showComponent:false,
        kavenegarPhoto:true,
        isloading: false
      }
    },

  handleSubmit : function(e){
    e.preventDefault();
   var receptor = this.refs.receptor.value;
   var message = this.refs.message.value;
   var sender = this.refs.sender.value;
   var key = this.refs.key.value
   var url = `https://api.kavenegar.com/v1/${key}/sms/send.json?receptor=${receptor}&sender=${sender}&message=${message}`
   var self = this;
   self.refs.receptor.value = '';
   self.refs.message.value = '';
   self.refs.sender.value =''
   self.refs.key.value = '';
   this.setState({isloading:true, kavenegarPhoto:false})
fetch(url).then(function (response){
          var status = self.state.status
      //  Alert.info(JSON.stringify(self.state), {
      //   position: 'top-left',
      //   effect: 'jelly',
      //   timeout: 3000,
      //   offset: 100
    // });
     response.json().then(function(json) {
 if(json.entries != null){
   self.setState({
     entries :{
       messageid: json.entries[0].messageid,
       message:json.entries[0].message,
       status: json.entries[0].status,
       statustext : json.entries[0].statusText
     }
   })
 }
 self.setState({
   return: {
     status : json.return.status,
     message: json.return.message
   }
 })
 self.setState({
   showComponent : true,
   isloading: false
 })

});

        }).catch(function(error) {
          self.setState({Message:error})
          console.log(error)
          })



 },
render : function(){
  var {isloading, showComponent} = this.state;
  var that = this;
  function fetchingData(){
    if(isloading){
      return <img  className="isloading"src="http://loading.io/assets/img/hourglass.svg"></img>

    }else if (showComponent) {
      return (
        <div>
            <JSONPretty id="json-pretty" json={that.state.return}></JSONPretty>
            <JSONPretty id="json-pretty" json={that.state.entries}></JSONPretty>
       </div>
      )

    }
  }
        return(
          <div className="container">
                  <div className="row" style={{marginTop: 60}}>
                    <div className="col-xs-6 col-sm-6 col-md-6 pull-right ">
                      <form onSubmit={this.handleSubmit} role="form">
                        <fieldset>
                          <h2>
                            Simple Send
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
                                  ref = "sender"
                                  className="form-control input-lg"
                                  placeholder="Your Sender Number"
                                  />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  ref = "receptor"
                                  className="form-control input-lg"
                                  placeholder="PhoneNumber"
                                   />
                              </div>
                                <div className="form-group">
                                  <textarea
                                    type="text"
                                    ref = "message"
                                    className="form-control input-lg"
                                      placeholder="Your Message" />
                                  </div>
                                  <span className="button-checkbox">

                                    <input
                                      type="checkbox"
                                      name="remember_me"
                                      id="remember_me"
                                      defaultChecked="checked"
                                      className="hidden" />

                                  </span>
                                  <hr className="colorgraph" />
                                  <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                      <input
                                        type="submit"
                                        className="btn btn-lg btn-success btn-block"
                                        defaultValue="Send"
                                        onClick ={this.handleClick}/>
                                    </div>

                                  </div>
                                  </fieldset>
                                </form>
                                </div>
                                <div  className="col-md-6 col-sm-6 col-xs-6 pull-left json-part ">
                                  {fetchingData()}
                                     {this.state.kavenegarPhoto ? <img src='http://panel.kavenegar.com/public/images/Kavenegar-Newface.png'></img> : null}
                                </div>
                      </div>

                    <Alert stack={{limit:1}} html={true} />

                </div>


    )
  }
});

module.exports = Simple;
