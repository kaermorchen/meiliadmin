import EmberRouter from '@ember/routing/router';
import config from 'meilisearch-admin/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('admin', function () {
    this.route('indexes', function () {
      this.route('item', { path: '/:index_id' }, function () {
        this.route('settings');
        this.route('data');
      });
    });
  });
});
