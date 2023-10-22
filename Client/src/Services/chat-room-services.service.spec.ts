import { TestBed } from '@angular/core/testing';

import { ChatRoomServicesService } from './chat-room-services.service';

describe('ChatRoomServicesService', () => {
  let service: ChatRoomServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatRoomServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
