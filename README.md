myself
======

Live View: [scenecs.verbunden.net](http://scenecs.verbunden.net)

Browser Support: IE 9+, Safari, Chrome, Opera

This is small work sample with emberJS. This project based on [ember-app-kit](https://github.com/stefanpenner/ember-app-kit).

This page follows responsive web design techniques and reacts on different screen sizes.


#### Next follows a short list of some interesting files:

**app/router.js:**   
The router defines routes for app.

**app/routes/index.js:**   
This is the customized index route. When this route is called, the layout toggle property is set.

**app/views/application.js:**   
This view extends application view with some css classes and **defines layout** for the whole app. The application layout is usually rendered only once. With the help of variable binding is it possible to toggle between two application layouts.

**app/templates/layouts/standard.hbs:**   
This template is used for all routes. The layout loads the **partial** "partials/header" (app/templates/partials/header.hbs) and a **component** "navbar-main-menu" (app/templates/components/navbar-main-menu.hbs).

**app/templates/index.hbs:**   
This file contains the content of the startpage. This page shows an image, which can hovered, clicked and touched. After a hover, click or touch event, a "cycle navigation" is displayed. The showing and hiding is css-animated. 

**app/templates/competences.hbs:**   
This template uses a very simple model (defines in the corresponding route: [app/routes/competences.js]).