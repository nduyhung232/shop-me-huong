import { Component } from '@angular/core';
import {SseService} from "../../shared/service/sse.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  clientId: string = '';
  step: number = 1;

  constructor(private sseService: SseService) {}

  ngOnInit(): void {
    this.sseService.getServerSentEvent('http://localhost:8080/pos/sse/123')
      .subscribe({
        next: (data: string) => console.log(data),
        error: (err) => console.error('SSE error:', err)
      });
  }

  startScan() {
    if (this.clientId.trim()) {
      this.step = 2;
    } else {
      alert('Vui lòng nhập Client ID trước.');
    }
  }
}
