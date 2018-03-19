import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
    queryParams: {
        query: {
            refreshModel: true
        }
    },
    
    model(params) {
        params.query = params.query || '';
        return this.get('store').query('airport', params);
    },

    setupController(controller, model) {
        set(controller, 'airports', model);
    }
});
