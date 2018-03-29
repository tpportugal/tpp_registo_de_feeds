import Ember from 'ember';
import moment from 'moment';

export default Ember.Handlebars.registerBoundHelper('format-date',function(date) {
  if (moment(date).isValid()){
    return moment(date).format('LL') + " (" + moment(date).fromNow() + ")";
  } else {
    return '--';
  }
});
