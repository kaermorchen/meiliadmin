import EmberRouter from '@ember/routing/router';
import config from 'meilisearch-admin/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('indexes', function() {
    this.route('element', { path: '/:index_id' });
  });
});
