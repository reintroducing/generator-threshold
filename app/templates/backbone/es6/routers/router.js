import $ from 'jquery';
import Backbone from 'backbone';
import HomeView from '../views/home/home';

let $wrapper = $('.wrapper'),
    currentView;

export default class Router extends Backbone.Router {
    initialize() {
        Backbone.history.start();
    }

    home() {
        if (currentView) { currentView.dispose(); }
        currentView = new HomeView();

        $wrapper.append(currentView.render().el);
    }
}

Router.prototype.routes = {
    '': 'home',
    home: 'home'
};
