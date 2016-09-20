import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import template from './demo-upsert-item.component.html';
import style from './demo-upsert-item.component.scss';
import { DemoService } from '../shared/demo.service';

@Component({
  selector: 'am-demo-upsert-item',
  styles: [style],
  template
})
export class DemoUpsertItemComponent implements OnInit {
  @Input() demoItem: DemoItem;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();
  private demoItemForm: FormGroup;

  constructor(private demoService: DemoService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initDemoItemForm();
  }

  private initDemoItemForm(): void {
    if (this.demoItem) {
      this.demoItemForm = this.formBuilder.group({
        description: [this.demoItem.description, Validators.required],
        cost: [this.demoItem.cost, Validators.required],
        detail: [this.demoItem.detail, Validators.required]
      });
    } else {
      this.demoItemForm = this.formBuilder.group({
        description: [undefined, Validators.required],
        cost: [0, Validators.required],
        detail: [undefined, Validators.required]
      });
    }
  }

  private onCancel(): void {
    this.cancel.emit(false);
  }

  private onSubmit(formValue: DemoItem): void {
    if (this.demoItem) {
      this.demoService.upsertItem(formValue, this.demoItem._id);
    } else {
      this.demoService.upsertItem(formValue);
    }
    this.submit.emit(true);
  }
}
