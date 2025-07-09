import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {SseService} from "../../shared/service/sse.service";

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

  constructor(private sseService: SseService,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.sseService.getServerSentEvent('http://localhost:8080/pos/sse/123')
        .subscribe({
          next: (data: string) => console.log(data),
          error: (err) => console.error('SSE error:', err)
        });
    } else {
      console.warn('SSE skipped: Not running in browser');
    }
  }
}
