import DS from "ember-data";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'editor/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: config.APIServer,
  authorizer: 'authorizer:custom'
});
