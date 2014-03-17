myself
======

This is small work sample with emberJS. This project based on [ember-app-kit](https://github.com/stefanpenner/ember-app-kit).

#### Some vendors are not part of ember-app-kit:

* Bootstrap [getbootstrap.com](http://getbootstrap.com)
* CSS3 PIE [css3pie.com](http://css3pie.com)

#### Next a short list of my code:

**app/router.js: **   
defines routes for app

**app/views/application.js: **   
extends application view with some css classes and **defines layout** for the whole app. The application layout is usually rendered only once. With the help of variable binding is it possible to toggle between two application layouts.

**app/templates/layouts/standard.hbs: **   
This template is used for all routes, except for the startpage. The layout loads the **partial** "partials/header" (app/templates/partials/header.hbs) and a **component** "navbar-main-menu" (app/templates/components/navbar-main-menu.hbs).

