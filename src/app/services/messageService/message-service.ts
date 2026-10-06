import { Service } from '@angular/core';
import { Message } from '../../models/message';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messages: Message[] = [
        {
            id: 1,
            sender: 'Precious Anne',
            content: "Hello,I'm Precious Anne, a software engineer. I have a question about your project.",
            receivingDate: new Date('2023-06-01T10:30:00'),
        },
        {
            id: 2,
            sender: 'Joseph Cruz',
            content: "Does you job listing still available? I'm interested in applying for the position.",
            receivingDate: new Date('2023-06-01T10:30:00'),
        },
        {
            id: 3,
            sender: 'Susan Reyes',
            content: "Can you provide more details about the project? I'm curious to learn more.",
            receivingDate: new Date('2023-06-01T10:30:00'),
        }
    ];

    getMessages(): Message[] {
        return this.messages;
    }

    getMessageById(id: number): Message | undefined {
        return this.messages.find(p => p.id === id);
    }

    
}
