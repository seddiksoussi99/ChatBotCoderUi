import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  private messages: string[] = [];
  private apiUrl = 'https://drowsily-dismiss-amperage.ngrok-free.dev/api/generate'; 
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  public addMessage(message: string): void {
    this.messages.push(message);
    this.loadingSubject.next(true);
    setTimeout(() => {
      document.getElementById('conversation')?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
    const data: any = { 
      prompt: message,
      model: 'deepseek-coder',
      stream: false
     };

    this.http.post(this.apiUrl, data).subscribe(
      (response: any) => {
        const generatedMessage = response.response;
        this.messages.push(generatedMessage);
        this.loadingSubject.next(false);
        setTimeout(() => {
          document.getElementById('conversation')?.lastElementChild?.previousElementSibling?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      },
      (error) => {
        console.error('Error generating message:', error);
        this.loadingSubject.next(false);
      }
    );
  }

  public getMessages(): string[] {
    return this.messages;
  }



  
}
