import { Injectable } from '@angular/core';
import { CollapseProperty, ExplorerObject, ExplorerObjectType, ExplorerProperty } from '@models/collections.model';
import { Subject } from 'rxjs';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ExplorerService {
  private filesCreated: number = 0;
  private folderCreated: number = 0;
  private _explorerObjects: ExplorerObject[]= [];
  public get explorerObjects() {
    return this._explorerObjects;
  }

  private explorer: ExplorerProperty = {
    explorer: {
      id: 1,
      type: 'root',
      name: 'explorer',
      items: [
        {
          IPlanet: {
            id: 1,
            type: 'folder',
            name: 'iPlanentUI',
            items: [
              {
                'FDH & FDT': {
                  id: 1,
                  type: 'folder',
                  name: 'FDH & FDT',
                  items: [
                    {
                      FDH: {
                        id: 1,
                        type: 'file',
                        name: 'FDH.http',
                        items: [
                          {
                            '55665': {
                              id: 1,
                              type: 'file',
                              name: '55665.http',
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                OutCable: {
                  id: 1,
                  type: 'file',
                  name: 'OutCable.http',
                },
              },
              {
                InCable: {
                  id: 1,
                  type: 'file',
                  name: 'InCable.http',
                },
              },
            ],
          },
        },
      ],
    },
  };

  constructor() {}



  private createFolder(explorerObject: ExplorerObject): void {
    this._explorerObjects.push(explorerObject)
    this.folderCreated++;
  }

  private createFile(explorerObject: ExplorerObject): void {
    this._explorerObjects.push(explorerObject)
    this.filesCreated++
  }

  private recursiveLoop(
    explorer: ExplorerProperty,
    indent: number = 0,
    parentId?: string | number,
    parentType?: ExplorerObjectType
    ): ExplorerService {
    for (const property in explorer) {
      const { name, type, items } = explorer[property];
      const hasChildren = Boolean(items?.length);
      const id = uuid();
      const explorerObject: ExplorerObject = {
        id: id,
        parentId: parentId,
        parentType: parentType,
        collapse: false,
        hide: Boolean(parentId) && parentType !== 'root',
        hasChildren: hasChildren,
        label: name,
        objectIndent: indent,
        objectType: type
      };

      switch (type) {
        case 'folder':
          this.createFolder(explorerObject);
          break;
        case 'file':
          this.createFile(explorerObject);
          break;
        default:
          break;
      }

      if(hasChildren && type !== 'root') indent += 1;

      if (items && items.length > 0) {
        for (const item of items) {
          this.recursiveLoop(item, indent, id, type);
        }
      }
    }
    return this;
  }

  private stats() {
    console.log(`There are ${this.filesCreated} files created.`)
    console.log(`There are ${this.folderCreated} folder created.`)
  }

  public build(): void {
    this.recursiveLoop(this.explorer)
      // .stats();
  }
}
