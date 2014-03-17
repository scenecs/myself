export default Ember.Route.extend({
    model: function() {
        return ['red', 'yellow', 'blue'];
    },
    activate: function() {
        this.send("setIsStartPage", true);
    },
    deactivate: function() {
        this.send("setIsStartPage", false);
    }
});
