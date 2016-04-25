import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  actions: {
    authenticate: function() {
      let { email, password } = this.get('controller').getProperties('email', 'password');
      console.log(email);
      console.log(password);
      this.set('notificationMessage', 'Logging in...');
      this.set('errorMessage', '');

      if(email && password) {
        this.get('session').authenticate('authenticator:custom', email, password).catch((response) => {
          console.log(response);
          this.set('notificationMessage', '');
          this.set('errorMessage', response.message);
        });
      }
      else {
        this.set('errorMessage', "Email and Password required to login.");
        this.set('notificationMessage', '');
      }
    }
  }
});