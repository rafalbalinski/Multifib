import { Component } from '@angular/core';
import { AppStoreService } from "../../store/app-store.service";

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  constructor(public store: AppStoreService) { }

}
