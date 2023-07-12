import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '@components/component.module';

import { CollectionsComponent } from './collections.component';

/**
 * main containers
 */

import { CollectionsPanelComponent } from './collections-panel/collections-panel.component';
import { CollectionsExplorerComponent } from './collections-explorer/collections-explorer.component';
import { CollectionsViewportComponent } from './collections-viewport/collections-viewport.component';
import { ExplorerObjectComponent } from './collections-explorer/explorer-object.component';
import { ObjectIndentDirective } from './collections-explorer/object-indent.directive';


@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionsPanelComponent,
    CollectionsExplorerComponent,
    CollectionsViewportComponent,
    ExplorerObjectComponent,
    ObjectIndentDirective,
  ],
  imports: [CommonModule, ComponentModule],
  exports: [CollectionsComponent],
})
export class CollectionsModule {}
