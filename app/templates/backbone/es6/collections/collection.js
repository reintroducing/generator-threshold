import Backbone from 'backbone';
import TestModel from '../models/model';

export default class Collection extends Backbone.Collection {
    get model() { return TestModel; }
}
