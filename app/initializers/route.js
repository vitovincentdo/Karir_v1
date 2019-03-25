import Route from '@ember/routing/route';
import Controller from '@ember/controller';
import LinkComponent from '@ember/routing/link-component';
import { ROOT } from 'karir/utils/properties';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');

  Route.reopen({
    // insert code applied to all routes

    transitionTo(route, ...args) {
      this._super(`${ROOT}.${route}`, ...args);
    },

    render(route, options, ...args) {
      if(arguments.length === 0) this._super();
      else {
        route = `${ROOT}.${route}`;
        switch(options.into) {
          case undefined: break;
          case 'application': break;
          default:
            options.into = `${ROOT}.${options.into}`; break;
        }

        this._super(route, options, ...args);
      }
    }

  });

  LinkComponent.reopen({

    attributeBindings: ['data-toggle'],

    didReceiveAttrs() {
      const params = this.get('params');
      params[0] = `${ROOT}.${params[0]}`;

      this._super(...arguments);
    }

  });

  Controller.reopen({
    // insert code applied to all controllers

    transitionToRoute(route, ...args) {
      this._super(`${ROOT}.${route}`, ...args);
    }
  })
}

export default {
  initialize,
  name: 'route',
  // before: 'store'
};
