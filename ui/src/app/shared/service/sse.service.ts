import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor(private zone: NgZone) {}

  getServerSentEvent(url: string): Observable<string> {
    return new Observable<string>((observer) => {
      if (typeof window === 'undefined' || typeof EventSource === 'undefined') {
        observer.error('SSE not supported in this environment');
        return;
      }

      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        this.zone.run(() => observer.next(event.data));
      };

      eventSource.onerror = (error) => {
        this.zone.run(() => observer.error(error));
        eventSource.close();
      };
    });
  }
}
