import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestMethod } from '@models/collections.model';

@Component({
  selector: 'app-select-primary',
  template: `
    <select
      class="bg-inherit text-white font-medium py-1 rounded-l-md outline-0 cursor-pointer"
    >
      <option
        tabindex="1"
        class="text-black cursor-pointer"
        *ngFor="let option of options; index as i; trackBy: trackByFn"
        [value]="option"
        [attr.selected]="i === 0 ? 'selected' : null"
      >
        {{ option }}
      </option>
    </select>
  `,
})
export class SelectPrimaryComponent implements OnInit {
  @Input() public options: RequestMethod[] = [];
  @Output() private valueChange: EventEmitter<RequestMethod> = new EventEmitter<RequestMethod>();

  select: FormControl;

  constructor() {
    this.select = new FormControl();
  }

  ngOnInit(): void {
    this.select.valueChanges.subscribe({
      next: (value) => {
        this.valueChange.emit(value);
      }
    })
  }

  public trackByFn(index: number, option: RequestMethod) {
    return option;
  }

}
