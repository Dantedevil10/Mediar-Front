import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcomiaComponent } from './chatcomia.component';

describe('ChatcomiaComponent', () => {
  let component: ChatcomiaComponent;
  let fixture: ComponentFixture<ChatcomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatcomiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatcomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
