import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    city: DS.attr(),
    country: DS.attr(),
    coordinateLat: DS.attr(),
    coordinateLng: DS.attr()
});
