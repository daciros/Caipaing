import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesdevComponent } from './servicesdev.component';

describe('ServicesdevComponent', () => {
  let component: ServicesdevComponent;
  let fixture: ComponentFixture<ServicesdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesdevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
