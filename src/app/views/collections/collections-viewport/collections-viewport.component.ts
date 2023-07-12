import { Component, OnInit } from '@angular/core';
import { CollectionsTab } from '@models/collections.model';
import { CollectionsService } from '@services/collections.service';

@Component({
  selector: 'app-collections-viewport',
  templateUrl: './collections-viewport.component.html'
})
export class CollectionsViewportComponent implements OnInit {

  activeTab: CollectionsTab = '';

  constructor(private collectionService: CollectionsService) {}

  ngOnInit(): void {

    this.collectionService.$activeTab.subscribe({
      next: (tab: CollectionsTab) => {
        this.activeTab = tab;
      }

    })
  }
}
