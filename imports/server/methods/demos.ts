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
        Demos.insert(item);
      }

      console.log(`[dbInit] Inserted ${Demos.collection.find().count()} documents to "Demos". `);
    } else {
      console.log(`[dbInit] ${Demos.collection.find().count()} documents already exist in "Demos". `);
    }
  }
});
