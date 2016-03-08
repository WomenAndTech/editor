import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string', {defaultValue: `Untitled Post ${Date.now()}`}),
  body: DS.attr('string'),
  isDraft: DS.attr('boolean', {defaultValue: true})
});
