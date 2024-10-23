import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogComponent } from './header-log.component';

describe('HeaderLogComponent', () => {
  let component: HeaderLogComponent;
  let fixture: ComponentFixture<HeaderLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
