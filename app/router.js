import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('routes', { path: '/' }, function() {
    this.route('about');
    this.route('admin', function() {
      this.route('article');
      this.route('listArticle');
      this.route('editArticle', {path: '/:article_id/edit'});

      this.route('index', function() {});
    });
  });
});

export default Router;
