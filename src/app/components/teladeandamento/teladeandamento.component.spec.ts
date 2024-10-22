import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeladeandamentoComponent } from './teladeandamento.component';

describe('TeladeandamentoComponent', () => {
  let component: TeladeandamentoComponent;
  let fixture: ComponentFixture<TeladeandamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeladeandamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeladeandamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
