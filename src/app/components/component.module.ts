import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonPrimaryComponent } from './buttons/button-primary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPrimaryComponent } from './selects/select-primary.component';
import { InputTextComponent } from './inputs/input-text.component';
import { TableComponent } from './table/table.component';
import { HorizontalTabComponent } from './tabs/horizontal-tab.component';
import { InputCheckboxComponent } from './inputs/input-checkbox.component';
import { BiFolderComponent } from './icons/bi-folder.component';
import { BiGlobeComponent } from './icons/bi-globe.component';
import { BiChevronRightComponent } from './icons/bi-chevron-right.component';
import { BiChevronDownComponent } from './icons/bi-chevron-down.component';
import { BiFolderFillComponent } from './icons/bi-folder-fill.component';
import { BiGripVerticalComponent } from './icons/bi-grip-vertical.component';


@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    SelectPrimaryComponent,
    InputTextComponent,
    TableComponent,
    HorizontalTabComponent,
    InputCheckboxComponent,
    BiFolderComponent,
    BiGlobeComponent,
    BiChevronRightComponent,
    BiChevronDownComponent,
    BiFolderFillComponent,
    BiGripVerticalComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonPrimaryComponent,
    SelectPrimaryComponent,
    InputTextComponent,
    TableComponent,
    HorizontalTabComponent,
    InputCheckboxComponent,
    BiFolderComponent,
    BiGlobeComponent,
    BiChevronRightComponent,
    BiChevronDownComponent,
    BiFolderFillComponent,
    BiGripVerticalComponent,
  ],
})
export class ComponentModule {}
