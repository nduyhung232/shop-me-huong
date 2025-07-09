import {Component} from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  clientId: string = '';
  step: number = 1;

  constructor() {}

  startScan() {
    if (this.clientId.trim()) {
      this.step = 2;
    } else {
      alert('Vui lòng nhập Client ID trước.');
    }
  }
}
