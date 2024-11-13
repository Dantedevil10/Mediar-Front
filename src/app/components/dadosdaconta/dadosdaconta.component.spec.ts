import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosdacontaComponent } from './dadosdaconta.component';

describe('DadosdacontaComponent', () => {
  let component: DadosdacontaComponent;
  let fixture: ComponentFixture<DadosdacontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosdacontaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosdacontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
