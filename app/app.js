import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import ENV from 'feed-registry/config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: ENV.modulePrefix,
  podModulePrefix: ENV.podModulePrefix,
  Resolver
});

loadInitializers(App, ENV.modulePrefix);

export default App;
