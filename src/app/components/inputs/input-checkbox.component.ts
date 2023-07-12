import { Component } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  template: `
    <input
      type="checkbox"
      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
    />
  `,
})
export class InputCheckboxComponent {}
