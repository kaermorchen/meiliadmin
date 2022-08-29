import EmberRouter from '@ember/routing/router';
import config from 'meiliadmin/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('admin', function () {
    this.route('indexes', function () {
      this.route('item', { path: '/:uid' }, function () {
        this.route('settings');
        this.route('data');
        this.route('info');
      });
    });
    this.route('keys', function () {
      this.route('key');
    });
  });
  this.route('login');
});
