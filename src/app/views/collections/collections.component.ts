import { Component } from '@angular/core';
import { CollectionsTab } from '@models/collections.model';
import { CollectionsService } from '@services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
})
export class CollectionsComponent {
  activeTab: CollectionsTab = '';

  constructor(private collectionService: CollectionsService) {}

  ngOnInit(): void {
    this.collectionService.$activeTab.subscribe({
      next: (tab: CollectionsTab) => {
        this.activeTab = tab;
      },
    });
  }
}
