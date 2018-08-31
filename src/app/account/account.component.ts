import { Component, EventEmitter, Input, Output } from '@angular/core';

import { logservice } from '../shared/logservice.service';
import { AccountServiceService } from '../shared/account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  constructor(private accountService : AccountServiceService) {}

  onSetTo(status: string) {
    this.accountService.changeStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
