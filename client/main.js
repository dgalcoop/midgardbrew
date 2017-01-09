import { Template } from 'meteor/templating';


import './main.html';
import '../imports/ui/home.js';
import '../imports/ui/landing.js';
import '../imports/ui/about.js';
import '../imports/ui/contact.js';
import '../imports/ui/menu.js';


Router.route('/', {
	name: 'landingPage',
	template: 'landingPage'
});
Router.route('/about', {
	name: 'about',
	template: 'about'
});
Router.route('/contact', {
	name: 'contact',
	template: 'contact'
});
Router.route('/menu', {
	name: 'menu',
	template: 'menu'
});

Router.configure({
   layoutTemplate: 'home'
});