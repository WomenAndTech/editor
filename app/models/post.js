import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string', {defaultValue: `Untitled Post ${Date.now()}`}),
  body: DS.attr('string', {defaultValue: "<section/>"}),
  isDraft: DS.attr('boolean', {defaultValue: true}),
  type: DS.attr('string', {defaultValue: "post"}),
  // slug: DS.attr('string'),
  meta: DS.attr()
});
