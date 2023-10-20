import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingUserComponent } from './admin-pending-user.component';

describe('AdminPendingUserComponent', () => {
  let component: AdminPendingUserComponent;
  let fixture: ComponentFixture<AdminPendingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPendingUserComponent]
    });
    fixture = TestBed.createComponent(AdminPendingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
