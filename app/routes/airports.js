import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
    model() {
        return this.store.findAll('airport');
    },

    setupController(controller, model) {
        set(controller, 'airports', model);
    }
});
