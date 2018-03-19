import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { airports: payload };

        payload.airports.forEach((airport) => {
            airport.name = airport.airport.shortName.texts.en;
            airport.city = airport.airport.city.texts.en;
            airport.country = airport.airport.country;
            airport.coordinateLat = airport.airport.coordinate.lat;
            airport.coordinateLng = airport.airport.coordinate.lng;

            delete airport.airport.city.texts.en;
            delete airport.airport.shortName.texts.en;
            delete airport.airport.country;
            delete airport.airport.coordinate.lat;
            delete airport.airport.coordinate.lng;
        });

        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});






