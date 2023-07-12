import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollectionsTab } from '@models/collections.model';

@Component({
  selector: 'app-horizontal-tab',
  template: `
    <nav class="flex gap-3 font-medium text-sm text-slate-500">
      <div
        *ngFor="let tab of tabs; index as i; trackBy: trackByFn"
        class="inline-block cursor-pointer"
      >
        <button
          (click)="clickEvent(tab)"
          [ngClass]="[
            'outline-none',
            'rounded-md',
            'py-[5px]',
            'px-[5px]',
            'focus:bg-violet-500',
            'focus:text-white',
            'hover:bg-violet-500',
            'hover:text-white',
            'transition-colors',
            'ease-in',
            'duration-300'
          ]"
        >
          {{ tab }}
        </button>
      </div>
    </nav>
  `,
})
export class HorizontalTabComponent {
  @Input() public tabs: string[] = [];
  @Output() private btnClick: EventEmitter<string> = new EventEmitter<string>();

  public trackByFn(index: number, tab: string) {
    return tab;
  }

  public clickEvent(tab: string) {
    this.btnClick.emit(tab);
  }
}
