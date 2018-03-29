import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',


  requiresAttribution: function(){
    return this.get('operator.feeds.firstObject.license_use_without_attribution') === 'não';
  }.property('operator.feeds.firstObject.license_use_without_attribution'),
  doesNotRequireAttribution: function(){
    return this.get('operator.feeds.firstObject.license_use_without_attribution') === 'sim';
  }.property('operator.feeds.firstObject.license_use_without_attribution'),
  attributionUnknown: function(){
    return this.get('operator.feeds.firstObject.license_use_without_attribution') === 'desconhecido';
  }.property('operator.feeds.firstObject.license_use_without_attribution'),

  derivationAllowed: function(){
    return this.get('operator.feeds.firstObject.license_create_derived_product') === 'sim';
  }.property('operator.feeds.firstObject.license_create_derived_product'),
  derivationNotAllowed: function(){
    return this.get('operator.feeds.firstObject.license_create_derived_product') === 'não';
  }.property('operator.feeds.firstObject.license_create_derived_product'),
  derivationUnknown: function(){
    return this.get('operator.feeds.firstObject.license_create_derived_product') === 'desconhecido';
  }.property('operator.feeds.firstObject.license_create_derived_product'),


  redistributionAllowed: function(){
    return this.get('operator.feeds.firstObject.license_redistribute') === 'sim';
  }.property('operator.feeds.firstObject.license_redistribute'),
  redistributionNotAllowed: function(){
    return this.get('operator.feeds.firstObject.license_redistribute') === 'não';
  }.property('operator.feeds.firstObject.license_redistribute'),
  redistributionUnknown: function(){
    return this.get('operator.feeds.firstObject.license_redistribute') === 'desconhecido';
  }.property('operator.feeds.firstObject.license_redistribute')

});
