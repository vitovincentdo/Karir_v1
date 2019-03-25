import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    date: DS.attr('string'),
    article: DS.attr('string'),
    name: DS.attr('string'),
    thougth: DS.attr('string')
});
