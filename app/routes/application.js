export default Ember.Route.extend({
    actions: {
        setIsStartPage: function(value) {
            this.set("controller.isStartPage", value);
        },
        openModal: function(modalName, model){
            this.controllerFor(modalName).set('model', model);
            return this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        },
        closeModal: function(){
            return this.disconnectOutlet({
                outlet: "modal",
                parentView: "application"
            });
        }
    }
});