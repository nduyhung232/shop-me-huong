import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent {

  clientId: string = '';
  selectedCustomer: string = '';
  customers: string[] = ['Khách A', 'Khách B'];
  products: string[] = ['Sản phẩm 1', 'Sản phẩm 2'];

  printInvoice() {
    console.log('Client ID:', this.clientId);
    console.log('Khách hàng:', this.selectedCustomer);
    console.log('Sản phẩm:', this.products);
    alert('Đã in hóa đơn!');
  }
}
