import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  messages: any[] = []; // Array to store chat messages
  newMessage: string = ''; // Variable to store the new message input

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Add a new message to the messages array
      this.messages.push({
        sender: 'You', // You can replace this with the actual sender's name
        content: this.newMessage,
        isUserMessage: true // Indicates if the message is from the user
      });

      // Clear the message input field
      this.newMessage = '';
    }
  }

}
