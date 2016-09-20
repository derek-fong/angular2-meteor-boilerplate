import { Injectable } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Observable, Observer } from 'rxjs/Rx';

import { Demos } from '../../../collections/demos';

@Injectable()
export class DemoService {
  /**
   * Retrieve all available `DemoItems`.
   * REVIEW: Can be replaced by code below?
   * ```
   * Meteor.subscribe('allDemos$');
   * return Demos.find({}).zone();
   * ```
   * @returns {Observable<DemoItem[]>} - All `DemoItems`.
   */
  get allDemos$(): Observable<DemoItem[]> {
    return Observable.create((observer: Observer<DemoItem[]>) => {
      let allDemosSub: Meteor.SubscriptionHandle = Meteor.subscribe('allDemos', {
        onReady: () => { observer.next(Demos.find({})); },
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
    Meteor.call('deleteDemoItem', itemID);
  }

  /**
   * Get demo item by `id`.
   * @param {string} id - Demo item's ID.
   * @returns {Observable<DemoItem>} - `DemoItem` Observable.
   */
  getDemoItem$(id: string): Observable<DemoItem> {
    return Observable.create((observer: Observer<DemoItem>) => {
      let demoItemSub: Meteor.SubscriptionHandle = Meteor.subscribe('demoItem', id, {
        onReady: () => { observer.next(Demos.findOne({ _id: id })); },
        onStop: (error: Meteor.Error) => { if (error) { observer.error(error); } }
      });
      return () => { if (demoItemSub && demoItemSub.ready()) { demoItemSub.stop(); } };
    });
  }
}
