var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.route("myself");
    this.route("competences");
    this.route("projects");
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
