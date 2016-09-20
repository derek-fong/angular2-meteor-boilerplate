import '../imports/collections/index';
import '../imports/server/methods';
import '../imports/server/publications';

Meteor.startup(function(): void {
  Meteor.call('dbInit');
});
