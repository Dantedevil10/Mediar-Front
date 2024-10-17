import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeladeloginComponent } from './teladelogin.component';

describe('TeladeloginComponent', () => {
  let component: TeladeloginComponent;
  let fixture: ComponentFixture<TeladeloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeladeloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeladeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
