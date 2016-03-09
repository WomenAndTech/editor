import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string', {defaultValue: `Untitled Post ${Date.now()}`}),
  body: DS.attr('string', {defaultValue: '<section><div class="container"><h2>Hello</h2></div></section><section><div class="container"><h2>World</h2></div></section>'}),
  isDraft: DS.attr('boolean', {defaultValue: true})
});
