import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | routes/admin/jobs/list-jobs', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:routes/admin/jobs/list-jobs');
    assert.ok(controller);
  });
});
