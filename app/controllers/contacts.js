import Ember from 'ember';

export default Ember.Controller.extend({
  contactsCount: function(){
    return this.get('model.length');
  }.property('@each'),

  showAll: false,
  
  curCount: function() {
    if (this.get('showAll')) {
      return this.get('model.length');
    } else {
      return this.get('model').filterBy('isarchived', false).get('length');
    }
  }.property('@each'),

  actions: {
    showAllContacts() {
      this.set('showAll', true);
    },
    hideAllContacts() {
      this.set('showAll', false);
    }
  }
});
