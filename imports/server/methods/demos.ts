import { check } from 'meteor/check';

import { Demos } from '../../collections';

Meteor.methods({

  /** Insert default demo items to `Demos` if collection is empty. */
  dbInit: function(): void {
    if (Demos.collection.find().count() === 0) {

      let defaultDemos: DemoItem[] = [
        {
          description: 'Foo',
          cost: 123.58 ,
          detail: 'This is Foo. ',
          createdAt: new Date()
        }, {
          description: 'Bar',
          cost: 456,
          detail: 'This is Bar. ',
          createdAt: new Date()
        }
      ];

      for (let item of defaultDemos) {
        Demos.collection.insert(item);
      }

      console.log(`[dbInit] Inserted ${Demos.collection.find().count()} documents to "Demos". `);
    } else {
      console.log(`[dbInit] ${Demos.collection.find().count()} documents already exist in "Demos". `);
    }
  },

  /**
   * Delete item from `Demos` collection which matching item ID.
   * @param {string} itemID - Item ID.
   */
  deleteDemoItem: function(itemID: string): void {
    check(itemID, String);

    Demos.collection.remove({ _id: itemID });
  },

  /**
   * Upsert demo item.
   * @param {DemoItem} item - Demo item.
   * @param {string} itemID? - Item ID.
   */
  upsertDemoItem: function(item: DemoItem, itemID?: string) {
    check(item, Object);

    if (typeof itemID === 'string') {
      Demos.collection.update(itemID, {
        $set: {
          description: item.description,
          cost: item.cost,
          detail: item.detail,
          lastUpdatedAt: new Date()
        }
      }, (error) => { if (error) { throw new Meteor.Error(error); } });
    } else {
      Demos.insert({
        description: item.description,
        cost: item.cost,
        detail: item.detail,
        createdAt: new Date()
      }, (error) => { if (error) { throw new Meteor.Error(error); } });
    }
  }
});
