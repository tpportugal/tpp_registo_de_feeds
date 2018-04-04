/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'feed-registry',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    datastoreHost: 'https://tpp.pt',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    moment: {
      includeLocales: ['pt']
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'self' https://tpp.pt",
      'connect-src': "'self' https://tpp.pt",
      'img-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'media-src': "'self'",
      'script-src': "'self'",
      'font-src': "'self' https://fonts.gstatic.com https://tpp.pt"
    },

  };

  if (environment === 'development') {
    ENV.datastoreHost = 'https://tppgeo.cf';
    ENV.apiProxyKey= 'tpp-_ngAKUs';
  }

  if (environment === 'local') {
    ENV.datastoreHost = 'http://localhost:3000';
    ENV.contentSecurityPolicy['connect-src'] = "'self' http://localhost:3000"
  }

  if (environment === 'ci') {
    ENV.allowEditingMode = true;
    ENV.locationType = 'hash'; // because Precog can't handle HistoryLocation-style URLs
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.datastoreHost = 'https://tppgeo.cf';
    ENV.baseURL = '/feed-registry';
    ENV.apiProxyKey= 'tpp-YFO6jk8';
  }

  if (environment === 'production') {
    ENV.datastoreHost = 'https://tpp.pt';
    ENV.baseURL = '/feed-registry';
    ENV.apiProxyKey= 'tpp-_ngAKUs';
  }

  return ENV;
};
