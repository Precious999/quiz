import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messageService/message-service';
import { Message } from '../models/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.page.html',
  styleUrls: ['./read-message.page.scss'],
  standalone: false,
})
export class ReadMessagePage implements OnInit {
  message: Message |undefined;
  
  constructor(private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.message = this.messageService.getMessageById(id);
  }

}
