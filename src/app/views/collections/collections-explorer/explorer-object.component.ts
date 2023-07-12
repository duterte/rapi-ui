import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ExplorerObjectType } from '@models/collections.model';

@Component({
  selector: 'div[app-explorer-object]',
  template: `
    <div class="inline-block border-l relative bottom-0 border-none w-[8px] h-full"></div>
    <div *appObjectIndent="objectIndent" class="inline-block relative bottom-0 border-l border-slate-400 w-[8px] h-full"></div>
    <div class="inline-block w-fit relative bottom-[8px] right-[4px]">
      <app-bi-chevron-right *ngIf="!collapse && hasChildren" class="inline-block text-[10px] relative bottom-0.5"></app-bi-chevron-right>
      <app-bi-chevron-down *ngIf="collapse && hasChildren" class="inline-block text-[10px] relative bottom-0.5"></app-bi-chevron-down>
      <app-bi-folder-fill *ngIf="objectType === 'folder'" class="inline-block text-[14px] text-yellow-500"></app-bi-folder-fill>
      <app-bi-globe *ngIf="objectType === 'file'" class="inline-block text-[14px] text-blue-500"></app-bi-globe>
      <div class="inline-block font-normal text-[16px] ml-1">{{ label }}</div>
    </div>
  `
})
export class ExplorerObjectComponent {
  @Input() public id: string | number = '';
  @Input() public parentId?: string | number;
  @Input() public label: string = '';
  @Input() public collapse: boolean = false;
  @Input() public hasChildren: boolean = false;
  @Input() public objectType: ExplorerObjectType = 'file';
  @Input() public objectIndent: number = 0;
}
