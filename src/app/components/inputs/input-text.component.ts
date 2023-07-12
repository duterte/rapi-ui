import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CollectionsService } from '@services/collections.service';

@Component({
  selector: 'app-input-text',
  template: `
    <input
      tabindex="1"
      type="text"
      class="w-full py-1 text-black px-4 font-thin outline-0"
      [formControl]="text"
    />
  `,
})
export class InputTextComponent {
  public text: FormControl;
  @Output() private valueChange: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {
    this.text = new FormControl();
  }

  ngOnInit(): void {
    this.text.valueChanges.subscribe({
      next: (value: string) => {
        this.valueChange.emit(value);
      },
    });
  }
}
