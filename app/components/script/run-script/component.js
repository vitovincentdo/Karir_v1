import Component from '@ember/component';
import { get, isEmpty } from 'karir/utils/short';

export default Component.extend({

  didInsertElement() {
    this._super(...arguments);
    this.$().remove();

    let enter = get(this, 'enter');
    if (!isEmpty(enter)) enter();
  },

  willDestroyElement() {
    this._super(...arguments);

    let leave = get(this, 'leave');
    if (!isEmpty(leave)) leave();
  }

}).reopenClass({
  positionalParams: ['enter', 'leave']
});
