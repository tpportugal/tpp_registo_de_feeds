import Ember from 'ember';
import ENV from 'feed-registry/config/environment';

const Router = Ember.Router.extend({
  location: ENV.locationType,
  metrics: Ember.inject.service(),

  didTransition() {
    this._super();
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = ENV.baseURL + this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      Ember.get(this, 'metrics').trackPage('Piwik', { page, title });
    });
  }
});

Router.map(function() {
  this.route('operators', function(){
    this.route('show', { path: "/:operator_id" });
  });

  this.route('feeds', function() {
    this.route('new', function() {
      this.route('add-operator');
      this.route('submit');
      this.route('license');
      this.route('success');
    });
  });

  this.route('error', { path: "*path" });
});

Ember.Router.reopen({
  scrollToTop: function() {
    window.scrollTo(0, 0);
  }.on('didTransition')
});

export default Router;
