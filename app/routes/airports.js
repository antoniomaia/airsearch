import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('airport');
    },

    setupController(controller, model) {
        Ember.set(controller, 'airports', model);
    }
});
