import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/messageService/message-service';
import { Message } from '../../models/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
  standalone: false,
})
export class MessagePage implements OnInit {
  messages: Message[] = [];

  constructor( private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }
}
