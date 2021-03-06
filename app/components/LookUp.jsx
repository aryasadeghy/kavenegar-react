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
      kavenegarPhoto : true,
      isloading: false

    }
  },
handleSubmit : function(e){
  e.preventDefault();

    var receptor = this.refs.receptor.value;
    var phone = receptor.split(",")
    var token = this.refs.token.value;
    var template = this.refs.template.value;
    var key = this.refs.key.value;

    this.setState({isloading: true,kavenegarPhoto: false})
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
          self.setState({
            showComponent :true,
            isloading:false
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


           },

render : function(){
  var {isloading,showComponent} = this.state;
  var that = this;
  //this function addding loading content before the json showup
  function fetchingData(){
    if(isloading){
      //if  isloading state is true tihs render
      return <img className="isloading" src="http://loading.io/assets/img/hourglass.svg"></img>
    }else if(showComponent){
      //id isloading state is false this render
      return(
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
                                />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              ref = "template"
                              className="form-control input-lg"
                              placeholder="Your Template"
                               />
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
                        {fetchingData()}

                     {this.state.kavenegarPhoto ? <img src='http://panel.kavenegar.com/public/images/Kavenegar-Newface.png'></img> : null}
                    </div>
                  </div>
                  <Alert stack={{limit:1}} html={true} />
                </div>
              )
            }
})
module.exports = LookUp ;
