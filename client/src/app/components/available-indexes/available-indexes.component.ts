import { Component } from '@angular/core';
import { AppStoreService } from "../../store/app-store.service";

@Component({
  selector: 'available-indexes',
  templateUrl: './available-indexes.component.html',
  styleUrls: ['./available-indexes.component.scss']
})
export class AvailableIndexes {

  constructor(public store: AppStoreService) { }

}
