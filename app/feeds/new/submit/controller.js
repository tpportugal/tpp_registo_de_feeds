import Ember from 'ember';

export default Ember.Controller.extend({
  agreeToTerms: false,
  userTypes: [
    "construtor_de_comunidades",
    "entusiasta_de_dados",
    "programador_de_aplicações",
    "fabricante_de_hardware",
    "consultor",
    "funcionário_de_operador_de_transportes",
    "funcionário_de_agência_pública"
  ],
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  actions: {
    handleFocus: function(select) {
      select.actions.open();
    },
    submit: function() {
      var controller = this;
      var changeset = controller.get('createFeedFromGtfsService').toChangeset();
      changeset.save().then(function() {
        controller.transitionToRoute('feeds.new.success');
      }).catch(function(error) {
        // TODO: display a better error message
        alert('Erro com a submissão');
      });
    },
    agree: function() {
      if (this.agreeToTerms === false){
        // this.set('agreeToTerms', this.get('value'));
        this.set('agreeToTerms', true);
      } else {
        this.set('agreeToTerms', false);
      }
    }
  }
});
