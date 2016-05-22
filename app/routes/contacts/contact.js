import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findAll('contact').findBy('id', params.contact_id);
  }
});