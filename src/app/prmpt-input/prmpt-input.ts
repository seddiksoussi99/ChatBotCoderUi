import { Component } from '@angular/core';
import { ConversationService } from '../services/conversation-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prmpt-input',
  imports: [FormsModule],
  templateUrl: './prmpt-input.html',
  styleUrl: './prmpt-input.css'
})
export class PrmptInput {

  public inputValue: string = '';
  public isLoading: boolean = false;

  constructor(public conversationService: ConversationService) {
    conversationService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  public async sendMessage(input: HTMLInputElement): Promise<void> {
    console.log(this.conversationService.loading$);
    if (input.value.trim() !== '' && !this.isLoading) 
      this.conversationService.addMessage(input.value);
    input.value = '';

    
    
  }

}
