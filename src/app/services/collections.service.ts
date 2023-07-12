import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CollectionsTab, RequestMethod, ExplorerProperty } from '@models/collections.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  private requestUrl: string = '';
  private requestMethod: RequestMethod = '';

  public $activeTab: Subject<CollectionsTab> = new Subject<CollectionsTab>();

  public collection: ExplorerProperty = {
    iPlanet: {
      id: '1',
      name: 'iPlanet',
      type: 'folder'
    }
  };

  constructor(private http: HttpClient) {}

  public setRequestUrl(url: string) {
    this.requestUrl = url;
  }

  public getRequestUrl() {
    return this.requestUrl;
  }

  public setRequestMethod(method: RequestMethod) {
    this.requestMethod = method;
  }

  public getRequestMethod() {
    return this.requestMethod;
  }

  public activateTab(tab: string) {
    this.$activeTab.next(tab as CollectionsTab);
  }

  public $httpRequest(method: RequestMethod, url: string): Observable<any> {
    return this.http.request(method, url);
  }
}
