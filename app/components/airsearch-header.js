import Component from '@ember/component';

export default Component.extend({
    keyDown: function (event){
        if(event.keyCode === 13) {
            let btn = document.getElementById('goBtn');
            if(btn != null) {
                btn.click();
                return false;
            }           
        }
    }
});
