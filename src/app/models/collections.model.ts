
export type RequestMethod = '' | 'GET' | 'POST' | 'PUT' | 'DELETE'
export type CollectionsTab = '' | 'Request' | 'Response' | 'Parameters' | 'Headers' | 'Body';
export type ExplorerObjectType = 'folder' | 'file' | 'root'
export type ObjectStatus = 'idle' | 'active';

export interface SubProperty {
  id: string | number;
  type: ExplorerObjectType;
  name: string;
  items?: ExplorerProperty[];
}

export interface ExplorerProperty {
  [key: string]: SubProperty;
}

export interface CollapseProperty {
  id: string | number;
  parentId?: string | number;
  collapse: boolean;
}

export interface ExplorerObject {
  id: string | number;
  parentId?: string | number;
  parentType?: ExplorerObjectType;
  label: string;
  collapse: boolean;
  hide: boolean;
  status: ObjectStatus;
  selected: boolean
  hasChildren: boolean;
  objectType: ExplorerObjectType;
  objectIndent: number;
}

export enum InheritanceLevel {
  PARENT,
  CHILD,
  GRAND_CHILDREN,
  GREAT_GRAND_CHILDREN,
  NTH_GENERATION
}
