import DS from "ember-data";
import config from 'editor/config/environment';

export default DS.RESTAdapter.extend({
  host: config.APIServer,
  authorizer: 'authorizer:custom'
});
