import Ember from 'ember';
import moment from 'moment';

export default Ember.Handlebars.registerBoundHelper('from-now-date',function(date) {
  return moment(date).fromNow();
});
