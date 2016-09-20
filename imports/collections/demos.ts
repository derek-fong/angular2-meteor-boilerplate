import { MongoObservable } from 'meteor-rxjs';

export const Demos: any = new MongoObservable.Collection<DemoItem>('demos');

Demos.collection.attachSchema({
  description: {
    type: String,
    label: 'Description',
    min: 1
  },
  cost: {
    type: Number,
    label: 'Cost',
    decimal: true,
    min: 0
  },
  detail: {
    type: String,
    label: 'Detail',
    min: 1
  },
  createdAt: {
    type: Date,
    label: 'Created At'
  }
});
