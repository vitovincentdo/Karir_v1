import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    specialization: DS.attr('string'),
    location: DS.attr('string'),
    description: DS.attr('string'),
    qualification: DS.attr('string'),
    thumbJob: DS.attr('string'),
    featured: DS.attr('boolean'),
    url: DS.attr('string'),
});
