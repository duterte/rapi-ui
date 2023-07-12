import { Component, EventEmitter, Output } from '@angular/core';
import { CollectionsService } from '@services/collections.service';

@Component({
  selector: 'app-button-primary',
  template: `
    <button
      tabindex="1"
      class="font-medium py-1 px-3 rounded-r-md outline-0 cursor-pointer"
      (click)="clickEvent()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonPrimaryComponent {

  @Output() private click: EventEmitter<null> = new EventEmitter<null>();

  public clickEvent() {
    this.click.emit();
  }
}
