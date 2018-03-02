import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('root', { path: '/' });
  this.route('subdirectory');
  this.route('options');
  this.route('extension');
});

export default Router;
