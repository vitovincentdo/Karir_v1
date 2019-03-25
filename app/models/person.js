import DS from 'ember-data';

export default DS.Model.extend({
    lastname: DS.attr('string'),
    firstname: DS.attr('string'),
    address: DS.attr('string'),
    city: DS.attr('string')
});
