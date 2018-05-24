import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('ssp-endpoint',function(param, text) {
  var entity = '';
  var baseURL = ENV.datastoreHost+'/v1/schedule_stop_pairs?';

  if (param.charAt(0) === 'o'){
    entity = 'operator_onestop_id=';
  } else if (param.charAt(0) === 'f'){
    entity = 'feed_onestop_id=';
  }

  if (param.charAt(1) === '-'){
    return new Ember.Handlebars.SafeString('<a href ="' + baseURL + entity + param +'" target = "_blank">JSON da API do Banco de Dados TPP</a>');
  } else if (param.charAt(0) === '/') {
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + param + ' target = "_blank">' + text + '</a>');
  } else {
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + param + ' target = "_blank">' + param + '</a>');
  }
});

