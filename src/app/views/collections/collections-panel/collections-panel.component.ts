import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CollectionsTab, RequestMethod } from '@models/collections.model';
import { CollectionsService } from '@services/collections.service';

@Component({
  selector: 'app-collections-panel',
  templateUrl: './collections-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsPanelComponent {
  options: RequestMethod[] = ['GET', 'POST', 'PUT', 'DELETE'];
  tabs: CollectionsTab[] = ['Parameters', 'Headers', 'Body'];

  constructor(private collectionService: CollectionsService) {}

  public changeTabEvent(tab: string): void {
    this.collectionService.activateTab(tab);
  }

  public selectMethodEvent(event: RequestMethod): void {
    this.collectionService.setRequestMethod(event);
  }

  public sendRequestEvent(): void {
    const method: RequestMethod = this.collectionService.getRequestMethod();
    const url: string = this.collectionService.getRequestUrl();

    if (!method) {
      // TODO: handle scenario if method is not truthy
      console.log('method is empty');
    } else if (!url) {
      // TODO: handle scenario if url is not truthy
      console.log('url is empty');
    } else {
      this.collectionService.$httpRequest(method, url).subscribe({
        next(value) {
          console.log(value);
        },
      });
    }
  }
}
