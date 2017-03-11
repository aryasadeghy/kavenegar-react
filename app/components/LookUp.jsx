import React from  'react';
import 'whatwg-fetch';
import Alert from 'react-s-alert';
    require('style!css!react-s-alert/dist/s-alert-default.css');
require('style!css!react-s-alert/dist/s-alert-css-effects/jelly.css');
var Highlight = require('react-highlight');
require('style!css!highlight.js/styles/dark.css')
var JSONPretty = require('react-json-pretty');

var LookUp = React.createClass({
  getInitialState : function(){
    return {
      return : {},
      entries : {},
      showComponent:false,
      kavenegarPhoto : true
    }
  },
handleSubmit : function(e){
  e.preventDefault();
    var receptor = this.refs.receptor.value;
    var phone = receptor.split(",")
    var token = this.refs.token.value;
    var template = this.refs.template.value;
    var key = this.refs.key.value;


             var url = `https://api.kavenegar.com/v1/${key}/verify/lookup.json?receptor=${phone}&token=${token}&template=${template}`
             var self = this;
               self.refs.receptor.value = '';
               self.refs.token.value = '';
               self.refs.template.value =''
               self.refs.key.value = '';
               fetch(url)
                .then(function (response){
                  self.setState({

                  });
               //
              //       Alert.info(JSON.stringify(self.state.return), {
              //        position: 'top-left',
              //        effect: 'jelly',
              //        timeout: 3000,
              //        offset: 100
              //    }
              //  );
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
            return : {
              status : json.return.status,
              message : json.return.message,
            }
          })
        })
                  }).catch(function(error) {
                    con
                    self.setState({
                      return : {
                        status : json.return.status,
                        message:json.return.message
                      }
                    })
                    console.log('request failed', error)
                  })

            this.setState({
              showComponent:true,
              kavenegarPhoto: false
            })
           },

render : function(){
                  return(
          <div className="container">
                  <div className="row" style={{marginTop: 60}}>
                    <div className="col-xs-6 col-sm-6 col-md-6  pull-right">
                      <form onSubmit={this.handleSubmit} role="form">
                        <fieldset>
                          <h2>
                              Lookup
                              </h2>
                          <hr className="colorgraph" />
                          <div className="form-group">
                            <input
                                type="text"
                                  ref = "key"
                                  className="form-control input-lg"
                                  placeholder="Your KEY"
                                  defaultValue="6F646F316835782F7A4F4C44593768673342656177673D3D"/>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              ref = "template"
                              className="form-control input-lg"
                              placeholder="Your Template"
                              defaultValue="coderland" />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              ref = "token"
                              className="form-control input-lg"
                              placeholder="Define %token that defined in kavenegar" />
                          </div>
                          <div className="form-group">
                            <textarea
                              type="text"
                              ref = "receptor"
                              className="form-control input-lg"
                              placeholder="Your PhoneNumber" />
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
                                defaultValue="Send" />
                              </div>

                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 pull-left json-part">

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
                </div>


              )
            }


})
module.exports = LookUp ;
