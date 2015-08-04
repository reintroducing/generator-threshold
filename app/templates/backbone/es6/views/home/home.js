import template from '../../../templates/home/home.html';

export default class HomeView extends Backbone.View {
    get className() { return 'home'; }

    initialize() {

    }

    render() {
        this.$el.html(template());

        return this;
    }
}
