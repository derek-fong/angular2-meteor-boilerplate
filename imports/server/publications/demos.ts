import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import { Demos } from '../../collections';

/** Publish all `DemoItems`. */
Meteor.publish('allDemos', function(): Mongo.Cursor<DemoItem> {
  return Demos.collection.find({}, { fields: { description: 1, cost: 1 } });
});

/** Publish `DemoItem` by ID. */
Meteor.publish('demoItem', function(itemID: string): Mongo.Cursor<DemoItem> {
  check(itemID, String);

  return Demos.collection.find({ _id: itemID });
});
