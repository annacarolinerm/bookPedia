import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizadedComponent } from './authorizaded.component';

describe('AuthorizadedComponent', () => {
  let component: AuthorizadedComponent;
  let fixture: ComponentFixture<AuthorizadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizadedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
