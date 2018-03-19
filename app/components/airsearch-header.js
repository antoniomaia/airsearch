import Component from '@ember/component';

export default Component.extend({
    keyDown: function (event){
        //TODO: trigger correct action on key enter 
        if(event.keyCode === 13) {
            return false;
        }
    }
});
