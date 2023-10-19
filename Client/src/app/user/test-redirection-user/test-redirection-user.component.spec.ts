import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRedirectionUserComponent } from './test-redirection-user.component';

describe('TestRedirectionUserComponent', () => {
  let component: TestRedirectionUserComponent;
  let fixture: ComponentFixture<TestRedirectionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRedirectionUserComponent]
    });
    fixture = TestBed.createComponent(TestRedirectionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
