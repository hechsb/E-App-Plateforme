import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRedirectionAdminComponent } from './test-redirection-admin.component';

describe('TestRedirectionAdminComponent', () => {
  let component: TestRedirectionAdminComponent;
  let fixture: ComponentFixture<TestRedirectionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRedirectionAdminComponent]
    });
    fixture = TestBed.createComponent(TestRedirectionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
