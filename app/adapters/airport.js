import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://crossorigin.me/https://embed-staging.nezasa.com',
    namespace: 'api1',   
});
