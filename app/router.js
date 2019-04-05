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

      this.route('thoughts', function() {
        this.route('thoughts');
        this.route('list-thoughts');
      });
      this.route('jobs', function() {
        this.route('job-input');
        this.route('list-jobs');
        this.route('editJob', {path: '/:job_id/edit'});
      });
    });
  });
});

export default Router;
