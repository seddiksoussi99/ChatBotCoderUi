import { Component } from '@angular/core';
import { ConversationService } from '../services/conversation-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversation',
  imports: [CommonModule],
  templateUrl: './conversation.html',
  styleUrl: './conversation.css'
})
export class Conversation {

  messages: string[] = [];
  loading$: Observable<boolean>;

  constructor(public conversationService: ConversationService) {
    this.loading$ = conversationService.loading$;
    this.messages = conversationService.getMessages();
  }

}
