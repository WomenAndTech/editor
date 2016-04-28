import Ember from 'ember';

export function initialize(application) {  
  let applicationRoute = application.lookup('route:application');
  let session = application.lookup('service:session');
  
  session.on('authenticationSucceeded', function() {
    var attemptedTransition = this.session.get('attemptedTransition') || null; 

    if(attemptedTransition){
      attemptedTransition.retry();
    }
    else {
      applicationRoute.transitionTo('admin');
    }
  });
  session.on('invalidationSucceeded', function() {
    applicationRoute.transitionTo('login');
  });

  ['controller'].forEach(injectionTarget => {
    application.inject(injectionTarget, 'session', 'service:session');
  });
  
}

export default {
  name:       'session-events',
  after:      'ember-simple-auth',
  initialize: initialize
};