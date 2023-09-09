import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonPrimaryComponent } from './buttons/button-primary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BiFolderPlusComponent } from './icons/bi-folder-plus.component';
import { BiFilePlusComponent } from './icons/bi-file-plus.component';
import { BiFileEarmarkPlusComponent } from './icons/bi-file-earmark-plus.component';
import { BiArrowClockwiseComponent } from './icons/bi-arrow-clockwise.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';


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
    BiFolderPlusComponent,
    BiFilePlusComponent,
    BiFileEarmarkPlusComponent,
    BiArrowClockwiseComponent,
    CodeEditorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, CodemirrorModule, FormsModule],
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
    BiFolderPlusComponent,
    BiFilePlusComponent,
    BiFileEarmarkPlusComponent,
    BiArrowClockwiseComponent,
    CodeEditorComponent,
  ],
})
export class ComponentModule {}
