import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import config from 'editor/config/environment';

const { RSVP, isEmpty, run } = Ember;

export default BaseAuthenticator.extend({
  _decodeToken: function(token) {
    var parsedToken = token.split(".");
    var payload = JSON.parse(atob(parsedToken[1]));

    return {
      id: payload.id,
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      admin: payload.admin,
      token: token
    };
  },
  authenticate: function(email, password) {
    var self = this;
    return new RSVP.Promise((resolve, reject) => {
      const data = { 
        email, 
        password 
      };
      
      this._makeRequest(data).then(
        function(response) {
          var decodedToken = self._decodeToken(response.token);
          console.log('Login Successful!');
          run(null, resolve, decodedToken);
          // resolve(decodedToken);
        }, 
        function(xhr) {
          // reject(xhr.responseJSON || xhr.responseText);
          run(null, reject, xhr.responseJSON || xhr.responseText);
        }
      );
    });
  },
  restore(data) {
    return new RSVP.Promise((resolve, reject) => {     
      if (isEmpty(data['token'] && data['id'])) {
        reject();
      } else {
        resolve(data);
      }
    });
  },
  _makeRequest(data) {
    const options = {
      url: config.APIServer + "/authenticate",
      data: JSON.stringify(data),
      type:        'POST',
      dataType:    'json',
      contentType: 'application/json'
    };

    return Ember.$.ajax(options);
  },
});