import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegisterDialogComponent } from './login-and-register-dialog.component';

describe('LoginAndRegisterDialogComponent', () => {
  let component: LoginAndRegisterDialogComponent;
  let fixture: ComponentFixture<LoginAndRegisterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAndRegisterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
