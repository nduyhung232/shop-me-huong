import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserMultiFormatReader } from '@zxing/browser';
import {Result} from "@zxing/library";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements AfterViewInit {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  reader = new BrowserMultiFormatReader();
  resultText: string = '';
  scanning: boolean = true;

  ngAfterViewInit(): void {
    this.reader.decodeFromVideoDevice(
      undefined,
      this.videoRef.nativeElement,
      (result: Result | undefined, error: any, controls) => {
        if (result) {
          this.resultText = result.getText();
          console.log('Scanned QR:', this.resultText);
          this.scanning = false;

          // ✅ Dừng scan đúng cách:
          controls.stop();
        }
      }
    ).catch(err => {
      console.error('Camera error:', err);
    });
  }
}
