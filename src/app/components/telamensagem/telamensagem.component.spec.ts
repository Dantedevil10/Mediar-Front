import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelamensagemComponent } from './telamensagem.component';

describe('TelamensagemComponent', () => {
  let component: TelamensagemComponent;
  let fixture: ComponentFixture<TelamensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelamensagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelamensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
