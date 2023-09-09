import { Component, OnInit } from '@angular/core';
import { ExplorerObject, InheritanceLevel } from '@models/collections.model';
import { ExplorerService } from '@services/explorer.service';

@Component({
  selector: 'app-collections-explorer',
  templateUrl: './collections-explorer.component.html',
})
export class CollectionsExplorerComponent implements OnInit {
  protected explorerObjects: ExplorerObject[] = [];

  constructor(private explorer: ExplorerService) {}

  ngOnInit(): void {
    this.explorer.build();
    this.explorerObjects = this.explorer.explorerObjects;
  }

  private findChildren(parentObject: ExplorerObject) {
    return this.explorerObjects
    .map((currentObject, index) => currentObject.parentId === parentObject.id ? index : -1)
    .filter(v => v !== -1);
  }

  private inheritProperty(parentObject: ExplorerObject) {
    if(parentObject.hasChildren) {
      const children = this.findChildren(parentObject);
      for (const index of children) {
        const currentObject = this.explorerObjects[index];
        currentObject.hide = !parentObject.collapse || parentObject.hide;
        this.inheritProperty(currentObject);
      }
    }
  }

  private childObjects(parentObject: ExplorerObject): void {
    this.explorerObjects.forEach((currentObject: ExplorerObject) => {
      if (currentObject.parentId === parentObject.id) {
        currentObject.hide = !parentObject.collapse;
        this.inheritProperty(currentObject);
      }
    });
  }

  private toggleCollapse(currentObject: ExplorerObject): void {
    currentObject.collapse = !currentObject.collapse;
    this.childObjects(currentObject);
  }

  private setStatus(currentObject: ExplorerObject) {

    this.explorerObjects.forEach((explorerObject: ExplorerObject) => {
      if(explorerObject.id === currentObject.id) explorerObject.status = 'active';
      else explorerObject.status = 'idle';
    });
  }
  protected clickEvent(currentObject: ExplorerObject): void {
    this.toggleCollapse(currentObject);
    this.setStatus(currentObject)

  }

  protected trackByFn(index: number, explorerObject: ExplorerObject) {
    return explorerObject.id;
  }
}
