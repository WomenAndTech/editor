import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  bio: DS.attr('string'),
  role: DS.attr('string'),
  admin: DS.attr('boolean', {defaultValue: false}),
  password: DS.attr('string')
});
