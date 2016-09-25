import { Injectable } from '@angular/core';
import { MeteorReactive } from 'angular2-meteor';
import { Meteor } from 'meteor/meteor';
import { Observable, Observer } from 'rxjs/Rx';

import { Demos } from '../../../collections/demos';

@Injectable()
export class DemoService extends MeteorReactive {

  constructor() {
    super();
  }

  /**
   * Retrieve all available `DemoItems`.
   * REVIEW: Test and replace with code below?
   * ```
   * this.subscribe('allDemos');
   * return Demos.find({}).zone();
   * ```
   * @returns {Observable<DemoItem[]>} - All `DemoItems`.
   */
  get allDemos$(): Observable<DemoItem[]> {
    return Observable.create((observer: Observer<DemoItem[]>) => {
      let allDemosSub: Meteor.SubscriptionHandle = this.subscribe('allDemos', {
        onReady: () => { observer.next(Demos.find({}, { sort: { cost: -1 } })); },
        onStop: (error: Meteor.Error) => { if (error) { observer.error(error); } }
      });
      return () => { if (allDemosSub && allDemosSub.ready()) { allDemosSub.stop(); } };
    });
  }

  /**
   * Delete item from `Demos` collection which matching item ID.
   * @param {string} itemID - Item ID.
   */
  deleteItem(itemID: string): void {
    this.call('deleteDemoItem', itemID);
  }

  /**
   * Get demo item by `id`.
   * REVIEW: Test and replace with code below?
   * ```
   * this.subscribe('demoItem', id);
   * return Demos.find({ _id: id }).map((item: DemoItem) => { return item[0]; });
   * ```
   * @param {string} id - Demo item's ID.
   * @returns {Observable<DemoItem>} - `DemoItem` Observable.
   */
  getDemoItem$(id: string): Observable<DemoItem> {
    return Observable.create((observer: Observer<DemoItem>) => {
      let demoItemSub: Meteor.SubscriptionHandle = this.subscribe('demoItem', id, {
        onReady: () => { observer.next(Demos.findOne({ _id: id })); },
        onStop: (error: Meteor.Error) => { if (error) { observer.error(error); } }
      });
      return () => { if (demoItemSub && demoItemSub.ready()) { demoItemSub.stop(); } };
    });
  }

  /**
   * Upsert demo item.
   * @param {DemoItem} item - Demo item.
   * @param {string} itemID? - Item ID.
   */
  upsertItem(item: DemoItem, itemID?: string): void {
    this.call('upsertDemoItem', item, itemID);
  }
}
