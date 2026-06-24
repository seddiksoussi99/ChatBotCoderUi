import { Component, signal } from '@angular/core';
import { Conversation } from './conversation/conversation';
import { PrmptInput } from './prmpt-input/prmpt-input';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Conversation, PrmptInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
