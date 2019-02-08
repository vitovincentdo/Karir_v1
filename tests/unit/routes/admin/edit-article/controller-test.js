import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | routes/admin/edit-article', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:routes/admin/edit-article');
    assert.ok(controller);
  });
});
