export default Ember.View.extend({
    classNames: ["container-fluid"],
    layoutName: "layouts/standard",
    classNameBindings: ["controller.isStartPage:inverse-layout"],
});