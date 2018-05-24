import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('geojson-endpoint', function (param, attr) {
  var entity = '';
  var baseURL = ENV.datastoreHost + '/v1/';

  if (param.charAt(0) === 'o') {
    entity = 'operators/';
  } else if (param.charAt(0) === 'f') {
    entity = 'feeds/';
  }

  if (attr === "routes") {
    return new Ember.Handlebars.SafeString('<a href ="' + baseURL + 'routes.geojson?operated_by=' + param + '&per_page=false" target = "_blank">GeoJSON da API do Banco de Dados TPP</a>');
  } else if (attr === "stops") {
    return new Ember.Handlebars.SafeString('<a href ="' + baseURL + 'stops.geojson?served_by=' + param + '&per_page=false" target = "_blank">GeoJSON da API do Banco de Dados TPP</a>');
  } else {
    if (param.charAt(1) === '-') {
      return new Ember.Handlebars.SafeString('<a href ="' + baseURL + entity + param + '.geojson?per_page=false" target = "_blank">GeoJSON da API do Banco de Dados TPP</a>');
    } else if (param.charAt(0) === '/') {
      return new Ember.Handlebars.SafeString('<a href ="' + baseURL + param + '.geojson?per_page=false" target = "_blank">GeoJSON da API do Banco de Dados TPP</a>');
    } else {
      return new Ember.Handlebars.SafeString('<a href ="' + baseURL + param + '.geojson?per_page=false" target = "_blank">GeoJSON da API do Banco de Dados TPP</a>');
    }
  }
});
