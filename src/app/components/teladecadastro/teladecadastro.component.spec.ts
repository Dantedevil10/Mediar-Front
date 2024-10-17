import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeladecadastroComponent } from './teladecadastro.component';

describe('TeladecadastroComponent', () => {
  let component: TeladecadastroComponent;
  let fixture: ComponentFixture<TeladecadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeladecadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeladecadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
