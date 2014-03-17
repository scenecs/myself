export default Ember.Component.extend({
    showNavigationCycle: false,
    
    eventHandler: null,
    
    mouseEnter: function() {
        window.clearTimeout(this.get("eventHandler"));
        this.set("showNavigationCycle", true);
    },
    
    mouseLeave: function() {
        var self = this;

        this.set("eventHandler", window.setTimeout(function(){
            self.set("showNavigationCycle", false);
        }, 300));
    },
    
    touchEnd: function() {
        this.toggleProperty("showNavigationCycle");
    }
});