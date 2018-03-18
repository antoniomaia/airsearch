import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://crossorigin.me/https://embed-staging.nezasa.com/api1',
    //namespace: 'api1',
    pathForType() {
     return 'airports?query=';
    }
});
