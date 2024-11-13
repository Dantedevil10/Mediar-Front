import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogMComponent } from './home-log-m.component';

describe('HomeLogMComponent', () => {
  let component: HomeLogMComponent;
  let fixture: ComponentFixture<HomeLogMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLogMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLogMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
